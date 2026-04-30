import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const panel = css`
  border: 1px solid #d9e1e7;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(28, 43, 64, 0.06);
`;

export const PageShell = styled.div`
  min-height: 100vh;
`;

export const TopBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 24px;
  border-bottom: 1px solid #d9e1e7;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;

export const BrandMark = styled.div`
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 8px;
  background: #e31b23;
  color: #ffffff;
  font-weight: 800;
`;

export const BrandName = styled.div`
  color: #111827;
  font-size: 16px;
  font-weight: 800;
`;

export const BrandMeta = styled.div`
  color: #64748b;
  font-size: 12px;
`;

export const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Layout = styled.main`
  width: min(1440px, 100%);
  margin: 0 auto;
  padding: 24px;
`;

export const MainColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
`;

export const Eyebrow = styled.div`
  color: #64748b;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 4px 0 0;
  color: #111827;
  font-size: 28px;
  line-height: 1.2;
`;

export const StatusLine = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  padding: 0 12px;
  border: 1px solid #c9d7e2;
  border-radius: 8px;
  color: #475569;
  background: #ffffff;
  font-size: 13px;

  svg {
    color: #0f766e;
  }

  svg[class*="lucide-loader"] {
    color: #2563eb;
    animation: ${spin} 0.8s linear infinite;
  }
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
`;

export const MetricCard = styled.article`
  ${panel}
  padding: 14px;

  span {
    display: block;
    color: #64748b;
    font-size: 12px;
  }

  strong {
    display: block;
    margin-top: 4px;
    color: #111827;
    font-size: 26px;
    line-height: 1;
  }

  &[data-tone="blue"] {
    border-left: 4px solid #2563eb;
  }

  &[data-tone="green"] {
    border-left: 4px solid #16a34a;
  }

  &[data-tone="red"] {
    border-left: 4px solid #dc2626;
  }

  &[data-tone="amber"] {
    border-left: 4px solid #d97706;
  }

  &[data-tone="neutral"] {
    border-left: 4px solid #64748b;
  }
`;

export const Toolbar = styled.div`
  ${panel}
  display: grid;
  grid-template-columns: minmax(280px, 1fr) auto;
  gap: 12px;
  padding: 12px;
`;

export const SearchBox = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  padding: 0 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: #f8fafc;
  color: #64748b;

  input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: #111827;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
`;

export const FilterButton = styled.button`
  min-height: 34px;
  padding: 0 10px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: #475569;
  font-size: 13px;

  &[data-active="true"] {
    border-color: #9fb3c8;
    background: #eaf1f7;
    color: #172033;
    font-weight: 700;
  }
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 38px;
  padding: 0 14px;
  border: 1px solid #b91c1c;
  border-radius: 8px;
  background: #e31b23;
  color: #ffffff;
  font-weight: 700;

  &:disabled {
    border-color: #cbd5e1;
    background: #94a3b8;
  }

  svg[class*="lucide-loader"] {
    animation: ${spin} 0.8s linear infinite;
  }
`;

export const IconButton = styled.button`
  display: inline-grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: #ffffff;
  color: #475569;

  &:disabled {
    color: #94a3b8;
  }
`;

export const Alert = styled.div`
  ${panel}
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-color: #fecaca;
  background: #fff7f7;
  color: #991b1b;
`;

export const TextButton = styled.button`
  margin-left: auto;
  border: 0;
  background: transparent;
  color: #b91c1c;
  font-weight: 700;
`;

export const CreatePanel = styled.section`
  ${panel}
  padding: 16px;
`;

export const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
`;

export const PanelTitle = styled.h2`
  margin: 0;
  color: #111827;
  font-size: 18px;
`;

export const PanelMeta = styled.p`
  margin: 4px 0 0;
  color: #64748b;
  font-size: 13px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: #475569;
  font-size: 13px;
  font-weight: 700;

  input,
  select,
  textarea {
    width: 100%;
    min-height: 38px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background: #ffffff;
    color: #111827;
    padding: 8px 10px;
    outline: 0;
  }

  textarea {
    resize: vertical;
  }
`;

export const FieldWide = styled(Field)`
  grid-column: span 2;
`;

export const FormError = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  color: #b91c1c;
  font-size: 13px;
`;

export const PanelActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(360px, 1fr) minmax(360px, 460px);
  gap: 16px;
  align-items: start;
`;

export const RequestList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RequestItem = styled.button`
  ${panel}
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px;
  text-align: left;
  color: #172033;

  &[data-active="true"] {
    border-color: #e31b23;
    box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.12);
  }
`;

export const TypeIcon = styled.span`
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 8px;
  background: #eaf1f7;
  color: #2563eb;
`;

export const RequestSummary = styled.div`
  min-width: 0;
`;

