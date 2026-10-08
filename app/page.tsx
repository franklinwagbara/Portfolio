"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE = [
  {
    title: "Senior Software Engineer",
    company: "Innoscripta",
    location: "Munich, Germany",
    period: "Jan 2025 – Present",
    bullets: [
      "Cut p99 latency by 80%+ on a high-traffic feature under strict SLA constraints",
      "Built microfrontend patterns enabling independent team deployments, improving build times",
      "Recognized by leadership for unblocking a critical product milestone",
    ],
    stack: [".NET", "React", "Microfrontends", "TypeScript"],
  },
  {
    title: "Senior Software Engineer (Contract)",
    company: "Turing.com",
    location: "Palo Alto, CA",
    period: "Nov 2024 – Apr 2025",
    bullets: [
      "Evaluated Gemini 2.5 Pro code generation quality across .NET Core internals and React patterns",
      "Identified hallucinations including flawed async patterns and incorrect DI lifetimes",
      "Built prompts, reference implementations, and edge cases to improve model reliability",
    ],
    stack: [".NET Core", "React", "AI/LLM Evaluation"],
  },
  {
    title: "Lead Software Engineer",
    company: "EPS",
    location: "Vilnius, Lithuania",
    period: "Jan 2024 – Dec 2024",
    bullets: [
      "Led 8 engineers modernizing a legacy banking platform; reduced transaction latency 40%+, boosted throughput 30%+",
      "Advocated for targeted changes over full rewrite — zero transition-related incidents",
      "Authored Architecture Decision Records that halved onboarding time for 3 new engineers",
    ],
    stack: ["C#", "ASP.NET", "PostgreSQL", "Azure", "Event-Driven"],
  },
  {
    title: "Lead Software Engineer (Contract)",
    company: "FCMB",
    location: "Abuja, Nigeria",
    period: "Jan 2024 – Dec 2024",
    bullets: [
      "Built microservices banking application using C#, ASP.NET, and event-driven patterns on Azure",
      "Integrated GitHub Copilot with guardrails; improved throughput 30% across 500K+ LOC",
      "Established AI code review protocols, measurably reducing post-merge defects",
    ],
    stack: ["C#", ".NET", "Azure", "Microservices", "GitHub Copilot"],
  },
  {
    title: "Chief Software Engineer & Architect",
    company: "BrandoneTech",
    location: "Abuja, Nigeria",
    period: "Jun 2023 – Dec 2023",
    bullets: [
      "Delivered PCI-compliant payment gateway systems in C#, .NET Core, Angular, and React",
      "Introduced AI-assisted tools that shortened prototyping cycles and surfaced integration errors earlier",
    ],
    stack: ["C#", ".NET Core", "Angular", "React", "PCI Compliance"],
  },
  {
    title: "Senior Software Engineer",
    company: "Brookstone",
    location: "Port Harcourt, Nigeria",
    period: "Sep 2019 – Sep 2022",
    bullets: [
      "Authored core framework code that persisted through multiple team turnovers over three years",
      "Performed needs analysis for 50+ customers, converting requirements into technical proposals",
      "Mentored junior and mid-level engineers; established team-wide code review standards",
    ],
    stack: ["C#", ".NET", "React", "SQL Server"],
  },
];

