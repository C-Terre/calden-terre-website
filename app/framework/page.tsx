import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { Search, Compass, Rocket, TrendingUp, Settings, ShieldCheck } from "lucide-react";
export const metadata: Metadata = { title: "Framework", description: "The Calden Terre Impact Framework: a six-stage approach for taking established small and growing businesses from their sustainability implementation gap to practical systems, measurable performance, and lasting progress." };
const stages=[
[Search,"Discover","Understand the business, its current practices, its priorities, and the implementation gaps standing between sustainability ambition and day-to-day operations."],
[Compass,"Strategize","Define practical priorities, goals, responsibilities, and an achievable roadmap, sequenced to what the business can realistically resource and sustain."],
[Rocket,"Implement","Put the agreed actions, systems, and processes into operation through structured workplans, clear ownership, and coordinated delivery."],
[TrendingUp,"Measure","Establish relevant KPIs, collect data, and monitor performance so progress is tracked with evidence rather than assumed."],
[Settings,"Optimize","Use results and lessons from measurement to improve systems, address bottlenecks, and strengthen decision-making."],
[ShieldCheck,"Sustain","Embed accountability, internal capability, and continuous improvement so progress becomes part of normal business practice, not a one-time project."]
];
export default function Framework(){return <PageShell eyebrow="Calden Terre Impact Framework" title="The Calden Terre Impact Framework (CTIF) is our six-stage approach for taking established small and growing businesses from understanding their implementation gaps through to building practical systems, measuring results, and embedding continuous improvement."><Reveal><section className="section"><div className="container work-list">{stages.map(([Icon,t,d],i)=>{const I=Icon as typeof Search;return <article className="work-card" key={String(t)}><div style={{display:"flex",alignItems:"center",gap:14}}><div className="icon-badge" style={{marginBottom:0}}><I size={20}/></div><span className="tag" style={{marginBottom:0}}>Stage {i+1}</span></div><h2 style={{marginTop:12}}>{String(t)}</h2><p className="lead" style={{fontSize:18,marginTop:8}}>{String(d)}</p></article>})}</div></section></Reveal></PageShell>}
