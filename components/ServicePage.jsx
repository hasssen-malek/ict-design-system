/* global React */
const { useEffect: useEffectSP } = React;

/* =================================================================
   SERVICE PAGE — orchestrator
   Reads data from `props.data` (one of window.SERVICES.*)
   Sections: Hero • Intro • Capabilities • Impact • Success Stories • CTA
   ================================================================= */

function CapIcon({ name }) {
  const s = { width: 26, height: 26, fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    // Cloud service
    case "compass":  return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5.5-5.5 2 2-5.5 5.5-2z"/></svg>;
    case "layers":   return <svg viewBox="0 0 24 24" {...s}><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 18l9 5 9-5"/></svg>;
    case "server":   return <svg viewBox="0 0 24 24" {...s}><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/></svg>;
    case "migrate":  return <svg viewBox="0 0 24 24" {...s}><path d="M3 9h14l-4-4"/><path d="M3 9l4 4"/><path d="M21 15H7l4 4"/><path d="M21 15l-4-4"/></svg>;
    // Cybersecurity
    case "shield":   return <svg viewBox="0 0 24 24" {...s}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>;
    case "radar":    return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><path d="M12 12L18 6"/><circle cx="18" cy="6" r="1.6" fill="currentColor" stroke="none"/></svg>;
    case "lock":     return <svg viewBox="0 0 24 24" {...s}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/><circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none"/></svg>;
    case "eye":      return <svg viewBox="0 0 24 24" {...s}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>;
    // AI
    case "bulb":     return <svg viewBox="0 0 24 24" {...s}><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c1 1 1.5 2 1.5 3.5h5c0-1.5.5-2.5 1.5-3.5A6 6 0 0 0 12 3z"/></svg>;
    case "cog":      return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1c0 .7.4 1.3 1 1.5a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8c.2.6.8 1 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>;
    case "chart":    return <svg viewBox="0 0 24 24" {...s}><path d="M3 21h18"/><rect x="6" y="12" width="3" height="7"/><rect x="11" y="8" width="3" height="11"/><rect x="16" y="4" width="3" height="15"/></svg>;
    case "plug":     return <svg viewBox="0 0 24 24" {...s}><path d="M9 2v4M15 2v4"/><path d="M7 6h10v5a5 5 0 0 1-10 0V6z"/><path d="M12 16v5"/></svg>;
    // Managed
    case "headset":  return <svg viewBox="0 0 24 24" {...s}><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M21 18v1a3 3 0 0 1-3 3h-3"/></svg>;
    case "stack":    return <svg viewBox="0 0 24 24" {...s}><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>;
    case "wrench":   return <svg viewBox="0 0 24 24" {...s}><path d="M14.7 6.3a4 4 0 0 1 5.3 5.3l-9.4 9.4a2 2 0 0 1-2.8-2.8l9.4-9.4"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/></svg>;
    case "report":   return <svg viewBox="0 0 24 24" {...s}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M9 17v-3M12 17v-5M15 17v-2"/></svg>;
    default:         return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="3"/></svg>;
  }
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}
function ServiceHero({ data }) {
  return (
    <section className="svhero" data-tint={data.tint}>
      <div className="svhero__bg" aria-hidden="true">
        <div className="svhero__bg-orb svhero__bg-orb--a" />
        <div className="svhero__bg-orb svhero__bg-orb--b" />
        <div className="svhero__bg-orb svhero__bg-orb--c" />
        <div className="svhero__bg-grid" />
        <div className="svhero__bg-vignette" />
      </div>

      <div className="container svhero__container">
        <div className="svhero__crumbs reveal">
          <a href="Homepage.html">Home</a>
          <span aria-hidden="true">/</span>
          <a href="Homepage.html#services">Our Services</a>
          <span aria-hidden="true">/</span>
          <span className="svhero__crumbs-current">{data.title}</span>
        </div>

        <div className="svhero__index reveal" aria-hidden="true">
          <span className="svhero__index-num">{data.number}</span>
          <span className="svhero__index-sep" />
          <span className="svhero__index-of">of 04</span>
        </div>

        <span className="eyebrow svhero__eyebrow reveal">{data.eyebrow}</span>

        <h1 className="svhero__title reveal delay-1">{data.title}</h1>

        <p className="svhero__sub reveal delay-2">{data.subtitle}</p>

        <div className="svhero__cta reveal delay-3">
          <a className="btn btn--gradient btn--lg" href="#contact">
            Schedule a consultation <span className="arrow">→</span>
          </a>
          <a className="btn btn--ghost btn--lg" href="#approach">
            Explore our approach <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Intro / Positioning ---------------- */
function ServiceIntro({ data }) {
  return (
    <section className="svintro section" id="approach">
      <div className="container">
        <div className="svintro__layout">
          <div className="svintro__left reveal">
            <span className="eyebrow">Our Approach</span>
            <h2 className="svintro__h">
              A pragmatic, business-led approach{" "}
              <span className="spectrum-text">engineered for outcomes</span>.
            </h2>
          </div>
          <div className="svintro__right reveal delay-1">
            {data.intro.map((para, i) => (
              <p key={i} className="svintro__p">{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Capabilities ---------------- */
function ServiceCapabilities({ data }) {
  return (
    <section className="svcaps section" id="capabilities" data-tint={data.tint}>
      <div className="container">
        <header className="svcaps__head reveal">
          <span className="eyebrow">What we deliver</span>
          <h2 className="svcaps__title">
            Capabilities built for{" "}
            <span className="spectrum-text">enterprise scale</span>.
          </h2>
          <p className="svcaps__sub">
            Four core capability areas that combine into the right approach for
            your environment, regulator, and stage of transformation.
          </p>
        </header>

        <ol className="svcaps__grid" role="list">
          {data.capabilities.map((c, i) => (
            <li key={i} className={"svcap reveal delay-" + Math.min(i + 1, 4)}>
              <span className="svcap__icon" aria-hidden="true"><CapIcon name={c.icon} /></span>
              <h3 className="svcap__h">{c.h}</h3>
              <p className="svcap__p">{c.p}</p>
              <span className="svcap__edge" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Impact ---------------- */
function ServiceImpact({ data }) {
  return (
    <section className="svimpact section" id="impact" data-tint={data.tint}>
      <div className="svimpact__bg" aria-hidden="true">
        <div className="svimpact__ray" />
        <div className="svimpact__bg-grid" />
      </div>
      <div className="container">
        <header className="svimpact__head reveal">
          <span className="eyebrow eyebrow--light">The impact we deliver</span>
          <h2 className="svimpact__title">
            Measurable outcomes, every engagement.
          </h2>
          <p className="svimpact__sub">
            We measure success in your KPIs — risk reduced, cost optimised,
            time-to-value compressed, and capability built into your team.
          </p>
        </header>

        <ul className="svimpact__grid" role="list">
          {data.impact.map((it, i) => (
            <li key={i} className={"svimpact__item reveal delay-" + Math.min(i + 1, 4)}>
              <span className="svimpact__check"><CheckIcon /></span>
              <span className="svimpact__text">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Success Stories (per-page condensed) ---------------- */
function ServiceStories() {
  const stories = [
    {
      img: "assets/story-finance.png",
      sector: "Financial Services",
      title: "Intelligent Investment Research Assistant",
      body: "Transforming fragmented investment data into AI-powered decision intelligence.",
      href: "Homepage.html#stories",
    },
    {
      img: "assets/story-education.png",
      sector: "Education & Research",
      title: "AI-Powered Unified Enterprise Search",
      body: "Unlocking knowledge across fragmented systems through intelligent AI-driven discovery and semantic search.",
      href: "Homepage.html#stories",
    },
    {
      img: "assets/story-publicsector.png",
      sector: "Public Sector",
      title: "Modernising the Data Center with Hybrid Cloud",
      body: "Extending on-premises infrastructure to the cloud while preserving security, governance, and continuity.",
      href: "Homepage.html#stories",
    },
  ];

  return (
    <section className="svstories section" id="stories">
      <div className="container">
        <header className="svstories__head reveal">
          <span className="eyebrow">Success Stories</span>
          <h2 className="svstories__title">
            Delivering measurable impact{" "}
            <span className="spectrum-text">across industries</span>.
          </h2>
          <p className="svstories__sub">
            Digital transformation demands more than technology. It requires a
            partner who understands your business, anticipates market shifts,
            and delivers results that matter. ICT brings the expertise,
            commitment, and local knowledge to make it happen.
          </p>
        </header>

        <div className="svstories__grid">
          {stories.map((s, i) => (
            <a key={i} className={"svstory reveal delay-" + (i + 1)} href={s.href}>
              <div className="svstory__media">
                <img src={s.img} alt="" loading="lazy" />
                <div className="svstory__shade" />
                <span className="svstory__chip">{s.sector}</span>
              </div>
              <div className="svstory__body">
                <h3 className="svstory__h">{s.title}</h3>
                <p className="svstory__p">{s.body}</p>
                <span className="svstory__cta">
                  View Case Study <ArrowRight />
                </span>
              </div>
              <span className="svstory__ring" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function ServiceCTA() {
  return (
    <section className="svcta" id="contact">
      <div className="svcta__inner reveal">
        <div className="svcta__bg" />
        <div className="svcta__bg-orb svcta__bg-orb--a" />
        <div className="svcta__bg-orb svcta__bg-orb--b" />
        <div className="svcta__grid" />

        <span className="eyebrow eyebrow--light">Let's build what's next</span>
        <h2 className="svcta__title">Let's transform the future together.</h2>
        <p className="svcta__sub">
          Behind every solution is a team of innovators shaping tomorrow.
          Our journey doesn't end with today's success — it continues with
          our clients as we build the digital future together.
        </p>
        <div className="svcta__buttons">
          <a className="btn btn--white btn--lg" href="#contact">
            Schedule a consultation <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page composer ---------------- */
function ServicePage({ data }) {
  // Update document title once mounted
  useEffectSP(() => {
    const old = document.title;
    document.title = data.title + " — ICT";
    return () => { document.title = old; };
  }, [data]);

  return (
    <>
      <ServiceHero        data={data} />
      <ServiceIntro       data={data} />
      <ServiceCapabilities data={data} />
      <ServiceImpact      data={data} />
      <ServiceStories />
      <ServiceCTA />
    </>
  );
}

window.ServicePage = ServicePage;
