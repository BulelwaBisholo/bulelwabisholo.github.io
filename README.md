# Bulelwa Bisholo — Data Analyst Portfolio

A modern, responsive portfolio site built with plain HTML, CSS and JavaScript
(no build tools, no frameworks — open `index.html` and it just works).

## 📁 File structure

```
portfolio/
├── index.html                     ← Home / About / Skills / Projects / Contact
├── projects/
│   ├── home-credit-risk.html      ← Case Study 01
│   ├── customer-churn.html        ← Case Study 02
│   ├── global-layoffs.html        ← Case Study 03
│   └── mexico-toy-sales.html      ← Case Study 04
├── css/
│   ├── style.css                  ← shared design system (used on every page)
│   └── project.css                ← case-study page specific styles
├── js/
│   └── main.js                    ← nav, dark mode, animations, back-to-top, TOC
├── assets/
│   ├── Bulelwa-Bisholo-CV.pdf     ← ADD YOUR CV HERE (see note in /assets)
│   └── images/
│       └── profile.jpg            ← ADD YOUR PHOTO HERE (see note in /assets/images)
└── README.md
```

## ✍️ What you still need to do

This is the **complete structure and design** — nothing invented about your
actual project work. Everywhere you see italic grey text with a blue left
border, that's a placeholder marked with the `.placeholder` CSS class:

```html
<p class="placeholder">
  Add 2–3 sentences describing the real business challenge...
</p>
```

Go through each of the 4 case study pages and replace:

1. **Business Problem, Stakeholder Request, Objectives** — your own framing
2. **Dataset** — actual source, row/column counts, description
3. **Tools Used** — confirm which tools you actually used per project
4. **Data Cleaning / Analysis Process** — your real steps (each step in
   `.process-step` blocks — add, remove, or reorder steps as needed)
5. **Dashboard** — replace the `.dashboard-placeholder` block with a real
   screenshot: `<img src="../assets/images/your-dashboard.png" alt="...">`
6. **Key Insights, Business Impact, Recommendations** — your real findings
7. **GitHub Repository** — update the `href="#"` links to your real repo URLs

Also update:
- Homepage intro text, About Me story, and CV/GitHub/LinkedIn/email links
  (search for `yourusername` and `your.email@example.com`)
- `assets/Bulelwa-Bisholo-CV.pdf` and `assets/images/profile.jpg`

Once real content is added, you can remove the `.placeholder` class from
that element (it's purely a visual "still needs editing" cue).

## ➕ Adding a 5th (or 6th, 7th...) case study

1. Duplicate `projects/home-credit-risk.html` and rename it, e.g.
   `projects/new-project-slug.html`.
2. Update: `<title>`, meta description, breadcrumb, eyebrow case number,
   `<h1>`, subtitle, tool chips, the big case number, and every section's
   content.
3. Update the **prev/next pagination links** at the bottom of the two
   adjacent case study pages so they link to your new page.
4. Add a new `.project-card` block to the Projects section of `index.html`,
   and a new link in the footer's "Case Studies" column on every page.

## 🎨 Design system

All colours, fonts, spacing and shadows are defined once as CSS custom
properties at the top of `css/style.css` (`:root` for light mode,
`html[data-theme="dark"]` for dark mode) — change a value there and it
updates everywhere.

- **Display font:** Fraunces (headings)
- **Body font:** Inter
- **Mono/data font:** IBM Plex Mono (used for labels, numbers, code-like UI)
- **Primary accent:** analytical blue `#2F5DFF`
- **Secondary accent:** teal `#0E9F8E`
- **Tertiary accent:** amber `#D98A2B` (used sparingly, e.g. Business Impact)

## 🚀 Deploying

This is a static site — you can host it for free on:
- **GitHub Pages**: push this folder to a repo, enable Pages in Settings
- **Netlify / Vercel**: drag-and-drop the folder or connect the repo

No build step is required.

## ♿ Accessibility & performance notes

- All interactive elements are keyboard-focusable with a visible focus ring
- Animations respect `prefers-reduced-motion`
- Images use `alt` text — update it if you swap in your own dashboard
  screenshots
- Layout is fully responsive from ~360px mobile widths up to large desktop
