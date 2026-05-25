/* global React */

/* ---------------------------------------------------------
   Immersive enterprise visuals for the three Success Stories.
   Each is an inline SVG vignette — built around the ICT spectrum
   palette — designed to feel like a frame of an enterprise product.
   --------------------------------------------------------- */

function FinanceArt() {
  return (
    <svg viewBox="0 0 1600 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="fin-amb-1" cx="20%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#0098FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0A091E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fin-amb-2" cx="78%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#CC47AB" stopOpacity="0.50" />
          <stop offset="100%" stopColor="#0A091E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fin-amb-3" cx="60%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#612DF5" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#0A091E" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fin-line-cool" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0098FF" stopOpacity="0" />
          <stop offset="40%" stopColor="#0098FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#612DF5" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="fin-line-warm" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#CC47AB" stopOpacity="0" />
          <stop offset="50%" stopColor="#FC7F40" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF2A68" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="fin-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#612DF5" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#612DF5" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1600" height="720" fill="#0A091E" />
      <rect width="1600" height="720" fill="url(#fin-amb-1)" />
      <rect width="1600" height="720" fill="url(#fin-amb-2)" />
      <rect width="1600" height="720" fill="url(#fin-amb-3)" />

      {/* faint hex grid */}
      <g opacity="0.10" stroke="#fff" strokeWidth="0.8" fill="none">
        {Array.from({ length: 14 }).map((_, r) =>
        Array.from({ length: 22 }).map((__, c) => {
          const x = c * 80 + (r % 2 ? 40 : 0);
          const y = r * 64;
          return <path key={`${r}-${c}`} d={`M${x} ${y} l40 -22 l40 22 l0 44 l-40 22 l-40 -22 z`} />;
        })
        )}
      </g>

      {/* terminal / research pane on the left */}
      <g transform="translate(60,80)">
        <rect width="540" height="560" rx="22" fill="rgba(10,9,30,0.55)" stroke="rgba(255,255,255,0.10)" />
        <rect x="0" y="0" width="540" height="48" rx="22" fill="rgba(255,255,255,0.04)" />
        <circle cx="22" cy="24" r="5" fill="#FF5F57" />
        <circle cx="42" cy="24" r="5" fill="#FEBC2E" />
        <circle cx="62" cy="24" r="5" fill="#28C840" />
        <rect x="180" y="16" width="200" height="16" rx="8" fill="rgba(255,255,255,0.08)" />
        {/* prompt */}
        <g transform="translate(28,80)">
          <rect width="484" height="84" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
          <circle cx="26" cy="42" r="10" fill="url(#fin-line-cool)" />
          <rect x="48" y="22" width="380" height="9" rx="4" fill="rgba(255,255,255,0.75)" />
          <rect x="48" y="40" width="320" height="8" rx="4" fill="rgba(255,255,255,0.40)" />
          <rect x="48" y="56" width="220" height="8" rx="4" fill="rgba(255,255,255,0.28)" />
        </g>
        {/* response w/ citation chips */}
        <g transform="translate(28,200)">
          <rect width="484" height="200" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
          {[0, 1, 2, 3, 4, 5].map((i) =>
          <rect key={i} x="20" y={20 + i * 24} width={i === 5 ? 280 : 340 + i * 23 % 140} height="8" rx="4"
          fill={`rgba(255,255,255,${0.55 - i * 0.06})`} />
          )}
          {/* citation chips */}
          <g transform="translate(20,168)">
            {["[Filing]", "[Memo]", "[Earnings]"].map((t, i) =>
            <g key={i} transform={`translate(${i * 108},0)`}>
                <rect width="96" height="22" rx="11" fill="rgba(0,152,255,0.18)" stroke="rgba(0,152,255,0.45)" />
                <text x="48" y="15" fontFamily="Space Grotesk, system-ui" fontSize="11" fill="#9CD0FF" textAnchor="middle" letterSpacing="0.5">{t}</text>
              </g>
            )}
          </g>
        </g>
        {/* metrics row */}
        <g transform="translate(28,430)">
          {[
          ["Coverage", "+82%", "#9CD0FF"],
          ["Throughput", "3.4×", "#B7A0FF"],
          ["Latency", "−71%", "#FFA0DD"]].
          map(([k, v, c], i) =>
          <g key={i} transform={`translate(${i * 162},0)`}>
              <rect width="146" height="100" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
              <text x="16" y="36" fontFamily="Space Grotesk, system-ui" fontSize="11" letterSpacing="2" fill="rgba(255,255,255,0.5)">{k.toUpperCase()}</text>
              <text x="16" y="74" fontFamily="Poppins, system-ui" fontWeight="700" fontSize="28" fill={c}>{v}</text>
            </g>
          )}
        </g>
      </g>

      {/* candlestick + analytics column right */}
      <g transform="translate(660,80)">
        <rect width="880" height="560" rx="22" fill="rgba(10,9,30,0.50)" stroke="rgba(255,255,255,0.10)" />
        {/* header */}
        <g transform="translate(28,28)">
          <text x="0" y="0" fontFamily="Space Grotesk, system-ui" fontSize="11" letterSpacing="2.5" fill="rgba(255,255,255,0.55)">PORTFOLIO · LIVE</text>
          <text x="0" y="28" fontFamily="Poppins, system-ui" fontWeight="600" fontSize="22" fill="#fff">Energy &amp; Industrials — YTD</text>
        </g>
        {/* legend */}
        <g transform="translate(660,32)">
          {[["#9CD0FF", "Bench"], ["#FFA0DD", "Alpha"], ["#FFB28A", "Vol"]].map(([c, l], i) =>
          <g key={i} transform={`translate(${i * 72},0)`}>
              <circle cx="6" cy="6" r="4" fill={c} />
              <text x="16" y="10" fontFamily="Space Grotesk, system-ui" fontSize="11" fill="rgba(255,255,255,0.65)">{l}</text>
            </g>
          )}
        </g>

        {/* grid background */}
        <g transform="translate(28,90)" stroke="rgba(255,255,255,0.06)">
          {Array.from({ length: 7 }).map((_, i) => <line key={i} x1="0" y1={i * 60} x2="824" y2={i * 60} />)}
          {Array.from({ length: 11 }).map((_, i) => <line key={i} x1={i * 82} y1="0" x2={i * 82} y2="360" />)}
        </g>

        {/* y-axis labels */}
        <g transform="translate(28,90)" fontFamily="Space Grotesk, system-ui" fontSize="10" fill="rgba(255,255,255,0.45)">
          {["+24%", "+16%", "+8%", "0%", "-8%", "-16%"].map((t, i) =>
          <text key={i} x="-6" y={i * 60 + 4} textAnchor="end">{t}</text>
          )}
        </g>

        {/* area under trend */}
        <g transform="translate(28,90)">
          <path d="M0 280 C 120 240, 220 220, 320 200 S 520 150, 640 110 S 780 60, 824 40 L 824 360 L 0 360 Z" fill="url(#fin-area)" opacity="0.7" />
          {/* trendline */}
          <path d="M0 280 C 120 240, 220 220, 320 200 S 520 150, 640 110 S 780 60, 824 40"
          fill="none" stroke="url(#fin-line-cool)" strokeWidth="2.5" />
          {/* secondary warm trend */}
          <path d="M0 230 C 140 250, 240 200, 340 180 S 540 220, 660 170 S 800 130, 824 110"
          fill="none" stroke="url(#fin-line-warm)" strokeWidth="2" opacity="0.85" />
          {/* candlesticks */}
          {Array.from({ length: 36 }).map((_, i) => {
            const x = 12 + i * 22.5;
            const open = 200 + Math.sin(i * 0.7) * 50 + (i * 53 % 40 - 20);
            const close = open + (Math.cos(i * 0.9) * 30 + (i * 29 % 30 - 15));
            const high = Math.min(open, close) - 14;
            const low = Math.max(open, close) + 14;
            const bull = close < open;
            const c = bull ? "#2ED98C" : "#FF5F7A";
            return (
              <g key={i}>
                <line x1={x} y1={high} x2={x} y2={low} stroke={c} strokeOpacity="0.7" strokeWidth="1" />
                <rect x={x - 4} y={Math.min(open, close)} width="8" height={Math.abs(close - open) + 1} fill={c} opacity="0.75" />
              </g>);

          })}
          {/* highlight node */}
          <g transform="translate(640,110)">
            <circle r="18" fill="#0098FF" opacity="0.15" />
            <circle r="6" fill="#fff" />
            <g transform="translate(14,-44)">
              <rect width="120" height="34" rx="8" fill="rgba(10,9,30,0.85)" stroke="rgba(255,255,255,0.18)" />
              <text x="14" y="14" fontFamily="Space Grotesk, system-ui" fontSize="10" letterSpacing="1.5" fill="rgba(255,255,255,0.55)">ALPHA SIGNAL</text>
              <text x="14" y="28" fontFamily="Poppins, system-ui" fontWeight="600" fontSize="13" fill="#fff">+3.6σ</text>
            </g>
          </g>
        </g>

        {/* bottom KPI strip */}
        <g transform="translate(28,470)">
          {[
          ["AUM analysed", "QAR 14.2B"],
          ["Companies", "1,840"],
          ["Filings ingested", "62k"],
          ["Languages", "AR · EN"]].
          map(([k, v], i) =>
          <g key={i} transform={`translate(${i * 210},0)`}>
              <rect width="190" height="64" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.10)" />
              <text x="16" y="24" fontFamily="Space Grotesk, system-ui" fontSize="10" letterSpacing="2" fill="rgba(255,255,255,0.5)">{k.toUpperCase()}</text>
              <text x="16" y="48" fontFamily="Poppins, system-ui" fontWeight="600" fontSize="18" fill="#fff">{v}</text>
            </g>
          )}
        </g>
      </g>
    </svg>);

}

