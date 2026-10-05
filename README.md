# Ahmed Riadh Fellah — Portfolio

Personal portfolio built with React 19, Vite 7 and Tailwind CSS 4. The production build compiles to a single self-contained `index.html`.

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Content

All portfolio content is in `src/riad/data.ts`. The page layout is in `src/riad/App.tsx`.

## Deployment

Pushing to `main` builds and publishes the site to GitHub Pages through `.github/workflows/deploy.yml`. In the repository settings, set Pages source to GitHub Actions.
