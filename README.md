# Jared Wong — Personal Website

A single-page portfolio built as a Vite + React SPA.

## Stack

- **Vite** — dev server and build
- **React 19** + **TypeScript** (strict, `@/*` path alias)
- **Tailwind CSS v4** — CSS-first config in `src/styles/globals.css` (`@theme` tokens, class-based dark mode)
- **Biome** — linting and formatting
- Self-hosted variable fonts via Fontsource (Space Grotesk, Inter, JetBrains Mono)

## Scripts

```bash
npm run dev        # start the dev server
npm run build      # typecheck + production build to dist/
npm run preview    # preview the production build
npm run typecheck  # tsc --noEmit
npm run lint       # biome check
npm run format     # biome format --write
```

## Structure

```
src/
  main.tsx              # entry
  App.tsx               # composition
  styles/globals.css    # Tailwind import + design tokens + base styles
  lib/                  # cn, types, siteConfig
  hooks/                # useTheme, useActiveSection, useSingaporeTime
  components/
    icons/              # brand tech logos (DevIcons) + monoline UI icons
    ui/                 # Container, Reveal, SectionHeading, ThemeToggle, SocialLinks, TechRail
    layout/             # Navbar, Footer
  sections/             # Hero, About, Skills, Experience, Projects, Contact
  data/                 # content (experience, projects, skills) + assets
```

Content lives in `src/data/*`. To update experience, projects, or skills, edit those files.
