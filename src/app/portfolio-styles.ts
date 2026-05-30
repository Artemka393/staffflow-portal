import styled, { createGlobalStyle, css, keyframes } from "styled-components";

// ─── Цветовая схема (BK inspired) ───────────────────────────────────────────
// bg:       #111111 / #1a1a1a / #222222
// orange:   #FF6600
// yellow:   #FFB700
// red:      #CC2229
// text:     #ffffff / #999999

// ─── Keyframes ───────────────────────────────────────────────────────────────

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33%       { transform: translateY(-14px) rotate(2deg); }
  66%       { transform: translateY(-6px) rotate(-1deg); }
`;

const gradientShift = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const barFill = keyframes`
  from { width: 0%; }
  to   { width: var(--pct); }
`;

const counterUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 102, 0, 0.4); }
  50%       { box-shadow: 0 0 0 16px rgba(255, 102, 0, 0); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-60px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(60px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const orbitSpin = keyframes`
  from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
`;

// ─── Утилита для анимаций при скролле ────────────────────────────────────────

export const revealOnScroll = css`
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ─── Global ──────────────────────────────────────────────────────────────────

export const PortfolioGlobal = createGlobalStyle`
  html { scroll-behavior: smooth; }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #111; }
  ::-webkit-scrollbar-thumb {
    background: #FF6600;
    border-radius: 3px;
  }
`;

// ─── Wrapper ─────────────────────────────────────────────────────────────────

export const Wrapper = styled.div`
  min-height: 100vh;
  background: #111111;
  color: #ffffff;
  font-family: Inter, system-ui, sans-serif;
  overflow-x: hidden;
`;

// ─── Navbar ──────────────────────────────────────────────────────────────────

export const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 68px;
  transition: all 0.3s ease;

  ${({ $scrolled }) =>
    $scrolled
      ? `
    background: rgba(17, 17, 17, 0.95);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 102, 0, 0.2);
    box-shadow: 0 4px 32px rgba(0,0,0,0.5);
  `
      : `
    background: transparent;
  `}
`;

export const NavLogo = styled.div`
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.5px;
  cursor: pointer;

  span {
    color: #FF6600;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const NavLink = styled.a<{ $active?: boolean }>`
  padding: 8px 16px;
  border-radius: 8px;
  color: ${({ $active }) => ($active ? "#FF6600" : "rgba(255,255,255,0.7)")};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 2px solid ${({ $active }) => ($active ? "#FF6600" : "transparent")};
  border-radius: ${({ $active }) => ($active ? "8px 8px 0 0" : "8px")};

  &:hover {
    color: #FF6600;
    background: rgba(255, 102, 0, 0.08);
  }
`;

export const NavPortalBtn = styled.button`
  margin-left: 16px;
  height: 38px;
  padding: 0 18px;
  border: 1px solid #FF6600;
  border-radius: 8px;
  background: transparent;
  color: #FF6600;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #FF6600;
    color: #111;
    box-shadow: 0 0 20px rgba(255, 102, 0, 0.4);
  }
`;

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 48px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 70% 50%, rgba(255,102,0,0.12) 0%, transparent 60%),
      radial-gradient(ellipse at 20% 80%, rgba(204,34,41,0.08) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const HeroGrid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 64px;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 68px;
`;

export const HeroLeft = styled.div`
  animation: ${slideInLeft} 0.9s ease both;
`;

export const HeroTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border: 1px solid rgba(255,102,0,0.4);
  border-radius: 999px;
  background: rgba(255,102,0,0.08);
  color: #FF6600;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: 0.3px;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #FF6600;
    animation: ${pulse} 2s infinite;
  }
`;

export const HeroName = styled.h1`
  margin: 0 0 8px;
  font-size: clamp(48px, 7vw, 80px);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -3px;
  color: #ffffff;
`;

export const HeroTyping = styled.div`
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 700;
  color: #FF6600;
  margin-bottom: 24px;
  min-height: 40px;

  span.cursor {
    animation: ${blink} 1s infinite;
    color: #FFB700;
    font-weight: 300;
  }
