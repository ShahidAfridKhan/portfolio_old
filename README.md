# SAK://PORTFOLIO — Shahid Afrid Khan's Retro Portfolio

> A Windows-95/98-styled personal portfolio built with React 19 and Vite — complete with a boot-up welcome screen, a scrolling marquee, draggable-window aesthetics, and a hit counter, all rendered in a single component.

![React](https://img.shields.io/badge/React-19.2-149eca?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646cff?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

## ✦ Live Preview

The site opens with a `WELCOME.EXE` boot animation cycling through greetings in 20 languages, then drops into a desktop-style layout of "windows" — `WHY_HIRE_ME.DOC`, `FEATURED_PROJECTS.EXE`, `SKILLS_CONTROL_PANEL`, `ACHIEVEMENTS.LOG`, `CERTIFICATES.CAB`, `EDUCATION_DATABASE.MDB`, and `VISITOR_TELEMETRY.SYS` — all skinned with classic gray bevels, navy title bars, and a dithered desktop background.

## ▦ Features

- **Boot animation** — a `WELCOME.EXE` splash screen with multilingual greeting ticker, auto-skips after ~3.6s (or instantly if the visitor prefers reduced motion), with a manual `SKIP >>` button.
- **Retro UI shell** — every section is rendered as a draggable-looking "window" with a title bar, icon, and `_ □ ×` controls for that authentic 90s desktop feel.
- **Scrolling marquee** — an old-school `<marquee>`-style ticker announcing availability for Software Engineering, ML, and Data Analytics roles.
- **Filterable project grid** — toggle between **ALL**, **SOFTWARE**, **ML / AI**, and **DATA** to filter the featured projects, each shown as a "file card" with stack tags, impact metrics, and a source-code link.
- **Live visitor telemetry** — a real-time clock plus an opt-in **"Locate Me"** button that reverse-geocodes the visitor's coordinates via the BigDataCloud API (only on explicit click + browser permission).
- **Local hit counter** — increments and persists a `LOCAL VISIT` counter in `localStorage`, displayed in true retro 7-digit odometer style.
- **Fully responsive & accessible** — semantic landmarks, `aria-live`/`aria-label` regions for decorative animations, and `prefers-reduced-motion` support.

## ⚙ Tech Stack

| Category | Technology |
|---|---|
| UI Library | React 19 |
| Build Tool | Vite 8 |
| Styling | Plain CSS (custom Windows 95/98 design system, no framework) |
| Package Manager | pnpm |
| Geolocation API | [BigDataCloud Reverse Geocode](https://www.bigdatacloud.com/) |

The entire app lives in **one component file** (`src/main.jsx`) plus a single stylesheet (`src/styles.css`) — no router, no state library, no backend. Project, certificate, and achievement data are defined as plain JS arrays at the top of the file, making content updates a matter of editing data, not markup.

## ▤ Project Structure

```
portfolio_old/
├── index.html          # Entry HTML shell + meta tags
├── package.json         # Scripts & dependencies
├── pnpm-lock.yaml       # Locked dependency versions
└── src/
    ├── main.jsx         # Entire app: components, data, and render logic
    └── styles.css       # Windows 95/98-inspired design system
```

## ✓ Getting Started

### Prerequisites
- Node.js 18+
- [pnpm](https://pnpm.io/) (or swap commands below for `npm`/`yarn`)

### Installation

```bash
git clone https://github.com/ShahidAfridKhan/portfolio_old.git
cd portfolio_old
pnpm install
```

### Development

```bash
pnpm dev
```

Starts the Vite dev server on `0.0.0.0`, accessible at `http://localhost:5173` (or your LAN IP, for testing on mobile).

### Production Build

```bash
pnpm build
```

Outputs an optimized static bundle to `dist/`.

### Preview Production Build

```bash
pnpm preview
```

## ★ Featured Projects Showcased on the Site

| Project | Category | Stack |
|---|---|---|
| ML Skin Disease Predictor | ML / AI | Python, TensorFlow, Keras, OpenCV, CNN, Streamlit |
| Facial Expression Detection | ML / AI | Python, OpenCV, TensorFlow, Keras, Haar Cascade |
| AceBank Web Application | Software | Java 21, Servlets, JSP, MyBatis, MySQL, Docker |
| Uber Ride Analytics Dashboard | Data | Power BI, SQL, Excel |
| CraveAI Food Ordering Platform | Software | HTML, CSS, JavaScript, n8n, AI Agent |
| Restaurant Sales Insights | Data | Power BI, SQL, Excel |
| WhisperDiary Android App | Software | Kotlin, XML, SQLite, Android SDK |
| Movie Recommendation System | ML / AI | Python, Pandas, Scikit-learn |

## ✦ Customizing Content

All editable content lives near the top of `src/main.jsx`:

- **`greetings`** — the multilingual welcome-screen ticker text.
- **`projects`** — each entry controls a project card: `category` (`software` / `ml` / `data`), `date`, optional `badge`, `title`, `summary`, `impact`, `stack`, and optional `href` (omit to show "CASE STUDY AVAILABLE ON REQUEST").
- **`certificates`** — name, date, and link for each listed certification.

Section copy (bio, skills table, achievements, education, contact details) is written directly in JSX further down the same file.

## ⌖ Privacy Note

The "Locate Me" feature in `VISITOR_TELEMETRY.SYS` only requests the browser's Geolocation API when the visitor explicitly clicks the button, and only sends coordinates to BigDataCloud's public reverse-geocoding endpoint for display purposes — nothing is stored server-side.

## ✦ Contact

**Shahid Afrid Khan**
B.Tech CSE (Data Science), Lovely Professional University

- Email: [shahidafridkhanphatan@gmail.com](mailto:shahidafridkhanphatan@gmail.com)
- LinkedIn: [linkedin.com/in/shahid-afrid-khan](https://www.linkedin.com/in/shahid-afrid-khan/)
- GitHub: [@ShahidAfridKhan](https://github.com/ShahidAfridKhan)

---

<sub>BEST VIEWED WITH CURIOSITY AT 1024×768</sub>
