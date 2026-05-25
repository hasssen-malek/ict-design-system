/* global React */
function TrustedBy() {
  // monochrome wordmark-style logos rendered as inline SVG/text
  const logos = [
    { name: "Qatar Energy", glyph: "spark" },
    { name: "Ooredoo", glyph: "circle-arc" },
    { name: "Ministry of Finance", glyph: "shield" },
    { name: "Hamad Medical", glyph: "cross" },
    { name: "Qatar Airways", glyph: "wing" },
    { name: "Doha Bank", glyph: "diamond" },
    { name: "Mowasalat", glyph: "triangle" },
    { name: "Education City", glyph: "hex" },
  ];

  const Glyph = ({ kind }) => {
    const s = { width: 22, height: 22, fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };
    switch (kind) {
      case "spark":      return <svg viewBox="0 0 24 24" {...s}><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"/></svg>;
      case "circle-arc": return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M3 12a9 9 0 0 1 9-9"/></svg>;
      case "shield":     return <svg viewBox="0 0 24 24" {...s}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/></svg>;
      case "cross":      return <svg viewBox="0 0 24 24" {...s}><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/></svg>;
      case "wing":       return <svg viewBox="0 0 24 24" {...s}><path d="M3 18C7 9 14 5 21 5c-2 8-7 13-15 14z"/><path d="M9 14l3-3"/></svg>;
      case "diamond":    return <svg viewBox="0 0 24 24" {...s}><path d="M12 3l9 9-9 9-9-9z"/><path d="M3 12h18M12 3v18"/></svg>;
      case "triangle":   return <svg viewBox="0 0 24 24" {...s}><path d="M12 3l10 18H2z"/><path d="M12 9v8"/></svg>;
      case "hex":        return <svg viewBox="0 0 24 24" {...s}><path d="M12 2l9 5v10l-9 5-9-5V7z"/></svg>;
      default: return null;
    }
  };

  // duplicate the list to make the marquee loop seamlessly
  const row = [...logos, ...logos];

  return (
    <section className="trusted">
      <div className="trusted__inner">
        <div className="trusted__label reveal">Trusted by organisations shaping Qatar&apos;s digital future</div>
        <div className="trusted__strip reveal delay-1">
          <div className="trusted__row">
            {row.map((l, i) => (
              <span key={i} className="trusted__logo" aria-label={l.name}>
                <Glyph kind={l.glyph} />
                <span>{l.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.TrustedBy = TrustedBy;