`;

export const HeroDesc = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #999999;
  max-width: 500px;
  margin: 0 0 36px;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

export const HeroPrimaryBtn = styled.button`
  height: 52px;
  padding: 0 28px;
  border: none;
  border-radius: 10px;
  background: #FF6600;
  color: #111111;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.25s;
  letter-spacing: -0.2px;

  &:hover {
    background: #FF8C00;
    transform: translateY(-2px);
    box-shadow: 0 12px 36px rgba(255,102,0,0.45);
  }
`;

export const HeroSecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 52px;
  padding: 0 24px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 10px;
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.85);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    border-color: #FF6600;
    color: #FF6600;
    background: rgba(255,102,0,0.06);
  }
`;

export const HeroRight = styled.div`
  position: relative;
  animation: ${slideInRight} 0.9s ease both;
`;

export const PhotoFrame = styled.div`
  position: relative;
  width: 340px;
  height: 420px;

  &::before {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 24px;
    background: linear-gradient(135deg, #FF6600, #FFB700, #CC2229, #FF6600);
    background-size: 300% 300%;
    animation: ${gradientShift} 4s ease infinite;
    z-index: 0;
  }
`;

export const PhotoInner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 22px;
  overflow: hidden;
  background: #1c1c1c;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`;

const orbitItem = keyframes`
  from { transform: rotate(var(--start)) translateX(110px) rotate(calc(-1 * var(--start))); }
  to   { transform: rotate(calc(var(--start) + 360deg)) translateX(110px) rotate(calc(-1 * (var(--start) + 360deg))); }
`;

export const AvatarPlaceholder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1208, #1c1c1c);
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 80px;
    font-weight: 900;
    color: #FF6600;
    letter-spacing: -4px;
    z-index: 2;
    text-shadow: 0 0 60px rgba(255,102,0,0.5);
    user-select: none;
  }

  .ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(255,102,0,0.15);
    pointer-events: none;
  }
  .ring-1 { width: 180px; height: 180px; border-color: rgba(255,102,0,0.25); }
  .ring-2 { width: 250px; height: 250px; }
  .ring-3 { width: 320px; height: 320px; border-color: rgba(255,102,0,0.08); }

  .dot {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #1f1f1f;
    border: 1px solid rgba(255,102,0,0.3);
    display: grid;
    place-items: center;
    font-size: 11px;
    font-weight: 800;
    color: #FF6600;
    z-index: 3;
  }
  .dot-1 { --start: 0deg;   animation: ${orbitItem} 6s linear infinite; }
  .dot-2 { --start: 120deg; animation: ${orbitItem} 6s linear infinite; }
  .dot-3 { --start: 240deg; animation: ${orbitItem} 6s linear infinite; }
`;

export const PhotoBadge = styled.div`
  position: absolute;
  bottom: -16px;
  left: -16px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 12px;
  background: #1c1c1c;
  border: 1px solid rgba(255,102,0,0.3);
  box-shadow: 0 8px 32px rgba(0,0,0,0.6);
  animation: ${float} 4s ease-in-out infinite;

  strong {
    display: block;
    font-size: 14px;
    color: #ffffff;
  }
  span {
    display: block;
    font-size: 12px;
    color: #FF6600;
    font-weight: 600;
  }
`;

export const PhotoOrb = styled.div`
  position: absolute;
  top: 20px;
  right: -24px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6600, #FFB700);
  display: grid;
  place-items: center;
  font-size: 24px;
  color: #111;
  font-weight: 900;
  animation: ${float} 3s ease-in-out infinite reverse;
  box-shadow: 0 0 40px rgba(255,102,0,0.5);
`;

export const HeroSocials = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 28px;
`;

export const SocialIcon = styled.a`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    border-color: #FF6600;
    color: #FF6600;
    background: rgba(255,102,0,0.1);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255,102,0,0.3);
  }
`;

