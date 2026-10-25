# 🎭 Persona-Style Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-varaddorle.vercel.app-00D2FF?style=for-the-badge&logo=vercel&logoColor=white)](https://varaddorle.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-HTML5%20%2F%20CSS3%20%2F%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A high-octane personal developer portfolio inspired by the iconic UI/UX of **Persona 3 Reload** and **Persona 5**. Engineered with pure vanilla web technologies (zero bloated frameworks) structured cleanly in a strict **Model–View–Controller (MVC)** architecture.

👉 **Live Site:** [https://varaddorle.vercel.app](https://varaddorle.vercel.app)

---

## ✨ Features

- 🎮 **Persona 3 Reload Visual Identity**: Halftone textures, angled HUD labels, dynamic vignette layers, and high-contrast comic-strip screen transitions.
- 🔤 **Authentic Ransom Lettering**: Custom algorithmic ransom text generator with randomized font families, rotation angles, backgrounds, and tape accents.
- 🖱️ **30-Frame Sprite Cursor**: Custom animated sprite cursor with Persona-themed trailing marks and responsive sound effects.
- 🎵 **Audio Player & Persona OST**: Background music integration featuring *"Color Your Night"* (Persona 3 Reload OST) with interactive volume slider, mute toggle, and restart controls.
- 🕹️ **Play Games Hub**: Dedicated interactive games arcade showcasing web games like *Fly Grand Prix* and *Fly Strike*.
- ⚡ **Live Platforms Dock**: Quick-launch dock on the home screen linking directly to production platforms (CortexCAD, Saturation, etc.).
- ⌨️ **Full Keyboard & Controller Navigation**: Navigate seamlessly via keyboard (`↑`/`↓` to browse, `Enter` to select, `Esc` to return), touch gestures, or mouse.
- 🔄 **Automated GitHub Repo Sync**: Dynamically queries the public GitHub REST API to showcase live repositories, star counts, and tags, with automatic thumbnail matching.
- 🛡️ **Zero External Framework Dependencies**: Pure HTML5, CSS3, and ES6+ JavaScript—ultra-fast load times, near-instant rendering, and 100/100 performance.

---

## 🏗️ Architecture (Model–View–Controller)

The codebase is strictly separated into modular concerns:

```
├── index.html            # Semantic DOM skeleton (Markup only, no inline logic)
├── css/
│   └── style.css         # All styles, CSS design tokens (:root), and keyframes
├── js/
│   ├── model.js          # MODEL: GitHub fetch, featured projects, skills, and state
│   ├── view.js           # VIEW: DOM updates, ransom engine, audio, and transitions
│   └── controller.js     # CONTROLLER: Keyboard events, mouse interactions, and routing
├── assets/
│   ├── favicon.svg       # Custom circular "VD" vector monogram
│   ├── logo.svg          # Brand badge
│   ├── video/            # Ambient menu background loops
│   ├── music/            # Persona 3 Reload OST audio
│   ├── sfx/              # Menu confirmation and navigation SFX
│   ├── cursors/          # 30-frame sprite cursor sheets
│   ├── menus/            # Fallback static menu artwork
│   ├── projects/         # High-res project thumbnail cards
│   └── resume/           # Downloadable curriculum vitae (PDF)
├── vercel.json           # Vercel deployment configuration
└── LICENSE               # Open-source MIT License
```

---

## 🚀 Quick Start (Run Locally)

Because modern browsers enforce CORS for local audio and video fetches, serve the folder via any local HTTP server:

### Python 3
```bash
cd Persona_style_portfolio
python3 -m http.server 8000
```
Open **`http://localhost:8000`** in your browser.

### Node.js (npx serve)
```bash
npx serve .
```

---

## 🎨 How to Customize for Your Own Portfolio

You can easily adapt this template for your own developer portfolio in 3 quick steps:

1. **Configure Your Profile & Repos (`js/model.js`)**:
   - Change `githubUser: "yourusername"`
   - Update `contactEmail: "your-email@example.com"`
   - Customize the `featured` array with your own flagship products and live URLs.
2. **Update Your Bio & Links (`index.html`)**:
   - Update `<title>` and `#big-name` ransom strings.
   - Edit the `#tagline` and About section paragraphs.
   - Replace `assets/resume/Varad_Dorle_Resume.pdf` with your own resume.
3. **Customize Styling & Theme Colors (`css/style.css`)**:
   - Modify the CSS tokens at the top of `:root` (`--cyan`, `--blue`, `--dark`, etc.) to switch between Persona 3 (Electric Cyan/Blue), Persona 4 (Vibrant Yellow), or Persona 5 (Crimson Red).

---

## ☁️ Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages
1. Push this repository to GitHub.
2. Navigate to **Repository Settings → Pages**.
3. Under **Branch**, select `main` and `/ (root)`.
4. Click **Save**. Your portfolio is live!

---

## 📜 Disclaimer & Credits

- **Persona 3 Reload** and **Persona 5** are trademarks and copyrights of **ATLUS / SEGA**. All game aesthetics, music, and art references are used under transformative fair-use for non-commercial personal portfolio and tribute purposes.
- Background track: *"Color Your Night"* composed by Atsushi Kitajoh, featuring vocals by Lotus Juice & Azumi Takahashi (ATLUS Sound Team).

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
Feel free to fork, customize, and build your own game-inspired portfolio!
