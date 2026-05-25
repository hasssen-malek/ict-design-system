/* global React */
const { useEffect: useEffectFooter } = React;

function Footer() {
  useEffectFooter(() => {
    if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.6 } });
  });

  const cols = [
    {
      h: "Services",
      links: [
        { label: "Cloud & Infrastructure Transformation", href: "Cloud-Infrastructure-Transformation.html" },
        { label: "Cybersecurity & Digital Resilience",    href: "Cybersecurity-Digital-Resilience.html" },
        { label: "AI & Intelligent Automation",           href: "AI-Intelligent-Automation.html" },
        { label: "Managed & Support Services",            href: "Managed-Support-Services.html" },
      ],
    },
    {
      h: "Success Stories",
      links: [
        { label: "Intelligent Investment Research Assistant", href: "Homepage.html#stories" },
        { label: "AI-Powered Unified Enterprise Search",      href: "Homepage.html#stories" },
        { label: "Modernising the Data Center with Hybrid Cloud", href: "Homepage.html#stories" },
      ],
    },
    {
      h: "Company",
      links: [
        { label: "Home",       href: "Homepage.html" },
        { label: "About",      href: "Homepage.html#about" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="footer" id="about">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <a className="footer__logo" href="Homepage.html" aria-label="ICT home">
              <img src="assets/ict-logo-mixed.png" alt="ICT" />
            </a>
            <p className="footer__tag">
              Qatar&apos;s partner for enterprise transformation &mdash; cloud,
              cybersecurity, AI, and managed services, engineered for scale.
            </p>
            <div className="footer__contact">
              <strong>Doha HQ</strong>
              Lusail Boulevard, West Bay, Doha, Qatar
            </div>
            <div className="footer__contact">
              <strong>Talk to us</strong>
              hello@ict.qa &nbsp;·&nbsp; +974 4000 0000
            </div>
            <div className="footer__social" aria-label="ICT on social">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55A.55.55 0 0 0 20.45 3zM8.34 18.34H5.67V9.75h2.67v8.59zM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.76h-2.67v-4.18c0-1 0-2.28-1.39-2.28s-1.6 1.08-1.6 2.21v4.25H10V9.75h2.56v1.18h.04a2.81 2.81 0 0 1 2.53-1.39c2.71 0 3.21 1.78 3.21 4.1v4.7z" />
                </svg>
              </a>
              <a href="#" aria-label="X">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.5 6.5a3 3 0 0 0-2.1-2.12C19.55 4 12 4 12 4s-7.55 0-9.4.38A3 3 0 0 0 .5 6.5C.12 8.35.12 12 .12 12s0 3.65.38 5.5a3 3 0 0 0 2.1 2.12C4.45 20 12 20 12 20s7.55 0 9.4-.38a3 3 0 0 0 2.1-2.12c.38-1.85.38-5.5.38-5.5s0-3.65-.38-5.5zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__cols">
            {cols.map((c) => (
              <div key={c.h} className="footer__col">
                <div className="footer__h">{c.h}</div>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.label}><a href={l.href}>{l.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bot">
          <div>© {new Date().getFullYear()} ICT Qatar. All rights reserved.</div>
          <div className="footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">Modern Slavery</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
