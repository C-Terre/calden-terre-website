import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { Search, Compass, Rocket, TrendingUp, Settings, ShieldCheck } from "lucide-react";
export const metadata: Metadata = { title: "Framework", description: "The Calden Terre Impact Framework: a six-stage approach for building practical systems, executing priorities, and measuring performance." };
const stages=[
[Search,"Discover","Assess the current state, understand organizational context, identify gaps, and establish the implementation baseline."],
[Compass,"Strategize","Translate priorities into a practical roadmap with clear objectives, ownership, sequencing, and resource requirements."],
[Rocket,"Implement","Operationalize solutions through workplans, governance structures, stakeholder coordination, and hands-on delivery."],
[TrendingUp,"Measure","Establish KPIs, dashboards, reporting rhythms, and data systems to track ESG, climate, and operational performance."],
[Settings,"Optimize","Review results, strengthen processes, address bottlenecks, and improve systems based on performance evidence."],
[ShieldCheck,"Sustain","Embed accountability, capability, and continuous improvement so progress becomes part of normal organizational practice."]
];
export default function Framework(){return <PageShell eyebrow="Calden Terre Impact Framework" title="A structured path from ambition to sustained value" description="The Calden Terre Impact Framework (CTIF) is our six-stage approach for helping organizations build practical systems, execute priorities, measure performance, and strengthen long-term implementation capability."><Reveal><section className="section"><div className="container work-list">{stages.map(([Icon,t,d],i)=>{const I=Icon as typeof Search;return <article className="work-card" key={String(t)}><div style={{display:"flex",alignItems:"center",gap:14}}><div className="icon-badge" style={{marginBottom:0}}><I size={20}/></div><span className="tag" style={{marginBottom:0}}>Stage {i+1}</span></div><h2 style={{marginTop:12}}>{String(t)}</h2><p className="lead" style={{fontSize:18,marginTop:8}}>{String(d)}</p></article>})}</div></section></Reveal></PageShell>}
