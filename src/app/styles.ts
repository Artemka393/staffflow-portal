import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 12px rgba(255, 102, 0, 0.15); }
  50%       { box-shadow: 0 0 28px rgba(255, 102, 0, 0.4); }
`;

const panel = css`
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  background: rgba(26, 26, 26, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
`;

/* ── Page shell ─────────────────────────────────────────────────────────── */

export const PageShell = styled.div`
  min-height: 100vh;
  background: #111111;
  background-image: radial-gradient(rgba(255, 102, 0, 0.1) 1px, transparent 1px);
  background-size: 32px 32px;
  color: #e2e8f0;
  font-family: Inter, system-ui, sans-serif;
`;

/* ── TopBar ─────────────────────────────────────────────────────────────── */

export const TopBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 24px;
  border-bottom: 1px solid rgba(255, 102, 0, 0.15);
  background: rgba(17, 17, 17, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
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
  border-radius: 10px;
  background: linear-gradient(135deg, #FF6600, #FFB700);
  color: #111111;
  font-weight: 900;
  font-size: 13px;
  box-shadow: 0 0 16px rgba(255, 102, 0, 0.45);
`;

export const BrandName = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.3px;
`;

export const BrandMeta = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
`;

export const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

/* ── Layout ─────────────────────────────────────────────────────────────── */

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
  color: #FF6600;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Title = styled.h1`
  margin: 4px 0 0;
  color: #ffffff;
  font-size: 28px;
  line-height: 1.2;
  letter-spacing: -0.5px;
  font-weight: 900;
`;

export const StatusLine = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  padding: 0 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: #888888;
  background: rgba(255, 255, 255, 0.03);
  font-size: 13px;

  svg { color: #FF6600; }

  svg[class*="lucide-loader"] {
    color: #FF6600;
    animation: ${spin} 0.8s linear infinite;
  }
`;

/* ── Metrics ─────────────────────────────────────────────────────────────── */

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
`;

export const MetricCard = styled.article`
  ${panel}
  padding: 18px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: default;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  }

  span {
    display: block;
    color: rgba(255, 255, 255, 0.45);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.3px;
  }

  strong {
    display: block;
    margin-top: 6px;
    color: #ffffff;
    font-size: 30px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -1px;
  }

  &[data-tone="blue"] {
    border-top: 2px solid #FF6600;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4), 0 -2px 12px rgba(255,102,0,0.15) inset;
  }
  &[data-tone="green"] {
    border-top: 2px solid #10b981;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4), 0 -2px 12px rgba(16,185,129,0.15) inset;
  }
  &[data-tone="red"] {
    border-top: 2px solid #f43f5e;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4), 0 -2px 12px rgba(244,63,94,0.15) inset;
  }
  &[data-tone="amber"] {
    border-top: 2px solid #FFB700;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4), 0 -2px 12px rgba(255,183,0,0.15) inset;
  }
  &[data-tone="neutral"] {
    border-top: 2px solid rgba(255, 255, 255, 0.2);
  }
`;

/* ── Toolbar ─────────────────────────────────────────────────────────────── */

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
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  color: #555555;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus-within {
    border-color: rgba(255, 102, 0, 0.5);
    box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.08);
    color: #FF6600;
  }

  input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: #e2e8f0;
    &::placeholder { color: rgba(255, 255, 255, 0.25); }
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #555555;
`;

export const FilterButton = styled.button`
  min-height: 34px;
  padding: 0 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: rgba(255, 255, 255, 0.45);
  font-size: 13px;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #e2e8f0;
  }

  &[data-active="true"] {
    border-color: rgba(255, 102, 0, 0.5);
    background: rgba(255, 102, 0, 0.12);
    color: #FF6600;
    font-weight: 700;
    box-shadow: 0 0 12px rgba(255, 102, 0, 0.12);
  }
`;