function SearchArt() {
  return (
    <svg viewBox="0 0 900 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="srch-amb-1" cx="30%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#0098FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0A091E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="srch-amb-2" cx="80%" cy="80%" r="55%">
          <stop offset="0%" stopColor="#612DF5" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0A091E" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="srch-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0098FF" stopOpacity="0.0" />
          <stop offset="50%" stopColor="#0098FF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#CC47AB" stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id="srch-hub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#612DF5" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#370FDD" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="900" height="640" fill="#0A091E" />
      <rect width="900" height="640" fill="url(#srch-amb-1)" />
      <rect width="900" height="640" fill="url(#srch-amb-2)" />

      {/* search bar */}
      <g transform="translate(110,80)">
        <rect width="680" height="64" rx="32" fill="rgba(10,9,30,0.70)" stroke="rgba(255,255,255,0.16)" />
        <g transform="translate(28,22)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none" strokeLinecap="round">
          <circle cx="10" cy="10" r="8" />
          <line x1="16" y1="16" x2="22" y2="22" />
        </g>
        <rect x="72" y="28" width="360" height="9" rx="4" fill="rgba(255,255,255,0.85)" />
        <rect x="72" y="40" width="240" height="7" rx="3" fill="rgba(255,255,255,0.35)" />
        <g transform="translate(580,16)">
          <rect width="84" height="32" rx="16" fill="rgba(97,45,245,0.30)" stroke="rgba(97,45,245,0.55)" />
          <text x="42" y="20" fontFamily="Space Grotesk, system-ui" fontSize="11" letterSpacing="2" fill="#C4B0FF" textAnchor="middle">AI · SEARCH</text>
        </g>
      </g>

      {/* knowledge graph */}
      <g transform="translate(450,360)">
        {/* edges */}
        {[
        [-220, -130], [-260, 40], [-160, 160], [40, 200], [200, 150], [270, -30], [180, -180], [-30, -220],
        [-120, -40], [110, 40], [-60, 80], [60, -90]].
        map(([x, y], i) =>
        <line key={i} x1="0" y1="0" x2={x} y2={y} stroke="url(#srch-edge)" strokeOpacity={0.55 - i % 4 * 0.08} strokeWidth="1.4" />
        )}
        {/* inter-node edges */}
        <g stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none">
          <path d="M-220 -130 Q -180 -200 -30 -220" />
          <path d="M-30 -220 Q 100 -240 180 -180" />
          <path d="M180 -180 Q 260 -120 270 -30" />
          <path d="M270 -30 Q 260 90 200 150" />
          <path d="M200 150 Q 130 210 40 200" />
          <path d="M40 200 Q -80 220 -160 160" />
          <path d="M-160 160 Q -260 110 -260 40" />
          <path d="M-260 40 Q -270 -60 -220 -130" />
        </g>

        {/* hub */}
        <circle r="48" fill="url(#srch-hub)" />
        <circle r="14" fill="#fff" />
        <text y="76" fontFamily="Space Grotesk, system-ui" fontSize="11" letterSpacing="2.5" fill="rgba(255,255,255,0.7)" textAnchor="middle">SEMANTIC CORE</text>

        {/* satellite nodes with labels */}
        {[
        [-220, -130, "#9CD0FF", "Theses"],
        [-260, 40, "#B7A0FF", "Faculty"],
        [-160, 160, "#FFA0DD", "Journals"],
        [40, 200, "#FFB28A", "Grants"],
        [200, 150, "#9CD0FF", "Citations"],
        [270, -30, "#B7A0FF", "Datasets"],
        [180, -180, "#FFA0DD", "Patents"],
        [-30, -220, "#FFB28A", "Lectures"]].
        map(([x, y, c, l], i) =>
        <g key={i} transform={`translate(${x},${y})`}>
            <circle r="18" fill={c} opacity="0.20" />
            <circle r="7" fill={c} />
            <g transform="translate(14,-12)">
              <rect width={l.length * 7 + 16} height="22" rx="11" fill="rgba(10,9,30,0.85)" stroke="rgba(255,255,255,0.16)" />
              <text x="8" y="15" fontFamily="Space Grotesk, system-ui" fontSize="11" fill="#fff">{l}</text>
            </g>
          </g>
        )}
      </g>
    </svg>);

}

