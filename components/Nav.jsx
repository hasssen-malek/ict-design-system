/* global React */
const { useState: useStateNav, useEffect: useEffectNav, useRef: useRefNav } = React;

const NAV_ITEMS = [
  {
    id: "services",
    label: "Our Services",
    href: "#services",
    panel: {
      heading: "Our Services",
      caption: "End-to-end transformation across cloud, security, AI, and operations.",
      links: [
        {
          h: "Cloud & Infrastructure Transformation",
          p: "Modernise core platforms with sovereign and hybrid cloud architectures.",
          href: "Cloud-Infrastructure-Transformation.html",
        },
        {
          h: "Cybersecurity & Digital Resilience",
          p: "24×7 SOC, threat intelligence, identity, and incident response.",
          href: "Cybersecurity-Digital-Resilience.html",
        },
        {
          h: "AI & Intelligent Automation",
          p: "Enterprise AI — fine-tuned, governed, and deployed on infrastructure you control.",
          href: "AI-Intelligent-Automation.html",
        },
        {
          h: "Managed & Support Services",
          p: "Operate mission-critical workloads with white-glove managed support.",
          href: "Managed-Support-Services.html",
        },
      ],
    },
  },
  {
    id: "stories",
    label: "Success Stories",
    href: "#stories",
    panel: {
      heading: "Success Stories",
      caption: "Programmes we've shipped with Qatar's leading enterprises.",
      links: [
        {
          h: "Intelligent Investment Research Assistant",
          p: "Financial services · Arabic-first decision intelligence with citations.",
          href: "Homepage.html#stories",
        },
        {
          h: "AI-Powered Unified Enterprise Search",
          p: "Education & research · Semantic discovery across fragmented systems.",
          href: "Homepage.html#stories",
        },
        {
          h: "Modernising the Data Center with Hybrid Cloud",
          p: "Public sector · Sovereign cloud landing zone with zero unplanned downtime.",
          href: "Homepage.html#stories",
        },
      ],
    },
  },
  { id: "partners", label: "Partners", href: "Homepage.html#partners" },
  { id: "about",    label: "About Us", href: "Homepage.html#about" },
];

function NavCaret() {
  return (
    <svg className="nav__caret" viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4.5l3 3 3-3" />
    </svg>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useStateNav(false);
  const [openId, setOpenId]     = useStateNav(null);
  const [mobileOpen, setMobileOpen] = useStateNav(false);
  const closeTimerRef = useRefNav(null);

  useEffectNav(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffectNav(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { setOpenId(null); setMobileOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffectNav(() => {
    const original = document.documentElement.style.overflow;
    document.documentElement.style.overflow = mobileOpen ? "hidden" : original || "";
    return () => { document.documentElement.style.overflow = original || ""; };
  }, [mobileOpen]);

  const openPanel = (id) => {
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; }
    setOpenId(id);
  };
  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenId(null), 140);
  };

  return (
    <div className={"nav-wrap" + (scrolled ? " is-scrolled" : "") + (openId ? " is-panel-open" : "")}>
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <a href="Homepage.html" className="nav__logo" aria-label="ICT — home">
            <img src="assets/ict-logo-mixed.png" alt="ICT" className="nav__logoimg" />
          </a>

          <ul className="nav__links" role="menubar">
            {NAV_ITEMS.map((item) => {
              const hasPanel = !!item.panel;
              const isOpen = openId === item.id;
              return (
                <li
                  key={item.id}
                  className={"nav__item" + (hasPanel ? " nav__item--has-panel" : "") + (isOpen ? " is-open" : "")}
                  onMouseEnter={() => hasPanel && openPanel(item.id)}
                  onMouseLeave={() => hasPanel && scheduleClose()}
                >
                  <a
                    href={item.href}
                    className="nav__link"
                    aria-haspopup={hasPanel ? "true" : undefined}
                    aria-expanded={hasPanel ? isOpen : undefined}
                    onClick={(e) => {
                      if (!hasPanel) return;
                      // Toggle on click for keyboard/touch users
                      e.preventDefault();
                      setOpenId(isOpen ? null : item.id);
                    }}
                  >
                    <span>{item.label}</span>
                    {hasPanel ? <NavCaret /> : null}
                  </a>

                  {hasPanel && isOpen ? (
                    <div
                      className="nav__panel"
                      role="menu"
                      onMouseEnter={() => openPanel(item.id)}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="nav__panel-head">
                        <span className="nav__panel-eye">{item.panel.heading}</span>
                        <p className="nav__panel-cap">{item.panel.caption}</p>
                      </div>
                      <ul className="nav__panel-list">
                        {item.panel.links.map((l) => (
                          <li key={l.h}>
                            <a className="nav__panel-link" href={l.href} role="menuitem" onClick={() => setOpenId(null)}>
                              <span className="nav__panel-link-h">{l.h}</span>
                              <span className="nav__panel-link-p">{l.p}</span>
                              <span className="nav__panel-link-arrow" aria-hidden="true">→</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <a className="nav__cta" href="#contact">
            <span>Get in Touch</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>

          <button
            className={"nav__burger" + (mobileOpen ? " is-open" : "")}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="nav-mobile"
            onClick={() => setMobileOpen((v) => !v)}
            type="button"
          >
            <span /><span /><span />
          </button>
        </nav>
      </div>

      {/* Mobile slide-in */}
      <div
        id="nav-mobile"
        className={"nav-mobile" + (mobileOpen ? " is-open" : "")}
        aria-hidden={!mobileOpen}
      >
        <div className="nav-mobile__scrim" onClick={() => setMobileOpen(false)} />
        <aside className="nav-mobile__sheet" role="dialog" aria-modal="true" aria-label="Site navigation">
          <div className="nav-mobile__head">
            <a href="Homepage.html" className="nav__logo" onClick={() => setMobileOpen(false)} aria-label="ICT — home">
              <img src="assets/ict-logo-mixed.png" alt="ICT" className="nav__logoimg" />
            </a>
            <button
              className="nav-mobile__close"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              type="button"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="nav-mobile__body" aria-label="Mobile primary">
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="nav-mobile__group">
                <a className="nav-mobile__link" href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
                {item.panel ? (
                  <ul className="nav-mobile__sub">
                    {item.panel.links.map((l) => (
                      <li key={l.h}>
                        <a href={l.href} className="nav-mobile__sublink" onClick={() => setMobileOpen(false)}>
                          {l.h}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="nav-mobile__foot">
            <a className="btn btn--gradient btn--lg nav-mobile__cta" href="#contact" onClick={() => setMobileOpen(false)}>
              Get in Touch <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

window.Nav = Nav;