/* ── Buttons ─────────────────────────────────────────────────────────────── */

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 38px;
  padding: 0 18px;
  border: none;
  border-radius: 8px;
  background: #FF6600;
  color: #111111;
  font-weight: 800;
  font-size: 14px;
  transition: all 0.2s;
  box-shadow: 0 0 16px rgba(255, 102, 0, 0.3);

  &:hover:not(:disabled) {
    background: #FF8C00;
    box-shadow: 0 0 24px rgba(255, 102, 0, 0.5);
    transform: translateY(-1px);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.25);
    box-shadow: none;
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
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s;

  &:hover:not(:disabled) {
    border-color: rgba(255, 102, 0, 0.4);
    background: rgba(255, 102, 0, 0.08);
    color: #FF6600;
  }

  &:disabled { color: rgba(255, 255, 255, 0.2); }
`;

/* ── Alert ─────────────────────────────────────────────────────────────── */

export const Alert = styled.div`
  ${panel}
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-color: rgba(244, 63, 94, 0.3);
  background: rgba(244, 63, 94, 0.07);
  color: #fda4af;
`;

export const TextButton = styled.button`
  margin-left: auto;
  border: 0;
  background: transparent;
  color: #FF6600;
  font-weight: 700;
  transition: color 0.2s;
  &:hover { color: #FFB700; }
`;

/* ── Create panel ────────────────────────────────────────────────────────── */

export const CreatePanel = styled.section`
  ${panel}
  padding: 20px;
  border-color: rgba(255, 102, 0, 0.15);
`;

export const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
`;

export const PanelTitle = styled.h2`
  margin: 0;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

export const PanelMeta = styled.p`
  margin: 4px 0 0;
  color: rgba(255, 255, 255, 0.35);
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
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  font-weight: 600;

  input, select, textarea {
    width: 100%;
    min-height: 38px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.04);
    color: #e2e8f0;
    padding: 8px 10px;
    outline: 0;
    transition: border-color 0.2s, box-shadow 0.2s;

    &::placeholder { color: rgba(255, 255, 255, 0.2); }
    &:focus {
      border-color: rgba(255, 102, 0, 0.5);
      box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.08);
    }
    option { background: #1a1a1a; color: #e2e8f0; }
  }

  textarea { resize: vertical; }
`;

export const FieldWide = styled(Field)`
  grid-column: span 2;
`;

export const FormError = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  color: #fda4af;
  font-size: 13px;
`;

export const PanelActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

/* ── Content grid ────────────────────────────────────────────────────────── */

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(360px, 1fr) minmax(360px, 460px);
  gap: 16px;
  align-items: start;
`;

/* ── Request list ────────────────────────────────────────────────────────── */

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
  padding: 14px;
  text-align: left;
  color: #e2e8f0;
  transition: all 0.2s;

  &:hover {
    border-color: rgba(255, 102, 0, 0.25);
    background: rgba(255, 102, 0, 0.04);
    transform: translateX(2px);
  }

  &[data-active="true"] {
    border-color: rgba(255, 102, 0, 0.5);
    background: rgba(255, 102, 0, 0.08);
    box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.1), 0 4px 20px rgba(0,0,0,0.4);
    animation: ${glow} 2.5s ease-in-out infinite;
  }
`;

export const TypeIcon = styled.span`
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 10px;
  background: rgba(255, 102, 0, 0.1);
  color: #FF6600;
  border: 1px solid rgba(255, 102, 0, 0.2);
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
    color: #ffffff;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
  }
`;

export const RequestMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.35);
  font-size: 12px;
`;

/* ── Status badge ────────────────────────────────────────────────────────── */

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  color: #888888;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &[data-status="pending"] {
    background: rgba(255, 183, 0, 0.1);
    border-color: rgba(255, 183, 0, 0.35);
    color: #FFB700;
  }
  &[data-status="in_review"] {
    background: rgba(255, 102, 0, 0.1);
    border-color: rgba(255, 102, 0, 0.35);
    color: #FF6600;
  }
  &[data-status="approved"] {
    background: rgba(16, 185, 129, 0.1);
    border-color: rgba(16, 185, 129, 0.35);
    color: #6ee7b7;
  }
  &[data-status="rejected"] {
    background: rgba(244, 63, 94, 0.1);
    border-color: rgba(244, 63, 94, 0.35);
    color: #fda4af;
  }
`;

/* ── Details panel ───────────────────────────────────────────────────────── */

export const DetailsPanel = styled.aside`
  ${panel}
  position: sticky;
  top: 82px;
  padding: 20px;
  border-color: rgba(255, 102, 0, 0.1);
`;

