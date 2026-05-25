/* global React, lucide */
const { useEffect: useEffectSvc } = React;

function Services() {
  useEffectSvc(() => {
    if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.4 } });
  });

  const services = [
    {
      no: "01",
      icon: "cloud",
      tint: "blue",
      title: "Cloud & Infrastructure Transformation",
      body: "Modernise core platforms with sovereign and hybrid cloud architectures engineered for in-country residency, performance, and continuous scale.",
      href: "Cloud-Infrastructure-Transformation.html",
    },
    {
      no: "02",
      icon: "shield-check",
      tint: "violet",
      title: "Cybersecurity & Digital Resilience",
      body: "Harden your security posture with a 24×7 SOC in Doha, threat intelligence, identity, and incident response built around Qatari regulation.",
      href: "Cybersecurity-Digital-Resilience.html",
    },
    {
      no: "03",
      icon: "brain-circuit",
      tint: "magenta",
      title: "AI & Intelligent Automation",
      body: "Fine-tune, deploy, and govern enterprise AI &mdash; Arabic-first &mdash; on infrastructure you control, with measurable productivity outcomes.",
      href: "AI-Intelligent-Automation.html",
    },
    {
      no: "04",
      icon: "life-buoy",
      tint: "orange",
      title: "Managed & Support Services",
      body: "End-to-end managed services, observability, and white-glove support engineered to keep mission-critical workloads available and compliant.",
      href: "Managed-Support-Services.html",
    },
  ];

  return (
    <section className="section services" id="services">
      <div className="services__bg" />
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Our Services</span>
          <h2 className="section-title">
            A strategic partner for{" "}
            <span className="spectrum-text">enterprise transformation</span>.
          </h2>
          <p className="section-sub">
            From strategy to execution, ICT delivers the platforms, security,
            and intelligence that move regulated enterprises from intent to
            measurable outcomes.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <a
              key={s.no}
              href={s.href}
              className={"svc-card reveal delay-" + (i + 1)}
              data-tint={s.tint}
            >
              <span className="svc-card__no">{s.no}</span>
              <div className="svc-card__icon">
                <i data-lucide={s.icon} />
              </div>
              <h3 className="svc-card__title">{s.title}</h3>
              <p className="svc-card__body" dangerouslySetInnerHTML={{ __html: s.body }} />
              <span className="svc-card__link">
                Discover <span className="arrow">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Services = Services;
