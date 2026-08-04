import PageShell from "@/components/PageShell";
const stages=[
["Discover","Assess the current state, understand organizational context, identify gaps, and establish the implementation baseline."],
["Strategize","Translate priorities into a practical roadmap with clear objectives, ownership, sequencing, and resource requirements."],
["Implement","Operationalize solutions through workplans, governance structures, stakeholder coordination, and hands-on delivery."],
["Measure","Establish KPIs, dashboards, reporting rhythms, and data systems to track ESG, climate, and operational performance."],
["Optimize","Review results, strengthen processes, address bottlenecks, and improve systems based on performance evidence."],
["Sustain","Embed accountability, capability, and continuous improvement so progress becomes part of normal organizational practice."]
];
export default function Framework(){return <PageShell eyebrow="Calden Terre Impact Framework" title="A structured path from ambition to sustained value" description="The Calden Terre Impact Framework (CTIF) is our six-stage approach for helping organizations build practical systems, execute priorities, measure performance, and strengthen long-term implementation capability."><section className="section"><div className="container work-list">{stages.map(([t,d],i)=><article className="work-card" key={t}><div><span className="tag">Stage {i+1}</span><h2>{t}</h2></div><div><p className="lead" style={{fontSize:18}}>{d}</p></div></article>)}</div></section></PageShell>}
