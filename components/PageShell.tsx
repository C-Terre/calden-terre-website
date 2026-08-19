import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function PageShell({eyebrow,title,children}:{eyebrow:string;title:string;children:ReactNode}){return <><section className="page-hero"><div className="page-hero-glow" aria-hidden="true"/><div className="container" style={{position:"relative"}}><Link href="/" className="back-link hero-in-1"><ArrowLeft size={16}/> Back to home</Link><div className="eyebrow hero-in-2">{eyebrow}</div><h1 className="hero-in-3 page-hero-title">{title}</h1></div></section>{children}</>}
