import { allSettled, fork } from "effector";
import {
  $filteredRequests,
  $requestDraft,
  $requests,
  createRequestFx,
  createRequestSubmitted,
  loadRequestsFx,
  pageMounted,
  requestDraftChanged,
  statusFilterChanged
} from "./model";
import { EmployeeRequest } from "../../entities/request/types";

const baseRequests: EmployeeRequest[] = [
  {
    id: "REQ-1",
    title: "Отпуск",
    description: "Плановый отпуск",
    type: "vacation",
    status: "approved",
    priority: "normal",
    employee: "Артем К.",
    department: "Портальные решения",
    approver: "Марина Л.",
    createdAt: "2026-04-01T08:00:00.000Z",
    startDate: "2026-05-01",
    vendorStatus: "not_required",
    comments: [],
    history: []
  },
  {
    id: "REQ-2",
    title: "Доступ к API",
    description: "Права для тестового стенда",
    type: "access",
    status: "pending",
    priority: "high",
    employee: "Ирина С.",
    department: "Интеграции",
    approver: "Павел Н.",
    createdAt: "2026-04-02T08:00:00.000Z",
    startDate: "2026-05-02",
    vendorStatus: "queued",
    comments: [],
    history: []
  }
];

describe("requests model", () => {
  it("loads requests and filters by status", async () => {
    const scope = fork({
      handlers: [[loadRequestsFx, async () => baseRequests]]
    });

    await allSettled(pageMounted, { scope });
    await allSettled(statusFilterChanged, { scope, params: "pending" });

    expect(scope.getState($requests)).toHaveLength(2);
    expect(scope.getState($filteredRequests)).toEqual([baseRequests[1]]);
  });

  it("creates request from valid draft and resets the form", async () => {
    const createdRequest: EmployeeRequest = {
      ...baseRequests[1],
      id: "REQ-3",
      title: "Командировка",
      type: "business_trip",
      status: "pending"
    };

    const scope = fork({
      handlers: [
        [loadRequestsFx, async () => []],
        [createRequestFx, async () => createdRequest]
      ]
    });

    await allSettled(requestDraftChanged, {
      scope,
      params: {
        title: "Командировка",
        description: "Встреча с командой эксплуатации",
        type: "business_trip",
        startDate: "2026-05-10"
      }
    });
    await allSettled(createRequestSubmitted, { scope });

    expect(scope.getState($requests)).toEqual([createdRequest]);
    expect(scope.getState($requestDraft).title).toBe("");
  });
});

