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
`public/cv/academic-cv.pdf` is the public CV (date of birth, phone number, home address and referee contact
details removed). To update it, replace the file (keep the name) and set `cvLastUpdated` in `profile.ts`.
Visitors can also request the full CV with referee details through the form on the Contact page.

### Forest photography (optional)
The site ships with original, lightweight SVG illustrations (crown maps, tree rings, plantation grids, growth curves, raster grids). To use photographs instead:
- Research area: set `image` and `imageAlt` on an item in `research.ts`.
- Home page wide band: set `siteImages.homeBand` in `profile.ts`.

Use your own field photographs where possible: they add authenticity. Otherwise use properly licensed images (e.g. Unsplash). Compress images to under ~300 KB.

### Adding a publication
Add an object to the `publications` array in `publications.ts`. Entries are grouped and sorted by year
automatically, titles and DOIs become links, and your name is highlighted in the author list.
`publicationCount` controls how many placeholder slots are shown for articles not yet listed.

### Project figures and code
For the MSc project in `projects.ts`, add figure images to `public/images` and set each `figures[].image`;
set `repository.url` when the analysis code is public.

---

## Themes

Five themes are built in. Choose one by changing `chosenTheme` in `src/content/theme.ts`:

| Theme | Look | Home-page layout |
|---|---|---|
| `forest` | Sage Forest: off-white, sage and dark green, serif headings | Split, with a key-facts panel |
| `boreal` | Boreal Night: dark spruce background, pale lichen accents | Split |
| `birch` | Nordic Birch: crisp white, sans-serif headings, square corners | Minimal: oversized name, ruled facts list |
| `journal` | Field Journal: warm paper, moss and bark tones, Fraunces serif | Centred editorial, with a tree-ring facts band |
| `canopy` | Tropical Canopy: deep teal accents, rounded corners | Full-width coloured banner |

To preview a theme on Vercel without changing code, set the environment variable `NEXT_PUBLIC_THEME` (e.g. `journal`) and redeploy.

## Contact form and CV requests

Both the **contact form** and the **CV request form** (Contact page → Academic CV) email submissions
directly to you. The visitor's address is set as reply-to, so you can simply press **Reply**.

**Recommended: Web3Forms**
1. Go to https://web3forms.com, enter your email address and click **Create Access Key**.
2. The key arrives by email instantly (no activation link).
3. Paste it into `formDelivery.web3formsKey` in `src/content/profile.ts`
   (or set `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel and redeploy). The key is designed to be public.

**Fallback: FormSubmit.** If no key is set, the forms use FormSubmit with your profile email. This needs a
one-time activation link clicked from your inbox.

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
