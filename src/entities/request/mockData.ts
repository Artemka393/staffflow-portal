import { EmployeeRequest } from "./types";

export const mockRequests: EmployeeRequest[] = [
  {
    id: "REQ-1042",
    title: "Отпуск на майские даты",
    description: "Плановый отпуск с передачей задач дежурному разработчику.",
    type: "vacation",
    status: "in_review",
    priority: "normal",
    employee: "Артем К.",
    department: "Портальные решения",
    approver: "Марина Л.",
    createdAt: "2026-04-27T09:20:00.000Z",
    startDate: "2026-05-06",
    endDate: "2026-05-12",
    vendorStatus: "not_required",
    comments: [
      {
        id: "C-1",
        author: "Марина Л.",
        text: "Проверь, пожалуйста, что дежурство на период отпуска закрыто.",
        createdAt: "2026-04-27T12:15:00.000Z"
      }
    ],
    history: [
      {
        id: "H-1",
        status: "pending",
        label: "Заявка создана",
        createdAt: "2026-04-27T09:20:00.000Z"
      },
      {
        id: "H-2",
        status: "in_review",
        label: "Передана руководителю",
        createdAt: "2026-04-27T10:05:00.000Z"
      }
    ]
  },
  {
    id: "REQ-1041",
    title: "Доступ к стенду интеграций",
    description: "Нужен доступ к тестовому стенду внешнего вендора для проверки статусов.",
    type: "access",
    status: "approved",
    priority: "high",
    employee: "Ирина С.",
    department: "Интеграции",
    approver: "Павел Н.",
    createdAt: "2026-04-25T14:40:00.000Z",
    startDate: "2026-04-26",
    vendorStatus: "synced",
    comments: [
      {
        id: "C-2",
        author: "Павел Н.",
        text: "Доступ выдан, проверь VPN-профиль.",
        createdAt: "2026-04-26T08:30:00.000Z"
      }
    ],
    history: [
      {
        id: "H-3",
        status: "pending",
        label: "Заявка создана",
        createdAt: "2026-04-25T14:40:00.000Z"
      },
      {
        id: "H-4",
        status: "approved",
        label: "Доступ согласован",
        createdAt: "2026-04-26T08:30:00.000Z"
      }
    ]
  },
  {
    id: "REQ-1040",
    title: "Командировка в офис поддержки",
    description: "Рабочая встреча с командой эксплуатации портальных сервисов.",
    type: "business_trip",
    status: "pending",
    priority: "normal",
    employee: "Дмитрий Р.",
    department: "Эксплуатация",
    approver: "Марина Л.",
    createdAt: "2026-04-24T11:10:00.000Z",
    startDate: "2026-05-14",
    endDate: "2026-05-15",
    vendorStatus: "not_required",
    comments: [],
    history: [
      {
        id: "H-5",
        status: "pending",
        label: "Заявка создана",
        createdAt: "2026-04-24T11:10:00.000Z"
      }
    ]
  },
  {
    id: "REQ-1039",
    title: "Ноутбук для нового сотрудника",
    description: "Комплект оборудования для выхода сотрудника на проектную команду.",
    type: "equipment",
    status: "rejected",
    priority: "high",
    employee: "Ольга М.",
    department: "HR Tech",
    approver: "Павел Н.",
    createdAt: "2026-04-22T07:55:00.000Z",
    startDate: "2026-04-29",
    vendorStatus: "failed",
    comments: [
      {
        id: "C-3",
        author: "Павел Н.",
        text: "Не хватает табельного номера сотрудника. Создай новую заявку с полными данными.",
        createdAt: "2026-04-22T13:20:00.000Z"
      }
    ],
    history: [
      {
        id: "H-6",
        status: "pending",
        label: "Заявка создана",
        createdAt: "2026-04-22T07:55:00.000Z"
      },
      {
        id: "H-7",
        status: "rejected",
        label: "Отклонена на проверке данных",
        createdAt: "2026-04-22T13:20:00.000Z"
      }
    ]
  }
];

