import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Collapsible from "@/components/Collapsible";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Search, Compass, Rocket, TrendingUp, ShieldCheck, Landmark } from "lucide-react";
export const metadata: Metadata = { title: "Services", description: "Calden Terre's service offerings, built around the Calden Terre Impact Framework, provide tailored sustainability implementation support for established small and growing businesses, plus a separate Sustainable Lending & Investment Advisory offering for financial institutions." };
const services=[
[Search,"Sustainability Readiness Assessment","A structured first look at where your sustainability efforts stand today, what your customers, lenders, or investors are actually asking for, and two or three practical actions you can start on right away."],
[Compass,"Roadmap & Strategy","We turn scattered ambition into a scoped, sequenced plan sized to what your business can realistically resource, with clear ownership and a small number of specific, achievable goals."],
[Rocket,"Implementation & Systems Build","The core of our work. We build the everyday workflows, procedures, supplier and data systems, and accountability structures that carry sustainability from plan into daily operations."],
[TrendingUp,"Ongoing Advisory & Accountability","Continued guidance once implementation is underway: tracking progress, troubleshooting what is not working, and keeping momentum and accountability in place month over month."],
[ShieldCheck,"Credibility & Readiness Support","Support responding to lender ESG questionnaires, customer sustainability requirements, and RFPs, and preparing for third-party certification if and when you choose to pursue one."]
];
export default function Services(){return <PageShell eyebrow="Services" title="We have carefully designed our service offerings, built around our framework, to meet your business with the tailored sustainability solutions it actually needs."><Reveal><section className="section"><div className="container grid-3">{services.map(([Icon,t,d])=>{const I=Icon as typeof Search;return <article className="card" key={String(t)}><div className="icon-badge"><I size={22}/></div><h3>{String(t)}</h3><Collapsible><p>{String(d)}</p></Collapsible></article>})}
<article className="card" id="finance"><div className="icon-badge"><Landmark size={22}/></div><h3>Sustainable Lending &amp; Investment Advisory</h3><Collapsible><p>A distinct offering built for banks, CDFIs, and other financial institutions rather than for growing businesses directly. We help these institutions build the ESG due diligence frameworks, risk scorecards, and climate disclosure systems they need to lend, invest, and report with confidence.</p></Collapsible></article>
</div><p style={{marginTop:36}}><Link className="btn btn-secondary" href="/framework">See Calden Terre Impact Framework</Link></p>
</section></Reveal></PageShell>}
