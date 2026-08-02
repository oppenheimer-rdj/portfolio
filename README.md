# Selva Surya E — Portfolio Site

A single-page portfolio: `index.html` + an `imgs/` folder. No build step, no dependencies — just static files.

## 1. Make the contact form actually send mail (2 minutes)

A static site has no server, so it can't send email on its own. The form is wired to use **Formspree** (free, no card needed):

1. Go to https://formspree.io and sign up
2. Create a new form — it'll give you a URL like `https://formspree.io/f/abcd1234`
3. Open `index.html`, search for `FORMSPREE_ENDPOINT`, and paste your URL in:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/abcd1234';
   ```
4. Save. Messages submitted through the "Get in touch" / "Hire me" modal will now land directly in your inbox.

Until you do this, the form automatically falls back to opening the visitor's email app with the message pre-filled to `selvasurya.data@gmail.com` — so it still works, it just requires them to hit send in their own mail app.

## 2. Point project cards at your real repos

Search `index.html` for `github.com/selvasurya031` inside the two `.proj-card` blocks and the hero "View Projects" button, and change them to your specific repo URLs, e.g.:
```
https://github.com/selvasurya031/ai-trip-planner
https://github.com/selvasurya031/enterprise-analytics-dashboard
```

## 3. Deploy it (pick one, both are free)

**Netlify (easiest, ~1 minute)**
1. Go to https://app.netlify.com/drop
2. Drag the whole `portfolio` folder (containing `index.html` and `imgs/`) into the browser
3. You get a live URL immediately — you can rename it in Site settings → Domain management

**GitHub Pages**
1. Push this folder's contents to a new GitHub repo (e.g. `selvasurya031/portfolio`)
2. Repo → Settings → Pages → Source: `main` branch, `/ (root)`
3. Your site goes live at `https://selvasurya031.github.io/portfolio`

## 4. A note about the in-chat preview

Some things (opening your email app, opening new tabs to GitHub/LinkedIn, browser history updates) are intentionally blocked by the browser when previewed *inside Claude's sandboxed preview frame* — that's a security restriction of the preview, not a bug in the file. Once you deploy it with step 3 above and open it as a real webpage, every link and the contact form work normally.

## File structure
```
portfolio/
├── index.html
├── README.md
└── imgs/
    ├── IMG_5707.jpg
    ├── IMG_5902.jpg
    └── IMG_6217.jpg
```
