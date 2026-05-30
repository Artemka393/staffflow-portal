import { useEffect, useRef, useState } from "react";
import { Github, Mail, Send, ExternalLink, Phone } from "lucide-react";
import * as P from "./portfolio-styles";

// ─── Данные ──────────────────────────────────────────────────────────────────

const SKILLS = [
  { name: "HTML / CSS", pct: 95 },
  { name: "JavaScript", pct: 82 },
  { name: "TypeScript", pct: 78 },
  { name: "React", pct: 75 },
  { name: "Python", pct: 72 },
  { name: "Vue.js", pct: 65 },
  { name: "Node.js", pct: 60 },
  { name: "Git", pct: 85 },
];

const PROJECTS = [
  {
    title: "StaffFlow Portal",
    desc: "Корпоративный портал управления заявками сотрудников. Отпуска, командировки, доступы, оборудование — с историей и фильтрами.",
    tags: ["React", "TypeScript", "Effector", "styled-components", "Jest", "Vite"],
    icon: "🏢",
    href: "#portal",
    featured: true,
    isPortal: true,
  },
  {
    title: "Delta Support Hub",
    desc: "Интерфейс сервисного портала технической поддержки с трекингом обращений.",
    tags: ["CSS", "JavaScript", "HTML"],
    icon: "🛠️",
    href: "https://github.com/Artemka393/delta-support-hub",
    featured: false,
  },
  {
    title: "LedgerFlow Analyst",
    desc: "Аналитический дашборд для финансовой отчётности с визуализацией данных.",
    tags: ["JavaScript", "HTML", "CSS"],
    icon: "📊",
    href: "https://github.com/Artemka393/ledgerflow-analyst-portfolio",
    featured: false,
  },
  {
    title: "Test Quest",
    desc: "Интерактивное приложение для тестирования знаний с системой результатов.",
    tags: ["JavaScript", "HTML", "CSS"],
    icon: "🎯",
    href: "https://github.com/Artemka393/Test-quest-",
    featured: false,
  },
  {
    title: "Ped Elixir",
    desc: "Образовательный проект — материалы и задачи для обучения программированию.",
    tags: ["Elixir"],
    icon: "⚗️",
    href: "https://github.com/Artemka393/ped-Elixir-",
    featured: false,
  },
];

const INTERESTS = [
  { icon: "⚛️", label: "React / Vue" },
  { icon: "🧠", label: "Алгоритмы" },
  { icon: "🎨", label: "UI/UX" },
  { icon: "📚", label: "Обучение" },
  { icon: "⚡", label: "TypeScript" },
  { icon: "🖥️", label: "Фронтенд" },
  { icon: "🔧", label: "Бэкенд" },
  { icon: "🐍", label: "Python" },
];

const TYPING_PHRASES = [
  "Frontend разработчик",
  "Fullstack разработчик",
  "Преподаватель IT",
  "React / Vue.js",
];

// ─── Хуки ────────────────────────────────────────────────────────────────────

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, 80);

    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []); // запускаем только один раз при монтировании
}

function useTyping(phrases: string[]) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const delay = deleting ? 50 : charIndex === current.length ? 1800 : 90;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex, phrases]);

  return text;
}

function useCounter(target: number, visible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, [visible, target]);

  return count;
}

function useVisible(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return visible;
}

// ─── Компоненты ──────────────────────────────────────────────────────────────

function StatCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useVisible(ref as React.RefObject<Element>);
  const count = useCounter(value, visible);

  return (
    <P.StatItem ref={ref}>
      <strong>{count}+</strong>
      <span>{label}</span>
    </P.StatItem>
  );
}

