import Link from "next/link";

const navigation = [
  { name: "Solutions", href: "#solutions" },
  { name: "Playbook", href: "#playbook" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

const solutionPillars = [
  {
    title: "Pipeline Architecture",
    description:
      "Build predictable top-of-funnel momentum with ICP clarity, outbound choreography, and GTM instrument panels that surface the right next move.",
    bullets: [
      "ICP refinement and territory design",
      "Campaign cadences and enablement assets",
      "Acquisition analytics with weekly operating rhythm",
    ],
  },
  {
    title: "Revenue Operations",
    description:
      "Triage your data layer, automate handoffs, and wire RevOps infrastructure that scales from first rep to international coverage without adding drag.",
    bullets: [
      "CRM architecture + workflow automation",
      "Forecasting guardrails and risk scoring",
      "Lifecycle analytics and hygiene playbooks",
    ],
  },
  {
    title: "Deal Excellence",
    description:
      "Coach teams with buyer-centric plays, competitive battlecards, and win-room rituals that convert more of the pipeline you already have.",
    bullets: [
      "Mid-market & enterprise motion design",
      "Mutual action plans and value narratives",
      "Live deal reviews with real-time instrumentation",
    ],
  },
];

const proofPoints = [
  { label: "ARR influenced", value: "$86M" },
  { label: "Avg. sales cycle reduction", value: "36%" },
  { label: "Ramp time decrease", value: "-42 days" },
  { label: "Playbooks activated", value: "68" },
];

const playbook = [
  {
    title: "Pulse",
    subtitle: "30-day diagnostic",
    description:
      "Audit your data layer, buyer journey, and current GTM rituals. Deliver scoreboard, quick wins, and prioritized roadmap to align leadership.",
  },
  {
    title: "Architect",
    subtitle: "Design + instrument",
    description:
      "Sequence operating system upgrades, instrument automations, and craft the enablement needed for teams to execute on the new motion.",
  },
  {
    title: "Activate",
    subtitle: "Guided launch",
    description:
      "Embed with your team to coach live deals, track signals, and iterate weekly until the model proves itself against agreed success metrics.",
  },
];

const caseStudies = [
  {
    company: "Atlas Deploy",
    summary:
      "Reset go-to-market after Series A with a blended outbound + partner motion. Increased SQL volume 3.2x in 12 weeks with zero additional headcount.",
    result: "3.2x SQL lift",
  },
  {
    company: "Northbeam AI",
    summary:
      "Unified product-led and sales-led funnel to double pipe coverage while holding CAC flat. Introduced health scoring to stop silent churn.",
    result: "+102% pipe coverage",
  },
  {
    company: "Startgrid",
    summary:
      "Established enterprise revenue desk with mutual close plans and multi-thread rituals. Win rate climbed from 18% to 41% inside two quarters.",
    result: "41% win rate",
  },
];

const testimonials = [
  {
    quote:
      "Sale Team rebuilt our RevOps stack from the ground up and gave every stakeholder the same source of truth. Forecast calls are finally strategic instead of story time.",
    name: "Hannah Foster",
    role: "VP Revenue, Interval Systems",
  },
  {
    quote:
      "Their enablement sprints took months off our rep ramp. We closed the biggest enterprise deal in company history six weeks after launching the new playbook.",
    name: "Miguel Alvarez",
    role: "Chief Commercial Officer, LumenSpace",
  },
  {
    quote:
      "The team knows how to operate in ambiguity and bring structure fast. The combination of strategic thinking and hands-on execution is rare.",
    name: "Priya Desai",
    role: "Founder & CEO, Signalcraft",
  },
];

const insights = [
  {
    title: "Designing RevOps dashboards that actually drive deals",
    category: "RevOps Playbook",
    readingTime: "7 min read",
  },
  {
    title: "How to orchestrate multi-threaded enterprise pursuits",
    category: "Deal Strategy",
    readingTime: "6 min read",
  },
  {
    title: "Leader guide: aligning CS + Sales around expansion",
    category: "Revenue Leadership",
    readingTime: "9 min read",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80 blur-3xl" aria-hidden>
        <div className="mx-auto mt-[-12rem] h-[38rem] max-w-6xl rounded-full bg-gradient-to-br from-cyan-400/40 via-blue-500/30 to-indigo-500/45" />
      </div>
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
          <Link href="#hero" className="text-lg font-semibold tracking-tight text-white">
            Sale Team
          </Link>
          <nav className="hidden items-center gap-10 text-sm font-medium text-slate-300 md:flex">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="transition hover:text-cyan-200">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex">
            <Link
              href="#contact"
              className="rounded-full border border-cyan-400/60 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
            >
              Book a working session
            </Link>
          </div>
          <button className="md:hidden" aria-label="Open navigation">
            <svg className="h-6 w-6 text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 lg:px-12" id="hero">
        <section className="relative isolate overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/70 px-8 py-16 shadow-2xl shadow-cyan-500/10 sm:px-12 md:py-20">
          <div className="absolute inset-0 -z-10 rounded-3xl hero-gradient opacity-80" />
          <div className="grid gap-12 md:grid-cols-[2fr,1fr] md:items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-200">
                GTM OPERATING PARTNER
              </div>
              <h1 className="text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Build a sales engine that compounds.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                Sale Team works with B2B founders to design repeatable revenue motions, operationalize data-backed decisions, and coach teams through the moments that matter. We blend strategy, enablement, and RevOps execution into one accountable partner.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#contact"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Launch a pipeline audit
                </Link>
                <Link
                  href="#case-studies"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  See outcomes
                </Link>
              </div>
              <dl className="grid gap-6 sm:grid-cols-2">
                {proofPoints.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/5 bg-white/5 px-4 py-5">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-slate-300">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-3xl font-semibold text-cyan-100">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-slate-400">Signals we watch</p>
                <p className="text-lg font-semibold text-white">Weekly revenue command center</p>
              </div>
              <div className="grid gap-3 text-sm text-slate-200">
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                  <span>Pipeline health score</span>
                  <span className="font-semibold text-cyan-200">92</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                  <span>Cycle velocity</span>
                  <span className="font-semibold text-emerald-200">+36%</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                  <span>Win-room coverage</span>
                  <span className="font-semibold text-sky-200">4.2x</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                  <span>Expansion risk</span>
                  <span className="font-semibold text-rose-200">Low</span>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Instrumentation delivered in your CRM + shared dashboards with automated alerts, executive snapshots, and board-ready reporting.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-12" id="solutions">
          <div className="grid gap-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">SOLUTIONS</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">A full-stack revenue team, on demand.</h2>
            <p className="mx-auto max-w-2xl text-base text-slate-300">
              We join forces with founders, CROs, and revenue leaders to architect scalable go-to-market systems. Our crews pair strategic operators with hands-on builders across sales, success, and RevOps.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {solutionPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="grid-highlight rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-cyan-500/10"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-300">{pillar.description}</p>
                  <ul className="space-y-2 text-sm text-slate-200/90">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="playbook" className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10">
          <div className="grid gap-8 md:grid-cols-[1fr,2fr]"><div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">OPERATING MODEL</p>
              <h2 className="text-3xl font-semibold text-white">The Sale Team playbook.</h2>
              <p className="text-sm text-slate-300">
                Engagements are designed to deliver quick validation and long-term compounding impact. We sequence each phase so stakeholders stay aligned and the frontline feels momentum immediately.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
              >
                View onboarding checklist
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="grid gap-4">
              {playbook.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 transition hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/70">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                      <p className="text-sm font-medium text-cyan-200/80">{step.subtitle}</p>
                    </div>
                    <span className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                      {index === 0 ? "Discover" : index === 1 ? "Design" : "Launch"}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="case-studies" className="grid gap-10">
          <div className="grid gap-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">CASE STUDIES</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Proof that the revenue system works.</h2>
            <p className="mx-auto max-w-3xl text-base text-slate-300">
              High-growth teams use Sale Team to orchestrate winning motions across acquisition, expansion, and retention. Each partnership includes operating dashboards, deal support, and operator-to-operator coaching.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.company} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{study.company}</h3>
                  <span className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                    {study.result}
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-300">{study.summary}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                  Series A – Series C | SaaS | PLG Hybrid
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="insights" className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <div className="grid gap-6 md:grid-cols-[1fr,2fr]">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">INSIGHTS</p>
              <h2 className="text-3xl font-semibold text-white">Stay ahead of the revenue curve.</h2>
              <p className="text-sm text-slate-300">
                Join 5k+ GTM operators getting weekly breakdowns on RevOps, deal execution, and leadership rituals. Every edition includes dashboards, frameworks, and templates.
              </p>
              <form className="mt-4 flex flex-wrap gap-3">
                <input
                  type="email"
                  required
                  placeholder="Work email"
                  className="min-w-[220px] flex-1 rounded-full border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Get the briefing
                </button>
              </form>
            </div>
            <div className="grid gap-4">
              {insights.map((item) => (
                <article key={item.title} className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-500">{item.readingTime}</p>
                  </div>
                  <svg
                    className="h-10 w-10 text-cyan-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300"
            >
              <p className="text-base text-slate-200">
                “{testimonial.quote}”
              </p>
              <footer className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                {testimonial.name} · {testimonial.role}
              </footer>
            </blockquote>
          ))}
        </section>

        <section id="contact" className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 via-slate-900 to-indigo-500/20 p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.25),_transparent_55%)]" aria-hidden />
          <div className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-950">
                PARTNER WITH SALE TEAM
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Ready to upgrade your revenue command center?
              </h2>
              <p className="max-w-xl text-sm text-slate-200">
                Tell us where your GTM engine needs momentum and we will come prepared with relevant benchmarks, frameworks, and suggested metrics to monitor in the first 30 days.
              </p>
              <div className="grid gap-3 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200/40 bg-white/10 text-xs font-semibold text-white">
                    1
                  </span>
                  <span>Submit your current GTM scorecard and top growth objectives.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200/40 bg-white/10 text-xs font-semibold text-white">
                    2
                  </span>
                  <span>We facilitate a 60-minute working session with revenue stakeholders.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200/40 bg-white/10 text-xs font-semibold text-white">
                    3
                  </span>
                  <span>Receive a tailored activation plan within five business days.</span>
                </div>
              </div>
            </div>
            <form className="grid gap-4 rounded-3xl border border-white/15 bg-slate-950/80 p-6 shadow-xl shadow-cyan-500/20">
              <div className="grid gap-1">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@salesleaders.com"
                  className="rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="team" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Team size
                </label>
                <select
                  id="team"
                  className="rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white focus:border-cyan-300 focus:outline-none"
                  defaultValue="10-25"
                >
                  <option value="<10">Under 10 revenue operators</option>
                  <option value="10-25">10 – 25 revenue operators</option>
                  <option value="26-75">26 – 75 revenue operators</option>
                  <option value=">75">More than 75 revenue operators</option>
                </select>
              </div>
              <div className="grid gap-1">
                <label htmlFor="focus" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Primary focus
                </label>
                <textarea
                  id="focus"
                  rows={4}
                  placeholder="Share current goals, blockers, or metrics you care about."
                  className="rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Schedule the session
              </button>
              <p className="text-[11px] text-slate-500">
                We reply within one business day. By submitting this form you agree to our privacy guidelines and session being recorded for enablement improvements.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 text-sm text-slate-400 lg:px-12 lg:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">Sale Team</p>
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                Revenue architects, operators, and enablement partners helping B2B squads move faster with conviction.
              </p>
            </div>
            <div className="flex gap-6 text-xs font-semibold uppercase tracking-[0.3em]">
              <a href="#solutions" className="transition hover:text-cyan-200">
                Solutions
              </a>
              <a href="#playbook" className="transition hover:text-cyan-200">
                Playbook
              </a>
              <a href="#case-studies" className="transition hover:text-cyan-200">
                Proof
              </a>
              <a href="#contact" className="transition hover:text-cyan-200">
                Contact
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.3em] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Sale Team. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="mailto:hello@saleteam.studio" className="hover:text-cyan-200">
                hello@saleteam.studio
              </Link>
              <span className="hidden sm:block">•</span>
              <span>Based in NYC & remote-first</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