const PROJECTS_FEATURED = [
  {
    index: "01",
    name: "Elevare",
    tagline: "AI Career Companion",
    description:
      "AI-powered resume generation, skill-gap roadmaps, and application tracking. Chrome extension detects jobs on major platforms and surfaces tailored insights in context.",
    stack: ["Next.js 15", ".NET 9", "PostgreSQL", "Azure OpenAI"],
    github: "https://github.com/franklinwagbara/Elevare",
    live: "https://www.elevareapp.net",
  },
  {
    index: "02",
    name: "PulseGrid",
    tagline: "Real-Time IoT Dashboard",
    description:
      "Streams 10K+ simulated IoT devices using Web Workers, backpressure buffering, and virtualized rendering — without dropping a frame.",
    stack: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
    github: "https://github.com/franklinwagbara/PulseGrid",
    live: "https://resilient-crepe-13d95e.netlify.app/",
  },
  {
    index: "03",
    name: "LinkView",
    tagline: "WebRTC Remote Platform",
    description:
      "Peer-to-peer remote viewing with dynamic TURN credentials and ICE diagnostics. Low-latency, resilient to NAT traversal edge cases.",
    stack: ["Next.js", "TypeScript", "WebRTC", "Tailwind CSS"],
    github: "https://github.com/franklinwagbara/LinkView",
    live: "https://linkview-23tk.onrender.com/",
  },
  {
    index: "04",
    name: "WalletPro",
    tagline: "Digital Wallet & Ledger",
    description:
      "Ledger-first architecture with double-entry bookkeeping and cross-currency transfers. Financial-grade precision built end-to-end.",
    stack: ["Java", "Spring Boot", "React", "REST API"],
    github: "https://github.com/franklinwagbara/Payment-Platform",
    live: "https://payment-platform-delta.vercel.app/",
  },
];

const PROJECTS_ARCHIVE = [
  {
    year: "2024",
    name: "Crypto Finder",
    tagline: "Cryptocurrency Tracker",
    description: "Live crypto tracking with price data, market stats, and trending coins.",
    stack: ["React", "JavaScript", "REST API", "CSS"],
    github: "https://github.com/franklinwagbara/Crypto-finder",
    live: "https://franklin-crypto-finder.netlify.app/",
  },
  {
    year: "2023",
    name: "Fast Track",
    tagline: "Executive Diagnostic Dashboard",
    description: "Diagnostic dashboard featuring glassmorphism UI and real-time analytics.",
    stack: ["React", "TypeScript", "Node.js", "Express"],
    github: "https://github.com/franklinwagbara/Fast-Track",
    live: null,
  },
];

const SKILLS_CORE = [
  { name: "C# / ASP.NET / .NET Core", years: "9+" },
  { name: "React / Next.js", years: "9+" },
  { name: "TypeScript", years: "9+" },
  { name: "Node.js / Express", years: "9+" },
  { name: "PostgreSQL / MSSQL", years: "9+" },
  { name: "Microservices / Event-Driven", years: "9+" },
];

const SKILLS_ALSO = [
  "Angular", "Java / Spring Boot", "Python / Django",
  "GraphQL", "MongoDB / Redis", "Docker / Kubernetes",
  "AWS / Azure / GCP", "Azure DevOps / CI-CD",
  "Redux / Zustand", "Tailwind CSS", "TDD / Testing",
  "AI/LLM Integration",
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useInView(ref: React.RefObject<Element | null>, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&?!";

function useScramble(target: string, startDelay = 400) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplay(
          target.split("").map((char, idx) => {
            if (char === " " || char === "\n") return char;
            if (idx < Math.floor(iteration)) return target[idx];
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }).join("")
        );
        iteration += 0.4;
        if (Math.floor(iteration) >= target.length) {
          setDisplay(target);
          clearInterval(interval);
        }
      }, 35);
    }, startDelay);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [target, startDelay]);
  return display;
}

// ─── Cursor ──────────────────────────────────────────────────────────────────

