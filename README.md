# Field Notes

A one-page personal blog built with React Router, Tailwind CSS, and DaisyUI
(custom "fieldnotes" theme). Routes: Home, Blog, Post detail, About.

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL. Edit posts in `src/data/posts.js`, edit the
bio in `src/pages/About.jsx`.

## Deploy to GitHub Pages

See the step-by-step instructions in the chat, or the short version below.

1. Create a new GitHub repo and push this project to it.
2. In `vite.config.js`, set `base: '/YOUR-REPO-NAME/'`.
3. In the repo on GitHub: **Settings → Pages → Source → GitHub Actions**.
4. Push to `main` — the included workflow (`.github/workflows/deploy.yml`)
   builds and deploys automatically. Your site appears at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
