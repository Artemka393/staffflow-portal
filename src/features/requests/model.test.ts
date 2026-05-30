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
    id: "VAC-T1",
    title: "Junior Frontend Developer",
    description: "Оффер от Тинькофф",
    type: "offer",
    status: "approved",
    priority: "high",
    employee: "Тинькофф",
    department: "Frontend разработчик",
    approver: "Михаил С.",
    createdAt: "2026-05-01T08:00:00.000Z",
    startDate: "2026-05-01",
    vendorStatus: "synced",
    comments: [],
    history: []
  },
  {
    id: "VAC-T2",
    title: "Junior React разработчик",
    description: "Отклик на вакансию Авито",
    type: "response",
    status: "pending",
    priority: "high",
    employee: "Авито",
    department: "Frontend разработчик",
    approver: "Дмитрий Р.",
    createdAt: "2026-05-02T08:00:00.000Z",
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
      id: "VAC-T3",
      title: "Frontend стажёр",
      type: "invitation",
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
        title: "Frontend стажёр",
        description: "Приглашение от IT-студии",
        type: "invitation",
        startDate: "2026-05-10"
      }
    });
    await allSettled(createRequestSubmitted, { scope });

    expect(scope.getState($requests)).toEqual([createdRequest]);
    expect(scope.getState($requestDraft).title).toBe("");
  });
});
