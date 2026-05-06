import {
  ArrowRight,
  Check,
  Quote
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FadeIn, MotionA, MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  navItems,
  pricing,
  process,
  projects,
  services,
  technologies,
  trustBadges,
  values
} from "@/lib/site-data";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-hidden bg-cloud text-slate-950 dark:bg-ink dark:text-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Portfolio />
          <Technologies />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="glass mx-auto flex max-w-[88rem] items-center justify-between rounded-full px-4 py-3 shadow-xl shadow-slate-950/5"
        aria-label="Primary navigation"
      >
        <a href="#" className="flex items-center gap-3" aria-label="Simulon Tech home">
          <img src="/logo.svg" alt="" aria-hidden="true" className="h-10 w-10 rounded-full object-contain" />
          <span className="text-sm font-bold tracking-tight sm:text-base">Simulon Tech</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 dark:bg-white dark:text-slate-950 sm:inline-flex"
          >
            Start a project
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen px-4 pb-16 pt-32 sm:px-6 lg:pt-40" aria-labelledby="hero-title">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_50%_0%,rgba(79,140,255,.28),transparent_36rem)]" />
      <div className="mx-auto grid max-w-[88rem] items-center gap-12 lg:grid-cols-[1.03fr_.97fr]">
        <FadeIn className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/10 px-4 py-2 text-sm font-semibold text-electric">
            <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_rgba(45,212,191,.95)]" />
            Product engineering for ambitious teams
          </div>
          <h1
            id="hero-title"
            className="max-w-5xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-7xl lg:text-8xl dark:text-white"
          >
            Build future-ready software with a{" "}
            <span className="aurora-text">premium technology partner.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
            We design and ship custom software, full-stack web platforms, mobile apps, cloud systems
            and AI products that feel refined on day one and scale cleanly after launch.
          </p>
          <div className="mt-9 flex">
            <MotionA
              href="#contact"
              whileHover={{ y: -2 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-premium-gradient px-7 py-4 text-sm font-semibold text-white shadow-glow focus:outline-none focus:ring-4 focus:ring-electric/25"
            >
              Book a strategy call
              <ArrowRight aria-hidden="true" size={18} className="transition group-hover:translate-x-1" />
            </MotionA>
          </div>
        </FadeIn>
        <HeroVisual />
      </div>
      <div className="mx-auto mt-8 max-w-[88rem] border-t border-slate-200/70 pt-8 dark:border-white/10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
                <Icon aria-hidden="true" size={18} className="text-electric" />
                {badge.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <FadeIn delay={0.12} className="relative">
      <MotionDiv
        aria-hidden="true"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="mesh-panel relative rounded-[2rem] border border-slate-200/70 p-3 shadow-2xl shadow-blue-950/10 dark:border-white/10"
      >
        <div className="rounded-[1.55rem] border border-white/40 bg-slate-950 p-4 text-white shadow-violet-glow">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
              live delivery cockpit
            </span>
          </div>
          <div className="grid gap-4 py-5 sm:grid-cols-[.8fr_1.2fr]">
            <div className="space-y-4">
              <div className="rounded-2xl bg-white/8 p-4">
                <p className="text-xs text-slate-400">Deployment health</p>
                <p className="mt-2 text-3xl font-semibold">99.98%</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[92%] rounded-full bg-premium-gradient" />
                </div>
              </div>
              <div className="rounded-2xl bg-white/8 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-slate-400">AI workflows</p>
                  <span className="rounded-full bg-cyan/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan">
                    live
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    ["Brief intake", "24 queued", "w-[78%]"],
                    ["Agent build", "6 running", "w-[64%]"],
                    ["QA release", "98% pass", "w-[88%]"]
                  ].map(([step, status, width], index) => (
                    <div key={step} className="relative flex items-center gap-3">
                      <span
                        className={`relative z-10 grid h-7 w-7 place-items-center rounded-full border ${
                          index === 1
                            ? "border-cyan/50 bg-cyan/20"
                            : "border-white/10 bg-white/10"
                        }`}
                      >
                        <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_14px_rgba(45,212,191,.9)]" />
                      </span>
                      {index < 2 ? (
                        <span className="absolute left-3 top-7 h-6 w-px bg-gradient-to-b from-cyan/60 to-white/10" />
                      ) : null}
                      <div className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="truncate text-xs font-semibold text-white">{step}</span>
                          <span className="shrink-0 text-[10px] text-slate-400">{status}</span>
                        </div>
                        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                          <div className={`h-full rounded-full bg-premium-gradient ${width}`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white/[0.06] p-4">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-semibold">Product roadmap</p>
                <span className="rounded-full bg-cyan/15 px-3 py-1 text-xs font-semibold text-cyan">
                  sprint 08
                </span>
              </div>
              <div className="space-y-3">
                {["Design system", "API gateway", "Mobile beta", "Cloud autoscale"].map((item, index) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/8 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium">{item}</span>
                      <span className="text-xs text-slate-400">{index === 2 ? "review" : "done"}</span>
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-premium-gradient"
                        style={{ width: `${92 - index * 15}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>
    </FadeIn>
  );
}

function Services() {
  return (
    <section id="services" className="px-4 py-24 sm:px-6" aria-labelledby="services-title">
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          eyebrow="Services"
          title="Everything your digital product needs, designed as one connected system."
          text="From strategy and UX through backend architecture, cloud deployment and AI automation, our teams cover the full product lifecycle."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.03} className="group">
                <article className="relative h-full overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-950/[0.03] transition hover:-translate-y-1 hover:border-electric/40 hover:shadow-glow dark:border-cyan-300/15 dark:bg-slate-900/85 dark:shadow-black/30">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent opacity-0 transition group-hover:opacity-100 dark:opacity-70"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-electric/10 blur-3xl dark:bg-cyan/10"
                  />
                  <div className="relative mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/10 dark:bg-cyan/12 dark:text-cyan dark:ring-1 dark:ring-cyan/25">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <h3 className="relative text-xl font-semibold text-slate-950 dark:text-slate-50">{service.title}</h3>
                  <p className="relative mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-950/5 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-cyan/10 dark:text-cyan-100 dark:ring-1 dark:ring-cyan/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mesh-panel mx-auto max-w-[88rem] rounded-[2rem] border border-slate-200/70 p-6 sm:p-10 lg:p-14 dark:border-white/10">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <SectionHeading
            eyebrow="About us"
            title="Senior product thinking, not just ticket delivery."
            text="We operate like a technical co-founder for your team: clear product judgment, elegant interface design, strong engineering fundamentals and measurable business outcomes."
            align="left"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <FadeIn key={value.title}>
                  <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white/75 p-5 shadow-xl shadow-slate-950/[0.03] dark:border-cyan-300/15 dark:bg-slate-900/85 dark:shadow-black/25">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-electric/10 blur-3xl dark:bg-cyan/10"
                    />
                    <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-cyan/12 dark:text-cyan dark:ring-1 dark:ring-cyan/25">
                      <Icon aria-hidden="true" size={22} />
                    </div>
                    <h3 className="relative mt-5 font-semibold text-slate-950 dark:text-slate-50">{value.title}</h3>
                    <p className="relative mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{value.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          eyebrow="Portfolio"
          title="Case studies built for speed, trust and measurable leverage."
          text="Selected product builds with clear outcomes, thoughtful architecture and measurable business impact."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.05}>
              <article className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/85 shadow-2xl shadow-slate-950/[0.05] transition hover:-translate-y-1 hover:border-electric/40 dark:border-cyan-300/15 dark:bg-slate-900/90 dark:shadow-black/30">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent opacity-0 transition group-hover:opacity-100 dark:opacity-80"
                />
                <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.gradient} p-5`}>
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/5 via-transparent to-slate-950/35" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.34),transparent_18rem),linear-gradient(to_bottom,transparent,rgba(2,6,23,.18))]" />
                      <div className="relative h-full rounded-[1.35rem] border border-white/30 bg-white/18 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur-md">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
                            <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
                          </div>
                          <span className="rounded-full bg-white/18 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90 ring-1 ring-white/20">
                            live
                          </span>
                        </div>
                        <div className="mt-5 grid grid-cols-[1.15fr_.85fr] gap-3">
                          <div className="rounded-2xl bg-white/20 p-3 ring-1 ring-white/20">
                            <div className="mb-4 h-2 w-20 rounded-full bg-white/70" />
                            <div className="grid h-20 grid-cols-5 items-end gap-2">
                              {[48, 76, 54, 88, 66].map((height) => (
                                <span key={height} className="rounded-t-lg bg-white/75 shadow-sm" style={{ height }} />
                              ))}
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="rounded-2xl bg-white/22 p-3 ring-1 ring-white/20">
                              <div className="h-2 w-12 rounded-full bg-white/65" />
                              <div className="mt-3 h-8 rounded-xl bg-white/50" />
                            </div>
                            <div className="rounded-2xl bg-slate-950/20 p-3 ring-1 ring-white/15">
                              <div className="flex gap-1.5">
                                {[1, 2, 3].map((item) => (
                                  <span key={item} className="h-8 flex-1 rounded-lg bg-white/45" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -bottom-8 left-5 right-5 grid grid-cols-3 gap-3">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="h-20 rounded-2xl bg-white/70 shadow-xl shadow-slate-950/15 backdrop-blur" />
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="relative p-6 pt-8">
                  <span
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-electric/10 blur-3xl dark:bg-cyan/10"
                  />
                  <p className="relative text-sm font-semibold text-electric dark:text-cyan">{project.type}</p>
                  <h3 className="relative mt-2 text-2xl font-semibold text-slate-950 dark:text-slate-50">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {project.summary}
                  </p>
                  <div className="mt-5 grid gap-2">
                    {project.metrics.map((metric) => (
                      <p
                        key={metric}
                        className="flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-slate-950/[0.03] px-3 py-2 text-sm font-semibold text-slate-700 dark:border-cyan-300/10 dark:bg-cyan/8 dark:text-slate-100"
                      >
                        <Check aria-hidden="true" size={16} className="shrink-0 text-cyan" />
                        {metric}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section id="technologies" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-[88rem]">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Technologies"
            title="A modern stack chosen for performance, maintainability and hiring reality."
            text="We select tools that scale with your team, integrate cleanly and keep future decisions open."
            align="left"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {process.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.04}>
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-xl shadow-slate-950/[0.03] dark:border-cyan-300/15 dark:bg-slate-900/85 dark:shadow-black/25">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-electric/10 blur-3xl dark:bg-cyan/10"
                  />
                  <span className="relative text-sm font-semibold text-electric dark:text-cyan">0{index + 1}</span>
                  <h3 className="relative mt-3 text-xl font-semibold text-slate-950 dark:text-slate-50">{step.title}</h3>
                  <p className="relative mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className="mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="tech-marquee flex w-max gap-3">
            {[...technologies, ...technologies].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="rounded-full border border-slate-200/80 bg-white/75 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-950/[0.03] dark:border-cyan-300/15 dark:bg-slate-900/85 dark:text-cyan-100 dark:shadow-black/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          eyebrow="Pricing"
          title="Flexible engagement models for every stage."
          text="Start lean, scale the team when the product proves itself, and keep the delivery model transparent."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <FadeIn key={plan.name}>
              <article
                className={`relative h-full overflow-hidden rounded-[1.75rem] border p-7 shadow-xl transition hover:-translate-y-1 ${
                  plan.featured
                    ? "border-electric/50 bg-slate-950 text-white shadow-glow dark:border-cyan/35 dark:bg-gradient-to-br dark:from-cyan-950/70 dark:via-slate-950 dark:to-indigo-950/80 dark:text-white"
                    : "border-slate-200/80 bg-white/75 text-slate-950 shadow-slate-950/[0.04] dark:border-cyan-300/15 dark:bg-slate-900/85 dark:text-slate-50 dark:shadow-black/25"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-px ${
                    plan.featured
                      ? "bg-gradient-to-r from-transparent via-cyan to-transparent"
                      : "bg-gradient-to-r from-transparent via-cyan/70 to-transparent"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-electric/10 blur-3xl dark:bg-cyan/10"
                />
                <p className="relative text-sm font-semibold text-electric dark:text-cyan">{plan.name}</p>
                <h3 className="relative mt-4 text-4xl font-semibold">{plan.price}</h3>
                <p className={`relative mt-4 text-sm leading-7 ${plan.featured ? "text-slate-300 dark:text-cyan-100/80" : "text-slate-600 dark:text-slate-300"}`}>
                  {plan.description}
                </p>
                <div className="relative mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <p key={feature} className="flex items-center gap-2 text-sm font-medium">
                      <Check aria-hidden="true" size={16} className="text-cyan" />
                      {feature}
                    </p>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-2xl shadow-slate-950/[0.04] dark:border-cyan-300/15 dark:bg-slate-900/85 dark:shadow-black/30 sm:p-8">
          <span
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-electric/10 blur-3xl dark:bg-cyan/10"
          />
          <div className="relative mb-8 flex items-start gap-4 rounded-3xl bg-slate-950 p-5 text-white dark:border dark:border-cyan-300/15 dark:bg-slate-950/75 dark:text-slate-100">
            <Quote aria-hidden="true" className="mt-1 shrink-0 text-cyan" size={22} />
            <p className="text-sm leading-7">
              “We want fewer meetings, clearer decisions and software that looks as good as it works.”
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200/80 px-4 py-10 dark:border-white/10 sm:px-6">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Simulon Tech. Premium IT solutions for modern teams.</p>
        <div className="flex gap-5">
          <a href="#services" className="hover:text-electric">Services</a>
          <a href="#portfolio" className="hover:text-electric">Work</a>
          <a href="#contact" className="hover:text-electric">Contact</a>
        </div>
      </div>
    </footer>
  );
}
