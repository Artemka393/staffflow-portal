import {
  RequestPriority,
  RequestStatus,
  RequestStatusFilter,
  RequestType,
  VendorStatus
} from "./types";

export const requestTypeLabels: Record<RequestType, string> = {
  invitation: "Приглашение",
  response:   "Мой отклик",
  interview:  "Собеседование",
  offer:      "Оффер"
};

export const requestStatusLabels: Record<RequestStatus, string> = {
  pending:   "Новое",
  in_review: "Рассматривается",
  approved:  "Принято",
  rejected:  "Отказано"
};

export const requestStatusFilters: Array<{ value: RequestStatusFilter; label: string }> = [
  { value: "all",       label: "Все" },
  { value: "pending",   label: "Новые" },
  { value: "in_review", label: "В процессе" },
  { value: "approved",  label: "Принято" },
  { value: "rejected",  label: "Отказано" }
];

export const requestPriorityLabels: Record<RequestPriority, string> = {
  normal: "Интересно",
  high:   "Очень интересно"
};

export const vendorStatusLabels: Record<VendorStatus, string> = {
  not_required: "—",
  queued:       "Жду ответа",
  synced:       "Ответил(а)",
  failed:       "Нет ответа"
};
