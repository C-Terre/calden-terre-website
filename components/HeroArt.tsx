import Image from "next/image";

export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art-glow" />
      <svg className="hero-art-ring" viewBox="0 0 300 300" width="300" height="300">
        <circle cx="150" cy="150" r="130" fill="none" stroke="var(--terracotta)" strokeWidth="1" strokeDasharray="2 11" opacity="0.55" />
        <circle cx="150" cy="150" r="102" fill="none" stroke="var(--line)" strokeWidth="1" opacity="0.6" />
      </svg>
      <div className="hero-art-logo">
        <Image src="/logo.png" alt="" width={220} height={307} priority />
      </div>
      <div className="hero-art-shadow" />
    </div>
  );
}
