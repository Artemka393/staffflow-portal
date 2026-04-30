import { mockRequests } from "../../entities/request/mockData";
import {
  CreateRequestPayload,
  EmployeeRequest,
  RequestStatus,
  UpdateRequestStatusPayload,
  VendorStatus
} from "../../entities/request/types";
import { requestStatusLabels } from "../../entities/request/labels";

let requestStorage: EmployeeRequest[] = clone(mockRequests);

const wait = (ms = 450) => new Promise((resolve) => setTimeout(resolve, ms));

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function makeId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

function resolveVendorStatus(type: CreateRequestPayload["type"]): VendorStatus {
  if (type === "access") return "queued";
  if (type === "equipment") return "queued";
  return "not_required";
}

export async function getRequests(): Promise<EmployeeRequest[]> {
  await wait();
  return clone(requestStorage);
}

export async function createRequest(payload: CreateRequestPayload): Promise<EmployeeRequest> {
  await wait(360);

  if (payload.title.toLowerCase().includes("ошибка")) {
    throw new Error("Моковый API вернул ошибку создания заявки");
  }

  const createdAt = new Date().toISOString();
  const request: EmployeeRequest = {
    id: makeId("REQ"),
    ...payload,
    status: "pending",
    employee: "Артем К.",
    department: "Портальные решения",
    approver: "Марина Л.",
    createdAt,
    vendorStatus: resolveVendorStatus(payload.type),
    comments: [],
    history: [
      {
        id: makeId("H"),
        status: "pending",
        label: "Заявка создана",
        createdAt
      }
    ]
  };

  requestStorage = [request, ...requestStorage];
  return clone(request);
}

export async function updateRequestStatus({
  requestId,
  status
}: UpdateRequestStatusPayload): Promise<EmployeeRequest> {
  await wait(320);

  const index = requestStorage.findIndex((request) => request.id === requestId);

  if (index === -1) {
    throw new Error("Заявка не найдена");
  }

  const current = requestStorage[index];
  const createdAt = new Date().toISOString();
  const nextVendorStatus = getNextVendorStatus(current.vendorStatus, status);
  const nextRequest: EmployeeRequest = {
    ...current,
    status,
    vendorStatus: nextVendorStatus,
    history: [
      ...current.history,
      {
        id: makeId("H"),
        status,
        label: requestStatusLabels[status],
        createdAt
      }
    ]
  };

  requestStorage = requestStorage.map((request) =>
    request.id === requestId ? nextRequest : request
  );

  return clone(nextRequest);
}

function getNextVendorStatus(current: VendorStatus, status: RequestStatus): VendorStatus {
  if (current === "not_required") return current;
  if (status === "approved") return "synced";
  if (status === "rejected") return "failed";
  return current;
}
