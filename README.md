# Vishal Pandey — Portfolio

A modern, minimal, production-ready developer portfolio built with React.

---

## Tech Stack

- **React 18** — UI framework
- **CSS custom properties** — design system (no external UI library)
- **Google Fonts** — Syne (display) + DM Sans (body) + DM Mono (code)
- **Canvas API** — animated particle background in hero
- **Vercel** — deployment target

---

## Project Structure

```
vishal-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/         Header.js + Header.css
│   │   ├── Hero/           Hero.js + Hero.css
│   │   ├── Skills/         Skills.js + Skills.css
│   │   ├── Experience/     Experience.js + Experience.css
│   │   ├── Projects/       Projects.js + Projects.css
│   │   ├── Education/      Education.js + Education.css
│   │   ├── Contact/        Contact.js + Contact.css
│   │   └── Footer/         Footer.js + Footer.css
│   ├── styles/
│   │   └── global.css      Design system, tokens, utilities
│   ├── portfolio.js        ← ALL YOUR DATA LIVES HERE
│   ├── App.js
│   └── index.js
├── vercel.json
├── package.json
└── .gitignore
```

---

## Running Locally

### Prerequisites
- Node.js ≥ 16
- npm ≥ 8

### Steps

```bash
# 1. Navigate into the project
cd vishal-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000**

---

## Updating Your Info

All personal data lives in one file:

```
src/portfolio.js
```

Edit sections there — the UI auto-updates:

| Export | Controls |
|---|---|
| `greeting` | Hero name, title, resume link |
| `socialMediaLinks` | GitHub, LinkedIn, Gmail |
| `skillsSection` | Skills text + tech icons |
| `workExperiences` | Timeline tabs |
| `bigProjects` | Project cards |
| `educationInfo` | Education card |
| `contactInfo` | Contact section |
| `isHireable` | "Available" badge visibility |

---

## Building for Production

```bash
npm run build
```

Output goes to `/build` — ready to deploy anywhere.

---

## Deploy on Vercel

### Option 1: Vercel CLI (fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# From project root
vercel

# Follow prompts:
# - Set up and deploy? → Y
# - Which scope? → your account
# - Link to existing project? → N
# - Project name? → vishal-portfolio (or any name)
# - Directory? → ./  (current)
# - Want to override settings? → N

# For production deployment:
vercel --prod
```

### Option 2: GitHub + Vercel Dashboard (recommended)

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/vishal-portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project**

3. Import your GitHub repository

4. Vercel auto-detects Create React App — no config needed

5. Click **Deploy**

6. Your site is live at `https://vishal-portfolio.vercel.app` (or your custom domain)

### Custom Domain (optional)

In Vercel Dashboard → your project → **Settings → Domains** → add your domain.

---

## Design System

All design tokens are CSS variables in `src/styles/global.css`:

```css
--bg          #0a0a0f   /* page background */
--bg-2        #111118   /* section alternate background */
--bg-card     #14141d   /* card background */
--accent      #6ee7b7   /* primary accent (green) */
--accent-2    #38bdf8   /* secondary accent (blue) */
--font-display Syne     /* headings */
--font-body   DM Sans   /* body text */
--font-mono   DM Mono   /* code, labels, tags */
```

To change the color scheme, update `--accent` and `--accent-2` in `global.css`.

---

## Performance Notes

- No external icon libraries (all SVGs inline)
- No animation libraries (CSS animations only)
- No unnecessary dependencies
- Google Fonts loaded via `@import` in CSS
- Build output is ~200KB gzipped

---

## License

MIT — use freely for your own portfolio.
