export default function App() {
  return (
    <div className="bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-extrabold">Sreyeesh Garimella</a>
          <div className="text-sm flex gap-2">
            <a href="#about" className="px-2 py-1 rounded hover:bg-slate-100">About</a>
            <a href="#experience" className="px-2 py-1 rounded hover:bg-slate-100">Experience</a>
            <a href="#skills" className="px-2 py-1 rounded hover:bg-slate-100">Skills</a>
            <a href="#contact" className="px-2 py-1 rounded hover:bg-slate-100">Contact</a>
            <a href="./Sreyeesh-Garimella-CV.pdf" className="ml-2 px-3 py-1 border rounded font-semibold">Download CV</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
        <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="text-sm uppercase tracking-widest text-slate-500">Hello, I’m</p>
            <h1 className="text-4xl font-extrabold mt-2">Sreyeesh Garimella</h1>
            <p className="mt-3 text-lg">Junior Full-Stack JavaScript Engineer · clean UI, reliable delivery</p>
            <div className="mt-6 flex gap-3">
            <a href="./Sreyeesh-Garimella-A4-OnePage.html" className="ml-2 px-3 py-1 border rounded font-semibold">
              Download CV
            </a>

              <a href="#contact" className="px-4 py-2 rounded-md border font-semibold">Contact</a>
            </div>
          </div>
          <aside className="bg-white shadow rounded-xl p-4">
            <div className="font-semibold">Based in Estonia</div>
            <div className="text-sm mt-2">Email: <a className="underline" href="mailto:sgarime1@gmail.com">sgarime1@gmail.com</a></div>
            <div className="text-sm">Phone: +372 5827 7155</div>
            <div className="flex gap-3 mt-3 text-sm">
              <a className="underline" href="https://www.linkedin.com/in/sreyeeshgarimella" target="_blank">LinkedIn</a>
              <a className="underline" href="https://github.com/Sreyeesh" target="_blank">GitHub</a>
            </div>
          </aside>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-extrabold mb-6">About</h2>
        <p>I build clean, accessible web interfaces with React/TypeScript and ship them using GitHub Actions and Docker.
        I run Toucan Studios OÜ and SG Production OÜ. I’m seeking a junior role where I can contribute on tickets day one and learn your stack quickly.</p>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-extrabold mb-6">Experience</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Founder / Developer — SG Production OÜ</strong> (2022–Present): Full-stack builds; CI/CD; internal dashboards.</li>
          <li><strong>Founder / Mentor — Toucan Studios OÜ</strong> (2023–Present): Mentoring; workflows; delivery practices.</li>
          <li><strong>Earlier Technical Roles (selected)</strong>: Disney, Blizzard, DNEG, Kavaleer — pipeline/TD support & automation.</li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-extrabold mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div><h3 className="font-semibold mb-2">Web</h3><p>JavaScript, TypeScript, React, Vite, HTML, CSS, Tailwind, a11y</p></div>
          <div><h3 className="font-semibold mb-2">DevOps</h3><p>Git/GitHub, GitHub Actions, Docker, Linux/WSL2, GCP (basics)</p></div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-extrabold mb-6">Contact</h2>
        <p className="no-print">Email <a className="underline" href="mailto:sgarime1@gmail.com">sgarime1@gmail.com</a> · LinkedIn · GitHub</p>
      </section>

      <footer className="border-t py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sreyeesh Garimella
      </footer>
    </div>
  );
}
