import {
  RequestPriority,
  RequestStatus,
  RequestStatusFilter,
  RequestType,
  VendorStatus
} from "./types";

export const requestTypeLabels: Record<RequestType, string> = {
  vacation: "Отпуск",
  business_trip: "Командировка",
  access: "Доступы",
  equipment: "Оборудование"
};

export const requestStatusLabels: Record<RequestStatus, string> = {
  pending: "Новая",
  in_review: "На согласовании",
  approved: "Согласована",
  rejected: "Отклонена"
};

export const requestStatusFilters: Array<{ value: RequestStatusFilter; label: string }> = [
  { value: "all", label: "Все" },
  { value: "pending", label: "Новые" },
  { value: "in_review", label: "Согласование" },
  { value: "approved", label: "Согласованы" },
  { value: "rejected", label: "Отклонены" }
];

export const requestPriorityLabels: Record<RequestPriority, string> = {
  normal: "Обычный",
  high: "Высокий"
};

export const vendorStatusLabels: Record<VendorStatus, string> = {
  not_required: "Не требуется",
  queued: "Ожидает синхронизации",
  synced: "Синхронизировано",
  failed: "Ошибка интеграции"
};

