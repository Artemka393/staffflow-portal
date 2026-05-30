import { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FilePlus2,
  Filter,
  Loader2,
  Mail,
  RefreshCw,
  Search,
  Send,
  XCircle
} from "lucide-react";
import { Portfolio } from "./Portfolio";
import {
  $dashboardStats,
  $filteredRequests,
  $formError,
  $isBusy,
  $isCreatePanelOpen,
  $isInitialLoading,
  $loadError,
  $requestDraft,
  $searchQuery,
  $selectedRequest,
  $statusFilter,
  createPanelToggled,
  createRequestFx,
  createRequestSubmitted,
  pageMounted,
  requestDraftChanged,
  requestSelected,
  requestStatusChanged,
  retryClicked,
  searchChanged,
  statusFilterChanged,
  updateRequestStatusFx
} from "../features/requests/model";
import {
  requestPriorityLabels,
  requestStatusFilters,
  requestStatusLabels,
  requestTypeLabels,
  vendorStatusLabels
} from "../entities/request/labels";
import {
  EmployeeRequest,
  RequestPriority,
  RequestStatus,
  RequestType,
  VendorStatus
} from "../entities/request/types";
import { formatDate, formatDateTime } from "../shared/lib/date";
import * as S from "./styles";

const typeIcons: Record<RequestType, typeof CalendarDays> = {
  invitation: Mail,
  response:   Send,
  interview:  CalendarDays,
  offer:      Award,
};

const nextStatuses: RequestStatus[] = ["pending", "in_review", "approved", "rejected"];

export function App() {
  const [showPortal, setShowPortal] = useState(false);

  if (!showPortal) {
    return <Portfolio onEnterPortal={() => setShowPortal(true)} />;
  }

  return <Portal onBack={() => setShowPortal(false)} />;
}

function Portal({ onBack }: { onBack: () => void }) {
  const {
    dashboardStats,
    filteredRequests,
    formError,
    isBusy,
    isCreatePanelOpen,
    isInitialLoading,
    loadError,
    requestDraft,
    searchQuery,
    selectedRequest,
    statusFilter,
    createPending,
    updatePending,
    mountPage,
    retry,
    selectRequest,
    setSearch,
    setStatusFilter,
    toggleCreatePanel,
    changeDraft,
    submitCreate,
    changeRequestStatus
  } = useUnit({
    dashboardStats: $dashboardStats,
    filteredRequests: $filteredRequests,
    formError: $formError,
    isBusy: $isBusy,
    isCreatePanelOpen: $isCreatePanelOpen,
    isInitialLoading: $isInitialLoading,
    loadError: $loadError,
    requestDraft: $requestDraft,
    searchQuery: $searchQuery,
    selectedRequest: $selectedRequest,
    statusFilter: $statusFilter,
    createPending: createRequestFx.pending,
    updatePending: updateRequestStatusFx.pending,
    mountPage: pageMounted,
    retry: retryClicked,
    selectRequest: requestSelected,
    setSearch: searchChanged,
    setStatusFilter: statusFilterChanged,
    toggleCreatePanel: createPanelToggled,
    changeDraft: requestDraftChanged,
    submitCreate: createRequestSubmitted,
    changeRequestStatus: requestStatusChanged
  });

  useEffect(() => {
    mountPage();
  }, [mountPage]);

  return (
    <S.PageShell>
      <S.ResponsiveStyles />
      <S.TopBar>
        <S.Brand>
          <S.IconButton type="button" title="← Портфолио" onClick={onBack}>
            <ArrowRight size={18} style={{ transform: "rotate(180deg)" }} />
          </S.IconButton>
          <S.BrandMark>CF</S.BrandMark>
          <div>
            <S.BrandName>CareerFlow</S.BrandName>
            <S.BrandMeta>Трекер вакансий и приглашений</S.BrandMeta>
          </div>
        </S.Brand>

        <S.TopActions>
          <S.IconButton
            type="button"
            aria-label="Обновить заявки"
            title="Обновить заявки"
            onClick={retry}
            disabled={isBusy}
          >
            <RefreshCw size={18} />
          </S.IconButton>
          <S.PrimaryButton type="button" onClick={toggleCreatePanel}>
            <FilePlus2 size={18} />
            Добавить вакансию
          </S.PrimaryButton>
        </S.TopActions>
      </S.TopBar>

      <S.Layout>
        <S.MainColumn>
          <S.SectionHeader>
            <div>
              <S.Eyebrow>Поиск работы · Нижний Новгород</S.Eyebrow>
              <S.Title>Вакансии и приглашения</S.Title>
            </div>
            <S.StatusLine aria-live="polite">
              {isBusy ? (
                <>
                  <Loader2 size={16} />
                  Обновление данных
                </>
              ) : (
                <>
                  <CheckCircle2 size={16} />
                  Данные актуальны
                </>
              )}
            </S.StatusLine>
          </S.SectionHeader>

          <S.MetricsGrid>
            <Metric label="Всего вакансий"   value={dashboardStats.total}      tone="neutral" />
            <Metric label="Активных"         value={dashboardStats.active}      tone="blue" />
            <Metric label="Собеседований"    value={dashboardStats.interviews}  tone="amber" />
            <Metric label="Офферов"          value={dashboardStats.offers}      tone="green" />
            <Metric label="Отказов"          value={dashboardStats.rejected}    tone="red" />
          </S.MetricsGrid>

          <S.Toolbar>
            <S.SearchBox>
              <Search size={18} />
              <input
                aria-label="Поиск по заявкам"
                placeholder="Поиск по компании, вакансии или заметкам"
                value={searchQuery}
                onChange={(event) => setSearch(event.target.value)}
              />
            </S.SearchBox>

            <S.FilterGroup aria-label="Фильтр статуса">
              <Filter size={16} />
              {requestStatusFilters.map((filter) => (
                <S.FilterButton
                  key={filter.value}
                  type="button"
                  data-active={statusFilter === filter.value}
                  onClick={() => setStatusFilter(filter.value)}
                >
                  {filter.label}
                </S.FilterButton>
              ))}
            </S.FilterGroup>
          </S.Toolbar>

          {loadError ? (
            <S.Alert role="alert">
              <AlertTriangle size={18} />
              <span>{loadError}</span>
              <S.TextButton type="button" onClick={retry}>
                Повторить
              </S.TextButton>
            </S.Alert>
          ) : null}

          {isCreatePanelOpen ? (
            <CreateRequestPanel
              draft={requestDraft}
              error={formError}
              pending={createPending}
              onChange={changeDraft}
              onSubmit={submitCreate}
            />
          ) : null}

          <S.ContentGrid>
            <S.RequestList aria-label="Список заявок">
              {isInitialLoading ? (
                <S.EmptyState>
                  <Loader2 size={24} />
                  Загрузка заявок
                </S.EmptyState>
              ) : null}

              {!isInitialLoading && filteredRequests.length === 0 ? (
                <S.EmptyState>
                  <Search size={24} />
                  Ничего не найдено
                </S.EmptyState>
              ) : null}

              {filteredRequests.map((request) => (
                <RequestRow
                  key={request.id}
                  request={request}
                  active={request.id === selectedRequest?.id}
                  onSelect={() => selectRequest(request.id)}
                />
              ))}
            </S.RequestList>

            <RequestDetails
              request={selectedRequest}
              pending={updatePending}
              onStatusChange={(status) => {
                if (!selectedRequest) return;
                changeRequestStatus({ requestId: selectedRequest.id, status });
              }}
            />
          </S.ContentGrid>
        </S.MainColumn>
      </S.Layout>
    </S.PageShell>
  );
}

