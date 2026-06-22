import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const greetings = [
  "Hello",
  "नमस्ते",
  "నమస్కారం",
  "Hola",
  "Bonjour",
  "مرحبا",
  "こんにちは",
  "안녕하세요",
  "Ciao",
  "Olá",
  "Hallo",
  "Привет",
  "你好",
  "Merhaba",
  "Hej",
  "Sawubona",
  "Jambo",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "வணக்கம்",
  "ನಮಸ್ಕಾರ",
];

const projects = [
  {
    id: "skin",
    category: "ml",
    date: "APR 2026",
    badge: "NEW!",
    title: "ML Skin Disease Predictor",
    summary:
      "A multilingual Streamlit application that classifies seven skin conditions from images using MobileNetV2 trained on 10,000+ HAM10000 samples.",
    impact: "7 classes / 10K+ images / real-time inference",
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Streamlit"],
    href: "https://github.com/ShahidAfridKhan/skin-disease-predictor.git",
  },
  {
    id: "face",
    category: "ml",
    date: "MAR 2026",
    title: "Facial Expression Detection",
    summary:
      "A webcam-based computer vision system that detects faces, normalizes frames, and predicts five facial expressions with live labels.",
    impact: "5 emotions / continuous webcam stream",
    stack: ["Python", "OpenCV", "TensorFlow", "Keras", "Haar Cascade"],
    href: "https://github.com/ShahidAfridKhan/ML-Model1-Face.git",
  },
  {
    id: "acebank",
    category: "software",
    date: "2026",
    title: "AceBank Web Application",
    summary:
      "A secure Java banking application with authentication, encrypted passwords, transaction persistence, email alerts, and containerized deployment.",
    impact: "Authentication / transactions / Docker deployment",
    stack: ["Java 21", "Servlets", "JSP", "MyBatis", "MySQL", "Docker"],
    href: "https://github.com/ShahidAfridKhan/AceBank",
  },
  {
    id: "uber",
    category: "data",
    date: "JAN 2026",
    badge: "1ST PLACE",
    title: "Uber Ride Analytics Dashboard",
    summary:
      "An interactive Power BI dashboard for 50,000+ ride records, tracking 10+ KPIs across revenue, demand, cancellations, ratings, and operations.",
    impact: "50K+ records / 10+ KPIs / hackathon winner",
    stack: ["Power BI", "SQL", "Excel", "Data Visualization"],
  },
  {
    id: "crave",
    category: "software",
    date: "DEC 2025",
    title: "CraveAI Food Ordering Platform",
    summary:
      "An AI-assisted ordering experience with automated n8n workflows, live order storage, recommendation logic, and itemized billing.",
    impact: "End-to-end workflow automation",
    stack: ["HTML", "CSS", "JavaScript", "n8n", "AI Agent", "Google Sheets"],
    href: "https://github.com/ShahidAfridKhan/AI-Integrated-Food-Ordering-Platform-",
  },
  {
    id: "restaurant",
    category: "data",
    date: "MAR 2025",
    title: "Restaurant Sales Insights",
    summary:
      "A sales and customer dashboard that cleans 10,000+ orders and surfaces revenue, volume, popular categories, and decision-ready KPIs.",
    impact: "10K+ orders / customer and sales trends",
    stack: ["Power BI", "SQL", "Excel", "KPI Reporting"],
  },
  {
    id: "diary",
    category: "software",
    date: "2025",
    title: "WhisperDiary Android App",
    summary:
      "A secure personal diary built during a five-person internship team, featuring user authentication and encrypted note storage.",
    impact: "Team of 5 / encrypted local notes",
    stack: ["Kotlin", "XML", "SQLite", "Android SDK"],
    href: "https://github.com/ShahidAfridKhan/WhisperDiary-.git",
  },
  {
    id: "movies",
    category: "ml",
    date: "MAY 2025",
    title: "Movie Recommendation System",
    summary:
      "A content-based recommender that preprocesses movie metadata and uses vectorization plus cosine similarity for real-time suggestions.",
    impact: "5K+ movies / real-time recommendations",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Cosine Similarity"],
  },
];

