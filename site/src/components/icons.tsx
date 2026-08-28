function hexafoilPath(cx: number, cy: number, r: number, pull: number): string {
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (-90 + i * 60);
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  });

  const segments = points.map((p, i) => {
    const next = points[(i + 1) % points.length];
    const c1 = [p[0] + (cx - p[0]) * pull, p[1] + (cy - p[1]) * pull];
    const c2 = [next[0] + (cx - next[0]) * pull, next[1] + (cy - next[1]) * pull];
    return `C ${c1[0].toFixed(2)} ${c1[1].toFixed(2)}, ${c2[0].toFixed(2)} ${c2[1].toFixed(2)}, ${next[0].toFixed(2)} ${next[1].toFixed(2)}`;
  });

  return `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)} ${segments.join(" ")} Z`;
}

/** The GAIA Tech mark: a six-point hexafoil in a circle, matching the GAIA product mark. */
export function GaiaMark({ size = 64, className }: { size?: number; className?: string }) {
  const path = hexafoilPath(50, 50, 34, 0.62);
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (-90 + i * 60);
    return [50 + 34 * Math.cos(angle), 50 + 34 * Math.sin(angle)];
  });

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} role="img" aria-label="GAIA Tech mark">
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="3.5" />
      <path d={path} stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.6" fill="var(--accent, #448561)" />
      ))}
      <circle cx="50" cy="50" r="4.2" fill="var(--accent, #448561)" />
    </svg>
  );
}

/** The Greecon mark: a restrained rounded swirl, in the spirit of the placeholder brand mark. */
export function GreeconMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} role="img" aria-label="Greecon">
      <path
        d="M62 20C40 20 24 36 24 58c0 20 15 34 33 34 12 0 21-6 21-6"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="60" cy="60" r="13" fill="var(--bg-behind, #f7f1e9)" />
    </svg>
  );
}

function badge(children: React.ReactNode) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export function EnergyIcon() {
  return badge(
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinejoin="round" fill="none" />
  );
}

export function AgricultureIcon() {
  return badge(
    <>
      <path d="M12 21c0-6.5 3-10 7-11-1 5-2.5 9-7 11Z" />
      <path d="M12 21c0-5-2-8-6-9 .5 4 2 7.5 6 9Z" />
      <path d="M12 21v-6" />
    </>
  );
}

export function WaterIcon() {
  return badge(
    <>
      <path d="M12 3c3.5 4 6 7.8 6 11a6 6 0 1 1-12 0c0-3.2 2.5-7 6-11Z" />
      <path d="M9.5 15c0 1.4 1 2.5 2.3 2.7" />
    </>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" className={className} aria-hidden="true">
      <path d="M1 9h22M16 1l8 8-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BackArrowIcon() {
  return (
    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" aria-hidden="true">
      <path d="M25 9H3M10 1 2 9l8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="8" cy="7.3" r="1.1" fill="currentColor" />
      <path d="M12 17V13c0-1.4 1-2.5 2.4-2.5s2.1 1 2.1 2.5v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
