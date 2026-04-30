export function formatDate(value: string): string {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  })
    .format(new Date(value))
    .replace(".", "");
}

export function formatDateTime(value: string): string {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  })
    .format(new Date(value))
    .replace(".", "");
}

export function todayInputValue(): string {
  return new Date().toISOString().slice(0, 10);
}