const certificates = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    date: "AUG 2025",
    href: "https://www.linkedin.com/posts/shahid-afrid-khan_oraclecertified-ai-cloudcomputing-activity-7377651722111893504-7_tv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZZJQgB7rvJHyxoPkJsTZq44XmEwzQGIBU",
  },
  {
    name: "Android App Development",
    date: "AUG 2025",
    href: "https://www.linkedin.com/posts/shahid-afrid-khan_androiddevelopment-appdevelopment-playstore-activity-7364537125196754944-lfau?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZZJQgB7rvJHyxoPkJsTZq44XmEwzQGIBU",
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    date: "JUL 2025",
    href: "https://www.linkedin.com/posts/shahid-afrid-khan_google-coursera-computernetworking-activity-7285320446772682752-BSIZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZZJQgB7rvJHyxoPkJsTZq44XmEwzQGIBU",
  },
  {
    name: "Responsive Web Design",
    date: "NOV 2024",
    href: "https://www.linkedin.com/posts/shahid-afrid-khan_webdevelopment-freecodecamp-frontenddeveloper-activity-7404134224280129536-MaHA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZZJQgB7rvJHyxoPkJsTZq44XmEwzQGIBU",
  },
];

function WelcomeScreen({ onComplete }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(onComplete, reducedMotion ? 700 : 3600);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  const greetingLine = [...greetings, ...greetings].join("  ◆  ");

  return (
    <div className="welcome-screen" role="dialog" aria-label="Welcome animation">
      <button className="win-button welcome-skip" type="button" onClick={onComplete} autoFocus>
        SKIP &gt;&gt;
      </button>
      <div className="welcome-titlebar">
        <span>WELCOME.EXE</span>
        <span aria-hidden="true">_ □ ×</span>
      </div>
      <div className="welcome-center">
        <span className="sr-only">Hello and welcome to Shahid Afrid Khan's portfolio.</span>
        <div className="greeting-row greeting-row-one" aria-hidden="true">
          <span>{greetingLine}</span>
        </div>
        <div className="greeting-row greeting-row-two" aria-hidden="true">
          <span>{greetingLine}</span>
        </div>
        <div className="greeting-row greeting-row-three" aria-hidden="true">
          <span>{greetingLine}</span>
        </div>
        <div className="boot-box">
          <p>LOADING A VERY GOOD HIRE...</p>
          <div className="boot-progress" aria-hidden="true">
            <span />
          </div>
          <p className="boot-small">Please wait while the future initializes.</p>
        </div>
      </div>
    </div>
  );
}

function Window({ title, icon = "▣", children, className = "", id }) {
  return (
    <section className={`window ${className}`} id={id}>
      <div className="window-titlebar">
        <span>
          <span aria-hidden="true">{icon}</span> {title}
        </span>
        <span className="window-controls" aria-hidden="true">
          <i>_</i><i>□</i><i>×</i>
        </span>
      </div>
      <div className="window-content">{children}</div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="marquee" aria-label="Available for software, machine learning, and data opportunities">
      <div className="marquee-track" aria-hidden="true">
        <span className="red">★ AVAILABLE FOR INTERNSHIPS</span>
        <span className="blue">SOFTWARE ENGINEERING</span>
        <span className="green">MACHINE LEARNING</span>
        <span className="purple">DATA ANALYTICS</span>
        <span className="red">★ AVAILABLE FOR INTERNSHIPS</span>
        <span className="blue">SOFTWARE ENGINEERING</span>
        <span className="green">MACHINE LEARNING</span>
        <span className="purple">DATA ANALYTICS</span>
      </div>
    </div>
  );
}

