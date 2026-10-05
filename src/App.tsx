import { useEffect, useRef, useState } from "react";
import {
  ABOUT,
  CORE_AREAS,
  EDUCATION,
  EXPERIENCE,
  LANGUAGES,
  NAV,
  PROFILE,
  PROJECTS,
  RESEARCH,
  STATS,
  TECH_GROUPS,
} from "./data";
import { useActiveSection, useCountUp, useRevealObserver, useScrollProgress } from "../lib/hooks";
import {
  MapPin,
  Mail,
  ArrowUpRight,
  ArrowUp,
  Copy,
  Check,
  Sun,
  Moon,
  Briefcase,
  GraduationCap,
  FileText,
  Code2,
  Database,
  Brain,
  LineChart,
  Building2,
  Lightbulb,
  Layers,
  ShieldCheck,
  BadgeCheck,
  CalendarDays,
  Sparkles,
  Globe,
  Zap,
  Users,
  CreditCard,
  IdCard,
  Receipt,
  ClipboardList,
  Scale,
  Gauge,
  BookOpen,
  Award,
} from "lucide-react";

const BLUE = "#1f3cff";
const INV_TEXT = "#f7f6f2";
const invBg = (t: "light" | "dark") => (t === "light" ? "#101013" : "#17171c");
const INK_LIGHT = "#101013";
const PAPER = "#f7f6f2";
const PAPER_DEEP = "#f1efe9";
const LINE_LIGHT = "#e3e1da";
const LINE_DEEP = "#d8d5cc";
const MUTE_LIGHT = "#6d6c66";

const INK_DARK = "#ededea";
const PAPER_DARK = "#0b0b0d";
const PAPER_DARK_DEEP = "#141417";
const LINE_DARK = "#23232a";
const LINE_DARK_DEEP = "#2e2e38";
const MUTE_DARK = "#8e8e98";

type Theme = "light" | "dark";

const PAL = {
  light: {
    ink: INK_LIGHT,
    paper: PAPER,
    paperDeep: PAPER_DEEP,
    line: LINE_LIGHT,
    lineDeep: LINE_DEEP,
    mute: MUTE_LIGHT,
  },
  dark: {
    ink: INK_DARK,
    paper: PAPER_DARK,
    paperDeep: PAPER_DARK_DEEP,
    line: LINE_DARK,
    lineDeep: LINE_DARK_DEEP,
    mute: MUTE_DARK,
  },
} as const;

function Lucide({ name, size = 16 }: { name: string; size?: number }) {
  const map: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
    map: MapPin,
    mail: Mail,
    code: Code2,
    database: Database,
    brain: Brain,
    chart: LineChart,
    building: Building2,
    lightbulb: Lightbulb,
    layers: Layers,
    shield: ShieldCheck,
    badge: BadgeCheck,
    calendar: CalendarDays,
    spark: Sparkles,
    globe: Globe,
    zap: Zap,
    users: Users,
    credit: CreditCard,
    identity: IdCard,
    rates: Receipt,
    tax: Receipt,
    complaint: ClipboardList,
    agency: Users,
    ledger: Scale,
    control: Gauge,
    book: BookOpen,
    award: Award,
    briefcase: Briefcase,
    grad: GraduationCap,
    file: FileText,
  };
  const C = map[name];
  if (!C) return null;
  return <C size={size} strokeWidth={1.75} />;
}

