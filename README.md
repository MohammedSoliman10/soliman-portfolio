# Mohammed Soliman | Web3 Portfolio

Next.js 16 + React 19 + Tailwind CSS 4 portfolio with an Ethereum-illustration theme,
smooth scrolling, scroll reveals, a parallax hero and a scroll progress bar.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

## Edit your content

Everything (name, bio, links, projects, stack) lives in `lib/data.ts`.
Colors are in the `@theme` block of `app/globals.css`.

## Put it on GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/MohammedSoliman10/portfolio.git
git push -u origin main
```

## Deploy on Vercel

1. Go to https://vercel.com/new and import the GitHub repo.
2. Keep the defaults (Framework: Next.js) and press Deploy.

## Scripts

- `npm run dev` start the dev server
- `npm run build` production build
- `npm run lint` lint the code
