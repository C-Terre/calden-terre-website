import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function PageShell({eyebrow,title,description,children}:{eyebrow:string;title:string;description:string;children:ReactNode}){return <><section className="page-hero"><div className="page-hero-glow" aria-hidden="true"/><div className="container" style={{position:"relative"}}><Link href="/" className="back-link hero-in-1"><ArrowLeft size={16}/> Back to home</Link><div className="eyebrow hero-in-2">{eyebrow}</div><h1 className="hero-in-3">{title}</h1><p className="lead hero-in-4">{description}</p></div></section>{children}</>}
