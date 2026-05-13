# AI Coding Agent Instructions

Concise, project-specific guidance so an AI can make safe, useful changes fast.

## 1. Overview / Architecture
- Vite + React + TypeScript + Tailwind CSS (with Flowbite React plugin). Entry: `src/main.tsx` -> `App.tsx`.
- Content is mostly statically data‑driven from JSON in `src/data/` (`projects.json`, `experience.json`). Components render lists (Projects, Resume timeline) from this data.
- Layout: Two-column responsive grid (`App.tsx`): left sticky intro (`WelcomePane`), right scrollable sections (`WhoAmI`, `Projects`, `Resume`, `Footer`). Spacing uses empty div spacers (`<div className="m-20" />`). Preserve section ordering & IDs (`projects`, `resume`) because in-page links or future nav may rely on them.
- Deployment target is GitHub Pages under a subpath; Vite `base: "/react-site/"` must remain aligned with the published path.

## 2. Build & Run Workflows
- Local dev: `npm run dev` (fast refresh). Optional strict check: `npm run typecheck`.
- Production build: `npm run build` emits static site into `docs/` (GitHub Pages serves from this folder).
- Deployment: Official Pages workflow (`.github/workflows/deploy.yml`) runs on pushes to `master`: build -> `actions/upload-pages-artifact` (docs) -> `actions/deploy-pages`.
- Manual fallback (rarely needed): `npm run deploy` uses `gh-pages -d docs` to push the `docs` folder directly if Actions are disabled.
- Formatting & lint: `npm run format`, `format:check`, `lint`, `lint:fix`. Tailwind plugin enforces class conventions—retain existing `/* eslint-disable ... */` pragmas around intentional patterns.

## 3. Data & Component Patterns
- Data shape:
  - `projects.json`: `{ "projects": [{ name, description, siteReference, github, chiclets[], id }] }`. IDs are unique; preserve uniqueness when adding entries.
  - `experience.json`: `{ "experience": [{ company, position, startDate, endDate, responsibilities[] }] }`. `endDate` can be far future (year > 3000) to mean "Present". Timeline logic clamps to current date.
- `Projects.tsx`: Splits multiline descriptions by `\n` to insert `<br />`. When editing descriptions, retain intentional manual line breaks.
- `Resume.tsx`: Generates a month array between earliest start and latest end; highlight logic depends on hovered index. If refactoring, preserve `getMonthArray` / `getMonthIndex` semantics (clamp behavior + present day cap). A future-dated end year (>3000) is treated as open-ended. Keep performance simple (array sizes are small).
- Icons via `react-icons/io5`. Social links & email in `WelcomePane`.
-- Single theme only. Tailwind config lists `darkMode: "selector"` but no toggle is exposed; do not introduce light/dark switching unless requirements change.

## 4. Styling Conventions
- Heavy use of Tailwind utility classes; minimal custom CSS (`src/index.css` only imports Tailwind layers). Maintain utility-first approach.
- Animated hover expansions rely on `transition-all` + changed width/padding (e.g., project / resume cards). Preserve class combinations to keep smooth transitions.
- Use semantic heading levels already present (`h1` section titles, `h5` card titles).

## 5. Gotchas / Risks
- Changing build output directory: must update `package.json` build script, workflow publish_dir, and (if used) deploy script in lockstep.
- Branch trigger: Workflow uses `master`; altering branch requires editing `deploy.yml`.
- Resume: Future-dated end years (>3000) render as Present; keep behavior unless spec changes.
- Vite `base` must stay `/react-site/` while hosted under that subpath.
- Spacer divs (`<div className="m-20" />`) are layout assumptions—centralize only if updating all instances.

## 6. Safe Change Guidelines
- Before adding new sections, consider extracting spacer divs into a reusable component for consistency; if you do this, update all occurrences in `App.tsx` in one PR.
- When adding a project or experience item, validate date strings parse via `new Date(...)` (ISO-like format `YYYY-MM-DD`).
- Keep JSON small & human-readable; no trailing commas (to preserve standard JSON import support with `resolveJsonModule`).
- Prefer functional, stateless components unless local UI state is required; follow existing file-per-component under `src/` with PascalCase filenames.

## 7. Suggested Incremental Improvements (announce in PRs)
- Extract repeated spacer into a `SectionSpacer` component.
- Consider removing unused dark mode selector config if truly single theme.
- Optionally add lightweight tests (render smoke) if complexity grows.

## 8. When Unsure
- Ask if altering deployment, data schema, or visual timeline interactions.
- Otherwise proceed with small, atomic PRs referencing affected files (e.g., "Add project card: updates `src/data/projects.json`, no logic changes").

End of instructions. Adjust only with concrete repository evidence.
