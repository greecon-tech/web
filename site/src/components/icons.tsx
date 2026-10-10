import Image from "next/image";

/** The GAIA Tech mark (the official hexafoil artwork). */
export function GaiaMark({ size = 64, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/gaia-mark-art.png"
      alt="GAIA Tech mark"
      width={size}
      height={size}
      className={className}
    />
  );
}

const GREECON_MARK_RATIO = 375 / 525;

/** The Greecon brand mark (greecon_icon.svg). `size` sets the rendered height; width follows the mark's own aspect ratio. */
export function GreeconMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/greecon-mark.svg"
      alt="Greecon"
      width={Math.round(size * GREECON_MARK_RATIO)}
      height={size}
      className={className}
      priority
    />
  );
}

type Tile = "light" | "green" | "dark";

type TileIconProps = { tile?: Tile; size?: number; className?: string };

/** One icon from the official Greecon icon library, in its tile (background baked into the SVG). */
function TileIcon({ name, tile = "green", size = 56, className }: TileIconProps & { name: string }) {
  return <Image src={`/icons/${name}-tile-${tile}.svg`} alt="" width={size} height={size} className={className} aria-hidden="true" />;
}

export function EnergyIcon(props: TileIconProps) {
  return <TileIcon name="bolt" {...props} />;
}

export function AgricultureIcon(props: TileIconProps) {
  return <TileIcon name="sprout" {...props} />;
}

export function WaterIcon(props: TileIconProps) {
  return <TileIcon name="droplet" {...props} />;
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

export function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        transform="translate(7.68 7.68) scale(0.36)"
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
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