function SkillBar({ name, pct }: { name: string; pct: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useVisible(ref as React.RefObject<Element>);

  return (
    <P.SkillRow ref={ref}>
      <P.SkillHeader>
        <span>{name}</span>
        <span>{pct}%</span>
      </P.SkillHeader>
      <P.SkillBarBg>
        <P.SkillBarFill $pct={pct} $visible={visible} />
      </P.SkillBarBg>
    </P.SkillRow>
  );
}

// ─── Главный компонент ───────────────────────────────────────────────────────

export function Portfolio({ onEnterPortal }: { onEnterPortal: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const typedText = useTyping(TYPING_PHRASES);

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "resume", "portfolio", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <P.Wrapper>
      <P.PortfolioGlobal />

      {/* ── Фоновые декорации ── */}
      <P.BgLayer>
        {/* Градиентные сферы */}
        <P.BgOrb $top="5%" $left="-5%"  $size="500px" $color="rgba(255,102,0,0.08)"  $delay="0s"   />
        <P.BgOrb $top="30%" $right="-8%" $size="400px" $color="rgba(255,183,0,0.06)"  $delay="3s" $alt />
        <P.BgOrb $bottom="10%" $left="20%" $size="600px" $color="rgba(204,34,41,0.05)" $delay="6s"   />
        <P.BgOrb $bottom="30%" $right="10%" $size="350px" $color="rgba(255,102,0,0.07)" $delay="2s" $alt />

        {/* Вращающиеся кольца */}
        <P.BgRing $top="-120px" $right="8%"    $size="360px" $opacity="0.12" $duration="28s" />
        <P.BgRing $top="40%"    $left="-80px"  $size="280px" $opacity="0.1"  $duration="22s" $reverse />
        <P.BgRing $bottom="-60px" $right="15%" $size="240px" $opacity="0.08" $duration="18s" />
        <P.BgRing $top="65%"    $right="-60px" $size="200px" $opacity="0.06" $duration="32s" $reverse />

        {/* Плавающие квадраты */}
        <P.BgSquare $top="15%"  $left="5%"   $size="60px"  $opacity="0.12" $delay="0s"   />
        <P.BgSquare $top="25%"  $right="12%" $size="40px"  $opacity="0.1"  $delay="1.5s" $alt />
        <P.BgSquare $top="55%"  $left="8%"   $size="80px"  $opacity="0.08" $delay="3s"   />
        <P.BgSquare $top="70%"  $right="5%"  $size="50px"  $opacity="0.1"  $delay="0.8s" $alt />
        <P.BgSquare $bottom="20%" $left="15%" $size="35px" $opacity="0.12" $delay="2s"   />
        <P.BgSquare $top="45%"  $right="18%" $size="70px"  $opacity="0.07" $delay="4s"   />

        {/* Линия сканирования */}
        <P.BgScanLine />

        {/* Угловые акценты */}
        <P.BgCorner $pos="tl" />
        <P.BgCorner $pos="tr" />
        <P.BgCorner $pos="bl" />
        <P.BgCorner $pos="br" />
      </P.BgLayer>

      {/* ── Navbar ── */}
      <P.Nav $scrolled={scrolled}>
        <P.NavLogo onClick={() => scrollTo("hero")}>
          Артём<span>.</span>dev
        </P.NavLogo>
        <P.NavLinks>
          {[
            { id: "hero",      label: "Главная" },
            { id: "resume",    label: "Резюме" },
            { id: "portfolio", label: "Портфолио" },
            { id: "contact",   label: "Контакты" },
          ].map(({ id, label }) => (
            <P.NavLink
              key={id}
              $active={activeSection === id}
              onClick={() => scrollTo(id)}
            >
              {label}
            </P.NavLink>
          ))}
          <P.NavPortalBtn onClick={onEnterPortal}>
            StaffFlow Portal →
          </P.NavPortalBtn>
        </P.NavLinks>
      </P.Nav>

      {/* ── Hero ── */}
      <P.HeroSection id="hero">
        <P.HeroGrid>
          <P.HeroLeft>
            <P.HeroTag>Открыт к работе · Нижний Новгород</P.HeroTag>
            <P.HeroName>Артём{"\n"}Шестак</P.HeroName>
            <P.HeroTyping>
              {typedText}
              <span className="cursor">|</span>
            </P.HeroTyping>
            <P.HeroDesc>
              20 лет, студент НГАТУ. Создаю современные веб-приложения
              и преподаю программирование детям в&nbsp;Алгоритмике.
              Ищу первую работу в IT — от&nbsp;35&nbsp;000&nbsp;₽.
            </P.HeroDesc>
            <P.HeroButtons>
              <P.HeroPrimaryBtn onClick={() => scrollTo("portfolio")}>
                Смотреть проекты
              </P.HeroPrimaryBtn>
              <P.HeroSecondaryBtn
                href="https://github.com/Artemka393"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                GitHub
              </P.HeroSecondaryBtn>
            </P.HeroButtons>
            <P.HeroSocials>
              <P.SocialIcon href="https://t.me/lnc0mpetent" target="_blank" title="Telegram">
                <Send size={18} />
              </P.SocialIcon>
              <P.SocialIcon href="https://github.com/Artemka393" target="_blank" title="GitHub">
                <Github size={18} />
              </P.SocialIcon>
              <P.SocialIcon href="mailto:kyznechiki228@gmail.com" title="Email">
                <Mail size={18} />
              </P.SocialIcon>
            </P.HeroSocials>
          </P.HeroLeft>

          <P.HeroRight>
            <P.PhotoFrame>
              <P.PhotoInner>
                <img
                  src="photo.jpg"
                  alt="Артём Шестак"
                />
              </P.PhotoInner>
              <P.PhotoBadge>
                <div style={{ fontSize: 28 }}>💼</div>
                <div>
                  <strong>Открыт к офферам</strong>
                  <span>от 35 000 ₽</span>
                </div>
              </P.PhotoBadge>
              <P.PhotoOrb>JS</P.PhotoOrb>
            </P.PhotoFrame>
          </P.HeroRight>
        </P.HeroGrid>

        <P.HeroScrollHint onClick={() => scrollTo("resume")}>
          скролл
        </P.HeroScrollHint>
      </P.HeroSection>

      {/* ── Resume ── */}
      <div id="resume">
        <P.Section>
          {/* Статистика */}
          <P.StatsGrid className="reveal">
            <StatCounter value={1} label="Год опыта" />
            <StatCounter value={7} label="Проектов на GitHub" />
            <StatCounter value={200} label="Проведённых уроков" />
            <StatCounter value={3} label="Языка программирования" />
          </P.StatsGrid>

          {/* О себе */}
          <P.Divider className="reveal" />
          <P.SectionLabel className="reveal">Резюме</P.SectionLabel>
          <P.SectionTitle className="reveal">
            Опыт и <span>навыки</span>
          </P.SectionTitle>

          <P.AboutGrid>
            <P.AboutText className="reveal">
              <p>
                Занимаюсь веб-разработкой с 18 лет. Основной стек —
                JavaScript/TypeScript, React, Vue.js. Преподаю HTML, CSS и Python
                в детской школе программирования Алгоритмика.
              </p>
              <p>
                Умею объяснять сложное простыми словами — это помогает
                в командной работе. Люблю чистый код, хорошую архитектуру
                и когда всё работает быстро.
              </p>
              <p>
                Ищу команду, где можно расти как разработчик и приносить
                реальную пользу продукту.
              </p>
            </P.AboutText>

            <P.AboutInfo className="reveal">
              <P.InfoCard>
                <div className="label">Возраст</div>
                <div className="value">20 лет</div>
              </P.InfoCard>
              <P.InfoCard>
                <div className="label">Город</div>
                <div className="value">Нижний Новгород</div>
              </P.InfoCard>
              <P.InfoCard>
                <div className="label">Образование</div>
                <div className="value">НГАТУ, 2028</div>
              </P.InfoCard>
              <P.InfoCard>
                <div className="label">Занятость</div>
                <div className="value">Полная / удалённо</div>
              </P.InfoCard>
              <P.InfoCard>
                <div className="label">Специализация</div>
                <div className="value">Frontend / Fullstack</div>
              </P.InfoCard>
              <P.InfoCard>
                <div className="label">Зарплата</div>
                <div className="value">от 35 000 ₽</div>
              </P.InfoCard>
            </P.AboutInfo>
          </P.AboutGrid>

          {/* Опыт */}
          <P.Divider className="reveal" />
          <P.SectionLabel className="reveal">Карьера</P.SectionLabel>
          <P.SectionTitle className="reveal" style={{ marginBottom: 32 }}>
            Опыт <span>работы</span>
          </P.SectionTitle>

          <P.Timeline>
            <P.TimelineItem className="reveal">
              <P.TimelinePeriod>Ноябрь 2024 — настоящее время · 1 год 7 мес</P.TimelinePeriod>
              <P.TimelineTitle>Преподаватель веб-разработки</P.TimelineTitle>
              <P.TimelineCompany>Алгоритмика — Нижний Новгород</P.TimelineCompany>
              <P.TimelineDesc>
                <li>Провёл 200+ занятий по HTML, CSS, Python, JavaScript для детей и подростков</li>
                <li>Разработал учебные проекты: сайты, алгоритмические задачи, работа с БД</li>
                <li>Ученики самостоятельно создавали и публиковали собственные сайты</li>
                <li>Объяснял сложные концепции (массивы, ООП, структуры данных) простым языком</li>
              </P.TimelineDesc>
            </P.TimelineItem>

            <P.TimelineItem className="reveal">
              <P.TimelinePeriod>2024 — настоящее время</P.TimelinePeriod>
              <P.TimelineTitle>Студент — Прикладная информатика в экономике</P.TimelineTitle>
              <P.TimelineCompany>НГАТУ — Нижний Новгород (выпуск 2028)</P.TimelineCompany>
              <P.TimelineDesc>
                <li>Изучаю алгоритмы, базы данных, системный анализ</li>
                <li>Параллельно развиваю навыки в веб-разработке через пет-проекты</li>
              </P.TimelineDesc>
            </P.TimelineItem>
          </P.Timeline>

          {/* Навыки */}
          <P.Divider className="reveal" style={{ marginTop: 64 }} />
          <P.SectionLabel className="reveal">Технологии</P.SectionLabel>
          <P.SectionTitle className="reveal" style={{ marginBottom: 32 }}>
            Мои <span>навыки</span>
          </P.SectionTitle>

          <P.SkillsGrid className="reveal">
            {SKILLS.map((s) => (
              <SkillBar key={s.name} name={s.name} pct={s.pct} />
            ))}
          </P.SkillsGrid>

          {/* Интересы */}
          <P.Divider className="reveal" style={{ marginTop: 64 }} />
          <P.SectionLabel className="reveal">Профессиональные интересы</P.SectionLabel>
          <P.InterestsGrid className="reveal">
            {INTERESTS.map((item) => (
              <P.InterestCard key={item.label}>
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </P.InterestCard>
            ))}
          </P.InterestsGrid>
        </P.Section>
      </div>

      {/* ── Portfolio ── */}
      <div id="portfolio" style={{ background: "#0e0e0e", padding: "1px 0" }}>
        <P.Section>
          <P.Divider className="reveal" />
          <P.SectionLabel className="reveal">Работы</P.SectionLabel>
          <P.SectionTitle className="reveal">
            Завершённые <span>проекты</span>
          </P.SectionTitle>

          <P.ProjectsGrid>
            {PROJECTS.map((p) =>
              p.isPortal ? (
                <P.ProjectCard
                  key={p.title}
                  as="div"
                  $featured={p.featured}
                  onClick={onEnterPortal}
                  className="reveal"
                  style={{ cursor: "pointer" }}
                >
                  <P.ProjectIcon>{p.icon}</P.ProjectIcon>
                  <P.ProjectTitle>{p.title}</P.ProjectTitle>
                  <P.ProjectDesc>{p.desc}</P.ProjectDesc>
                  <P.ProjectTags>
                    {p.tags.map((t) => <P.ProjectTag key={t}>{t}</P.ProjectTag>)}
                  </P.ProjectTags>
                  <P.ProjectLink><ExternalLink size={18} /></P.ProjectLink>
                </P.ProjectCard>
              ) : (
                <P.ProjectCard
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  $featured={p.featured}
                  className="reveal"
                >
                  <P.ProjectIcon>{p.icon}</P.ProjectIcon>
                  <P.ProjectTitle>{p.title}</P.ProjectTitle>
                  <P.ProjectDesc>{p.desc}</P.ProjectDesc>
                  <P.ProjectTags>
                    {p.tags.map((t) => <P.ProjectTag key={t}>{t}</P.ProjectTag>)}
                  </P.ProjectTags>
                  <P.ProjectLink><ExternalLink size={18} /></P.ProjectLink>
                </P.ProjectCard>
              )
            )}
          </P.ProjectsGrid>
        </P.Section>
      </div>

      {/* ── Contact ── */}
      <P.ContactSection id="contact">
        <P.ContactInner>
          <P.ContactLeft>
            <P.Divider className="reveal" />
            <P.SectionLabel className="reveal">Контакты</P.SectionLabel>
            <P.SectionTitle className="reveal" style={{ marginBottom: 16 }}>
              Связаться <span>со мной</span>
            </P.SectionTitle>
            <P.ContactDesc>
              Открыт к предложениям о работе, стажировке или сотрудничеству.
              Отвечаю быстро — напиши в Telegram!
            </P.ContactDesc>
            <P.ContactLinks>
              <P.ContactLink href="https://t.me/lnc0mpetent" target="_blank" className="reveal">
                <P.ContactLinkIcon><Send size={20} /></P.ContactLinkIcon>
                <P.ContactLinkText>
                  <div>Telegram</div>
                  <div>@lnc0mpetent</div>
                </P.ContactLinkText>
              </P.ContactLink>
              <P.ContactLink href="tel:+79307462550" className="reveal">
                <P.ContactLinkIcon><Phone size={20} /></P.ContactLinkIcon>
                <P.ContactLinkText>
                  <div>Телефон</div>
                  <div>+7 (930) 746-25-50</div>
                </P.ContactLinkText>
              </P.ContactLink>
              <P.ContactLink href="mailto:kyznechiki228@gmail.com" className="reveal">
                <P.ContactLinkIcon><Mail size={20} /></P.ContactLinkIcon>
                <P.ContactLinkText>
                  <div>Email</div>
                  <div>kyznechiki228@gmail.com</div>
                </P.ContactLinkText>
              </P.ContactLink>
              <P.ContactLink href="https://github.com/Artemka393" target="_blank" className="reveal">
                <P.ContactLinkIcon><Github size={20} /></P.ContactLinkIcon>
                <P.ContactLinkText>
                  <div>GitHub</div>
                  <div>github.com/Artemka393</div>
                </P.ContactLinkText>
              </P.ContactLink>
            </P.ContactLinks>
          </P.ContactLeft>

          <P.ContactRight>
            <P.CTABox className="reveal">
              <h3>Открыт к офферам 🚀</h3>
              <p>
                Ищу позицию Junior Frontend или Fullstack разработчика.
                Готов к офису, удалёнке или гибриду.
                Зарплатный ожидания — от 35 000 ₽.
              </p>
              <P.CTAButton onClick={onEnterPortal}>
                Посмотреть StaffFlow Portal →
              </P.CTAButton>
            </P.CTABox>
          </P.ContactRight>
        </P.ContactInner>
      </P.ContactSection>

      {/* ── Footer ── */}
      <P.Footer>
        <div>© 2026 Артём Шестак · <span>Нижний Новгород</span></div>
        <div>
          <a
            href="https://github.com/Artemka393/staffflow-portal"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#555", textDecoration: "none" }}
          >
            Исходный код на GitHub
          </a>
        </div>
      </P.Footer>
    </P.Wrapper>
  );
}
