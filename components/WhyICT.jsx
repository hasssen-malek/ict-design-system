/* global React */
const { useEffect: useEffectWhy, useRef: useRefWhy } = React;

const WHY_ITEMS = [
  {
    eye: "Delivery",
    h: "End-to-End Transformation Delivery",
    p: "From strategy and architecture to implementation and optimisation, ICT delivers complete transformation journeys with measurable business impact.",
  },
  {
    eye: "Local Depth",
    h: "Deep Local Expertise",
    p: "Strong understanding of Qatar's enterprise landscape combined with international best practices and global technology standards.",
  },
  {
    eye: "Resilience",
    h: "Enterprise-Grade Security & Resilience",
    p: "Security-first solutions designed to protect infrastructure, operations, and data while enabling innovation at scale.",
  },
  {
    eye: "Innovation",
    h: "Scalable AI & Cloud Innovation",
    p: "Modern cloud and AI capabilities built to support agility, operational efficiency, and future-ready digital ecosystems.",
  },
  {
    eye: "Partnership",
    h: "Long-Term Strategic Partnership",
    p: "We work as an extension of our clients' teams, focusing on long-term value creation, operational excellence, and sustainable growth.",
  },
];

/* ---------------------------------------------------------------
   Ambient network — drifting nodes connected by faint lines.
   --------------------------------------------------------------- */
function WhyNetwork() {
  const ref = useRefWhy(null);

  useEffectWhy(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const palette = ["#0098FF", "#612DF5", "#370FDD", "#FC7F40", "#8FB6FF"];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const N = 54;
    let w = 0, h = 0, nodes = [], raf = 0, visible = true;

    function resize() {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = Math.max(1, w * dpr);
      canvas.height = Math.max(1, h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function init() {
      nodes = new Array(N).fill(0).map((_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 0.7 + Math.random() * 1.8,
        c: palette[i % palette.length],
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      const g1 = ctx.createRadialGradient(w*0.18, h*0.25, 0, w*0.18, h*0.25, Math.max(w,h)*0.55);
      g1.addColorStop(0, "rgba(0,152,255,0.08)");
      g1.addColorStop(1, "rgba(10,9,30,0)");
      ctx.fillStyle = g1; ctx.fillRect(0,0,w,h);
      const g2 = ctx.createRadialGradient(w*0.82, h*0.75, 0, w*0.82, h*0.75, Math.max(w,h)*0.50);
      g2.addColorStop(0, "rgba(97,45,245,0.08)");
      g2.addColorStop(1, "rgba(10,9,30,0)");
      ctx.fillStyle = g2; ctx.fillRect(0,0,w,h);

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < -10) n.x = w + 10; if (n.x > w + 10) n.x = -10;
        if (n.y < -10) n.y = h + 10; if (n.y > h + 10) n.y = -10;
      }
      const max = 140;
      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx*dx + dy*dy;
          if (d2 < max*max) {
            const t = 1 - Math.sqrt(d2)/max;
            ctx.strokeStyle = `rgba(150,180,255,${t*0.13})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = n.c;
        ctx.shadowColor = n.c;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    }
    function loop() { if (visible) draw(); raf = requestAnimationFrame(loop); }

    resize(); init();
    if (reduced) draw(); else loop();

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);
    const io = new IntersectionObserver(
      (entries) => { for (const e of entries) visible = e.isIntersecting; },
      { threshold: 0 },
    );
    io.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, []);

  return <canvas ref={ref} className="why-cine__net" aria-hidden="true" />;
}

/* ---------------------------------------------------------------
   Section — simple 2-col layout, no scroll triggers.
   --------------------------------------------------------------- */
function WhyICT() {
  return (
    <section className="why-cine" id="expertise">
      <div className="why-cine__bg" aria-hidden="true">
        <WhyNetwork />
        <div className="why-cine__ray why-cine__ray--a" />
        <div className="why-cine__ray why-cine__ray--b" />
        <div className="why-cine__grid" />
        <div className="why-cine__vignette" />
      </div>

      <div className="container why-cine__container">
        <div className="why-cine__layout">
          <header className="why-cine__head reveal">
            <span className="eyebrow">Why ICT</span>
            <h2 className="why-cine__title">
              Why leading organisations{" "}
              <span className="spectrum-text">choose ICT</span>.
            </h2>
            <p className="why-cine__sub">
              We understand the pressure of operating at scale. Our approach
              combines deep technical expertise with practical business insight,
              delivering solutions that work in the real world.
            </p>
          </header>

          <ol className="why-cards" role="list">
            {WHY_ITEMS.map((it, i) => (
              <li key={i} className={"why-card reveal delay-" + Math.min(i + 1, 4)}>
                <span className="why-card__num">{String(i + 1).padStart(2, "0")}</span>
                <div className="why-card__body">
                  <span className="why-card__eye">{it.eye}</span>
                  <h3 className="why-card__h">{it.h}</h3>
                  <p className="why-card__p">{it.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

window.WhyICT = WhyICT;