function LiveLocation() {
  const [clock, setClock] = useState(new Date());
  const [location, setLocation] = useState("Permission not requested");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setClock(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  async function locateVisitor() {
    if (!navigator.geolocation) {
      setLocation("Geolocation is not supported by this browser");
      return;
    }

    setBusy(true);
    setLocation("Acquiring coordinates...");
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const fallback = `${coords.latitude.toFixed(3)}, ${coords.longitude.toFixed(3)}`;
        try {
          const endpoint = new URL("https://api.bigdatacloud.net/data/reverse-geocode-client");
          endpoint.searchParams.set("latitude", coords.latitude);
          endpoint.searchParams.set("longitude", coords.longitude);
          endpoint.searchParams.set("localityLanguage", "en");
          const response = await fetch(endpoint);
          if (!response.ok) throw new Error("Location lookup failed");
          const data = await response.json();
          const place = [data.city || data.locality, data.principalSubdivision, data.countryName]
            .filter(Boolean)
            .filter((item, index, all) => all.indexOf(item) === index)
            .join(", ");
          setLocation(place || fallback);
        } catch {
          setLocation(fallback);
        } finally {
          setBusy(false);
        }
      },
      (error) => {
        const messages = {
          1: "Location permission was not granted",
          2: "Location is currently unavailable",
          3: "Location request timed out",
        };
        setLocation(messages[error.code] || "Unable to fetch location");
        setBusy(false);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    );
  }

  return (
    <div className="telemetry-grid">
      <div>
        <span className="telemetry-label">LOCAL TIME</span>
        <strong>{clock.toLocaleTimeString()}</strong>
      </div>
      <div>
        <span className="telemetry-label">VISITOR LOCATION</span>
        <strong>{location}</strong>
      </div>
      <button className="win-button compact-button" type="button" onClick={locateVisitor} disabled={busy}>
        {busy ? "LOCATING..." : "⌖ LOCATE ME"}
      </button>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-card-head">
        <span>PROJECT_{String(index + 1).padStart(2, "0")}.TXT</span>
        <time>{project.date}</time>
      </div>
      <div className="project-body">
        <div className="project-title-line">
          <h3>{project.title}</h3>
          {project.badge && <span className="hot-badge">{project.badge}</span>}
        </div>
        <p>{project.summary}</p>
        <p className="impact-line">&gt; {project.impact}</p>
        <div className="tag-list" aria-label="Technologies used">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer" className="project-link">
            OPEN SOURCE CODE ↗
          </a>
        ) : (
          <span className="project-private">CASE STUDY AVAILABLE ON REQUEST</span>
        )}
      </div>
    </article>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [filter, setFilter] = useState("all");
  const [visitorNumber] = useState(() => {
    const current = Number(window.localStorage.getItem("portfolioVisits") || 0) + 1;
    window.localStorage.setItem("portfolioVisits", String(current));
    return current;
  });

  const visibleProjects = useMemo(
    () => (filter === "all" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <>
      {showWelcome && <WelcomeScreen onComplete={() => setShowWelcome(false)} />}

      <div className="site-shell">
        <header className="topbar">
          <a className="brand-button" href="#home">SAK://PORTFOLIO</a>
          <nav aria-label="Primary navigation">
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#skills">SKILLS</a>
            <a href="#contact">CONTACT</a>
          </nav>
          <span className="status-light"><i /> ONLINE</span>
        </header>

        <Marquee />

        <main id="home">
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow">HELLO, WORLD! I AM</div>
              <h1 className="rainbow-text">SHAHID AFRID KHAN</h1>
              <p className="hero-role">SOFTWARE ENGINEER × ML BUILDER × DATA ANALYST</p>
              <p className="hero-intro">
                I build secure software, practical machine-learning systems, and dashboards that turn noisy data into clear decisions.
              </p>
              <div className="hero-actions">
                <a className="win-button primary-button" href="#projects">VIEW MY WORK</a>
                <a className="win-button success-button" href="mailto:shahidafridkhanphatan@gmail.com">HIRE / CONTACT ME</a>
              </div>
            </div>

            <aside className="profile-terminal" aria-label="Profile summary">
              <div className="terminal-title">C:\USERS\SHAHID\PROFILE.INI</div>
              <div className="pixel-avatar" aria-hidden="true">
                <span>SAK</span>
              </div>
              <dl>
                <div><dt>ROLE</dt><dd>Engineering Student</dd></div>
                <div><dt>BASE</dt><dd>Tenali, Andhra Pradesh</dd></div>
                <div><dt>FOCUS</dt><dd>Software / ML / Data</dd></div>
                <div><dt>STATUS</dt><dd className="terminal-green">READY TO BUILD</dd></div>
              </dl>
            </aside>
          </section>

          <div className="hit-counter" aria-label={`This is local visit number ${visitorNumber}`}>
            <span>LOCAL VISIT:</span>
            <b>{String(visitorNumber).padStart(7, "0")}</b>
            <span>| DSA PROBLEMS:</span>
            <b>0000100+</b>
            <span>| SITE STATUS:</span>
            <b>ONLINE</b>
          </div>

          <div className="groove-rule" />

          <Window title="WHY_HIRE_ME.DOC" icon="✦" id="about" className="about-window">
            <div className="about-grid">
              <div className="notepad-copy">
                <h2>BUILDER ACROSS THE STACK</h2>
                <p>
                  I am a Computer Science and Engineering undergraduate at Lovely Professional University who enjoys moving from problem to working product: from Java backends and Android apps to computer vision models and decision-ready dashboards.
                </p>
                <p>
                  My work is grounded in hands-on delivery, team collaboration, and measurable outcomes. I learn quickly, document clearly, and care about making technology useful—not merely impressive in a demo.
                </p>
                <div className="currently-building">
                  <span className="hot-badge">NOW</span>
                  Seeking software engineering, machine learning, data science, and analytics internships.
                </div>
              </div>
              <div className="proof-grid">
                <div><strong>100+</strong><span>DSA problems solved</span></div>
                <div><strong>1ST</strong><span>University hackathon</span></div>
                <div><strong>50K+</strong><span>Ride records analyzed</span></div>
                <div><strong>10K+</strong><span>Medical images modeled</span></div>
              </div>
            </div>
          </Window>

          <div className="groove-rule" />

          <Window title="FEATURED_PROJECTS.EXE" icon="▦" id="projects">
            <div className="section-heading-row">
              <div>
                <span className="section-kicker">SELECTED WORK</span>
                <h2>PROOF, NOT PROMISES.</h2>
              </div>
              <div className="filter-buttons" aria-label="Filter projects">
                {[
                  ["all", "ALL"],
                  ["software", "SOFTWARE"],
                  ["ml", "ML / AI"],
                  ["data", "DATA"],
                ].map(([value, label]) => (
                  <button
                    className={`win-button compact-button ${filter === value ? "active-filter" : ""}`}
                    type="button"
                    key={value}
                    onClick={() => setFilter(value)}
                    aria-pressed={filter === value}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="projects-grid">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </Window>

          <div className="groove-rule" />

          <Window title="SKILLS_CONTROL_PANEL" icon="⚙" id="skills">
            <div className="skills-layout">
              <div className="skills-table" role="table" aria-label="Technical skills">
                <div className="skills-row skills-header" role="row">
                  <span role="columnheader">CATEGORY</span>
                  <span role="columnheader">INSTALLED MODULES</span>
                </div>
                <div className="skills-row" role="row">
                  <b role="cell">LANGUAGES</b>
                  <span role="cell">Java • Python • SQL • C++ • JavaScript</span>
                </div>
                <div className="skills-row" role="row">
                  <b role="cell">ML / DATA</b>
                  <span role="cell">TensorFlow • Keras • Scikit-learn • OpenCV • CNN • NumPy • Pandas</span>
                </div>
                <div className="skills-row" role="row">
                  <b role="cell">BACKEND</b>
                  <span role="cell">JDBC • REST APIs • Jakarta Servlets • JSP • MyBatis • MySQL</span>
                </div>
                <div className="skills-row" role="row">
                  <b role="cell">ANALYTICS</b>
                  <span role="cell">Power BI • Excel • Data Cleaning • EDA • KPI Reporting • Dashboards</span>
                </div>
                <div className="skills-row" role="row">
                  <b role="cell">TOOLS</b>
                  <span role="cell">Git • GitHub • Docker • Postman • n8n • Jupyter • IntelliJ IDEA</span>
                </div>
                <div className="skills-row" role="row">
                  <b role="cell">CORE CS</b>
                  <span role="cell">DSA • OOP • DBMS • Operating Systems • Computer Networks</span>
                </div>
              </div>
              <div className="color-squares" aria-hidden="true">
                {Array.from({ length: 24 }, (_, index) => <i key={index} />)}
              </div>
            </div>
          </Window>

          <div className="two-column-section">
            <Window title="ACHIEVEMENTS.LOG" icon="★">
              <ol className="achievement-list">
                <li><b>01</b><span>Won 1st place in a university-level hackathon for an Uber analytics dashboard.</span><time>DEC 2025</time></li>
                <li><b>02</b><span>Solved 100+ DSA problems across multiple data structures and algorithms.</span><time>MAR 2026</time></li>
                <li><b>03</b><span>Won an inter-department poster design contest at Lovely Professional University.</span><time>JAN 2026</time></li>
              </ol>
            </Window>

            <Window title="CERTIFICATES.CAB" icon="✓">
              <ul className="certificate-list">
                {certificates.map((certificate) => (
                  <li key={certificate.name}>
                    <a href={certificate.href} target="_blank" rel="noreferrer">{certificate.name}</a>
                    <time>{certificate.date}</time>
                  </li>
                ))}
              </ul>
            </Window>
          </div>

          <div className="groove-rule" />

          <Window title="EDUCATION_DATABASE.MDB" icon="▤">
            <div className="education-table">
              <div className="education-row education-header"><span>INSTITUTION</span><span>PROGRAM</span><span>PERIOD</span><span>LOCATION</span></div>
              <div className="education-row"><b>Lovely Professional University</b><span>B.Tech - Computer Science &amp; Engineering</span><time>2023 - Present</time><span>Punjab, India</span></div>
              <div className="education-row"><b>NRI Junior College</b><span>Intermediate</span><time>2021 - 2023</time><span>Tenali, Andhra Pradesh</span></div>
              <div className="education-row"><b>Narayana E.M. School</b><span>Matriculation</span><time>2020 - 2021</time><span>Tenali, Andhra Pradesh</span></div>
            </div>
          </Window>

          <div className="groove-rule" />

          <section className="construction-wrap" id="contact">
            <div className="construction-inner">
              <div>
                <span className="hot-badge">ATTENTION!</span>
                <h2>LET'S BUILD SOMETHING USEFUL.</h2>
                <p>I am open to internships and early-career opportunities across software, ML, data science, and analytics.</p>
                <div className="contact-links">
                  <a className="win-button primary-button" href="mailto:shahidafridkhanphatan@gmail.com">EMAIL SHAHID</a>
                  <a className="win-button" href="https://www.linkedin.com/in/shahid-afrid-khan/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
                  <a className="win-button" href="https://github.com/ShahidAfridKhan" target="_blank" rel="noreferrer">GITHUB ↗</a>
                </div>
              </div>
              <div className="contact-card">
                <p><b>EMAIL</b><a href="mailto:shahidafridkhanphatan@gmail.com">shahidafridkhanphatan@gmail.com</a></p>
                <p><b>PHONE</b><a href="tel:+919392637051">+91 93926 37051</a></p>
                <p><b>HOME BASE</b><span>Tenali, Andhra Pradesh, India</span></p>
              </div>
            </div>
          </section>

          <Window title="VISITOR_TELEMETRY.SYS" icon="⌖" className="telemetry-window">
            <LiveLocation />
            <p className="privacy-note">Location is requested only when you press “Locate Me” and grant browser permission.</p>
          </Window>
        </main>

        <footer>
          <span>© {new Date().getFullYear()} SHAHID AFRID KHAN</span>
          <span>BEST VIEWED WITH CURIOSITY AT 1024×768</span>
          <a href="#home">BACK TO TOP ↑</a>
        </footer>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
