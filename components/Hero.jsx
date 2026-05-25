/* global React */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" />
      <div className="hero__conic" aria-hidden="true" />
      <div className="hero__grid" />
      <div className="hero__sparkles" aria-hidden="true">
        <svg viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {/* sparkle field — tileable so it can drift seamlessly */}
          <g className="hero__sparkles-drift">
            {[
              [120, 140, 1.6, "#9CD0FF"], [380, 320, 1.2, "#B7A0FF"],
              [640, 200, 1.8, "#FFA0DD"], [900, 360, 1.4, "#FFB28A"],
              [1180, 220, 1.0, "#9CD0FF"], [1400, 380, 1.6, "#B7A0FF"],
              [260, 540, 1.3, "#FFA0DD"], [780, 660, 1.7, "#9CD0FF"],
              [1100, 580, 1.2, "#FFB28A"], [1500, 700, 1.5, "#B7A0FF"],
              [200, 80, 1.0, "#9CD0FF"], [520, 460, 1.4, "#B7A0FF"],
              [840, 100, 1.2, "#FFA0DD"], [1240, 480, 1.5, "#9CD0FF"],
              [60, 380, 1.3, "#FFB28A"], [340, 700, 1.0, "#B7A0FF"],
            ].map(([x, y, r, c], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r={r} fill={c} opacity="0.85"/>
                <circle cx={x + 1600} cy={y} r={r} fill={c} opacity="0.85"/>
              </g>
            ))}
          </g>
        </svg>
      </div>
      <div className="hero__noise" />
      <div className="hero__orb hero__orb--a" />
      <div className="hero__orb hero__orb--b" />
      <div className="hero__orb hero__orb--c" />

      <div className="hero__inner">
        <div className="pill reveal">
          <span className="pill__dot" />
          Trusted by leading enterprises across Qatar
        </div>

        <h1 className="hero__title reveal delay-1">
          Turn technology complexity into{" "}
          <span className="spectrum-text">competitive advantage</span>.
        </h1>

        <p className="hero__sub reveal delay-2">
          We partner with leading organisations in Qatar to design, secure,
          and scale intelligent digital ecosystems &mdash; powered by cloud,
          AI, and cyber resilience.
        </p>

        <div className="hero__cta reveal delay-3">
          <a className="btn btn--gradient btn--lg" href="#contact">
            Schedule a consultation <span className="arrow">→</span>
          </a>
          <a className="btn btn--ghost btn--lg" href="#stories">
            Read our success stories
          </a>
        </div>

        <div className="hero__meta reveal delay-4">
          <span className="hero__meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
            ISO 27001 certified
          </span>
          <span className="hero__meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l3-9 4 18 4-12 3 6h4"/></svg>
            99.99% uptime SLA
          </span>
          <span className="hero__meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5-4.5 8-8.5 8-13a8 8 0 1 0-16 0c0 4.5 3 8.5 8 13z"/><circle cx="12" cy="9" r="3"/></svg>
            HQ in Doha, Qatar
          </span>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