export const HeroScrollHint = styled.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.35);
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 2;
  transition: color 0.2s;

  &:hover { color: #FF6600; }

  &::after {
    content: "";
    width: 1px;
    height: 48px;
    background: linear-gradient(to bottom, rgba(255,102,0,0.6), transparent);
  }
`;

// ─── Section wrapper ─────────────────────────────────────────────────────────

export const Section = styled.section`
  padding: 100px 48px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const SectionLabel = styled.div`
  color: #FF6600;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 10px;
  ${revealOnScroll}
`;

export const SectionTitle = styled.h2`
  margin: 0 0 56px;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 900;
  letter-spacing: -1.5px;
  color: #ffffff;
  ${revealOnScroll}

  span { color: #FF6600; }
`;

export const Divider = styled.div`
  width: 48px;
  height: 3px;
  background: linear-gradient(to right, #FF6600, #FFB700);
  border-radius: 2px;
  margin-bottom: 16px;
  ${revealOnScroll}
`;

// ─── Stats ────────────────────────────────────────────────────────────────────

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: rgba(255,255,255,0.05);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 80px;
  ${revealOnScroll}
`;

export const StatItem = styled.div`
  padding: 36px 24px;
  background: #1a1a1a;
  text-align: center;
  transition: background 0.3s;

  &:hover {
    background: #222222;
  }

  strong {
    display: block;
    font-size: 42px;
    font-weight: 900;
    color: #FF6600;
    letter-spacing: -2px;
    line-height: 1;
    margin-bottom: 8px;
  }

  span {
    color: #888888;
    font-size: 13px;
    font-weight: 500;
  }
`;

// ─── About / Resume ──────────────────────────────────────────────────────────

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
  margin-bottom: 64px;
`;

export const AboutText = styled.div`
  ${revealOnScroll}

  p {
    color: #999999;
    line-height: 1.8;
    font-size: 15px;
    margin: 0 0 16px;
  }
`;

export const AboutInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  ${revealOnScroll}
`;

export const InfoCard = styled.div`
  padding: 20px;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  background: #1a1a1a;
  transition: all 0.25s;

  &:hover {
    border-color: rgba(255,102,0,0.3);
    background: #1f1f1f;
  }

  div.label {
    color: #FF6600;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 6px;
  }

  div.value {
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
  }
`;

// ─── Experience / Timeline ───────────────────────────────────────────────────

export const Timeline = styled.div`
  position: relative;
  padding-left: 32px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #FF6600, rgba(255,102,0,0.1));
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 36px;
  ${revealOnScroll}

  &::before {
    content: "";
    position: absolute;
    left: -37px;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #FF6600;
    box-shadow: 0 0 12px rgba(255,102,0,0.6);
  }
`;

export const TimelinePeriod = styled.div`
  color: #FF6600;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
`;

export const TimelineTitle = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const TimelineCompany = styled.div`
  color: #FFB700;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const TimelineDesc = styled.ul`
  margin: 0;
  padding-left: 16px;
  color: #888888;
  font-size: 14px;
  line-height: 1.8;

  li { margin-bottom: 4px; }
`;

// ─── Skills ───────────────────────────────────────────────────────────────────

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 48px;
  ${revealOnScroll}
`;

export const SkillRow = styled.div`
  margin-bottom: 4px;
`;

export const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  span:first-child {
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  span:last-child {
    color: #FF6600;
    font-size: 13px;
    font-weight: 700;
  }
`;

export const SkillBarBg = styled.div`
  height: 6px;
  background: rgba(255,255,255,0.08);
  border-radius: 3px;
  overflow: hidden;
`;

export const SkillBarFill = styled.div<{ $pct: number; $visible: boolean }>`
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(to right, #FF6600, #FFB700);
  width: ${({ $visible, $pct }) => ($visible ? `${$pct}%` : "0%")};
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 0 8px rgba(255,102,0,0.4);
`;

// ─── Interests ────────────────────────────────────────────────────────────────

export const InterestsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 48px;
  ${revealOnScroll}
`;

export const InterestCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  background: #1a1a1a;
  cursor: default;
  transition: all 0.25s;

  &:hover {
    border-color: rgba(255,102,0,0.35);
    background: rgba(255,102,0,0.06);
    transform: translateY(-2px);
  }

  span.icon {
    font-size: 20px;
    flex-shrink: 0;
  }

  span.label {
    color: #cccccc;
    font-size: 13px;
    font-weight: 500;
  }
`;

// ─── Portfolio ────────────────────────────────────────────────────────────────

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const ProjectCard = styled.a<{ $featured?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 28px;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  background: #1a1a1a;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
  overflow: hidden;
  ${revealOnScroll}

  ${({ $featured }) =>
    $featured &&
    `
    grid-column: span 2;
    border-color: rgba(255,102,0,0.25);
    background: linear-gradient(135deg, #1f1a14, #1a1a1a);
  `}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, #FF6600, #FFB700);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;
  }

  &:hover {
    border-color: rgba(255,102,0,0.4);
    background: #1f1f1f;
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,102,0,0.15);

    &::before { transform: scaleX(1); }
  }
`;

export const ProjectIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255,102,0,0.12);
  border: 1px solid rgba(255,102,0,0.2);
  display: grid;
  place-items: center;
  color: #FF6600;
  font-size: 22px;
  margin-bottom: 20px;
  transition: all 0.3s;

  ${ProjectCard}:hover & {
    background: rgba(255,102,0,0.2);
    box-shadow: 0 0 20px rgba(255,102,0,0.3);
  }
`;

export const ProjectTitle = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: -0.3px;
`;

export const ProjectDesc = styled.div`
  color: #888888;
  font-size: 14px;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 20px;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const ProjectTag = styled.span`
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(255,255,255,0.06);
  color: #999999;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3px;
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.2s;

  ${ProjectCard}:hover & {
    border-color: rgba(255,102,0,0.2);
    color: #cccccc;
  }
`;

export const ProjectLink = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: rgba(255,255,255,0.2);
  transition: all 0.2s;

  ${ProjectCard}:hover & {
    color: #FF6600;
    transform: translate(2px, -2px);
  }
`;

// ─── Contact ──────────────────────────────────────────────────────────────────

export const ContactSection = styled.section`
  position: relative;
  padding: 100px 48px;
  overflow: hidden;
  background: #111111;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #FF6600, transparent);
  }
`;

export const ContactInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
`;

export const ContactLeft = styled.div`
  ${revealOnScroll}
`;

export const ContactDesc = styled.p`
  color: #888888;
  font-size: 16px;
  line-height: 1.8;
  margin: 0 0 36px;
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  background: #1a1a1a;
  text-decoration: none;
  transition: all 0.25s;
  ${revealOnScroll}

  &:hover {
    border-color: rgba(255,102,0,0.4);
    background: #1f1f1f;
    transform: translateX(4px);
  }
`;

export const ContactLinkIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(255,102,0,0.1);
  border: 1px solid rgba(255,102,0,0.2);
  display: grid;
  place-items: center;
  color: #FF6600;
  flex-shrink: 0;
`;

export const ContactLinkText = styled.div`
  div:first-child {
    color: rgba(255,255,255,0.5);
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 3px;
  }
  div:last-child {
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
  }
`;

export const ContactRight = styled.div`
  ${revealOnScroll}
`;

export const CTABox = styled.div`
  padding: 48px;
  border: 1px solid rgba(255,102,0,0.2);
  border-radius: 20px;
  background: linear-gradient(135deg, #1f1a14, #1a1a1a);
  text-align: center;

  h3 {
    margin: 0 0 12px;
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #ffffff;
  }

  p {
    color: #888888;
    font-size: 15px;
    line-height: 1.7;
    margin: 0 0 28px;
  }
`;

export const CTAButton = styled.button`
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 12px;
  background: #FF6600;
  color: #111111;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.25s;
  letter-spacing: -0.3px;

  &:hover {
    background: #FF8C00;
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(255,102,0,0.45);
  }
`;

// ─── Footer ───────────────────────────────────────────────────────────────────

export const Footer = styled.footer`
  padding: 28px 48px;
  border-top: 1px solid rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #555555;
  font-size: 13px;
  max-width: 1280px;
  margin: 0 auto;

  span { color: #FF6600; }
`;
