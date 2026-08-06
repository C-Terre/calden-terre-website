import Image from "next/image";

export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art-glow" />
      <div className="hero-art-logo">
        <Image src="/logo.png" alt="" width={300} height={419} priority />
        <div className="hero-art-sheen" />
      </div>
      <div className="hero-art-shadow" />
    </div>
  );
}