function CloudArt() {
  return (
    <svg viewBox="0 0 900 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="cld-amb-1" cx="80%" cy="20%" r="55%">
          <stop offset="0%" stopColor="#FC7F40" stopOpacity="0.40" />
          <stop offset="100%" stopColor="#0A091E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cld-amb-2" cx="20%" cy="80%" r="55%">
          <stop offset="0%" stopColor="#0098FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0A091E" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cld-pipe" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0098FF" stopOpacity="0.0" />
          <stop offset="50%" stopColor="#0098FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FC7F40" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect width="900" height="640" fill="#0A091E" />
      <rect width="900" height="640" fill="url(#cld-amb-1)" />
      <rect width="900" height="640" fill="url(#cld-amb-2)" />

      {/* horizon line */}
      <line x1="0" y1="400" x2="900" y2="400" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 6" />

      {/* on-prem data center (left) */}
      <g transform="translate(80,180)">
        <text x="0" y="-12" fontFamily="Space Grotesk, system-ui" fontSize="11" letterSpacing="2.5" fill="rgba(255,255,255,0.55)">ON-PREMISES</text>
        <g>
          {Array.from({ length: 3 }).map((_, c) =>
          Array.from({ length: 4 }).map((__, r) =>
          <g key={`${c}-${r}`} transform={`translate(${c * 70 + r * 22}, ${r * 42})`}>
                <rect width="80" height="110" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.20)" />
                {Array.from({ length: 5 }).map((_, k) =>
            <g key={k}>
                    <rect x="7" y={10 + k * 18} width="66" height="11" rx="2" fill="rgba(255,255,255,0.05)" />
                    <circle cx="68" cy={15.5 + k * 18} r="2.2" fill={k % 2 ? "#2ED98C" : "#66BFFF"} />
                  </g>
            )}
              </g>
          )
          )}
        </g>
        <g transform="translate(0,230)">
          <rect width="240" height="36" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" />
          <text x="120" y="22" fontFamily="Space Grotesk, system-ui" fontSize="11" letterSpacing="2" fill="rgba(255,255,255,0.65)" textAnchor="middle">DOHA · TIER-IV</text>
        </g>
      </g>

      {/* secure pipe */}
      <g transform="translate(380,330)">
        <path d="M0 0 C 80 -60, 160 -60, 240 0" fill="none" stroke="url(#cld-pipe)" strokeWidth="2.5" />
        <path d="M0 30 C 80 -30, 160 -30, 240 30" fill="none" stroke="url(#cld-pipe)" strokeWidth="2.5" opacity="0.6" />
        {/* lock badge */}
        <g transform="translate(110,-50)">
          <rect width="40" height="36" rx="10" fill="rgba(10,9,30,0.85)" stroke="rgba(255,255,255,0.20)" />
          <g transform="translate(20,8)" stroke="#fff" strokeWidth="1.6" fill="none">
            <rect x="-7" y="6" width="14" height="12" rx="2" fill="rgba(255,255,255,0.06)" />
            <path d="M-4 6 V 2 a 4 4 0 0 1 8 0 V 6" />
          </g>
        </g>
      </g>

      {/* sovereign cloud (right) */}
      <g transform="translate(620,180)">
        <text x="0" y="-12" fontFamily="Space Grotesk, system-ui" fontSize="11" letterSpacing="2.5" fill="rgba(255,255,255,0.55)">SOVEREIGN CLOUD</text>
        {/* cloud silhouette */}
        <path d="M40 60 a 50 50 0 0 1 100 -10 a 40 40 0 0 1 80 20 a 30 30 0 0 1 0 60 H 30 a 35 35 0 0 1 10 -70 z"
        fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.22)" />
        {/* services chips inside */}
        <g transform="translate(40,90)">
          {[["Compute", "#9CD0FF"], ["Storage", "#B7A0FF"], ["Identity", "#FFA0DD"], ["Network", "#FFB28A"]].map(([t, c], i) =>
          <g key={i} transform={`translate(${i % 2 * 100},${Math.floor(i / 2) * 32})`}>
              <rect width="90" height="22" rx="11" fill="rgba(10,9,30,0.5)" stroke={c} strokeOpacity="0.55" />
              <circle cx="14" cy="11" r="4" fill={c} />
              <text x="26" y="15" fontFamily="Space Grotesk, system-ui" fontSize="11" fill="#fff">{t}</text>
            </g>
          )}
        </g>
        {/* regions */}
        <g transform="translate(20,200)">
          {["QA-1", "QA-2", "QA-DR"].map((t, i) =>
          <g key={i} transform={`translate(${i * 78},0)`}>
              <rect width="68" height="56" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)" />
              <text x="34" y="22" fontFamily="Space Grotesk, system-ui" fontSize="10" letterSpacing="1.5" fill="rgba(255,255,255,0.55)" textAnchor="middle">REGION</text>
              <text x="34" y="42" fontFamily="Poppins, system-ui" fontWeight="600" fontSize="14" fill="#fff" textAnchor="middle">{t}</text>
            </g>
          )}
        </g>
      </g>

      {/* SLA strip at bottom */}
      <g transform="translate(80,540)">
        {[
        ["99.99%", "UPTIME"],
        ["AES-256", "ENCRYPTION"],
        ["NCSA", "COMPLIANT"]].
        map(([v, k], i) =>
        <g key={i} transform={`translate(${i * 250},0)`}>
            <rect width="230" height="58" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.10)" />
            <text x="18" y="24" fontFamily="Space Grotesk, system-ui" fontSize="10" letterSpacing="2" fill="rgba(255,255,255,0.5)">{k}</text>
            <text x="18" y="46" fontFamily="Poppins, system-ui" fontWeight="600" fontSize="16" fill="#fff">{v}</text>
          </g>
        )}
      </g>
    </svg>);

}