function Metric({
  label,
  value,
  tone
}: {
  label: string;
  value: number;
  tone: "neutral" | "blue" | "green" | "red" | "amber";
}) {
  return (
    <S.MetricCard data-tone={tone}>
      <span>{label}</span>
      <strong>{value}</strong>
    </S.MetricCard>
  );
}

function CreateRequestPanel({
  draft,
  error,
  pending,
  onChange,
  onSubmit
}: {
  draft: {
    title: string;
    description: string;
    type: RequestType;
    priority: RequestPriority;
    startDate: string;
    endDate?: string;
  };
  error: string | null;
  pending: boolean;
  onChange: (patch: Partial<typeof draft>) => void;
  onSubmit: () => void;
}) {
  const canSubmit = draft.title.trim() && draft.description.trim() && draft.startDate;

  return (
    <S.CreatePanel>
      <S.PanelHeader>
        <div>
          <S.PanelTitle>Добавить вакансию</S.PanelTitle>
          <S.PanelMeta>Добавь новую вакансию или приглашение для отслеживания.</S.PanelMeta>
        </div>
      </S.PanelHeader>

      <S.FormGrid>
        <S.Field>
          <span>Источник</span>
          <select
            value={draft.type}
            onChange={(event) => onChange({ type: event.target.value as RequestType })}
          >
            {Object.entries(requestTypeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </S.Field>

        <S.Field>
          <span>Интерес</span>
          <select
            value={draft.priority}
            onChange={(event) =>
              onChange({ priority: event.target.value as RequestPriority })
            }
          >
            {Object.entries(requestPriorityLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </S.Field>

        <S.Field>
          <span>Дата получения</span>
          <input
            type="date"
            value={draft.startDate}
            onChange={(event) => onChange({ startDate: event.target.value })}
          />
        </S.Field>

        <S.Field>
          <span>Дата собеседования</span>
          <input
            type="date"
            value={draft.endDate ?? ""}
            onChange={(event) => onChange({ endDate: event.target.value })}
          />
        </S.Field>

        <S.FieldWide>
          <span>Тема</span>
          <input
            value={draft.title}
            placeholder="Например: Junior Frontend Developer в Яндексе"
            onChange={(event) => onChange({ title: event.target.value })}
          />
        </S.FieldWide>

        <S.FieldWide>
          <span>Описание</span>
          <textarea
            rows={3}
            value={draft.description}
            placeholder="Стек, зарплата, формат работы, впечатления от вакансии..."
            onChange={(event) => onChange({ description: event.target.value })}
          />
        </S.FieldWide>
      </S.FormGrid>

      {error ? (
        <S.FormError role="alert">
          <AlertTriangle size={16} />
          {error}
        </S.FormError>
      ) : null}

      <S.PanelActions>
        <S.PrimaryButton type="button" disabled={!canSubmit || pending} onClick={onSubmit}>
          {pending ? <Loader2 size={18} /> : <FilePlus2 size={18} />}
          Создать
        </S.PrimaryButton>
      </S.PanelActions>
    </S.CreatePanel>
  );
}

function RequestRow({
  request,
  active,
  onSelect
}: {
  request: EmployeeRequest;
  active: boolean;
  onSelect: () => void;
}) {
  const Icon = typeIcons[request.type];

  return (
    <S.RequestItem type="button" data-active={active} onClick={onSelect}>
      <S.TypeIcon>
        <Icon size={18} />
      </S.TypeIcon>
      <S.RequestSummary>
        <S.RequestTopLine>
          <strong>{request.title}</strong>
          <S.StatusBadge data-status={request.status}>
            {requestStatusLabels[request.status]}
          </S.StatusBadge>
        </S.RequestTopLine>
        <S.RequestMeta>
          <span>{request.employee}</span>
          <span>{requestTypeLabels[request.type]}</span>
          <span>{request.department}</span>
          <span>{formatDate(request.startDate)}</span>
        </S.RequestMeta>
      </S.RequestSummary>
      <ArrowRight size={18} />
    </S.RequestItem>
  );
}

function RequestDetails({
  request,
  pending,
  onStatusChange
}: {
  request: EmployeeRequest | null;
  pending: boolean;
  onStatusChange: (status: RequestStatus) => void;
}) {
  if (!request) {
    return (
      <S.DetailsPanel>
        <S.EmptyState>
          <Briefcase size={24} />
          Выбери вакансию
        </S.EmptyState>
      </S.DetailsPanel>
    );
  }

  return (
    <S.DetailsPanel>
      <S.DetailsTop>
        <div>
          <S.DetailsId>{request.id}</S.DetailsId>
          <S.DetailsTitle>{request.title}</S.DetailsTitle>
        </div>
        <S.StatusBadge data-status={request.status}>
          {requestStatusLabels[request.status]}
        </S.StatusBadge>
      </S.DetailsTop>

      <S.Description>{request.description}</S.Description>

      <S.InfoGrid>
        <Info label="Компания"          value={request.employee} />
        <Info label="Должность"         value={request.department} />
        <Info label="Рекрутер / контакт" value={request.approver} />
        <Info label="Дата собеседования" value={request.endDate ? formatDate(request.endDate) : "Не назначено"} />
        <Info label="Интерес"           value={requestPriorityLabels[request.priority]} />
        <Info
          label="Статус ответа"
          value={vendorStatusLabels[request.vendorStatus]}
          vendorStatus={request.vendorStatus}
        />
      </S.InfoGrid>

      <S.ActionStrip aria-label="Изменить статус">
        {nextStatuses.map((status) => (
          <S.StatusAction
            key={status}
            type="button"
            disabled={pending || request.status === status}
            data-status={status}
            onClick={() => onStatusChange(status)}
          >
            {request.status === status ? <CheckCircle2 size={16} /> : <Clock3 size={16} />}
            {requestStatusLabels[status]}
          </S.StatusAction>
        ))}
      </S.ActionStrip>

      <S.SubsectionTitle>История</S.SubsectionTitle>
      <S.HistoryList>
        {request.history.map((item) => (
          <S.HistoryItem key={item.id}>
            <S.HistoryDot data-status={item.status} />
            <div>
              <strong>{item.label}</strong>
              <span>{formatDateTime(item.createdAt)}</span>
            </div>
          </S.HistoryItem>
        ))}
      </S.HistoryList>

      <S.SubsectionTitle>Комментарии</S.SubsectionTitle>
      {request.comments.length ? (
        <S.CommentList>
          {request.comments.map((comment) => (
            <S.CommentItem key={comment.id}>
              <strong>{comment.author}</strong>
              <p>{comment.text}</p>
              <span>{formatDateTime(comment.createdAt)}</span>
            </S.CommentItem>
          ))}
        </S.CommentList>
      ) : (
        <S.EmptyComment>Комментариев пока нет</S.EmptyComment>
      )}
    </S.DetailsPanel>
  );
}

function Info({
  label,
  value,
  vendorStatus
}: {
  label: string;
  value: string;
  vendorStatus?: VendorStatus;
}) {
  return (
    <S.InfoItem data-vendor-status={vendorStatus}>
      <span>{label}</span>
      <strong>{value}</strong>
    </S.InfoItem>
  );
}

function formatPeriod(request: EmployeeRequest): string {
  if (!request.endDate) return formatDate(request.startDate);
  return `${formatDate(request.startDate)} - ${formatDate(request.endDate)}`;
}