function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const isHovering = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      const target = e.target as HTMLElement;
      isHovering.current = !!target.closest("a, button, [data-hover]");
    };

    const onLeave = () => { mouse.current = { x: -200, y: -200 }; };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    const tick = () => {
      const lerp = 0.13;
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px,${mouse.current.y}px) translate(-50%,-50%)`;
        dotRef.current.style.opacity = mouse.current.x < 0 ? "0" : "1";
      }
      if (ringRef.current) {
        const scale = isHovering.current ? 2.2 : 1;
        ringRef.current.style.transform = `translate(${ringPos.current.x}px,${ringPos.current.y}px) translate(-50%,-50%) scale(${scale})`;
        ringRef.current.style.borderColor = isHovering.current ? "#c9a96e" : "rgba(201,169,110,0.4)";
        ringRef.current.style.background = isHovering.current ? "rgba(201,169,110,0.06)" : "transparent";
        ringRef.current.style.opacity = ringPos.current.x < 0 ? "0" : "1";
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#c9a96e",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          transition: "opacity 0.2s",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1px solid rgba(201,169,110,0.4)",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
          transition: "border-color 0.25s ease, background 0.25s ease, transform 0.08s linear, opacity 0.2s",
        }}
      />
    </>
  );
}

// ─── Spotlight ───────────────────────────────────────────────────────────────

function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.background = `radial-gradient(700px circle at ${e.clientX}px ${e.clientY}px, rgba(201,169,110,0.045) 0%, transparent 65%)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 2,
        transition: "background 0.08s ease",
      }}
    />
  );
}

// ─── TiltCard ────────────────────────────────────────────────────────────────

interface TiltCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

function TiltCard({ children, style, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const tilt = useRef({ rx: 0, ry: 0, sx: 50, sy: 50 });
  const isOver = useRef(false);
  const rafRef = useRef<number>(0);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    tilt.current = {
      rx: (py - 0.5) * -14,
      ry: (px - 0.5) * 14,
      sx: px * 100,
      sy: py * 100,
    };
    if (ref.current) applyTilt();
  }, []);

  const onLeave = useCallback(() => {
    isOver.current = false;
    tilt.current = { rx: 0, ry: 0, sx: 50, sy: 50 };
    if (ref.current) {
      ref.current.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
      ref.current.style.transition = "transform 0.7s cubic-bezier(0.22,1,0.36,1)";
      const shine = ref.current.querySelector<HTMLDivElement>(".card-shine");
      if (shine) shine.style.opacity = "0";
    }
  }, []);

  const applyTilt = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(1200px) rotateX(${tilt.current.rx}deg) rotateY(${tilt.current.ry}deg)`;
    ref.current.style.transition = "transform 0.08s ease";
    const shine = ref.current.querySelector<HTMLDivElement>(".card-shine");
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${tilt.current.sx}% ${tilt.current.sy}%, rgba(201,169,110,0.12) 0%, transparent 55%)`;
      shine.style.opacity = "1";
    }
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ ...style, position: "relative", overflow: "hidden", willChange: "transform" }}
    >
      <div
        className="card-shine"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 3,
          opacity: 0,
          transition: "opacity 0.2s ease",
        }}
      />
      {children}
    </div>
  );
}