/* ---------------------------------------------------------
   The section itself
   --------------------------------------------------------- */

function StoryCard({ size, industry, title, body, art, image, alt, href = "#" }) {
  return (
    <a className={"story-card story-card--" + size + " reveal"} href={href}>
      <div className="story-card__media">
        <div className="story-card__art">
          {image ? <img src={image} alt={alt || ""} loading="lazy" /> : art}
        </div>
        <div className="story-card__gloss" />
        <div className="story-card__shade" />
      </div>

      <div className="story-card__body">
        <div className="story-card__industry">
          <span className="story-card__industry-dot" style={{ color: "rgb(252, 127, 64)" }} />
          {industry}
        </div>
        <h3 className="story-card__title">{title}</h3>
        <p className="story-card__desc">{body}</p>
        <span className="story-card__cta">
          View Case Study
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>

      <span className="story-card__ring" aria-hidden="true" />
    </a>);

}

function SuccessStories() {
  return (
    <section className="section stories-v2" id="stories">
      <div className="stories-v2__amb" aria-hidden="true">
        <div className="stories-v2__amb-a" />
        <div className="stories-v2__amb-b" />
        <div className="stories-v2__amb-grid" />
      </div>

      <div className="container">
        <header className="stories-v2__head reveal">
          <span className="eyebrow">Success Stories</span>
          <h2 className="stories-v2__title">
            Delivering measurable impact{" "}
            <span className="spectrum-text">across industries</span>.
          </h2>
          <p className="stories-v2__sub">
            Digital transformation demands more than technology. It requires a
            partner who understands your business, anticipates market shifts,
            and delivers results that matter. ICT brings the expertise,
            commitment, and local knowledge to make it happen.
          </p>
        </header>

        <div className="stories-v2__grid">
          <StoryCard
            size="featured"
            industry="Financial Services"
            title="Intelligent Investment Research Assistant"
            body="Transforming fragmented investment data into AI-powered decision intelligence — through intelligent research automation, faster insights, and enhanced analyst productivity."
            image="assets/story-finance.png"
            alt="Aerial view of analysts working on laptops over a blue and amber data-stream surface" />
          
          <StoryCard
            size="half"
            industry="Education & Research"
            title="AI-Powered Unified Enterprise Search"
            body="Unlocking knowledge across fragmented systems through intelligent AI-driven discovery, semantic search, and contextual enterprise insights."
            image="assets/story-education.png"
            alt="Sculptural portraits of researchers rendered in flowing blue contours with knowledge particles" />
          
          <StoryCard
            size="half"
            industry="Public Sector"
            title="Modernising the Data Center with Hybrid Cloud"
            body="Extending on-premises infrastructure to the cloud while preserving security, operational continuity, governance, and scalability."
            image="assets/story-publicsector.png"
            alt="Person with a laptop dissolving into a flowing stream of blue and amber data particles" />
          
        </div>
      </div>
    </section>);

}

window.SuccessStories = SuccessStories;