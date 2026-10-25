/* =====================================================================
   MODEL — the data and state of the app. Never touches the DOM.
   Edit your content here: featured projects, skills, image overrides.
   ===================================================================== */

const Model = {

  githubUser: "varaddorle007",

  // Official Socials & Links
  socials: {
    github: "https://github.com/varaddorle007",
    linkedin: "https://www.linkedin.com/in/varad-dorle-ba6049395/",
    instagram: "https://www.instagram.com/varad.dorle/",
    email: "dorlevarad25@gmail.com",
  },

  // Where the contact form delivers (via formsubmit.co relay)
  contactEmail: "dorlevarad25@gmail.com",

  // App state (read/written by the Controller, displayed by the View)
  state: {
    screen: "home",        // which screen is showing
    menuIndex: 0,          // selected item on the home menu
    reposLoaded: false,
    skillsBuilt: false,
  },

  // ---- Featured projects (hand-written, shown above the GitHub feed) ----
  featured: [
    {
      title: "CORTEXCAD",
      tag: "Live Platform · WebCAD / AI", color: "#00d2ff", live: true,
      url: "https://cortexcad.com", cta: "Launch cortexcad.com ↗",
      img: "assets/projects/cortexcad.png",
      desc: "Next-gen browser CAD & computational geometry platform. Parametric modeling, voxel CSG engine, and generative AI agents driving SolidWorks, CATIA, and NX.",
    },
    {
      title: "SATURATION",
      tag: "Live Platform · Cloud", color: "#38bdf8", live: true,
      url: "https://saturation.io", cta: "Launch Platform ↗",
      img: "assets/projects/saturation.png",
      desc: "Collaborative production, budgeting, and workflow management platform with real-time tracking.",
    },
    {
      title: "FLY GRAND PRIX",
      tag: "Browser 3D Game · Three.js", color: "#ff2a5f", live: true,
      url: "http://localhost:5190", cta: "Play 3D Game ▶",
      img: "assets/projects/fly-grand-prix.png",
      desc: "High-speed 3D Formula 1 racing simulation in the browser where the drivers are flies! Built with Three.js, dynamic tire physics, Monaco & Singapore street tracks, and online racing.",
    },
    {
      title: "DECK-8 MACROPAD",
      tag: "Hardware · Embedded", color: "#ffd700", live: false,
      url: "https://github.com/varaddorle007/deck-8", cta: "View on GitHub →",
      img: "assets/projects/deck8.png",
      desc: "Open-source 8-key macro pad with 2 rotary knobs, OLED & Bluetooth: custom PCB, 3D printed case, and ZMK firmware.",
    },
    {
      title: "STREAMLINK DECK",
      tag: "Android · Systems", color: "#00e5ff", live: false,
      url: "https://github.com/varaddorle007/stream-deck", cta: "View on GitHub →",
      img: "assets/projects/streamlink.png",
      desc: "High-performance Stream Deck alternative with native Android client (Jetpack Compose) & Node.js desktop host.",
    },
    {
      title: "CORTEXCAD COMPUTE",
      tag: "Engine · Volumetric CAD", color: "#38bdf8", live: false,
      url: "https://github.com/varaddorle007/cortexcad-compute", cta: "View on GitHub →",
      img: "assets/projects/cortexcad-compute.png",
      desc: "CT scan & PicoGK computational engineering and volumetric CAD engine desktop prototype.",
    },
    {
      title: "LEVO AI",
      tag: "Transformers · PyTorch", color: "#a855f7", live: false,
      url: "https://github.com/varaddorle007/levo-ai", cta: "View on GitHub →",
      img: "assets/projects/levo.png",
      desc: "GPT-style transformer language model designed and trained from scratch in PyTorch with custom tokenization.",
    },
  ],

  // Repos already shown in "featured" get hidden from the GitHub feed
  featuredRepoNames: [
    "CORTEXCAD",
    "CortexCAD",
    "SATURATION",
    "saturation",
    "FLY GRAND PRIX",
    "fly-grand-prix",
    "DECK-8 MACROPAD",
    "deck-8",
    "STREAMLINK DECK",
    "stream-deck",
    "CORTEXCAD COMPUTE",
    "cortexcad-compute",
    "LEVO AI",
    "levo-ai",
  ],

  // Shown if the GitHub API can't be reached
  fallbackRepos: [
    {
      name: "malecns", language: "Python", stargazers_count: 2,
      html_url: "https://github.com/varaddorle007/malecns",
      description: "Local toolkit and live UI for the MaleCNS v1.0 Drosophila connectome.",
    },
    {
      name: "ESP32-Video-Player", language: "C++", stargazers_count: 2,
      html_url: "https://github.com/varaddorle007/ESP32-Video-Player",
      description: "Play any video on an ESP32 + SSD1306 OLED. Converts MP4 to PROGMEM frames.",
    },
    {
      name: "wristcursor", language: "Kotlin", stargazers_count: 1,
      html_url: "https://github.com/varaddorle007/wristcursor",
      description: "WristCursor — Wear OS gesture air mouse with low-latency telemetry.",
    },
    {
      name: "FluxLock", language: "Kotlin", stargazers_count: 1,
      html_url: "https://github.com/varaddorle007/FluxLock",
      description: "Mobile app lock utility focused on privacy and controlled access.",
    },
    {
      name: "devil-eye", language: "Rust", stargazers_count: 1,
      html_url: "https://github.com/varaddorle007/devil-eye",
      description: "Authorized cybersecurity toolkit: tcpdump-class capture + modular scoped assessment.",
    },
    {
      name: "cortexcad-cad-agents", language: "Python", stargazers_count: 1,
      html_url: "https://github.com/varaddorle007/cortexcad-cad-agents",
      description: "Evaluation copy of CAD-Agent-Hub: MCP servers driving SolidWorks, CATIA V5, Siemens NX and Fusion natively.",
    },
    {
      name: "dcs-cockpit-remote", language: "Python", stargazers_count: 1,
      html_url: "https://github.com/varaddorle007/dcs-cockpit-remote",
      description: "Wi-Fi tablet cockpit panel for DCS World — tap buttons, PC sends keyboard shortcuts.",
    },
  ],

  // Optional thumbnail overrides: repo name → image path.
  projectImages: {
    "cortexcad": "assets/projects/cortexcad.png",
    "saturation": "assets/projects/saturation.png",
    "fly-grand-prix": "assets/projects/fly-grand-prix.png",
    "deck-8": "assets/projects/deck-8.png",
    "stream-deck": "assets/projects/stream-deck.png",
    "cortexcad-compute": "assets/projects/cortexcad-compute.png",
    "levo-ai": "assets/projects/levo-ai.png",
    "malecns": "assets/projects/malecns.png",
    "ESP32-Video-Player": "assets/projects/ESP32-Video-Player.png",
    "wristcursor": "assets/projects/wristcursor.png",
    "FluxLock": "assets/projects/FluxLock.png",
    "devil-eye": "assets/projects/devil-eye.png",
  },

  langColors: {
    JavaScript: "#5c5af1", TypeScript: "#3178c6", Python: "#3572A5",
    Kotlin: "#A97BFF", "C++": "#f34b7d", C: "#555555",
    PHP: "#4F5D95", CSS: "#663399", HTML: "#e34c26",
    "Jupyter Notebook": "#DA5B0B", MATLAB: "#e16737", Java: "#b07219", PowerShell: "#012456",
  },

  // ---- Skills screen ----
  skills: [
    { group: "Mobile & Systems", items: [
      ["Kotlin · Jetpack Compose", 92], ["Android SDK · NDK", 88],
      ["Cross-Device WebSockets", 86], ["Hardware · ESP32 · ZMK", 84],
      ["Wear OS · Bluetooth LE", 80], ["ADB & Linux Tooling", 85],
    ]},
    { group: "AI & Full-Stack", items: [
      ["Python · PyTorch", 88], ["TypeScript · React · Next.js", 85],
      ["Node.js · FastAPI", 82], ["Docker · Linux · Git", 90],
      ["Gemini API & LLM Agents", 88], ["PostgreSQL · Supabase", 80],
    ]},
    { group: "Engineering & Architecture", items: [
      ["Distributed Systems", 82], ["PCB Design & KiCad", 78],
      ["CAD & Computational Geometry", 82], ["Obsidian & System Design", 88],
    ]},
  ],

  // ---- Data fetching ----
  async fetchRepos() {
    const skip = new Set(this.featuredRepoNames);
    try {
      const res = await fetch(
        `https://api.github.com/users/${this.githubUser}/repos?per_page=100&sort=updated`
      );
      if (!res.ok) throw new Error(res.status);
      const repos = (await res.json()).filter(r => !r.fork && !skip.has(r.name) && r.name !== this.githubUser);
      return { repos, live: true };
    } catch {
      return { repos: this.fallbackRepos.filter(r => !skip.has(r.name)), live: false };
    }
  },
};
