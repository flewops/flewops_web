import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Clock, Search } from "lucide-react";
import SEO from "../components/SEO";
import { blogPosts, faqs } from "../lib/data";
import { blogSchema, faqSchema, breadcrumbSchema, speakableSchema } from "../lib/structuredData";

const categories = ["All", "Data Security", "ERP Systems", "AI Automation", "E-Commerce", "Real-Time Chat", "Cloud Infrastructure", "Others"];

export default function Blog() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filtered = blogPosts.filter((p) => {
    const matchCat = activeCat === "All" || p.category === activeCat;
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <SEO
        title="Blog — Insights on Digital Transformation & Enterprise Technology"
        description="Explore the FlewOps Global blog for expert insights on data security, ERP systems, AI automation, e-commerce, real-time chat, and cloud infrastructure. Practical guides for modern enterprises."
        keywords="technology blog, enterprise digital solutions blog, data security articles, ERP guides, AI automation insights, e-commerce tips, cloud infrastructure articles, digital transformation blog"
        path="/blog"
        jsonLd={[
          blogSchema(),
          faqSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          speakableSchema("/blog"),
        ]}
      />

      {/* HEADER */}
      <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-lime/20 blur-3xl animate-blob" />
          <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-violet/15 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" /> FlewOps Blog
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
              Insights on{" "}
              <span className="bg-gradient-to-r from-lime via-magenta to-violet bg-clip-text text-transparent">
                technology & Digital 
              </span>{" "}
              transformation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              Expert perspectives on data security, ERP, AI automation,
              e-commerce, and building scalable enterprise systems.
            </p>
          </motion.div>

          {/* Search + Category filter */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-xl border border-white/10 bg-ink-2 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-lime/60"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeCat === cat
                      ? "bg-lime text-ink"
                      : "border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      {filtered.length > 0 && activeCat === "All" && search === "" && (
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Link
              to={`/blog/${filtered[0].slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-ink-2"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <img src={filtered[0].image} alt={filtered[0].title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-lime/15 px-3 py-1 text-xs font-semibold text-lime">
                    Featured · {filtered[0].category}
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                    {filtered[0].title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-white/60">
                    {filtered[0].excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-white/40">
                    <span>{filtered[0].author}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {filtered[0].readTime}</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-lime">
                    Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* BLOG GRID */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-ink-2 p-12 text-center">
              <p className="text-lg text-white/50">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.slice(activeCat === "All" && search === "" ? 1 : 0).map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-2 transition-all hover:border-white/25"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-2/60 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-lg bg-ink/80 px-2.5 py-1 text-xs font-semibold text-lime backdrop-blur">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-bold leading-tight tracking-tight transition-colors group-hover:text-lime">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/40">
                        <span>{post.author}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-magenta" /> FAQ
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Frequently asked{" "}
              <span className="text-stroke">questions.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
              Everything you need to know about FlewOps Global, our services,
              and how we work. Can't find an answer?{" "}
              <Link to="/contact" className="font-semibold text-lime hover:underline">
                Get in touch.
              </Link>
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/10 bg-ink-2"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/5"
                >
                  <span className="font-display text-base font-semibold sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-lime transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-white/65">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
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
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