export const DetailsTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const DetailsId = styled.div`
  color: #FF6600;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const DetailsTitle = styled.h2`
  margin: 6px 0 0;
  color: #ffffff;
  font-size: 20px;
  line-height: 1.25;
  font-weight: 700;
`;

export const Description = styled.p`
  margin: 12px 0 16px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
  font-size: 14px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`;

export const InfoItem = styled.div`
  min-height: 60px;
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  transition: border-color 0.2s;

  &:hover { border-color: rgba(255, 102, 0, 0.2); }

  span {
    display: block;
    color: rgba(255, 255, 255, 0.35);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  strong {
    display: block;
    margin-top: 4px;
    color: #e2e8f0;
    font-size: 13px;
    font-weight: 600;
  }

  &[data-vendor-status="failed"] {
    border-color: rgba(244, 63, 94, 0.3);
    background: rgba(244, 63, 94, 0.05);
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
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    border-color: rgba(255, 102, 0, 0.4);
    background: rgba(255, 102, 0, 0.08);
    color: #FF6600;
  }

  &:disabled {
    background: rgba(255, 102, 0, 0.06);
    border-color: rgba(255, 102, 0, 0.25);
    color: #FF6600;
  }
`;

/* ── History & comments ──────────────────────────────────────────────────── */

export const SubsectionTitle = styled.h3`
  margin: 20px 0 10px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HistoryItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: start;

  strong { display: block; color: #e2e8f0; font-size: 13px; font-weight: 600; }
  span   { display: block; margin-top: 2px; color: rgba(255,255,255,0.3); font-size: 12px; }
`;

export const HistoryDot = styled.span`
  width: 10px;
  height: 10px;
  margin-top: 3px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);

  &[data-status="pending"]   { background: #FFB700; box-shadow: 0 0 8px rgba(255,183,0,0.6); }
  &[data-status="in_review"] { background: #FF6600; box-shadow: 0 0 8px rgba(255,102,0,0.6); }
  &[data-status="approved"]  { background: #10b981; box-shadow: 0 0 8px rgba(16,185,129,0.6); }
  &[data-status="rejected"]  { background: #f43f5e; box-shadow: 0 0 8px rgba(244,63,94,0.6); }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CommentItem = styled.div`
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);

  strong { color: #e2e8f0; font-size: 13px; font-weight: 600; }
  p { margin: 5px 0; color: rgba(255,255,255,0.5); font-size: 13px; line-height: 1.5; }
  span { color: rgba(255,255,255,0.25); font-size: 12px; }
`;

export const EmptyComment = styled.div`
  padding: 12px;
  border: 1px dashed rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.25);
  font-size: 13px;
  text-align: center;
`;

export const EmptyState = styled.div`
  ${panel}
  display: grid;
  min-height: 140px;
  place-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.25);
  font-weight: 600;

  svg[class*="lucide-loader"] {
    animation: ${spin} 0.8s linear infinite;
    color: #FF6600;
  }
`;

/* ── Responsive ──────────────────────────────────────────────────────────── */

export const ResponsiveStyles = createGlobalStyle`
  @media (max-width: 1100px) {
    ${MetricsGrid}  { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    ${Toolbar}, ${ContentGrid} { grid-template-columns: 1fr; }
    ${DetailsPanel} { position: static; }
  }

  @media (max-width: 760px) {
    ${TopBar}, ${SectionHeader} { align-items: flex-start; flex-direction: column; }
    ${Layout}    { padding: 16px; }
    ${MetricsGrid}, ${FormGrid}, ${InfoGrid}, ${ActionStrip} { grid-template-columns: 1fr; }
    ${FieldWide} { grid-column: auto; }
    ${FilterGroup} { flex-wrap: wrap; }
  }

  @media (max-width: 520px) {
    ${TopActions} { width: 100%; }
    ${PrimaryButton} { flex: 1; }
    ${RequestItem} {
      grid-template-columns: auto minmax(0, 1fr);
      > svg { display: none; }
    }
    ${RequestTopLine} {
      align-items: flex-start;
      flex-direction: column;
      strong { white-space: normal; }
    }
  }
`;