// ─── FadeIn ──────────────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(13,12,11,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(42,38,34,0.5)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#home"
          data-hover="true"
          className="font-display text-lg font-light tracking-wide"
          style={{ color: "#c9a96e" }}
        >
          FW
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-hover="true"
              className="nav-link"
              style={{ color: "#7a746c", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/resume.pdf"
            download
            data-hover="true"
            className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase transition-colors duration-300"
            style={{ color: "#4a4642", letterSpacing: "0.1em" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#c9a96e"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#4a4642"; }}
          >
            <svg width="11" height="11" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0 }}>
              <path d="M6.5 1v7M3.5 5.5l3 3 3-3M1 10h11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            CV
          </a>
          <a
            href="mailto:wagbarafranklin@yahoo.com"
            data-hover="true"
            className="text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-300"
            style={{ borderColor: "rgba(201,169,110,0.3)", color: "#c9a96e", letterSpacing: "0.1em" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#c9a96e";
              (e.currentTarget as HTMLElement).style.color = "#0d0c0b";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#c9a96e";
            }}
          >
            Hire Me
          </a>
        </div>
        <button
          className="md:hidden"
          style={{ color: "#c9a96e" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="font-mono-code text-xs">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-5"
          style={{ background: "rgba(13,12,11,0.97)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase"
              style={{ color: "#7a746c" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  const firstName = useScramble("Franklin", 300);
  const lastName = useScramble("Wagbara.", 600);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6"
      style={{ paddingTop: "100px" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,169,110,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,0.022) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Static radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "62%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.055) 0%, transparent 70%)",
          transform: "translate(-50%,-50%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full" style={{ zIndex: 3 }}>
        <div
          className="section-number mb-8 animate-fade-in"
          style={{ animationDelay: "100ms", opacity: 0, animationFillMode: "forwards" }}
        >
          Available for senior IC roles globally · GMT+1 · Lagos, Nigeria
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
          }}
        >
          <span
            className="animate-fade-in block"
            style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}
          >
            {firstName || "Franklin"}
          </span>
          <em
            className="animate-fade-in block"
            style={{
              fontStyle: "italic",
              fontWeight: 300,
              background: "linear-gradient(90deg, #c9a96e 0%, #e8d5a8 50%, #c9a96e 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s linear infinite, fadeInUp 0.8s cubic-bezier(0.22,1,0.36,1) 350ms forwards",
              opacity: 0,
            }}
          >
            {lastName || "Wagbara."}
          </em>
        </h1>

        <div
          className="mt-10 max-w-xl animate-fade-in"
          style={{ animationDelay: "500ms", opacity: 0, animationFillMode: "forwards" }}
        >
          <p className="text-base leading-relaxed" style={{ color: "#7a746c" }}>
            Senior Full-Stack Engineer with 9 years building high-throughput banking systems,
            AI-integrated platforms, and scalable microfrontend architectures. Currently at{" "}
            <span style={{ color: "#e8e3d9" }}>Innoscripta, Munich</span>.
          </p>
        </div>

        <div
          className="mt-12 flex flex-wrap items-center gap-5 animate-fade-in"
          style={{ animationDelay: "700ms", opacity: 0, animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            data-hover="true"
            className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium transition-all duration-300"
            style={{ background: "#c9a96e", color: "#0d0c0b", letterSpacing: "0.05em" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#e8d5a8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#c9a96e"; }}
          >
            View Work <span style={{ fontSize: "1.1em" }}>→</span>
          </a>
          <a
            href="#contact"
            data-hover="true"
            className="inline-flex items-center gap-3 px-7 py-3.5 text-sm border transition-all duration-300"
            style={{ borderColor: "#2a2622", color: "#7a746c", letterSpacing: "0.05em" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.4)";
              (e.currentTarget as HTMLElement).style.color = "#c9a96e";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#2a2622";
              (e.currentTarget as HTMLElement).style.color = "#7a746c";
            }}
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download
            data-hover="true"
            className="inline-flex items-center gap-2 text-sm transition-all duration-300"
            style={{ color: "#4a4642", letterSpacing: "0.05em" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#c9a96e"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#4a4642"; }}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0 }}>
              <path d="M6.5 1v7M3.5 5.5l3 3 3-3M1 10h11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download CV
          </a>
        </div>

        <div
          className="mt-20 grid grid-cols-3 max-w-lg gap-px animate-fade-in"
          style={{
            animationDelay: "900ms",
            opacity: 0,
            animationFillMode: "forwards",
            borderTop: "1px solid #2a2622",
            paddingTop: "28px",
          }}
        >
          {[
            { value: "9+", label: "Years of Experience" },
            { value: "6+", label: "Years at Senior Level" },
            { value: "60+", label: "Engineers Led" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display" style={{ fontSize: "2rem", fontWeight: 300, color: "#c9a96e" }}>
                {stat.value}
              </div>
              <div className="text-xs mt-1" style={{ color: "#4a4642", letterSpacing: "0.05em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1400ms", opacity: 0, animationFillMode: "forwards", zIndex: 3 }}
      >
        <span className="section-number">scroll</span>
        <div
          style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(201,169,110,0.5), transparent)" }}
        />
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-32 px-6" style={{ position: "relative", zIndex: 3 }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="section-number mb-4">00 / About</div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-16 items-start mt-8">
          <FadeIn delay={100}>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, lineHeight: 1.1 }}
            >
              Engineering systems{" "}
              <em style={{ color: "#c9a96e", fontStyle: "italic" }}>that endure.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="space-y-5" style={{ color: "#7a746c", lineHeight: "1.85" }}>
              <p>
                Nine years deep in backend systems, primarily .NET infrastructure for Nigerian
                banks and European fintech. I've learned that the best code is the code that
                survives team turnover, regulatory audits, and production crises at 2am.
              </p>
              <p>
                I've led 8-engineer teams, re-architected legacy banking platforms, and contributed
                to AI model training at Turing. Currently building{" "}
                <a
                  href="https://www.elevareapp.net"
                  target="_blank"
                  rel="noreferrer"
                  data-hover="true"
                  style={{ color: "#c9a96e" }}
                  className="transition-opacity hover:opacity-70"
                >
                  Elevare
                </a>
                , an AI career companion already in users' hands.
              </p>
              <p>
                I treat AI as a productivity multiplier, not a shortcut. I'm the kind of engineer
                who uses Copilot with guardrails and architecture reviews, not blind trust.
              </p>
            </div>
            <div className="mt-8 flex gap-5">
              {[
                { label: "GitHub", href: "https://github.com/franklinwagbara" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/franklin-wagbara-047a1a45/" },
                { label: "Email", href: "mailto:wagbarafranklin@yahoo.com" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-hover="true"
                  className="nav-link text-xs tracking-widest uppercase"
                  style={{ color: "#4a4642" }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div
            className="mt-20 p-8 border"
            style={{ borderColor: "#2a2622", background: "#161412" }}
          >
            <div className="section-number mb-4">Education</div>
            <h3 className="font-display text-xl font-light" style={{ color: "#e8e3d9" }}>
              B.Sc. Computer Science & Electronics Engineering
            </h3>
            <p className="mt-1 text-sm" style={{ color: "#7a746c" }}>
              University of Regina, Saskatchewan, Canada
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-32 px-6" style={{ position: "relative", zIndex: 3 }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="section-number mb-4">01 / Experience</div>
          <h2
            className="font-display mt-2"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300 }}
          >
            Nine years. Six roles. One standard.
          </h2>
        </FadeIn>

        <div className="mt-14 space-y-px">
          {EXPERIENCE.map((job, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div
                className="border-t group"
                style={{ borderColor: "#2a2622", cursor: "pointer" }}
                onClick={() => setExpanded(expanded === i ? null : i)}
                data-hover="true"
              >
                <div className="py-6 flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3
                        className="font-display text-lg font-light transition-colors duration-200 group-hover:text-[#c9a96e]"
                        style={{ color: "#e8e3d9" }}
                      >
                        {job.title}
                      </h3>
                      <span className="text-sm" style={{ color: "#c9a96e", opacity: 0.8 }}>
                        {job.company}
                      </span>
                      <span className="text-xs" style={{ color: "#4a4642" }}>
                        {job.location}
                      </span>
                    </div>
                    <div
                      className="font-mono-code text-xs mt-1"
                      style={{ color: "#4a4642", letterSpacing: "0.05em" }}
                    >
                      {job.period}
                    </div>
                  </div>
                  <span
                    className="mt-1 text-sm"
                    style={{
                      color: "#4a4642",
                      transform: expanded === i ? "rotate(45deg)" : "rotate(0deg)",
                      display: "inline-block",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    +
                  </span>
                </div>

                {expanded === i && (
                  <div className="pb-8">
                    <ul className="space-y-3 mb-6">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#7a746c" }}>
                          <span style={{ color: "#c9a96e", flexShrink: 0, marginTop: "2px" }}>↳</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.stack.map((t) => (
                        <span
                          key={t}
                          className="font-mono-code text-xs px-2.5 py-1"
                          style={{ background: "#1f1c19", color: "#7a746c", border: "1px solid #2a2622", letterSpacing: "0.04em" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" className="py-32 px-6" style={{ position: "relative", zIndex: 3 }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="section-number mb-4">02 / Projects</div>
          <h2
            className="font-display mt-2"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300 }}
          >
            Selected work.
          </h2>
        </FadeIn>

        {/* Featured cards */}
        <div
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ background: "#2a2622" }}
        >
          {PROJECTS_FEATURED.map((project, i) => (
            <FadeIn key={i} delay={i * 80}>
              <TiltCard
                style={{ background: "#0d0c0b", minHeight: "320px" }}
                className="p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-auto" style={{ position: "relative", zIndex: 4 }}>
                  <span
                    className="font-display"
                    style={{ fontSize: "3.5rem", fontWeight: 300, color: "#1f1c19", lineHeight: 1 }}
                  >
                    {project.index}
                  </span>
                  <div className="flex gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        data-hover="true"
                        className="text-xs uppercase tracking-widest transition-colors duration-200 hover:text-[#c9a96e]"
                        style={{ color: "#4a4642", letterSpacing: "0.1em" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live ↗
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-hover="true"
                      className="text-xs uppercase tracking-widest transition-colors duration-200 hover:text-[#c9a96e]"
                      style={{ color: "#4a4642", letterSpacing: "0.1em" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Code ↗
                    </a>
                  </div>
                </div>

                <div className="mt-8" style={{ position: "relative", zIndex: 4 }}>
                  <div className="section-number mb-2">{project.tagline}</div>
                  <h3 className="font-display text-2xl font-light mb-3" style={{ color: "#e8e3d9" }}>
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#7a746c" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="font-mono-code text-xs px-2 py-0.5"
                        style={{ color: "#4a4642", letterSpacing: "0.04em" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>

        {/* Archive list */}
        <FadeIn delay={100}>
          <div className="mt-16">
            <div className="section-number mb-6">Other noteworthy projects</div>
            <div className="space-y-px">
              {PROJECTS_ARCHIVE.map((project, i) => (
                <div
                  key={i}
                  className="group border-t py-5 grid gap-4 transition-colors duration-200"
                  style={{
                    borderColor: "#2a2622",
                    gridTemplateColumns: "3rem 1fr auto",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#161412"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  <span
                    className="font-mono-code text-xs"
                    style={{ color: "#2a2622", letterSpacing: "0.05em" }}
                  >
                    {project.year}
                  </span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span
                        className="font-display text-base font-light transition-colors duration-200 group-hover:text-[#c9a96e]"
                        style={{ color: "#e8e3d9" }}
                      >
                        {project.name}
                      </span>
                      <span className="section-number">{project.tagline}</span>
                    </div>
                    <div className="mt-1.5 flex flex-wrap gap-2">
                      {project.stack.map((t) => (
                        <span
                          key={t}
                          className="font-mono-code text-xs"
                          style={{ color: "#3a3632", letterSpacing: "0.04em" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 shrink-0">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        data-hover="true"
                        className="text-xs uppercase tracking-widest transition-colors duration-200 hover:text-[#c9a96e]"
                        style={{ color: "#4a4642", letterSpacing: "0.1em" }}
                      >
                        Live ↗
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-hover="true"
                      className="text-xs uppercase tracking-widest transition-colors duration-200 hover:text-[#c9a96e]"
                      style={{ color: "#4a4642", letterSpacing: "0.1em" }}
                    >
                      Code ↗
                    </a>
                  </div>
                </div>
              ))}
              <div className="hairline" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Skills ──────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" className="py-32 px-6" style={{ position: "relative", zIndex: 3 }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="section-number mb-4">03 / Skills</div>
          <h2
            className="font-display mt-2"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300 }}
          >
            Core stack.
          </h2>
        </FadeIn>

        <div
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ background: "#2a2622" }}
        >
          {SKILLS_CORE.map((skill, i) => (
            <FadeIn key={i} delay={i * 50}>
              <div
                className="flex items-center justify-between p-6 transition-colors duration-200"
                style={{ background: "#0d0c0b" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#161412"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0d0c0b"; }}
                data-hover="true"
              >
                <span className="text-sm" style={{ color: "#e8e3d9" }}>{skill.name}</span>
                <span className="font-mono-code text-xs" style={{ color: "#c9a96e", opacity: 0.7 }}>
                  {skill.years} yrs
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-8">
            <div className="section-number mb-4">Also comfortable with</div>
            <div className="flex flex-wrap gap-2">
              {SKILLS_ALSO.map((s) => (
                <span
                  key={s}
                  className="font-mono-code text-xs px-3 py-1.5 border transition-all duration-200"
                  style={{ borderColor: "#2a2622", color: "#4a4642", background: "#161412", letterSpacing: "0.04em", cursor: "default" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.3)";
                    (e.currentTarget as HTMLElement).style.color = "#c9a96e";
                    (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#2a2622";
                    (e.currentTarget as HTMLElement).style.color = "#4a4642";
                    (e.currentTarget as HTMLElement).style.background = "#161412";
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden" style={{ zIndex: 3 }}>
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-120px",
          left: "50%",
          width: "900px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(201,169,110,0.045) 0%, transparent 70%)",
          transform: "translateX(-50%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <div className="section-number mb-4">04 / Contact</div>
        </FadeIn>
        <FadeIn delay={100}>
          <h2
            className="font-display mt-2"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 300, lineHeight: 1.05, maxWidth: "700px" }}
          >
            Let{"'"}s build something{" "}
            <em style={{ color: "#c9a96e", fontStyle: "italic" }}>worth building.</em>
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-8 text-base max-w-md leading-relaxed" style={{ color: "#7a746c" }}>
            Open to senior IC roles globally — remote preferred. If you{"'"}re working on a
            problem worth solving, I want to hear about it.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:wagbarafranklin@yahoo.com"
              data-hover="true"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium transition-all duration-300"
              style={{ background: "#c9a96e", color: "#0d0c0b", letterSpacing: "0.05em" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#e8d5a8"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#c9a96e"; }}
            >
              wagbarafranklin@yahoo.com
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/franklin-wagbara-047a1a45/" },
              { label: "GitHub", href: "https://github.com/franklinwagbara" },
              { label: "X / Twitter", href: "https://x.com/wagbaraf" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                data-hover="true"
                className="nav-link text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ color: "#4a4642", letterSpacing: "0.12em" }}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-10 px-6 border-t" style={{ borderColor: "#2a2622", position: "relative", zIndex: 3 }}>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <span className="font-display text-sm" style={{ color: "#2a2622" }}>
          Franklin Wagbara · {new Date().getFullYear()}
        </span>
        <div className="flex gap-6">
          {[
            { label: "GitHub", href: "https://github.com/franklinwagbara" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/franklin-wagbara-047a1a45/" },
            { label: "Elevare", href: "https://www.elevareapp.net" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              data-hover="true"
              className="text-xs uppercase tracking-widest transition-colors duration-200 hover:text-[#c9a96e]"
              style={{ color: "#2a2622", letterSpacing: "0.1em" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ background: "#0d0c0b", minHeight: "100vh", color: "#e8e3d9" }}>
      <Cursor />
      <Spotlight />
      <Navbar />
      <Hero />
      <div className="hairline-gold" />
      <About />
      <div className="hairline" />
      <Experience />
      <div className="hairline" />
      <Projects />
      <div className="hairline" />
      <Skills />
      <div className="hairline-gold" />
      <Contact />
      <Footer />
    </div>
  );
}
