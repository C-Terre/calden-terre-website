import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { Target, ShieldCheck, BarChart3 } from "lucide-react";
export const metadata: Metadata = { title: "Insights", description: "Perspectives on sustainability systems, reporting, governance, climate performance, and organizational execution." };
const insights=[
[Target,"Why Sustainability Strategies Stall During Implementation"],
[ShieldCheck,"Building ESG Governance That Works in Practice"],
[BarChart3,"From Metrics to Management: Making Sustainability Data Useful"]
];
export default function Insights(){return <PageShell eyebrow="Insights" title="Ideas for stronger sustainability implementation" description="Perspectives on sustainability systems, reporting, governance, climate performance, operational improvement, and organizational execution."><Reveal><section className="section"><div className="container grid-3">{insights.map(([Icon,t],i)=>{const I=Icon as typeof Target;return <article className="card" key={String(t)}><div className="icon-badge"><I size={22}/></div><span className="eyebrow">Insight {i+1}</span><h3>{String(t)}</h3><p>Calden Terre insight article coming soon.</p></article>})}</div></section></Reveal></PageShell>}
