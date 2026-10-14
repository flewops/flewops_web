import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Clock, User, Calendar } from "lucide-react";
import SEO from "../components/SEO";
import { blogPosts } from "../lib/blogPosts";
import { blogPostSchema, breadcrumbSchema, speakableSchema } from "../lib/structuredData";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  // post.date is a plain YYYY-MM-DD string, which Date parses as UTC midnight
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, ${post.title.toLowerCase()}, FlewOps Global blog, enterprise technology insights`}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        jsonLd={[
          blogPostSchema(post.title, post.excerpt, post.slug, post.author, post.date, post.image),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          speakableSchema(`/blog/${post.slug}`),
        ]}
      />

      {/* HEADER */}
      <section className="relative overflow-hidden pt-36 pb-8 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-lime/15 blur-3xl animate-blob" />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-lime/15 px-3 py-1 text-xs font-semibold text-lime">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/50">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4 text-lime" /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-cyan" /> {formattedDate}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-magenta" /> {post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <img src={post.image} alt={post.title} className="aspect-[16/9] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {post.content.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((para, j) => (
                <p key={j} className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                  {para}
                </p>
              ))}
            </motion.div>
          ))}

          {/* CTA */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-lime/10 to-transparent p-8 text-center">
            <h3 className="font-display text-2xl font-bold">
              Want to build something like this?
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Our team can help you implement these strategies for your business.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-lime px-5 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* RELATED POSTS */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Keep reading
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-2 transition-all hover:border-white/25"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-lg bg-ink/80 px-2.5 py-1 text-xs font-semibold text-lime backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold leading-tight transition-colors group-hover:text-lime">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                      {p.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-lime">
                      Read more <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
