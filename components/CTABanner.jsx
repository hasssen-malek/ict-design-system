/* global React */
function CTABanner() {
  return (
    <section className="cta" id="contact">
      <div className="cta__inner reveal">
        <div className="cta__bg" />
        <div className="cta__bg-orb cta__bg-orb--a" />
        <div className="cta__bg-orb cta__bg-orb--b" />
        <div className="cta__grid" />

        <span className="eyebrow eyebrow--light">Let&apos;s build what&apos;s next</span>
        <h2 className="cta__title">Let&apos;s transform the future together.</h2>
        <p className="cta__sub">
          Behind every solution is a team of innovators shaping tomorrow.
          Our journey doesn&apos;t end with today&apos;s success &mdash; it continues with
          our clients as we build the digital future together.
        </p>
        <div className="cta__buttons">
          <a className="btn btn--white btn--lg" href="#contact">
            Schedule a consultation <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

window.CTABanner = CTABanner;
