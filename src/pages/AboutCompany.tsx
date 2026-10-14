import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Cloud, Code2, Users, FlaskConical, ShieldCheck } from "lucide-react";
import SEO from "../components/SEO";
import { webPageSchema, breadcrumbSchema, aboutPageSchema, speakableSchema } from "../lib/structuredData";
import { stats } from "../lib/data";

const commitments = [
  {
    icon: Code2,
    title: "Development Excellence",
    desc: "Our expert engineering teams use agile frameworks and CI/CD pipelines to ensure smooth, on-time delivery of complex enterprise solutions. With an integrated DevOps setup, we maintain consistent code quality, enhanced performance, and round-the-clock reliability.",
    image: "/images/dev.jpg",
    accent: "text-lime",
  },
  {
    icon: Users,
    title: "Our Team & Culture",
    desc: "Our diverse and skilled workforce drives every innovation at FlewOps Global. We foster a culture of collaboration, creativity, and continuous learning — enabling our people to build solutions that make a real impact. We believe that great technology begins with great teams.",
    image: "/images/team.jpg",
    accent: "text-cyan",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Our hybrid cloud infrastructure combines the reliability of our own secure servers with the scalability of platforms like AWS, Azure, and Google Cloud. This ensures unmatched performance, data security, and 99.9% uptime — empowering businesses to deploy, scale, and innovate without limits.",
    image: "/images/cloud.jpg",
    accent: "text-magenta",
  },
  {
    icon: FlaskConical,
    title: "Research and Development",
    desc: "Innovation is at the core of FlewOps Global. Our dedicated R&D team explores emerging technologies to craft future-ready enterprise solutions. By blending research with practical execution, we help businesses stay ahead of the curve.",
    image: "/images/rd.jpg",
    accent: "text-violet",
  },
];

export default function AboutCompany() {
  return (
    <>
      <SEO
        title="About FlewOps Global — Enterprise Digital Transformation Company"
        description="Founded in 2025, FlewOps Global is a leading technology company building enterprise-grade digital solutions. Expertise in ERP systems, data security, e-commerce, and network solutions to help organizations scale efficiently."
        keywords="about FlewOps Global, technology company, enterprise digital solutions, digital transformation company, ERP systems, data security, cloud infrastructure, software development company"
        path="/about/company"
        jsonLd={[
          webPageSchema(
            "About FlewOps Global",
            "Founded in 2025, FlewOps Global is a leading technology company building enterprise-grade digital solutions with expertise in ERP systems, data security, e-commerce, and network solutions.",
            "/about/company"
          ),
          aboutPageSchema(
            "FlewOps Global is a forward-thinking technology company founded in 2025 that delivers innovative, secure, and scalable digital solutions for modern enterprises. With expertise in ERP systems, Information Data Security, e-commerce, and network solutions, we help organizations transform their operations and accelerate innovation."
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about/company" },
            { name: "Our Company", path: "/about/company" },
          ]),
          speakableSchema("/about/company"),
        ]}
      />

      {/* HEADER */}
      <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-lime/30 blur-3xl animate-blob" />
          <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-cyan/15 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" /> About Us
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
              About{" "}
              <span className="bg-gradient-to-r from-lime via-cyan to-violet bg-clip-text text-transparent">
                FlewOps Global
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* COMPANY DESCRIPTION */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-ink-2 p-8 sm:p-12"
          >
            <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
              Founded in <strong className="text-lime">2025</strong>,{" "}
              <strong className="text-white">FlewOps Global</strong> is a leading
              technology company focused on building{" "}
              <strong className="text-white">enterprise-grade digital solutions</strong>{" "}
              that empower businesses to scale efficiently. With expertise in{" "}
              <strong className="text-white">ERP systems, Information Data Security,
              and network solutions</strong>, we help organizations transform
              their operations and accelerate innovation.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Our mission is to simplify complex business processes through{" "}
              <strong className="text-lime">intelligent, data-driven platforms</strong>{" "}
              — ensuring agility, performance, and security at every level. From
              startups to global enterprises, we deliver{" "}
              <strong className="text-white">customized, future-ready</strong>{" "}
              solutions designed for growth and digital excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                <div className={`font-display text-3xl font-bold sm:text-4xl ${s.color}`}>{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              <ShieldCheck className="h-3.5 w-3.5 text-lime" /> Our Commitment
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Robust infrastructure meets advanced technology.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              At FlewOps Global, we combine robust infrastructure with advanced
              technologies to deliver reliability, scalability, and performance.
              Our global delivery centers are equipped with modern development
              environments, automated testing frameworks, and state-of-the-art
              data systems that ensure seamless project delivery.
            </p>
          </div>

          <div className="space-y-6">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              const reversed = i % 2 === 1;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`grid items-center gap-6 rounded-3xl border border-white/10 bg-ink-2 p-6 sm:gap-8 sm:p-8 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img src={c.image} alt={`${c.title} at FlewOps Global`} className="aspect-[16/10] w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent" />
                  </div>
                  <div>
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 ${c.accent}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{c.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-white/65">{c.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-lime/20 blur-3xl" />
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your operations?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
              Let's build something secure, scalable, and future-ready — together.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-xl bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