export const RequestTopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  strong {
    overflow: hidden;
    color: #111827;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const RequestMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-top: 6px;
  color: #64748b;
  font-size: 12px;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 9px;
  border-radius: 999px;
  background: #e2e8f0;
  color: #334155;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;

  &[data-status="pending"] {
    background: #fef3c7;
    color: #92400e;
  }

  &[data-status="in_review"] {
    background: #dbeafe;
    color: #1d4ed8;
  }

  &[data-status="approved"] {
    background: #dcfce7;
    color: #166534;
  }

  &[data-status="rejected"] {
    background: #fee2e2;
    color: #991b1b;
  }
`;

export const DetailsPanel = styled.aside`
  ${panel}
  position: sticky;
  top: 82px;
  padding: 16px;
`;

export const DetailsTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const DetailsId = styled.div`
  color: #64748b;
  font-size: 12px;
  font-weight: 800;
`;

export const DetailsTitle = styled.h2`
  margin: 4px 0 0;
  color: #111827;
  font-size: 20px;
  line-height: 1.25;
`;

export const Description = styled.p`
  margin: 12px 0 16px;
  color: #475569;
  line-height: 1.55;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`;

export const InfoItem = styled.div`
  min-height: 64px;
  padding: 10px;
  border: 1px solid #d9e1e7;
  border-radius: 8px;
  background: #f8fafc;

  span {
    display: block;
    color: #64748b;
    font-size: 12px;
  }

  strong {
    display: block;
    margin-top: 4px;
    color: #111827;
    font-size: 14px;
  }

  &[data-vendor-status="failed"] {
    border-color: #fecaca;
    background: #fff7f7;
  }
`;

export const ActionStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-top: 14px;
`;

export const StatusAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 38px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: #ffffff;
  color: #475569;
  font-size: 13px;
  font-weight: 700;

  &:disabled {
    background: #eef2f6;
    color: #64748b;
  }
`;

export const SubsectionTitle = styled.h3`
  margin: 18px 0 10px;
  color: #111827;
  font-size: 15px;
`;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HistoryItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;

  strong {
    display: block;
    color: #172033;
    font-size: 13px;
  }

  span {
    display: block;
    margin-top: 2px;
    color: #64748b;
    font-size: 12px;
  }
`;

export const HistoryDot = styled.span`
  width: 10px;
  height: 10px;
  margin-top: 4px;
  border-radius: 999px;
  background: #94a3b8;

  &[data-status="pending"] {
    background: #d97706;
  }

  &[data-status="in_review"] {
    background: #2563eb;
  }

  &[data-status="approved"] {
    background: #16a34a;
  }

  &[data-status="rejected"] {
    background: #dc2626;
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CommentItem = styled.div`
  padding: 10px;
  border: 1px solid #d9e1e7;
  border-radius: 8px;
  background: #f8fafc;

  strong {
    color: #172033;
    font-size: 13px;
  }

  p {
    margin: 5px 0;
    color: #475569;
    font-size: 13px;
    line-height: 1.45;
  }

  span {
    color: #64748b;
    font-size: 12px;
  }
`;

export const EmptyComment = styled.div`
  padding: 12px;
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  color: #64748b;
  font-size: 13px;
`;

export const EmptyState = styled.div`
  ${panel}
  display: grid;
  min-height: 140px;
  place-items: center;
  gap: 8px;
  color: #64748b;
  font-weight: 700;

  svg[class*="lucide-loader"] {
    animation: ${spin} 0.8s linear infinite;
  }
`;

export const ResponsiveStyles = createGlobalStyle`
  @media (max-width: 1100px) {
  ${MetricsGrid} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${Toolbar},
  ${ContentGrid} {
    grid-template-columns: 1fr;
  }

  ${DetailsPanel} {
    position: static;
  }
  }

  @media (max-width: 760px) {
  ${TopBar},
  ${SectionHeader} {
    align-items: flex-start;
    flex-direction: column;
  }

  ${Layout} {
    padding: 16px;
  }

  ${MetricsGrid},
  ${FormGrid},
  ${InfoGrid},
  ${ActionStrip} {
    grid-template-columns: 1fr;
  }

  ${FieldWide} {
    grid-column: auto;
  }

  ${FilterGroup} {
    flex-wrap: wrap;
  }
  }

  @media (max-width: 520px) {
  ${TopActions} {
    width: 100%;
  }

  ${PrimaryButton} {
    flex: 1;
  }

  ${RequestItem} {
    grid-template-columns: auto minmax(0, 1fr);

    > svg {
      display: none;
    }
  }

  ${RequestTopLine} {
    align-items: flex-start;
    flex-direction: column;

    strong {
      white-space: normal;
    }
  }
  }
`;
