# FlewOps Global website

Marketing site for [flewops.com](https://flewops.com), built with React 19, Vite, Tailwind CSS v4, React Router and Framer Motion.

## Scripts

```sh
npm install
npm run dev      # local dev server
npm run lint     # ESLint
npm run build    # type-check and build to dist/
npm run preview  # serve the production build locally
```

## Where things live

| Path | Contents |
| --- | --- |
| `src/lib/data.ts` | Services, stats, testimonials, team, perks, contact details, FAQs |
| `src/lib/blogPosts.ts` | Blog articles |
| `src/lib/structuredData.ts` | JSON-LD schema builders |
| `src/components/SEO.tsx` | Per-page title, meta, canonical and JSON-LD |
| `public/` | Static files copied as-is into `dist/` (images, `sitemap.xml`, `robots.txt`, `llms.txt`) |

When you add or rename a blog post or service, also update `public/sitemap.xml`.

## Deployment

The site is hosted on Netlify. Security headers and the SPA fallback are defined in
`public/_headers` and `public/_redirects`, so they are included in `dist/` and apply
whether you deploy from Git or upload the `dist/` folder directly.
