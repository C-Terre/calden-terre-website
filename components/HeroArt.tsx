import Image from "next/image";

export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art-glow" />
      <svg className="hero-art-frame" viewBox="0 0 420 420" width="420" height="420" fill="none">
        <path d="M20 60 L20 20 L60 20" />
        <path d="M360 20 L400 20 L400 60" />
        <path d="M400 360 L400 400 L360 400" />
        <path d="M60 400 L20 400 L20 360" />
      </svg>
      <div className="hero-art-logo">
        <Image src="/logo.png" alt="" width={300} height={419} priority />
      </div>
      <div className="hero-art-shadow" />
    </div>
  );
}
