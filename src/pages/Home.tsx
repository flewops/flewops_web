import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Zap, Check } from "lucide-react";
import { services, stats, steps, testimonials } from "../lib/data";
import { organizationSchema, websiteSchema, speakableSchema } from "../lib/structuredData";
import SEO from "../components/SEO";

const marqueeItems = [
  "Data Security",
  "ERP Solutions",
  "E-Commerce",
  "Real-Time Chat",
  "Network Solutions",
  "Zero-Trust",
  "Scalable",
  "API-First",
];

export default function Home() {
  return (
    <>
      <SEO
        title="FlewOps Global — Secure, Scalable Enterprise Digital Solutions"
        description="FlewOps Global delivers enterprise-grade digital transformation: data security, customizable ERP, e-commerce, AI automation, real-time chat, and network solutions for modern businesses."
        keywords="enterprise digital solutions, data security, ERP systems, e-commerce development, AI automation, real-time chat applications, network solutions, digital transformation, FlewOps Global"
        path="/"
        jsonLd={[organizationSchema, websiteSchema, speakableSchema("/")]}
      />

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-lime/40 blur-3xl animate-blob" />
          <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-cyan/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-lime/20 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
          <div className="absolute inset-0 grain opacity-40" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-lime" />
            Forward-thinking technology for modern enterprises
          </motion.div>

          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
              >
                Transforming{" "}
                <span className="relative inline-block">
                  <span className="text-stroke-lime">operations</span>
                </span>{" "}
                with{" "}
                <span className="bg-gradient-to-r from-lime via-cyan to-violet bg-clip-text text-transparent">
                  technology.
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 lg:pb-3"
            >
              <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                At <strong className="text-white">FlewOps</strong>, we empower
                businesses with smart digital solutions and automation tools to
                achieve seamless workflow management — secure, scalable, and
                built for growth.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-lime px-5 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
                >
                  Get in Touch <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services/security"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Zap className="h-4 w-4 text-cyan" /> Explore services
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                <div className={`font-display text-3xl font-bold sm:text-4xl ${s.color}`}>{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative mt-16 border-y border-white/10 bg-white/[0.02] py-4">
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
              {[...marqueeItems, ...marqueeItems].map((m, i) => (
                <span key={i} className="flex items-center gap-8 font-display text-2xl font-semibold text-white/40 sm:text-3xl">
                  {m}<span className="text-lime">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" /> Who we are
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                A passionate team of engineers, designers & innovators.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/65">
                We're dedicated to transforming businesses through intelligent
                technology. Our mission is to deliver scalable digital solutions
                that simplify complex operations, enhance efficiency, and drive
                measurable growth.
              </p>
              <Link
                to="/about/company"
                className="mt-6 inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Learn more about us <ArrowUpRight className="h-4 w-4 text-lime" />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img src="/images/team.jpg" alt="FlewOps Global team collaborating in the office" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section id="services" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" /> What we do
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
                Six pillars.
                <br />
                <span className="text-stroke">One operating system.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Each capability is modular — pick one or stack them all. They're
              designed to interlock into a single, coherent system.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:auto-rows-[minmax(220px,auto)]">
            {services.map((s, i) => {
              const Icon = s.icon;
              const layout = [
                "lg:col-span-2 lg:row-span-2",
                "lg:col-span-2",
                "lg:col-span-1",
                "lg:col-span-1",
                "lg:col-span-2",
                "lg:col-span-2",
              ][i % 6];
              return (
                <motion.article
                  key={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2 p-6 transition-all hover:border-white/25 ${layout}`}
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.bg} opacity-60`} />
                  {s.image && (
                    <div className="pointer-events-none absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30">
                      <img src={s.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                    </div>
                  )}
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 ${s.accent}`}>
                        <Icon className="h-6 w-6" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                    <div className="mt-auto pt-6">
                      <p className={`text-xs font-semibold uppercase tracking-widest ${s.accent}`}>{s.tagline}</p>
                      <h3 className="mt-1.5 font-display text-2xl font-bold sm:text-3xl">{s.name}</h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">{s.shortDesc}</p>
                      {(i === 0 || i === 1 || i === 4) && (
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {s.features.slice(0, 4).map((f) => (
                            <li key={f} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/75">
                              <Check className={`h-3 w-3 ${s.accent}`} />{f}
                            </li>
                          ))}
                        </ul>
                      )}
                      <Link to={`/services/${s.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-white">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> How we work
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
              From spark to{" "}
              <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">scale.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2 p-6 transition-colors hover:border-white/25"
              >
                <div className="absolute -right-4 -top-6 font-display text-8xl font-bold text-white/[0.04] transition-colors group-hover:text-white/[0.07]">{step.n}</div>
                <div className={`font-display text-sm font-bold ${step.color}`}>Step {step.n}</div>
                <h3 className="mt-3 font-display text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-magenta" /> Client voices
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
                Results that <span className="text-stroke">speak.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              We measure success by the outcomes our partners ship — not by slides or promises.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col rounded-3xl border border-white/10 bg-ink-2 p-7"
              >
                <blockquote className="flex-1 text-base leading-relaxed text-white/85">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/5 font-display text-sm font-bold">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-white/50">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
