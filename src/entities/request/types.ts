export type RequestStatus = "pending" | "in_review" | "approved" | "rejected";

export type RequestType = "invitation" | "response" | "interview" | "offer";

export type RequestPriority = "normal" | "high";

export type VendorStatus = "not_required" | "queued" | "synced" | "failed";

export type RequestComment = {
  id: string;
  author: string;
  text: string;
  createdAt: string;
};

export type StatusHistoryItem = {
  id: string;
  status: RequestStatus;
  label: string;
  createdAt: string;
};

export type EmployeeRequest = {
  id: string;
  title: string;
  description: string;
  type: RequestType;
  status: RequestStatus;
  priority: RequestPriority;
  employee: string;   // название компании
  department: string; // должность / вакансия
  approver: string;   // рекрутер / контакт
  createdAt: string;
  startDate: string;  // дата получения
  endDate?: string;   // дата собеседования
  vendorStatus: VendorStatus;
  comments: RequestComment[];
  history: StatusHistoryItem[];
};

export type CreateRequestPayload = {
  title: string;
  description: string;
  type: RequestType;
  priority: RequestPriority;
  startDate: string;
  endDate?: string;
};

export type UpdateRequestStatusPayload = {
  requestId: string;
  status: RequestStatus;
};

export type RequestDraft = CreateRequestPayload;

export type RequestStatusFilter = RequestStatus | "all";
