import React, { useEffect, useRef, useState } from "react";
import { projects } from "./projects";


export default function App() {
  const cvHref = import.meta.env.BASE_URL + "Sreyeesh-Garimella-Resume-Accent.html";

  /* THEME */
  const [theme, setTheme] = useState<string>(document.documentElement.dataset.theme || "dark");
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  /* MOBILE MENU */
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // lock body scroll when open
  useEffect(() => {
    const { style } = document.body;
    style.overflow = open ? "hidden" : "";
    return () => { style.overflow = ""; };
  }, [open]);

  // close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // focus trap
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open || !panelRef.current) return;
    const focusables = panelRef.current.querySelectorAll<HTMLElement>("a,button,[tabindex]:not([tabindex='-1'])");
    focusables[0]?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [open]);

  // smooth scroll helper (closes menu first)
  const goto = (hash: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.querySelector(hash);
    close();
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", hash);
    }
  };

  const NavItem = ({ href, n, text, onSelect }:{
    href: string; n: string; text: string; onSelect: (e: React.MouseEvent)=>void
  }) => (
    <a href={href} onClick={onSelect}
       className="px-2 py-1 rounded hover:bg-[var(--text)]/10 text-[var(--muted)]">
      <span className="font-mono mr-1 text-[var(--accent)]">{n}.</span>{text}
    </a>
  );

  const ThemeButton = () => (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="p-2 rounded border border-token hover:border-[var(--accent)] hover:text-[var(--accent)]"
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
    >
      {theme === "dark" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8M1 13h3v-2H1m3.95 7.36l1.41 1.41 1.79-1.8-1.41-1.41m7.64-13.6h-2v3h2M20 11v2h3v-2m-4.24-7.95l-1.41 1.41 1.8 1.79 1.41-1.41m-2.24 16.31l1.41 1.41 1.79-1.8-1.41-1.41M12 6a6 6 0 100 12 6 6 0 000-12z"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 1a1 1 0 00-1 1 10 10 0 1010 10 1 1 0 00-1-1 8 8 0 01-8-8 1 1 0 00-1-1z"/>
        </svg>
      )}
    </button>
  );

  const HexLogo = () => (
    <a href="#top" aria-label="Home" onClick={goto("#top")} className="inline-block">
      <svg width="32" height="32" viewBox="0 0 100 100" className="text-[var(--accent)]">
        <polygon fill="none" stroke="currentColor" strokeWidth="6"
          points="50 6, 90 28, 90 72, 50 94, 10 72, 10 28" />
        <text x="50" y="60" textAnchor="middle" fill="currentColor" className="font-mono" fontSize="36">S</text>
      </svg>
    </a>
  );

  return (
    <div className="min-h-dvh bg-[var(--bg)] text-[var(--text)]">
      <a href="#main" onClick={goto("#main")} className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-1 rounded">
        Skip to content
      </a>

      {/* Header (theme-aware surface class from styles.css) */}
      <header className="sticky top-0 z-40 backdrop-blur header-surface">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <HexLogo />

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-2">
            <NavItem href="#about" n="01" text="About" onSelect={goto("#about")} />
            <NavItem href="#experience" n="02" text="Experience" onSelect={goto("#experience")} />
            <NavItem href="#work" n="03" text="Work" onSelect={goto("#work")} />
            <NavItem href="#contact" n="04" text="Contact" onSelect={goto("#contact")} />
            <a href={cvHref} className="ml-2 inline-flex items-center gap-2 rounded-md border px-4 py-2 font-semibold btn-accent">
              Resume
            </a>
            <ThemeButton />
          </nav>

          {/* Mobile buttons */}
          <div className="sm:hidden flex items-center gap-2">
            <ThemeButton />
            <button
              className="p-2 rounded border border-token hover:border-[var(--accent)] hover:text-[var(--accent)]"
              aria-label="Open menu"
              aria-controls="mobile-nav"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="h-[3px] bg-[var(--accent)]/80"></div>
      </header>

      {/* Mobile slide-over */}
      {open && (
        <>
          <div className="fixed inset-0 z-50 bg-black/60 sm:hidden" onClick={close} />
          <aside
            id="mobile-nav"
            ref={panelRef}
            className="fixed z-50 sm:hidden top-0 right-0 h-full w-72 bg-[var(--bg-soft)] border-l border-token p-6 flex flex-col gap-3"
            role="dialog" aria-modal="true"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">Menu</span>
              <button className="p-2 rounded border border-token hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      aria-label="Close menu" onClick={close}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <NavItem href="#about" n="01" text="About" onSelect={goto("#about")} />
            <NavItem href="#experience" n="02" text="Experience" onSelect={goto("#experience")} />
            <NavItem href="#work" n="03" text="Work" onSelect={goto("#work")} />
            <NavItem href="#contact" n="04" text="Contact" onSelect={goto("#contact")} />
            <a href={cvHref} className="mt-4 inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold btn-accent" onClick={close}>
              Resume
            </a>
          </aside>
        </>
      )}

      {/* CONTENT — includes the target sections */}
      <main id="main" className="max-w-6xl mx-auto px-4">
        {/* HERO */}
        <section id="top" className="pt-16 md:pt-24 pb-12">
          <p className="font-mono text-[var(--accent)]">Hi, my name is</p>
          <h1 className="mt-2 text-5xl md:text-7xl font-extrabold leading-tight">Sreyeesh Garimella.</h1>
          <h2 className="h-sub font-extrabold mt-1">I build things for the web.</h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--muted)]">
            Full-Stack JavaScript engineer focused on accessible UI, clean APIs, and reliable delivery.
            I ship with React/TypeScript, Node/Express, and CI/CD using GitHub Actions & Docker (Linux/WSL2).
          </p>
          <div className="mt-8 flex gap-3">
            <a href={cvHref} className="btn btn-accent">View Résumé</a>
            <a href="#contact" onClick={goto("#contact")} className="btn btn-ghost">Get in touch</a>
          </div>
        </section>

        {/* REQUIRED TARGET SECTIONS */}
        <section id="about" className="section">
          <h3 className="text-xl font-bold"><span className="font-mono text-[var(--accent)] mr-2">01.</span>About</h3>
          <p className="mt-4 max-w-3xl text-[var(--muted)]">I build accessible, human-centered web apps with React/TypeScript and ship them using GitHub Actions & Docker. Open to early-career Frontend or Full-Stack roles.</p>
        </section>

        <section id="experience" className="section">
          <h3 className="text-xl font-bold"><span className="font-mono text-[var(--accent)] mr-2">02.</span>Experience</h3>
          <div className="mt-4 grid gap-4">
            <div className="card p-5">
              <div className="font-semibold">Founder / Developer <span className="text-[var(--accent)]">@ SG Production OÜ</span></div>
              <ul className="list-disc pl-6 text-[var(--muted)] text-sm mt-2">
                <li>Full-stack builds; clean REST APIs; dependable releases.</li>
                <li>CI/CD with GitHub Actions; Dockerized services; runbooks.</li>
              </ul>
            </div>
          </div>
        </section>

      <section id="work" className="section">
  <h3 className="text-xl font-bold">
    <span className="font-mono text-[var(--accent)] mr-2">03.</span>
    Work
  </h3>

  <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    {projects.map((p) => (
      <article key={p.title} className="card p-5 flex flex-col justify-between">
        <div>
          <div className="badge">Project</div>
          <h4 className="mt-2 font-semibold">{p.title}</h4>
          <p className="mt-2 text-[var(--muted)] text-sm">{p.blurb}</p>

          <ul className="mt-3 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
            {p.stack.map((s) => (
              <li key={s} className="px-2 py-0.5 rounded border border-token">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex gap-3">
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            aria-label={`${p.title} GitHub repository`}
          >
            Repo
          </a>
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Live
            </a>
          )}
        </div>
      </article>
    ))}
  </div>
</section>


        <section id="contact" className="section text-center">
          <p className="font-mono text-[var(--accent)]">04. What’s next?</p>
          <h3 className="text-3xl font-extrabold mt-2">Get In Touch</h3>
          <p className="max-w-xl mx-auto mt-4 text-[var(--muted)]">If you have a role or project, let’s talk.</p>
          <div className="mt-8">
            <a href="mailto:sgarime1@gmail.com" className="btn btn-accent">Say hello</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-token py-8 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} Sreyeesh Garimella
      </footer>
    </div>
  );
}
