# Vision Infinity Ventures PWA

A legendary, modern, future-ready PWA for Vision Infinity Ventures, built with Next.js, Tailwind CSS, and full PWA support.

## Features
- Legendary branding and design
- Home page with hero, process, timeline, studios, and CTA
- Application form (Bangalore-only)
- PWA: manifest, offline, installable
- Responsive, animated, and accessible

## Getting Started

1. **Clone the repo and install dependencies:**
   ```bash
   npx create-next-app@latest visioninfinityventures --typescript
   cd visioninfinityventures
   npm install tailwindcss postcss autoprefixer next-pwa
   npx tailwindcss init -p
   ```
2. **Configure Tailwind:**
   - In `tailwind.config.js`, set content to:
     ```js
     content: [
       "./pages/**/*.{js,ts,jsx,tsx}",
       "./components/**/*.{js,ts,jsx,tsx}",
     ],
     ```
   - In `./styles/globals.css`, add:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```
3. **Add PWA support:**
   - See `next.config.js` and `public/manifest.json` in this repo.

4. **Add the provided files:**
   - `pages/index.tsx`, `pages/apply.tsx`
   - `components/Process.tsx`, `Timeline.tsx`, `Studios.tsx`, `Hero.tsx`, etc.
   - `public/manifest.json`, `public/icons/`
   - `next.config.js` (with next-pwa)

5. **Run the app:**
   ```bash
   npm run dev
   ```

## Branding
- Update `public/icons/` with your logo and theme colors.
- Edit Tailwind config for custom colors if needed.

---

Built for legendary founders in Bangalore 🚀 