function Logo({
  k,
  theme,
  size = 48,
}: {
  k: string;
  theme: Theme;
  size?: number;
}) {
  const p = PAL[theme];
  const common = { width: size, height: size, viewBox: "0 0 48 48" } as const;

  switch (k) {
    case "badr":
      return (
        <svg {...common} aria-label="BADR Bank">
          <rect x="1" y="1" width="46" height="46" rx="3" fill={p.paper} stroke="#0b7a52" strokeWidth="1.5" />
          <path d="M14 24 Q24 10 34 24 Q24 20 14 24 Z" fill="#0b7a52" />
          <text
            x="24"
            y="36"
            textAnchor="middle"
            fontFamily="Space Grotesk, Georgia, serif"
            fontSize="10"
            fontWeight="700"
            letterSpacing="1.5"
            fill="#0b7a52"
          >
            BADR
          </text>
        </svg>
      );
    case "sonelgaz":
      return (
        <svg {...common} aria-label="Sonelgaz">
          <circle cx="24" cy="24" r="22" fill={p.paper} stroke="#e55a1b" strokeWidth="1.5" />
          <path d="M27 11 L18 27 L24 27 L20 37 L31 22 L25 22 L27 11 Z" fill="#e55a1b" />
        </svg>
      );
    case "univ":
      return (
        <svg {...common} aria-label="Université d'Alger">
          <circle cx="24" cy="24" r="22" fill={p.paper} stroke="#101013" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="18" fill="none" stroke="#101013" strokeWidth="0.6" strokeDasharray="1 2" />
          <path
            d="M22 13 L22 32 M20 16 L24 16 M19 19 L25 19 M19 22 L25 22 M17 32 L27 32 L27 35 L17 35 Z"
            fill="none"
            stroke="#101013"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <text
            x="24"
            y="42"
            textAnchor="middle"
            fontFamily="Space Grotesk, Georgia, serif"
            fontSize="5"
            fontWeight="700"
            letterSpacing="0.8"
            fill="#101013"
          >
            UNIVERSITÉ D'ALGER
          </text>
        </svg>
      );
    case "poste":
      return (
        <svg {...common} aria-label="Algérie Poste">
          <rect x="1" y="1" width="46" height="46" rx="3" fill="#ffd32e" stroke="#101013" strokeWidth="1.5" />
          <path d="M12 18 L24 27 L36 18" fill="none" stroke="#101013" strokeWidth="1.8" strokeLinejoin="round" />
          <rect x="12" y="17" width="24" height="16" rx="1" fill="none" stroke="#101013" strokeWidth="1.5" />
          <text
            x="24"
            y="42"
            textAnchor="middle"
            fontFamily="Space Grotesk, Georgia, serif"
            fontSize="6"
            fontWeight="700"
            letterSpacing="1"
            fill="#101013"
          >
            ALGÉRIE POSTE
          </text>
        </svg>
      );
    case "finance":
      return (
        <svg {...common} aria-label="Ministry of Finance">
          <rect x="1" y="1" width="46" height="46" rx="3" fill={p.paper} stroke="#1d3557" strokeWidth="1.5" />
          <path
            d="M12 16 L24 10 L36 16 Z M14 18 L14 32 M20 18 L20 32 M26 18 L26 32 M32 18 L32 32 M12 32 L36 32 L36 36 L12 36 Z"
            fill="none"
            stroke="#1d3557"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <text
            x="24"
            y="43"
            textAnchor="middle"
            fontFamily="Space Grotesk, Georgia, serif"
            fontSize="4.2"
            fontWeight="700"
            letterSpacing="0.6"
            fill="#1d3557"
          >
            MIN. FINANCES
          </text>
        </svg>
      );
    case "miclaat":
      return (
        <svg {...common} aria-label="MICLAAT">
          <rect x="1" y="1" width="46" height="46" rx="3" fill={p.paper} stroke="#6d4cc1" strokeWidth="1.5" />
          <rect x="14" y="12" width="20" height="24" rx="1" fill="none" stroke="#6d4cc1" strokeWidth="1.4" />
          <path d="M18 18 L30 18 M18 22 L30 22 M18 26 L26 26" stroke="#6d4cc1" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="34" cy="34" r="6" fill="#6d4cc1" />
          <path d="M31 34 L33 36 L37 32" stroke={p.paper} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-label={k}>
          <rect x="1" y="1" width="46" height="46" rx="3" fill={p.ink} />
          <text
            x="24"
            y="30"
            textAnchor="middle"
            fontFamily="Space Grotesk, Georgia, serif"
            fontSize="16"
            fontWeight="700"
            fill={p.paper}
          >
            {k.slice(0, 2).toUpperCase()}
          </text>
        </svg>
      );
  }
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem("riad-theme") as Theme) || "light";
  });
  useEffect(() => {
    localStorage.setItem("riad-theme", theme);
    document.documentElement.setAttribute("data-riad-theme", theme);
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")) };
}

function Magnetic({
  children,
  strength = 8,
  as: As = "button",
  className = "",
  style = {},
  onClick,
  href,
  target,
  rel,
  onMouseEnter,
  onMouseLeave,
  "data-cursor": dataCursor,
}: {
  children: React.ReactNode;
  strength?: number;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
  "data-cursor"?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const nx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const ny = (e.clientY - (r.top + r.height / 2)) / r.height;
        el.style.setProperty("--mx", `${nx * strength}px`);
        el.style.setProperty("--my", `${ny * strength}px`);
      });
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "0px");
      el.style.setProperty("--my", "0px");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  const inlineStyle = {
    ...style,
    transform: "translate3d(var(--mx,0), var(--my,0), 0)",
    transition: "transform 200ms cubic-bezier(0.16,1,0.3,1)",
    display: "inline-flex",
  } as React.CSSProperties;

  return (
    <As
      ref={ref as never}
      className={className}
      style={inlineStyle}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-cursor={dataCursor}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </As>
  );
}

function Cursor({ theme }: { theme: Theme }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let x = 0, y = 0, tx = 0, ty = 0;
    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const t = e.target as HTMLElement;
      const interactive = !!t.closest('a,button,[data-cursor="hover"]');
      setHover(interactive);
    };
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  const [fine, setFine] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFine(mq.matches);
    const onChange = () => setFine(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  if (!fine) return null;

  const bg = theme === "light" ? "#101013" : "#ededea";
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden md:block"
      style={{
        width: 24,
        height: 24,
        borderRadius: 999,
        border: `1.5px solid ${bg}`,
        transition: "width 240ms, height 240ms, background-color 240ms",
        mixBlendMode: theme === "light" ? "multiply" : "screen",
        ...(hover
          ? {
              width: 44,
              height: 44,
              marginLeft: -10,
              marginTop: -10,
              backgroundColor: `${BLUE}22`,
              borderColor: BLUE,
            }
          : {}),
      }}
    />
  );
}

