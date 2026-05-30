import { EmployeeRequest } from "./types";

export const mockRequests: EmployeeRequest[] = [
  {
    id: "VAC-001",
    title: "Junior Frontend React Developer",
    description: "Разработка пользовательских интерфейсов для внутренних продуктов. Стек: React, TypeScript, Redux. Гибридный формат, офис в Москве. Зарплата 60 000–90 000 ₽.",
    type: "invitation",
    status: "in_review",
    priority: "high",
    employee: "Яндекс",
    department: "Frontend разработчик",
    approver: "Анастасия В. (HR)",
    createdAt: "2026-05-20T10:00:00.000Z",
    startDate: "2026-05-20",
    endDate: "2026-05-28",
    vendorStatus: "synced",
    comments: [
      {
        id: "C-1",
        author: "Анастасия В.",
        text: "Приглашаем на техническое собеседование. Ожидаем вас 28 мая в 15:00 по видеосвязи.",
        createdAt: "2026-05-21T09:30:00.000Z"
      }
    ],
    history: [
      { id: "H-1", status: "pending",   label: "Получено приглашение",       createdAt: "2026-05-20T10:00:00.000Z" },
      { id: "H-2", status: "in_review", label: "Назначено собеседование",    createdAt: "2026-05-21T09:30:00.000Z" }
    ]
  },
  {
    id: "VAC-002",
    title: "Junior Frontend Developer",
    description: "Работа в команде разработки мобильного банка. React Native + TypeScript. Полностью удалённо. Зарплата 55 000–80 000 ₽ + бонусы. Обучение за счёт компании.",
    type: "response",
    status: "approved",
    priority: "high",
    employee: "Тинькофф",
    department: "Frontend разработчик",
    approver: "Михаил С. (Tech Lead)",
    createdAt: "2026-05-15T14:00:00.000Z",
    startDate: "2026-05-15",
    endDate: "2026-05-22",
    vendorStatus: "synced",
    comments: [
      {
        id: "C-2",
        author: "Михаил С.",
        text: "Отличное выполнение тестового задания! Готовы сделать оффер. Свяжемся завтра для обсуждения условий.",
        createdAt: "2026-05-23T11:00:00.000Z"
      }
    ],
    history: [
      { id: "H-3", status: "pending",   label: "Отправлен отклик",           createdAt: "2026-05-15T14:00:00.000Z" },
      { id: "H-4", status: "in_review", label: "Приглашение на тестовое",    createdAt: "2026-05-17T10:00:00.000Z" },
      { id: "H-5", status: "approved",  label: "Получен оффер 🎉",           createdAt: "2026-05-23T11:00:00.000Z" }
    ]
  },
  {
    id: "VAC-003",
    title: "Frontend разработчик (стажёр)",
    description: "Стажировка в команде веб-сервисов. React + Vue.js. Наставник от компании. Возможен перевод в штат по итогам. Зарплата 45 000–55 000 ₽.",
    type: "invitation",
    status: "pending",
    priority: "normal",
    employee: "Сбер",
    department: "Frontend разработчик",
    approver: "Елена К. (Рекрутер)",
    createdAt: "2026-05-25T09:00:00.000Z",
    startDate: "2026-05-25",
    vendorStatus: "queued",
    comments: [],
    history: [
      { id: "H-6", status: "pending", label: "Получено приглашение", createdAt: "2026-05-25T09:00:00.000Z" }
    ]
  },
  {
    id: "VAC-004",
    title: "Junior React разработчик",
    description: "Разработка рекламной платформы для бизнеса. Стек: React, TypeScript, Node.js. Гибрид (2 дня в офисе). Нижний Новгород или удалённо. Зарплата 50 000–70 000 ₽.",
    type: "interview",
    status: "in_review",
    priority: "high",
    employee: "Авито",
    department: "Fullstack разработчик",
    approver: "Дмитрий Р. (HR)",
    createdAt: "2026-05-18T11:00:00.000Z",
    startDate: "2026-05-18",
    endDate: "2026-05-26",
    vendorStatus: "synced",
    comments: [
      {
        id: "C-3",
        author: "Дмитрий Р.",
        text: "Первый этап пройден успешно. Приглашаем на финальное интервью с тимлидом 26 мая.",
        createdAt: "2026-05-22T14:00:00.000Z"
      }
    ],
    history: [
      { id: "H-7", status: "pending",   label: "Отправлен отклик",           createdAt: "2026-05-18T11:00:00.000Z" },
      { id: "H-8", status: "in_review", label: "HR-интервью пройдено",       createdAt: "2026-05-22T14:00:00.000Z" }
    ]
  },
  {
    id: "VAC-005",
    title: "Fullstack разработчик (Junior)",
    description: "Разработка цифровых продуктов для B2B сегмента. React + Python/Django. Полный офис, Нижний Новгород. Зарплата 40 000–55 000 ₽.",
    type: "response",
    status: "rejected",
    priority: "normal",
    employee: "МТС Digital",
    department: "Fullstack разработчик",
    approver: "Ольга М. (HR)",
    createdAt: "2026-05-10T08:00:00.000Z",
    startDate: "2026-05-10",
    vendorStatus: "failed",
    comments: [
      {
        id: "C-4",
        author: "Ольга М.",
        text: "К сожалению, мы выбрали кандидата с опытом от 2 лет. Рекомендуем откликнуться через 6 месяцев.",
        createdAt: "2026-05-14T16:00:00.000Z"
      }
    ],
    history: [
      { id: "H-9",  status: "pending",   label: "Отправлен отклик",          createdAt: "2026-05-10T08:00:00.000Z" },
      { id: "H-10", status: "in_review", label: "Резюме на рассмотрении",    createdAt: "2026-05-12T10:00:00.000Z" },
      { id: "H-11", status: "rejected",  label: "Отказ от компании",         createdAt: "2026-05-14T16:00:00.000Z" }
    ]
  },
  {
    id: "VAC-006",
    title: "Frontend стажёр / Junior",
    description: "Небольшая продуктовая студия в Нижнем Новгороде. Vue.js + Node.js. Дружная команда из 8 человек. Гибкий график. Зарплата от 35 000 ₽, рост через 3 месяца.",
    type: "invitation",
    status: "pending",
    priority: "normal",
    employee: "IT-студия Артифакт",
    department: "Frontend разработчик",
    approver: "Никита Л. (CEO)",
    createdAt: "2026-05-27T13:00:00.000Z",
    startDate: "2026-05-27",
    vendorStatus: "queued",
    comments: [],
    history: [
      { id: "H-12", status: "pending", label: "Получено приглашение", createdAt: "2026-05-27T13:00:00.000Z" }
    ]
  }
];
