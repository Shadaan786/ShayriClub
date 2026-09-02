/**
 * UrbanAILandingPage.jsx
 *
 * Self-contained conversion of the UrbanAI landing page.
 * The original HTML relied on a *custom* Tailwind theme (via an inline
 * tailwind.config script) for its colors, fonts, spacing and radii. Rather
 * than depend on that external config being present wherever this component
 * is dropped in, this version bakes the design tokens into a scoped <style>
 * block as plain CSS, using the exact hex values / sizes from the original
 * config. That means it renders correctly on its own — no tailwind.config
 * edits required — while keeping the same visual design.
 *
 * If you'd rather use Tailwind utility classes throughout (e.g. this lives
 * inside a project that already has Tailwind + your own design tokens),
 * swap the classNames below for your utilities and delete the <style> block.
 */

export default function UrbanAILandingPage() {
  return (
    <div className="urbanai">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .urbanai {
          --background: #0b1326;
          --surface: #0b1326;
          --surface-dim: #0b1326;
          --surface-bright: #31394d;
          --surface-container-lowest: #060e20;
          --surface-container-low: #131b2e;
          --surface-container: #171f33;
          --surface-container-high: #222a3d;
          --surface-container-highest: #2d3449;
          --surface-variant: #2d3449;
          --on-surface: #dae2fd;
          --on-surface-variant: #c7c4d7;
          --on-background: #dae2fd;
          --outline: #908fa0;
          --outline-variant: #464554;

          --primary: #c0c1ff;
          --primary-container: #8083ff;
          --on-primary: #1000a9;
          --on-primary-container: #0d0096;
          --primary-fixed: #e1e0ff;

          --secondary: #4cd7f6;
          --secondary-container: #03b5d3;
          --on-secondary: #003640;

          --tertiary: #4edea3;
          --tertiary-container: #00885d;
          --on-tertiary: #003824;

          --error: #ffb4ab;

          font-family: 'Inter', sans-serif;
          background-color: var(--background);
          color: var(--on-surface);
          -webkit-font-smoothing: antialiased;
        }

        .urbanai * { box-sizing: border-box; }

        .urbanai .icon {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          line-height: 1;
          display: inline-block;
        }
        .urbanai .icon.fill { font-variation-settings: 'FILL' 1; }

        .urbanai .mono { font-family: 'JetBrains Mono', monospace; }

        .urbanai .type-headline-xl { font-size: 40px; line-height: 48px; letter-spacing: -0.02em; font-weight: 700; }
        .urbanai .type-headline-lg { font-size: 32px; line-height: 38px; letter-spacing: -0.02em; font-weight: 700; }
        .urbanai .type-headline-md { font-size: 24px; line-height: 32px; letter-spacing: -0.01em; font-weight: 600; }
        .urbanai .type-body-lg { font-size: 18px; line-height: 28px; font-weight: 400; }
        .urbanai .type-body-md { font-size: 16px; line-height: 24px; font-weight: 400; }
        .urbanai .type-label { font-family: 'JetBrains Mono', monospace; font-size: 14px; line-height: 20px; letter-spacing: 0.02em; font-weight: 500; }
        .urbanai .type-data { font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 16px; letter-spacing: 0.05em; font-weight: 400; }

        .urbanai .container { max-width: 1440px; margin-inline: auto; padding-inline: 16px; }
        @media (min-width: 768px) { .urbanai .container { padding-inline: 32px; } }

        .urbanai .glass-panel {
          background-color: rgba(23, 31, 51, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .urbanai .neon-glow { box-shadow: 0 0 12px 0px rgba(192, 193, 255, 0.5); }

        /* Nav */
        .urbanai .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          background-color: rgba(11, 19, 38, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .urbanai .navbar-inner { display: flex; align-items: center; justify-content: space-between; padding-block: 16px; }
        .urbanai .brand { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 24px; color: var(--primary); }
        .urbanai .nav-links { display: none; gap: 32px; }
        .urbanai .nav-link { color: var(--on-surface-variant); text-decoration: none; padding-bottom: 4px; transition: color 0.2s; }
        .urbanai .nav-link:hover { color: var(--primary); }
        .urbanai .nav-link.active { color: var(--primary); border-bottom: 2px solid var(--primary); }
        .urbanai .btn { border: none; cursor: pointer; border-radius: 2px; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500; transition: background-color 0.2s, color 0.2s; }
        .urbanai .btn-primary { background-color: var(--primary); color: var(--on-primary); padding: 8px 24px; }
        .urbanai .btn-primary:hover { background-color: var(--primary-fixed); }
        .urbanai .btn-primary.lg { padding: 16px 40px; font-size: 18px; }
        .urbanai .btn-outline { background: transparent; border: 1px solid var(--primary); color: var(--primary); padding: 8px 24px; }
        .urbanai .btn-outline:hover { background-color: rgba(192,193,255,0.1); }
        .urbanai .btn-outline.lg { padding: 16px 40px; font-size: 18px; border-color: var(--outline); color: var(--on-surface); }
        .urbanai .btn-outline.lg:hover { background-color: var(--surface-container-high); }
        .urbanai .nav-menu-btn { display: block; background: none; border: none; color: var(--on-surface-variant); cursor: pointer; }
        @media (min-width: 768px) {
          .urbanai .nav-links { display: flex; }
          .urbanai .btn-nav { display: block; }
          .urbanai .nav-menu-btn { display: none; }
        }
        .urbanai .btn-nav { display: none; }

        main.urbanai-main { padding-top: 96px; padding-bottom: 64px; }

        /* Hero */
        .urbanai .hero { display: grid; grid-template-columns: 1fr; gap: 24px; align-items: center; padding-block: 48px; min-height: 500px; }
        @media (min-width: 768px) { .urbanai .hero { grid-template-columns: repeat(12, 1fr); padding-block: 96px; min-height: 819px; } }
        .urbanai .hero-copy { display: flex; flex-direction: column; gap: 24px; z-index: 10; }
        @media (min-width: 768px) { .urbanai .hero-copy { grid-column: span 5; } }
        .urbanai .hero-copy h1 { margin: 0; color: var(--on-surface); }
        .urbanai .hero-copy h1 .accent { color: var(--primary); }
        .urbanai .hero-copy p { color: var(--on-surface-variant); max-width: 32rem; margin: 0; }
        .urbanai .hero-ctas { display: flex; gap: 16px; margin-top: 16px; flex-wrap: wrap; }
        .urbanai .hero-visual {
          position: relative; overflow: hidden; border-radius: 8px; height: 400px;
          display: flex; align-items: center; justify-content: center;
          border-top: 1px solid rgba(255,255,255,0.2);
        }
        @media (min-width: 768px) { .urbanai .hero-visual { grid-column: span 7; height: 600px; } }
        .urbanai .hero-visual-bg {
          position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.6; mix-blend-mode: screen;
          background-size: cover; background-position: center;
        }
        .urbanai .hero-visual-fade { position: absolute; inset: 0; background: linear-gradient(to top, var(--surface), transparent); }
        .urbanai .live-feed-badge { position: absolute; top: 32px; left: 32px; display: flex; flex-direction: column; gap: 8px; padding: 16px; border-radius: 4px; }
        .urbanai .live-dot { width: 8px; height: 8px; border-radius: 50%; background-color: var(--primary); box-shadow: 0 0 12px 0px rgba(192,193,255,0.5); animation: pulse 1.6s infinite; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
        .urbanai .detections-badge { position: absolute; bottom: 32px; right: 32px; padding: 16px; border-radius: 4px; border-left: 2px solid var(--primary); }
        .urbanai .detections-row { display: flex; gap: 16px; }
        .urbanai .detections-row div { display: flex; flex-direction: column; }

        /* Stats */
        .urbanai .stats-section { padding-block: 48px; border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); background-color: rgba(19,27,46,0.5); }
        .urbanai .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        @media (min-width: 768px) { .urbanai .stats-grid { grid-template-columns: repeat(4, 1fr); } }
        .urbanai .stat-card { padding: 24px; border-radius: 4px; text-align: center; transition: transform 0.2s; }
        .urbanai .stat-card:hover { transform: translateY(-4px); }
        .urbanai .stat-card .icon { font-size: 30px; margin-bottom: 8px; }
        .urbanai .stat-card h3 { margin: 0; font-size: 32px; line-height: 38px; font-weight: 700; color: var(--on-surface); }
        .urbanai .stat-card p { margin: 4px 0 0; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-surface-variant); }
        @media (min-width: 768px) { .urbanai .stat-card { text-align: left; } }

        /* Problem */
        .urbanai .section { padding-block: 96px; }
        .urbanai .section-intro { text-align: center; max-width: 48rem; margin: 0 auto 64px; }
        .urbanai .section-intro h2 { margin: 0 0 16px; color: var(--on-surface); }
        .urbanai .section-intro p { color: var(--on-surface-variant); margin: 0; }
        .urbanai .problem-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 768px) { .urbanai .problem-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .urbanai .problem-grid { grid-template-columns: repeat(4, 1fr); } }
        .urbanai .problem-card { padding: 24px; border-radius: 8px; display: flex; flex-direction: column; gap: 16px; transition: border-color 0.2s; }
        .urbanai .problem-card:hover { border-color: rgba(192,193,255,0.5); }
        .urbanai .problem-card h3 { margin: 0; color: var(--on-surface); }
        .urbanai .problem-card p { margin: 0; color: var(--on-surface-variant); }
        .urbanai .icon-badge { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background-color: var(--surface-container-highest); }

        /* Pipeline */
        .urbanai .pipeline-section { padding-block: 96px; background-color: var(--surface-container-lowest); position: relative; overflow: hidden; }
        .urbanai .pipeline-grid { display: grid; grid-template-columns: 1fr; gap: 16px; position: relative; z-index: 10; }
        @media (min-width: 768px) { .urbanai .pipeline-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1024px) { .urbanai .pipeline-grid { grid-template-columns: repeat(6, 1fr); } }
        .urbanai .pipeline-card { padding: 24px; border-radius: 8px; display: flex; flex-direction: column; gap: 12px; position: relative; overflow: hidden; min-height: 160px; }
        .urbanai .pipeline-card .bg-icon { position: absolute; top: 0; right: 0; padding: 16px; font-size: 60px; opacity: 0.1; }
        .urbanai .pipeline-card .step { font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.05em; }
        .urbanai .pipeline-card h4 { margin: 0; color: var(--on-surface); }
        .urbanai .pipeline-card p { margin-top: auto; font-size: 14px; color: var(--on-surface-variant); }
        .urbanai .pipeline-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 800px; height: 800px; background: rgba(192,193,255,0.05); border-radius: 50%; filter: blur(80px); pointer-events: none; }

        /* CTA */
        .urbanai .cta-panel {
          padding: 48px; border-radius: 16px; text-align: center; position: relative; overflow: hidden;
          border: 1px solid rgba(192,193,255,0.2); background-color: rgba(23,31,51,0.5);
        }
        .urbanai .cta-panel-glow { position: absolute; inset: 0; background: linear-gradient(to bottom right, rgba(192,193,255,0.1), transparent); pointer-events: none; }
        .urbanai .cta-content { position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 24px; }
        .urbanai .cta-content h2 { margin: 0; color: var(--on-surface); }
        .urbanai .cta-content p { margin: 0; max-width: 40rem; color: var(--on-surface-variant); }
        .urbanai .cta-ctas { display: flex; gap: 16px; margin-top: 8px; flex-wrap: wrap; justify-content: center; }

        /* Footer */
        .urbanai footer { background-color: var(--surface-container-lowest); border-top: 1px solid rgba(255,255,255,0.05); padding-block: 48px; }
        .urbanai .footer-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 768px) { .urbanai .footer-grid { grid-template-columns: repeat(4, 1fr); } }
        .urbanai .footer-col { display: flex; flex-direction: column; gap: 8px; }
        .urbanai .footer-brand { display: flex; align-items: center; gap: 8px; font-weight: 700; color: var(--primary); font-size: 20px; }
        .urbanai footer p, .urbanai footer a { color: var(--on-surface-variant); text-decoration: none; margin: 0; }
        .urbanai footer a:hover { color: var(--tertiary); }
        .urbanai .status-link { color: var(--secondary) !important; font-weight: 700; display: flex; align-items: center; gap: 8px; }
        .urbanai .status-dot { width: 8px; height: 8px; border-radius: 50%; background-color: var(--secondary); }
        .urbanai .footer-social { display: flex; gap: 16px; color: var(--on-surface-variant); }
        @media (min-width: 768px) { .urbanai .footer-social-col { align-items: flex-end; } }
        .urbanai .footer-social a:hover { color: var(--primary); }
      `}</style>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <div className="brand">
            <span className="icon fill">business</span>
            UrbanAI
          </div>
          <div className="nav-links">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#">Platform</a>
            <a className="nav-link" href="#">How It Works</a>
            <a className="nav-link" href="#">Technology</a>
          </div>
          <button className="btn btn-primary btn-nav neon-glow">Open Dashboard</button>
          <button className="nav-menu-btn">
            <span className="icon">menu</span>
          </button>
        </div>
      </nav>

      <main className="urbanai-main">
        {/* Hero Section */}
        <section className="container hero">
          <div className="hero-copy">
            <h1 className="type-headline-xl">
              See Your City.
              <br />
              <span className="accent">Understand It.</span>
              <br />
              Act on It.
            </h1>
            <p className="type-body-lg">
              Transform raw urban camera feeds into actionable GIS intelligence. Real-time monitoring for traffic,
              infrastructure, and safety.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary neon-glow" style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 32px" }}>
                Get Started <span className="icon" style={{ fontSize: 18 }}>arrow_forward</span>
              </button>
              <button className="btn btn-outline" style={{ padding: "12px 32px" }}>View Documentation</button>
            </div>
          </div>

          <div className="hero-visual glass-panel">
            <div
              className="hero-visual-bg"
              data-alt="A highly detailed, futuristic top-down view of a city grid illuminated by neon blue and electric indigo data streams, simulating real-time AI computer vision tracking vehicles and pedestrians against a dark slate background, conveying high-tech urban intelligence and smart city infrastructure monitoring."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJAWVUP361iG5jjRcA2_N3wh7uH-Wrh0DUfADCDgCjVPR0ZHOxFLH_BXpa69AqYf-gcxn_lDS1OdhgkKEfvwgPu-XGJubXDyGISDJPaM5SWeVmUv2gIrlpDBjTeIn9IffZjFow-m_h5DC8Ib4PO8mwgJvKxsvIb_GkfCAxGQSDE4fyDNWeMZvg9MSiH_ydPoSkisyGPnav2kEje9Q72eFNvdoSWmFRh75CBdE_C1A67HbNaMQsvEmL')",
              }}
            />
            <div className="hero-visual-fade" />

            <div className="live-feed-badge glass-panel">
              <div className="type-label" style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--primary)" }}>
                <span className="live-dot" /> LIVE FEED
              </div>
              <div className="type-data" style={{ color: "var(--secondary)" }}>NODE_ID: CAM-492-N</div>
              <div className="type-data" style={{ color: "var(--on-surface-variant)" }}>FPS: 30 | RES: 4K | LATENCY: 12ms</div>
            </div>

            <div className="detections-badge glass-panel">
              <div className="type-label" style={{ marginBottom: 4 }}>Detections Active</div>
              <div className="detections-row">
                <div>
                  <span className="type-headline-md" style={{ color: "var(--tertiary)" }}>142</span>
                  <span className="type-data" style={{ color: "var(--on-surface-variant)", textTransform: "uppercase" }}>Vehicles</span>
                </div>
                <div>
                  <span className="type-headline-md" style={{ color: "var(--secondary)" }}>38</span>
                  <span className="type-data" style={{ color: "var(--on-surface-variant)", textTransform: "uppercase" }}>Pedestrians</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="stats-section">
          <div className="container stats-grid">
            <div className="stat-card glass-panel">
              <span className="icon fill" style={{ color: "var(--primary)" }}>image</span>
              <h3>40K+</h3>
              <p className="type-label">Images Processed</p>
            </div>
            <div className="stat-card glass-panel">
              <span className="icon fill" style={{ color: "var(--secondary)" }}>schedule</span>
              <h3>24/7</h3>
              <p className="type-label">Continuous Monitoring</p>
            </div>
            <div className="stat-card glass-panel">
              <span className="icon fill" style={{ color: "var(--tertiary)" }}>visibility</span>
              <h3>AI</h3>
              <p className="type-label">Computer Vision</p>
            </div>
            <div className="stat-card glass-panel">
              <span className="icon fill" style={{ color: "var(--primary-container)" }}>map</span>
              <h3>GIS</h3>
              <p className="type-label">Spatial Intelligence</p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="container section">
          <div className="section-intro">
            <h2 className="type-headline-xl">
              Cities Generate Data.
              <br />
              But Data Alone Isn&apos;t Intelligence.
            </h2>
            <p className="type-body-lg">
              Unstructured camera feeds overwhelm operators. Critical events are missed. We turn pixels into structured,
              queryable databases.
            </p>
          </div>
          <div className="problem-grid">
            <div className="problem-card glass-panel">
              <div className="icon-badge" style={{ color: "var(--error)" }}>
                <span className="icon fill">traffic</span>
              </div>
              <h3 className="type-headline-md">Traffic Congestion</h3>
              <p className="type-body-md">Manual counting is obsolete. Understand flow dynamics and bottlenecks in real-time.</p>
            </div>
            <div className="problem-card glass-panel">
              <div className="icon-badge" style={{ color: "var(--secondary)" }}>
                <span className="icon fill">construction</span>
              </div>
              <h3 className="type-headline-md">Infrastructure Decay</h3>
              <p className="type-body-md">Detect potholes, broken streetlights, and degraded markings before citizens report them.</p>
            </div>
            <div className="problem-card glass-panel">
              <div className="icon-badge" style={{ color: "var(--secondary-container)" }}>
                <span className="icon fill">water_drop</span>
              </div>
              <h3 className="type-headline-md">Waterlogging</h3>
              <p className="type-body-md">Automated alerts for standing water during extreme weather events, mapping impact zones.</p>
            </div>
            <div className="problem-card glass-panel">
              <div className="icon-badge" style={{ color: "var(--tertiary)" }}>
                <span className="icon fill">security</span>
              </div>
              <h3 className="type-headline-md">Public Safety</h3>
              <p className="type-body-md">Identify anomalies, illegal dumping, or crowding without violating privacy standards.</p>
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="pipeline-section">
          <div className="container">
            <div className="section-intro">
              <h2 className="type-headline-xl">One Intelligence Layer for the Urban Environment</h2>
              <p className="type-body-lg">
                Our proprietary edge-to-cloud pipeline continuously ingests, analyzes, and spatializes urban visual data.
              </p>
            </div>

            <div className="pipeline-grid">
              <div className="pipeline-card glass-panel">
                <span className="icon bg-icon">videocam</span>
                <div className="step" style={{ color: "var(--primary)" }}>STEP 01</div>
                <h4 className="type-headline-md">Capture</h4>
                <p>Ingest diverse CCTV &amp; drone feeds.</p>
              </div>
              <div className="pipeline-card glass-panel" style={{ borderTop: "2px solid rgba(76,215,246,0.5)" }}>
                <span className="icon bg-icon">qr_code_scanner</span>
                <div className="step" style={{ color: "var(--secondary)" }}>STEP 02</div>
                <h4 className="type-headline-md">Detect</h4>
                <p>Identify 100+ object classes.</p>
              </div>
              <div className="pipeline-card glass-panel">
                <span className="icon bg-icon">timeline</span>
                <div className="step" style={{ color: "var(--tertiary)" }}>STEP 03</div>
                <h4 className="type-headline-md">Track</h4>
                <p>Maintain object continuity across frames.</p>
              </div>
              <div className="pipeline-card glass-panel" style={{ borderTop: "2px solid rgba(192,193,255,0.5)" }}>
                <span className="icon bg-icon">analytics</span>
                <div className="step" style={{ color: "var(--primary)" }}>STEP 04</div>
                <h4 className="type-headline-md">Analyze</h4>
                <p>Extract behavioral &amp; state data.</p>
              </div>
              <div className="pipeline-card glass-panel">
                <span className="icon bg-icon">my_location</span>
                <div className="step" style={{ color: "var(--secondary)" }}>STEP 05</div>
                <h4 className="type-headline-md">Locate</h4>
                <p>Project pixels to GIS coordinates.</p>
              </div>
              <div className="pipeline-card glass-panel" style={{ borderTop: "2px solid rgba(78,222,163,0.5)" }}>
                <span className="icon bg-icon">notifications_active</span>
                <div className="step" style={{ color: "var(--tertiary)" }}>STEP 06</div>
                <h4 className="type-headline-md">Alert</h4>
                <p>Trigger webhooks and dashboards.</p>
              </div>
            </div>
          </div>
          <div className="pipeline-glow" />
        </section>

        {/* Final CTA */}
        <section className="container section" style={{ textAlign: "center" }}>
          <div className="cta-panel">
            <div className="cta-panel-glow" />
            <div className="cta-content">
              <h2 className="type-headline-xl">
                Build a Safer, Smarter,
                <br />
                More Responsive City.
              </h2>
              <p className="type-body-lg">
                Deploy UrbanAI&apos;s intelligence layer on your existing infrastructure today. Start transforming video into
                valuable operational data.
              </p>
              <div className="cta-ctas">
                <button className="btn btn-primary lg neon-glow">Request a Demo</button>
                <button className="btn btn-outline lg">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <span className="icon fill">business</span>
              UrbanAI
            </div>
            <p>© 2024 UrbanAI Intelligence Systems. All rights reserved.</p>
          </div>
          <div className="footer-col">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="footer-col">
            <a href="#">API Documentation</a>
            <a className="status-link" href="#">
              <span className="status-dot" /> System Status: Operational
            </a>
          </div>
          <div className="footer-col footer-social-col" style={{ alignItems: "flex-end" }}>
            <div className="footer-social">
              <a href="#"><span className="icon">share</span></a>
              <a href="#"><span className="icon">mail</span></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}