# Forestry Research Portfolio

A personal academic website for an early-career forestry researcher, built with **Next.js 16, React 19, TypeScript, Tailwind CSS v4 and Lucide icons**.

- 8 pages: Home, About, Research, Projects, Publications, Skills (incl. Learning & Development), Experience, CV & Contact
- All content lives in typed files in `src/content/`, so no component code needs editing to update the site
- Missing information is shown as clearly marked **✎ placeholders**, never invented
- Static, fast, accessible (skip link, keyboard navigation, focus styles, reduced-motion support, semantic HTML)
- SEO: per-page metadata, Open Graph, JSON-LD `Person` schema, `sitemap.xml`, `robots.txt`
- Deploys to **Vercel** (zero config) or **GitHub Pages** (workflow included)

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

---

## Updating your content

| What | File |
|---|---|
| Name, role, intro, photo, CV path, email & profile links | `src/content/profile.ts` |
| Degrees, academic journey text, courses/workshops | `src/content/education.ts` |
| Work, research and field experience | `src/content/experience.ts` |
| Research areas + future research directions | `src/content/research.ts` |
| Research projects | `src/content/projects.ts` |
| Publications | `src/content/publications.ts` |
| Skills, skill levels, ongoing learning | `src/content/skills.ts` |
| Navigation menu | `src/content/navigation.ts` |

**Placeholder convention**

- A value of `null` renders as a visible ✎ placeholder (e.g. *✎ Dates*). Replace it with real text.
- `draft: true` (projects, future directions) shows *"Draft — please confirm"*. Review the wording, then set `draft: false`.

### Your photo
1. Save a portrait (ideally 800×1000 px or larger, 4:5 ratio) as `public/images/portrait.jpg`.
2. In `profile.ts` set `portrait: "/images/portrait.jpg"`.

### Your CV
Replace `public/cv/academic-cv.pdf` with your CV (keep the file name) and set `cvLastUpdated` in `profile.ts`.

### Forest photography (optional)
The site ships with original, lightweight SVG illustrations (crown maps, tree rings, plantation grids, growth curves, raster grids). To use photographs instead:
- Research area: set `image` and `imageAlt` on an item in `research.ts`.
- Home page wide band: set `siteImages.homeBand` in `profile.ts`.

Use your own field photographs where possible: they add authenticity. Otherwise use properly licensed images (e.g. Unsplash). Compress images to under ~300 KB.

### Adding a publication
Add an object to the `publications` array in `publications.ts` (see the commented example). Entries are grouped and sorted by year automatically, and DOI links are generated.

---

## Contact form

The form works without a server:
- **Default**: opens the visitor's email app with a pre-filled message to `profile.links.email`.
- **Recommended**: create a free [Formspree](https://formspree.io) form and set
  `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx` (in Vercel → Project → Settings → Environment Variables, or `.env.local`).

---

## Deployment

### Vercel (recommended)
1. Push this folder to a GitHub repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new). No configuration is needed.
3. Add the environment variable `NEXT_PUBLIC_SITE_URL` (your final URL, used for SEO) and optionally the form endpoint.

### GitHub Pages
1. Push to a repository's `main` branch.
2. In GitHub → **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The workflow `.github/workflows/deploy-pages.yml` builds a static export with the correct base path.
   For a user site (`username.github.io`) or a custom domain, set `BASE_PATH` to an empty string in the workflow.

---

## Project structure

```
src/
  app/            Pages (App Router), layout, global styles, sitemap, robots
  components/     Reusable UI: Header, Footer, Timeline, ProjectCard, ContactForm, Artwork…
  content/        ✏️ All editable content and types
  lib/            Small utilities
public/
  cv/             CV PDF
  images/         Your photographs
```
