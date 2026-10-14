import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";
import { serviceSchema, breadcrumbSchema, speakableSchema } from "../lib/structuredData";
import { services } from "../lib/data";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;
  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <SEO
        title={`${service.name} — ${service.tagline} | FlewOps Global`}
        description={service.description}
        keywords={`${service.name.toLowerCase()}, ${service.features.join(", ").toLowerCase()}, enterprise solutions, FlewOps Global, digital transformation`}
        path={`/services/${service.slug}`}
        image={service.image || "/logo.png"}
        jsonLd={[
          ...(serviceSchema(service.slug) ? [serviceSchema(service.slug)] : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: `/services/${service.slug}` },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          speakableSchema(`/services/${service.slug}`),
        ]}
      />

      {/* HEADER */}
      <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className={`absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-gradient-to-br ${service.bg} blur-3xl animate-blob`} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between"
          >
            <div>
              <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 ${service.accent}`}>
                <Icon className="h-7 w-7" />
              </span>
              <p className={`mt-4 text-xs font-semibold uppercase tracking-widest ${service.accent}`}>{service.tagline}</p>
              <h1 className="mt-1.5 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
                {service.name}
              </h1>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-xl bg-lime px-5 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Get started <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            {service.description}
          </p>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-3">
            {service.impact.map((im) => (
              <div key={im.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                <div className={`font-display text-3xl font-bold ${service.accent}`}>{im.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">{im.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">Key features</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-2 p-4"
              >
                <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 ${service.accent}`}>
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-white/85">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">How we deliver</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-3xl border border-white/10 bg-ink-2 p-6"
              >
                <div className={`font-display text-sm font-bold ${service.accent}`}>0{i + 1}</div>
                <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">Explore more services</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((s) => {
              const RIcon = s.icon;
              return (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="group rounded-3xl border border-white/10 bg-ink-2 p-6 transition-all hover:border-white/25"
                >
                  <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 ${s.accent}`}>
                    <RIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold">{s.name}</h3>
                  <p className="mt-2 text-sm text-white/60">{s.shortDesc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white/70 group-hover:text-white">
                    Learn More <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