function Section({
  id,
  index,
  title,
  lede,
  children,
  theme,
  alt = false,
}: {
  id: string;
  index: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
  theme: Theme;
  alt?: boolean;
}) {
  const p = PAL[theme];
  return (
    <section
      id={id}
      className="relative scroll-mt-20 border-b"
      style={{ borderColor: p.line, backgroundColor: alt ? p.paperDeep : "transparent" }}
    >
      <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
        <header className="reveal mb-12">
          <div className="flex items-baseline justify-between gap-6">
            <div className="flex flex-wrap items-baseline gap-4">
              <span
                className="font-display text-[clamp(2.4rem,7vw,4.4rem)] font-bold leading-none tracking-[-0.05em]"
                style={{ color: BLUE }}
              >
                {index}
              </span>
              <h2
                className="font-display text-[clamp(1.7rem,4.6vw,3rem)] font-bold leading-none tracking-[-0.035em]"
                style={{ color: p.ink }}
              >
                {title}
              </h2>
            </div>
            {lede && (
              <p className="hidden max-w-xs text-right text-[13px] leading-relaxed md:block" style={{ color: p.mute }}>
                {lede}
              </p>
            )}
          </div>
          <div className="mt-6 h-[2px] w-full" style={{ backgroundColor: p.ink }} />
        </header>
        {children}
      </div>
    </section>
  );
}

function Reveal({
  d = 0,
  className = "",
  children,
}: {
  d?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`reveal ${className}`} style={{ ["--rd" as string]: `${d}ms` }}>
      {children}
    </div>
  );
}

