import { combine, createEffect, createEvent, createStore, sample } from "effector";
import {
  createRequest,
  getRequests,
  updateRequestStatus
} from "../../shared/api/requests";
import {
  CreateRequestPayload,
  EmployeeRequest,
  RequestDraft,
  RequestStatusFilter,
  UpdateRequestStatusPayload
} from "../../entities/request/types";
import { todayInputValue } from "../../shared/lib/date";

export const pageMounted = createEvent();
export const retryClicked = createEvent();
export const searchChanged = createEvent<string>();
export const statusFilterChanged = createEvent<RequestStatusFilter>();
export const requestSelected = createEvent<string>();
export const createPanelToggled = createEvent();
export const requestDraftChanged = createEvent<Partial<RequestDraft>>();
export const requestDraftReset = createEvent();
export const createRequestSubmitted = createEvent();
export const requestStatusChanged = createEvent<UpdateRequestStatusPayload>();

export const loadRequestsFx = createEffect<void, EmployeeRequest[], Error>(getRequests);
export const createRequestFx = createEffect<CreateRequestPayload, EmployeeRequest, Error>(
  createRequest
);
export const updateRequestStatusFx = createEffect<
  UpdateRequestStatusPayload,
  EmployeeRequest,
  Error
>(updateRequestStatus);

const initialDraft: RequestDraft = {
  title: "",
  description: "",
  type: "vacation",
  priority: "normal",
  startDate: todayInputValue(),
  endDate: ""
};

export const $requests = createStore<EmployeeRequest[]>([])
  .on(loadRequestsFx.doneData, (_, requests) => requests)
  .on(createRequestFx.doneData, (requests, request) => [request, ...requests])
  .on(updateRequestStatusFx.doneData, (requests, updatedRequest) =>
    requests.map((request) => (request.id === updatedRequest.id ? updatedRequest : request))
  );

export const $searchQuery = createStore("")
  .on(searchChanged, (_, query) => query)
  .reset(pageMounted);

export const $statusFilter = createStore<RequestStatusFilter>("all").on(
  statusFilterChanged,
  (_, status) => status
);

export const $selectedRequestId = createStore<string | null>(null)
  .on(requestSelected, (_, requestId) => requestId)
  .on(loadRequestsFx.doneData, (_, requests) => requests[0]?.id ?? null)
  .on(createRequestFx.doneData, (_, request) => request.id);

export const $isCreatePanelOpen = createStore(false)
  .on(createPanelToggled, (isOpen) => !isOpen)
  .on(createRequestFx.doneData, () => false);

export const $requestDraft = createStore<RequestDraft>(initialDraft)
  .on(requestDraftChanged, (draft, patch) => ({ ...draft, ...patch }))
  .reset(requestDraftReset, createRequestFx.doneData);

export const $formError = createStore<string | null>(null)
  .on(createRequestSubmitted, () => null)
  .on(createRequestFx.failData, (_, error) => error.message)
  .reset(requestDraftChanged, createRequestFx.doneData);

export const $loadError = createStore<string | null>(null)
  .on(loadRequestsFx.failData, (_, error) => error.message)
  .reset(loadRequestsFx, loadRequestsFx.doneData);

export const $filteredRequests = combine(
  $requests,
  $searchQuery,
  $statusFilter,
  (requests, searchQuery, statusFilter) => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return requests.filter((request) => {
      const matchesStatus = statusFilter === "all" || request.status === statusFilter;
      const matchesSearch =
        !normalizedQuery ||
        [
          request.id,
          request.title,
          request.description,
          request.employee,
          request.department
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesStatus && matchesSearch;
    });
  }
);

export const $selectedRequest = combine(
  $requests,
  $selectedRequestId,
  (requests, selectedRequestId) =>
    requests.find((request) => request.id === selectedRequestId) ?? requests[0] ?? null
);

export const $dashboardStats = $requests.map((requests) => {
  const open = requests.filter((request) =>
    ["pending", "in_review"].includes(request.status)
  ).length;
  const approved = requests.filter((request) => request.status === "approved").length;
  const integrationIssues = requests.filter(
    (request) => request.vendorStatus === "failed"
  ).length;
  const highPriority = requests.filter((request) => request.priority === "high").length;

  return {
    total: requests.length,
    open,
    approved,
    integrationIssues,
    highPriority
  };
});

export const $isInitialLoading = combine(
  loadRequestsFx.pending,
  $requests,
  (isLoading, requests) => isLoading && requests.length === 0
);

export const $isBusy = combine(
  loadRequestsFx.pending,
  createRequestFx.pending,
  updateRequestStatusFx.pending,
  (...flags) => flags.some(Boolean)
);

sample({
  clock: [pageMounted, retryClicked],
  target: loadRequestsFx
});

sample({
  clock: createRequestSubmitted,
  source: $requestDraft,
  filter: (draft) => Boolean(draft.title.trim() && draft.description.trim() && draft.startDate),
  fn: (draft) => ({
    ...draft,
    title: draft.title.trim(),
    description: draft.description.trim(),
    endDate: draft.endDate?.trim() || undefined
  }),
  target: createRequestFx
});

sample({
  clock: requestStatusChanged,
  target: updateRequestStatusFx
});