function MiniToc({ active, theme }: { active: string; theme: Theme }) {
  const p = PAL[theme];
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <aside
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 min-[1500px]:block"
      aria-label="Table of contents"
    >
      <ul className="space-y-3">
        {NAV.map((n) => {
          const on = active === n.id;
          return (
            <li key={n.id}>
              <button
                onClick={() => go(n.id)}
                className="group flex items-center gap-3"
                data-cursor="hover"
              >
                <span
                  className="h-[2px] transition-all duration-400"
                  style={{
                    backgroundColor: on ? BLUE : p.line,
                    width: on ? 36 : 16,
                  }}
                />
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-300"
                  style={{ color: on ? BLUE : p.mute }}
                >
                  {n.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function Nav({
  active,
  theme,
  onToggleTheme,
}: {
  active: string;
  theme: Theme;
  onToggleTheme: () => void;
}) {
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);
  const p = PAL[theme];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-[70] h-[3px]" style={{ backgroundColor: p.line }}>
        <div
          className="h-full origin-left"
          style={{ transform: `scaleX(${progress})`, backgroundColor: BLUE }}
        />
      </div>

      <header
        className="fixed left-0 right-0 top-[3px] z-[60] border-b"
        style={{
          backgroundColor: theme === "light" ? "rgba(247,246,242,0.88)" : "rgba(11,11,13,0.88)",
          borderColor: p.line,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between px-5 sm:px-8">
          <button onClick={() => go("top")} className="flex items-center gap-3">
            <span
              className="grid h-8 w-8 place-items-center font-display text-[11px] font-bold"
              style={{ backgroundColor: p.ink, color: p.paper }}
            >
              RF
            </span>
            <span className="hidden font-display text-[14px] font-bold tracking-tight sm:block" style={{ color: p.ink }}>
              {PROFILE.shortName}
            </span>
          </button>

          <nav className="hidden items-center lg:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                data-cursor="hover"
                className="relative px-3 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] transition-colors duration-200"
                style={{ color: active === n.id ? BLUE : p.mute }}
              >
                {n.label}
                {active === n.id && (
                  <span className="absolute -bottom-px left-3 right-3 h-[2px]" style={{ backgroundColor: BLUE }} />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              data-cursor="hover"
              className="grid h-8 w-8 place-items-center border transition-colors duration-300 hover:-translate-y-0.5"
              style={{ borderColor: p.ink, color: p.ink }}
            >
              {theme === "light" ? <Moon size={14} strokeWidth={1.75} /> : <Sun size={14} strokeWidth={1.75} />}
            </button>
            <Magnetic
              as="a"
              href={`mailto:${PROFILE.email}`}
              className="hidden items-center gap-2 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] no-underline transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex"
              style={{ backgroundColor: p.ink, color: p.paper }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BLUE)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = p.ink)}
            >
              Get in touch
            </Magnetic>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="grid h-9 w-9 place-items-center border lg:hidden"
              style={{ borderColor: p.ink, color: p.ink }}
            >
              <span className="relative block h-3 w-4">
                <span className={`absolute left-0 h-[2px] w-full bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1.5 h-[2px] w-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 h-[2px] w-full bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[55] transition-all duration-400 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ backgroundColor: p.paper }}
      >
        <nav className="flex h-full flex-col justify-center px-8">
          {NAV.map((n, i) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="group flex items-baseline gap-5 border-b py-4 text-left transition-all duration-500"
              style={{
                borderColor: p.line,
                transitionDelay: open ? `${i * 40}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(12px)",
              }}
            >
              <span className="font-display text-[14px] font-bold" style={{ color: BLUE }}>
                {n.index}
              </span>
              <span
                className="font-display text-3xl font-bold tracking-tight"
                style={{ color: active === n.id ? BLUE : p.ink }}
              >
                {n.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

function Hero({ theme }: { theme: Theme }) {
  const p = PAL[theme];
  return (
    <section id="top" className="relative overflow-hidden border-b pt-24 sm:pt-28" style={{ borderColor: p.ink }}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              `linear-gradient(${p.line} 1px, transparent 1px), linear-gradient(90deg, ${p.line} 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 75%)",
          }}
        />
        <div
          className="absolute -left-16 top-20 h-40 w-40 rounded-full opacity-30 blur-3xl"
          style={{ backgroundColor: BLUE, animation: "float-y 9s ease-in-out infinite" }}
        />
        <div
          className="absolute right-10 top-40 h-32 w-32 opacity-30 blur-2xl"
          style={{
            backgroundColor: "#ffd32e",
            animation: "float-y 7s ease-in-out 1s infinite",
            clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)",
          }}
        />
        <div
          className="absolute bottom-10 left-1/3 h-24 w-24 opacity-20 blur-2xl"
          style={{ backgroundColor: "#e55a1b", animation: "float-y 8s ease-in-out 0.5s infinite" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal d={40}>
          <div
            className="flex flex-wrap items-center justify-between gap-3 border-b py-3 font-mono text-[10px] uppercase tracking-[0.22em]"
            style={{ borderColor: p.line, color: p.mute }}
          >
            <span className="inline-flex items-center gap-2">
              <Sparkles size={12} strokeWidth={1.75} />
              Portfolio — 2026
            </span>
            <span className="hidden items-center gap-2 sm:inline-flex">
              <Code2 size={12} strokeWidth={1.75} />
              Software Engineer · Data Scientist
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={12} strokeWidth={1.75} />
              {PROFILE.location}
            </span>
          </div>
        </Reveal>

        <div className="py-10 sm:py-14">
          <Reveal d={120}>
            <h1 className="font-display leading-[0.85] tracking-[-0.05em]">
              <span className="block text-[clamp(3.4rem,13vw,9.6rem)] font-bold" style={{ color: p.ink }}>
                {PROFILE.firstName}
              </span>
              <span className="flex items-center gap-6">
                <span
                  className="block text-[clamp(3.4rem,13vw,9.6rem)] font-bold"
                  style={{ color: BLUE }}
                >
                  {PROFILE.lastName}
                </span>
                <span
                  className="mt-4 hidden h-[2px] flex-1 md:block"
                  style={{ backgroundColor: p.ink, animation: "line-grow 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s both", transformOrigin: "left" }}
                />
              </span>
            </h1>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <Reveal d={240} className="md:col-span-6">
              <p className="max-w-xl text-[16px] leading-[1.8] sm:text-[17.5px]" style={{ color: theme === "light" ? "#3c3b36" : "#b9b8b2" }}>
                {PROFILE.intro}
              </p>
            </Reveal>

            <Reveal d={320} className="md:col-span-6">
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL", "PL/SQL", "Machine Learning", "React", "Laravel"].map((t) => (
                    <span
                      key={t}
                      className="border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5"
                      style={{ borderColor: p.ink, color: p.ink }}
                      data-cursor="hover"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-5">
                  {[
                    { label: "LinkedIn", href: PROFILE.links.linkedin, icon: "linkedin" },
                    { label: "Email", href: `mailto:${PROFILE.email}`, icon: "mail" },
                  ].map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] no-underline"
                      style={{ color: p.ink }}
                    >
                      {l.icon === "linkedin" && (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.438-.605-2.16-1.691-2.16-1.141 0-1.789.762-1.789 2.16v5.569h-3.554v-11.316h3.554v1.396c.483-.938 1.432-1.556 2.627-1.556 2.143 0 3.407 1.525 3.407 4.357v6.735zm-15.11-9.262h-3.554v-3.567h3.554v3.567zm0 9.262h-3.554v-11.316h3.554v11.316zm15.11-20.452h-18.894c-1.936 0-3.553 1.554-3.553 3.466v17.767c0 1.913 1.617 3.467 3.553 3.467h18.894c1.936 0 3.553-1.554 3.553-3.467v-17.767c0-1.912-1.617-3.466-3.553-3.466z"/></svg>
                      )}
                      {l.icon === "github" && (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.145 0 0 1.008-.322 3.301 1.23.957-.266 1.976-.399 3.003-.404 1.027.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.621.242 2.842.118 3.145.78.84 1.236 1.91 1.236 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      )}
                      {l.icon === "mail" && <Mail size={13} strokeWidth={1.75} />}
                      <span className="border-b-2 pb-0.5 transition-colors duration-300 group-hover:border-current" style={{ borderColor: BLUE }}>
                        {l.label}
                      </span>
                      <ArrowUpRight size={10} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: invBg(theme) }}>
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <StatCell key={s.label} {...s} last={i === STATS.length - 1} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCell({
  value,
  suffix,
  label,
  sub,
  last,
  theme,
}: {
  value: number;
  suffix: string;
  label: string;
  sub?: string;
  last?: boolean;
  theme: Theme;
}) {
  const p = PAL[theme];
  const { ref, val } = useCountUp(value);
  return (
    <div
      className="group px-5 py-8 sm:px-8"
      style={{ borderRight: last ? "none" : "1px solid rgba(247,246,242,0.12)" }}
    >
      <span
        ref={ref}
        className="block font-display text-[clamp(2rem,5vw,3.2rem)] font-bold leading-none tracking-[-0.04em] transition-colors duration-500"
        style={{ color: INV_TEXT }}
      >
        {val}
        <span style={{ color: BLUE }}>{suffix}</span>
      </span>
      <span className="mt-3 block font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.2em]" style={{ color: "rgba(247,246,242,0.65)" }}>
        {label}
      </span>
      {sub && <span className="mt-1 block text-[11px]" style={{ color: "rgba(247,246,242,0.4)" }}>{sub}</span>}
    </div>
  );
}

function About({ theme }: { theme: Theme }) {
  const p = PAL[theme];
  return (
    <Section
      id="about"
      index="01"
      title="About"
      lede="Enterprise software for a national bank; machine learning from graduate research."
      theme={theme}
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          {ABOUT.map((para, i) => (
            <Reveal key={i} d={i * 80}>
              <p
                className={`leading-[1.85] ${i === 0 ? "text-[17px] sm:text-[19px]" : "text-[15px]"}`}
                style={{ color: i === 0 ? p.ink : p.mute }}
              >
                {i === 0 ? (
                  <>
                    <span
                      className="float-left mr-3 mt-1.5 font-display text-[3.4rem] font-bold leading-[0.72]"
                      style={{ color: BLUE }}
                    >
                      {para.charAt(0)}
                    </span>
                    {para.slice(1)}
                  </>
                ) : (
                  para
                )}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="lg:col-span-5">
          <Reveal d={150}>
            <div className="border-2 p-6" style={{ borderColor: p.ink, backgroundColor: p.paper }}>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em]" style={{ color: BLUE }}>
                Core areas
              </p>
              <ul className="mt-5">
                {CORE_AREAS.map((c, i) => (
                  <li
                    key={c.label}
                    className="group flex items-center justify-between gap-3 border-b py-3 text-[14.5px] transition-all duration-300 last:border-0 hover:pl-2"
                    style={{ borderColor: p.line, color: p.ink }}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="grid h-8 w-8 place-items-center transition-colors duration-300 group-hover:bg-[#1f3cff] group-hover:text-[#f7f6f2]"
                        style={{ backgroundColor: p.paperDeep, color: p.ink }}
                      >
                        <Lucide name={c.icon} size={14} />
                      </span>
                      <span className="font-medium">{c.label}</span>
                    </span>
                    <span className="font-display text-[13px] font-bold transition-colors duration-300" style={{ color: p.line }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal d={230}>
            <div className="mt-4 border p-5" style={{ borderColor: p.line, backgroundColor: p.paper }}>
              <p className="font-mono text-[9.5px] uppercase tracking-[0.2em]" style={{ color: p.mute }}>
                Languages
              </p>
              <div className="mt-4 space-y-3">
                {LANGUAGES.map((l) => (
                  <div key={l.name}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-[13px] font-medium" style={{ color: p.ink }}>
                        {l.name}
                      </span>
                      <span className="text-[11px]" style={{ color: p.mute }}>
                        {l.level}
                      </span>
                    </div>
                    <div className="mt-1.5 h-[3px] w-full overflow-hidden" style={{ backgroundColor: p.line }}>
                      <div
                        className="h-full transition-[width] duration-[1400ms] ease-out"
                        style={{ backgroundColor: BLUE, width: `${l.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Experience({ theme }: { theme: Theme }) {
  const p = PAL[theme];
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      lede="Banking systems, university teaching and applied machine learning."
      theme={theme}
      alt
    >
      <div className="relative">
        <div
          className="absolute top-0 hidden w-[2px] md:left-8 md:block"
          style={{ backgroundColor: p.line, top: 0, bottom: 0 }}
        />

        <div className="space-y-10">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} d={i * 80}>
              <article className="group relative md:grid md:grid-cols-[64px_1fr] md:gap-8">
                <div className="relative hidden md:block">
                  <div
                    className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full"
                    style={{
                      top: 26,
                      backgroundColor: p.paper,
                      border: `2px solid ${BLUE}`,
                      boxShadow: `0 0 0 4px ${p.paper}, 0 0 0 6px ${BLUE}`,
                    }}
                  />
                </div>

                <div
                  className="border-2 p-6 transition-all duration-400 group-hover:-translate-y-1 sm:p-7"
                  style={{ borderColor: p.ink, backgroundColor: p.paper }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {e.current && (
                      <span
                        className="px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em]"
                        style={{ backgroundColor: BLUE, color: PAPER }}
                      >
                        Current
                      </span>
                    )}
                    <span
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em]"
                      style={{ color: p.mute }}
                    >
                      <CalendarDays size={11} strokeWidth={1.75} />
                      {e.period}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em]"
                      style={{ color: p.mute }}
                    >
                      <MapPin size={11} strokeWidth={1.75} />
                      {e.where}
                    </span>
                  </div>
                  <h3
                    className="mt-3 font-display text-[20px] font-bold leading-tight tracking-[-0.022em] transition-colors duration-300 group-hover:text-[#1f3cff]"
                    style={{ color: p.ink }}
                  >
                    {e.role}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <p className="text-[14px] font-semibold" style={{ color: BLUE }}>
                      {e.company}
                    </p>
                    <span className="text-[12px]" style={{ color: p.mute }}>— {e.full}</span>
                  </div>
                  <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.14em]" style={{ color: p.mute }}>
                    {e.type}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[14px] leading-relaxed" style={{ color: theme === "light" ? "#4b4a44" : "#b9b8b2" }}>
                        <span className="mt-[11px] h-[2px] w-4 flex-shrink-0" style={{ backgroundColor: BLUE }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Projects({ theme }: { theme: Theme }) {
  const p = PAL[theme];
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      lede="Eight production platforms across banking, postal finance and public administration."
      theme={theme}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((proj, i) => {
          const accentHex =
            proj.accent === "green" ? "#0b7a52" : proj.accent === "amber" ? "#e55a1b" : proj.accent === "violet" ? "#6d4cc1" : BLUE;
          return (
            <Reveal key={proj.n} d={(i % 4) * 60}>
              <article
                className="group relative flex h-full flex-col overflow-hidden border-2 p-6 transition-all duration-400 hover:-translate-y-1 sm:p-7"
                style={{ borderColor: p.ink, backgroundColor: p.paper }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accentHex;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = p.ink;
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <span
                        className="block font-mono text-[9.5px] uppercase tracking-[0.16em]"
                        style={{ color: accentHex }}
                      >
                        {proj.client}
                      </span>
                      <span
                        className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.14em]"
                        style={{ color: p.mute }}
                      >
                        Project {proj.n}
                      </span>
                    </div>
                  </div>
                  <span
                    className="font-display text-[2.6rem] font-bold leading-none tracking-[-0.05em] transition-colors duration-400 group-hover:opacity-60"
                    style={{ color: p.line }}
                  >
                    {proj.n}
                  </span>
                </div>

                <h3
                  className="mt-5 font-display text-[18px] font-bold leading-tight tracking-[-0.022em] transition-colors duration-400 group-hover:text-[#1f3cff]"
                  style={{ color: p.ink }}
                >
                  {proj.title}
                </h3>
                <p
                  className="mt-3 flex-1 text-[13.5px] leading-relaxed"
                  style={{ color: p.mute }}
                >
                  {proj.body}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors duration-300"
                      style={{ borderColor: p.lineDeep, color: p.mute }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 transition-transform duration-600 group-hover:scale-x-100"
                  style={{ backgroundColor: accentHex }}
                />
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function Research({ theme }: { theme: Theme }) {
  const p = PAL[theme];
  return (
    <Section
      id="research"
      index="04"
      title="Research"
      lede="Machine learning engineering for medical imaging — two papers at MICCAI 2026 workshops."
      theme={theme}
      alt
    >
      <Reveal>
        <p className="max-w-2xl text-[15.5px] leading-[1.85]" style={{ color: theme === "light" ? "#4b4a44" : "#b9b8b2" }}>
          {RESEARCH.intro}
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {RESEARCH.papers.map((paper, i) => (
          <Reveal key={paper.title} d={i * 100}>
            <article
              className="group relative h-full border-2 p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7"
              style={{ borderColor: p.ink, backgroundColor: p.paper }}
            >
              <span
                className="absolute -top-px left-6 inline-flex items-center gap-1.5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em]"
                style={{ backgroundColor: BLUE, color: PAPER, transform: "translateY(-50%)" }}
              >
                <Award size={10} strokeWidth={2} />
                {paper.badge}
              </span>
              <h3
                className="mt-2 font-display text-[17px] font-bold leading-snug tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#1f3cff]"
                style={{ color: p.ink }}
              >
                {paper.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed" style={{ color: p.mute }}>
                {paper.authors.split("Riadh Fellah").map((part, j, arr) => (
                  <span key={j}>
                    {part}
                    {j < arr.length - 1 && (
                      <strong
                        className="font-semibold"
                        style={{ color: p.ink, borderBottom: `2px solid ${BLUE}` }}
                      >
                        Riadh Fellah
                      </strong>
                    )}
                  </span>
                ))}
              </p>
              <p className="mt-2 text-[13px] italic" style={{ color: p.mute }}>
                {paper.venue}
              </p>
              <p className="mt-3 border-l-2 pl-4 text-[12.5px] leading-relaxed" style={{ borderColor: p.lineDeep, color: p.mute }}>
                {paper.note}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Stack({ theme }: { theme: Theme }) {
  const p = PAL[theme];
  return (
    <Section id="skills" index="05" title="Stack" lede="Languages, frameworks and the domain knowledge of a banking engineer." theme={theme}>
      <div className="grid gap-8 md:grid-cols-2">
        {TECH_GROUPS.map((g, gi) => {
          const accentHex =
            g.accent === "green" ? "#0b7a52" : g.accent === "amber" ? "#e55a1b" : g.accent === "violet" ? "#6d4cc1" : BLUE;
          return (
            <Reveal key={g.title} d={gi * 80}>
              <div className="border-2 p-6 transition-all duration-400 hover:-translate-y-0.5" style={{ borderColor: p.ink, backgroundColor: p.paper }}>
                <div className="flex items-center justify-between gap-3 border-b-2 pb-3" style={{ borderColor: p.ink }}>
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-9 w-9 place-items-center"
                      style={{ backgroundColor: accentHex, color: PAPER }}
                    >
                      <Lucide name={g.icon} size={16} />
                    </span>
                    <div>
                      <p className="font-display text-[15px] font-bold" style={{ color: p.ink }}>
                        {g.title}
                      </p>
                      <p className="font-mono text-[9.5px] uppercase tracking-[0.14em]" style={{ color: p.mute }}>
                        {String(g.items.length).padStart(2, "0")} technologies
                      </p>
                    </div>
                  </div>
                  <span className="font-display text-[18px] font-bold" style={{ color: accentHex }}>
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {g.items.map((t) => (
                    <div
                      key={t.name}
                      data-cursor="hover"
                      className="group flex flex-col items-center gap-2 border px-2 py-3.5 text-center transition-all duration-300 hover:-translate-y-1"
                      style={{ borderColor: p.line, backgroundColor: p.paperDeep }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = accentHex)}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = p.line)}
                    >
                      {t.icon ? (
                        <img
                          src={t.icon}
                          alt={t.name}
                          loading="lazy"
                          className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <span
                          className="grid h-8 w-8 place-items-center font-display text-[11px] font-bold transition-all duration-300"
                          style={{ backgroundColor: p.ink, color: p.paper }}
                        >
                          {t.name
                            .split(" ")
                            .map((w) => w[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                        </span>
                      )}
                      <span className="text-[10px] leading-tight" style={{ color: theme === "light" ? "#4b4a44" : "#b9b8b2" }}>
                        {t.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function Education({ theme }: { theme: Theme }) {
  const p = PAL[theme];
  return (
    <Section
      id="education"
      index="06"
      title="Education"
      lede="Université d'Alger 1 — Benyoucef Benkhedda."
      theme={theme}
      alt
    >
      <div className="grid gap-6 md:grid-cols-2">
        {EDUCATION.map((e, i) => {
          const accentHex = e.accent === "green" ? "#0b7a52" : BLUE;
          return (
            <Reveal key={i} d={i * 90}>
              <div
                className="group h-full border-2 p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: p.ink, backgroundColor: p.paper }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: BLUE }}>
                    Degree
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: p.mute }}>
                    {e.period}
                  </span>
                </div>
                <h3
                  className="mt-5 font-display text-[19px] font-bold leading-snug tracking-[-0.022em] transition-colors duration-300 group-hover:text-[#1f3cff]"
                  style={{ color: p.ink }}
                >
                  {e.degree}
                </h3>
                <p className="mt-1.5 text-[13.5px]" style={{ color: p.mute }}>
                  {e.place}
                </p>
                <span
                  className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em]"
                  style={{ backgroundColor: accentHex, color: PAPER }}
                >
                  <GraduationCap size={11} strokeWidth={2} />
                  {e.grade}
                </span>
                {e.thesis && (
                  <p className="mt-4 border-l-2 pl-4 text-[13px] leading-relaxed" style={{ borderColor: p.lineDeep, color: p.mute }}>
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em]" style={{ color: p.mute }}>
                      Thesis ·{" "}
                    </span>
                    {e.thesis}
                  </p>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function Contact({ theme }: { theme: Theme }) {
  const p = PAL[theme];
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-20" style={{ backgroundColor: invBg(theme) }}>
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span
              className="font-display text-[clamp(2.6rem,7vw,4.6rem)] font-bold leading-none tracking-[-0.05em]"
              style={{ color: BLUE }}
            >
              07
            </span>
            <h2
              className="font-display text-[clamp(1.8rem,4.8vw,3.1rem)] font-bold leading-none tracking-[-0.035em]"
              style={{ color: INV_TEXT }}
            >
              Contact
            </h2>
          </div>
          <div className="mt-6 h-[2px] w-full" style={{ backgroundColor: "rgba(247,246,242,0.18)" }} />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal d={80}>
              <p className="font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: BLUE }}>
                ● Open to opportunities
              </p>
            </Reveal>
            <Reveal d={150}>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${PROFILE.email}`}
                  data-cursor="hover"
                  className="group break-all font-display text-[clamp(1.4rem,4.4vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.04em] no-underline transition-colors duration-400"
                  style={{ color: INV_TEXT }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = BLUE)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = INV_TEXT)}
                >
                  {PROFILE.email}
                  <ArrowUpRight
                    size={24}
                    className="ml-2 inline-block transition-transform duration-400 group-hover:-translate-y-1.5 group-hover:translate-x-1.5"
                    style={{ color: BLUE }}
                  />
                </a>
                <button
                  onClick={copy}
                  className="inline-flex items-center gap-1.5 border px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: "rgba(247,246,242,0.3)",
                    color: INV_TEXT,
                  }}
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </Reveal>
            <Reveal d={220}>
              <p className="mt-7 max-w-xl text-[15.5px] leading-[1.8]" style={{ color: "rgba(247,246,242,0.65)" }}>
                I am always interested in opportunities involving software engineering, data
                science, artificial intelligence and digital transformation — in Algeria or
                internationally.
              </p>
            </Reveal>
            <Reveal d={290}>
              <div className="mt-9 flex flex-wrap gap-3">
                {[
                  { label: "LinkedIn", href: PROFILE.links.linkedin },
                ].map((l) => (
                  <Magnetic
                    key={l.label}
                    as="a"
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="items-center gap-2 border px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] no-underline transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      borderColor: "rgba(247,246,242,0.3)",
                      color: INV_TEXT,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = BLUE;
                      e.currentTarget.style.borderColor = BLUE;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor = "rgba(247,246,242,0.3)";
                    }}
                  >
                    {l.label}
                    <ArrowUpRight size={12} />
                  </Magnetic>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal d={180}>
              <ul className="space-y-0">
                {[
                  ["Position", "Software Engineer, BADR Bank"],
                  ["Building", "Banking platforms & reconciliation"],
                  ["Research", "2 papers @ MICCAI 2026 workshops"],
                  ["Stack", "Python · PL/SQL · PHP · React"],
                  ["Based in", PROFILE.location],
                ].map(([k, v]) => (
                  <li
                    key={k}
                    className="flex gap-5 border-b py-4 text-[14px] last:border-0"
                    style={{ borderColor: "rgba(247,246,242,0.12)" }}
                  >
                    <span className="w-20 flex-shrink-0 font-mono text-[9.5px] uppercase tracking-[0.16em]" style={{ color: "rgba(247,246,242,0.45)" }}>
                      {k}
                    </span>
                    <span style={{ color: "rgba(247,246,242,0.85)" }}>{v}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col gap-3 border-t pt-6 font-mono text-[10px] uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "rgba(247,246,242,0.14)", color: "rgba(247,246,242,0.45)" }}
        >
          <span>© {new Date().getFullYear()} {PROFILE.name} — Algiers</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 text-left transition-colors duration-300 hover:translate-y-[-2px] sm:text-right"
            style={{ color: BLUE }}
          >
            <ArrowUp size={12} strokeWidth={2} />
            Back to top
          </button>
        </div>
      </div>
    </section>
  );
}

function Ticker({ theme }: { theme: Theme }) {
  const p = PAL[theme];
  const words = [
    "Software Engineering",
    "Banking Information Systems",
    "Machine Learning",
    "Data Analytics",
    "PL/SQL",
    "Business Intelligence",
    "Enterprise Platforms",
    "Regulatory Reporting",
  ];
  return (
    <div className="marquee-wrap overflow-hidden border-b py-3" style={{ borderColor: p.line, backgroundColor: p.paperDeep }}>
      <div className="marquee-track flex w-max items-center gap-8">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.24em]"
              style={{ color: i % 2 === 0 ? p.ink : p.mute }}
            >
              {w}
            </span>
            <span style={{ color: BLUE }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function RiadApp() {
  const active = useActiveSection(NAV.map((n) => n.id));
  useRevealObserver(true);
  const { theme, toggle } = useTheme();
  const p = PAL[theme];

  useEffect(() => {
    document.body.style.backgroundColor = p.paper;
    document.body.style.color = p.ink;
    document.documentElement.setAttribute("data-riad-theme", theme);
  }, [p, theme]);

  return (
    <div style={{ backgroundColor: p.paper, color: p.ink, minHeight: "100vh" }}>
      <Cursor theme={theme} />
      <Nav active={active} theme={theme} onToggleTheme={toggle} />
      <MiniToc active={active} theme={theme} />
      <Hero theme={theme} />
      <Ticker theme={theme} />
      <About theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} />
      <Research theme={theme} />
      <Stack theme={theme} />
      <Education theme={theme} />
      <Contact theme={theme} />
    </div>
  );
}
