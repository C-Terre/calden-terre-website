import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Collapsible from "@/components/Collapsible";
import Reveal from "@/components/Reveal";
import { Leaf, Building2, Target, BarChart3, Cog, ClipboardCheck } from "lucide-react";
export const metadata: Metadata = { title: "Services", description: "Sustainability expertise combined with operational execution, reporting, systems design, and program management." };
const services=[
[Leaf,"Sustainability & ESG Strategy","Sustainability strategy, ESG readiness, materiality, governance integration, action planning, and framework alignment."],
[Building2,"Climate Impact & Infrastructure Innovation","GHG measurement, climate resilience, infrastructure systems, environmental performance, and innovation planning."],
[Target,"Implementation Advisory & Strategic Execution","Implementation roadmaps, governance, ownership structures, stakeholder coordination, and execution support."],
[BarChart3,"Data, Reporting & Decision Support","Dashboards, KPI systems, ESG reporting, data workflows, performance measurement, and management reporting."],
[Cog,"Operational Systems & Process Optimization","Workflow design, process improvement, accountability systems, operating procedures, and continuous improvement."],
[ClipboardCheck,"Program & Project Management","Project planning, delivery governance, milestone tracking, stakeholder management, reporting, and operational coordination."]
];
export default function Services(){return <PageShell eyebrow="Services" title="Practical support for measurable implementation" description="Calden Terre combines sustainability expertise with operational execution, reporting, systems design, and program management to help organizations move from intention to sustained performance."><Reveal><section className="section"><div className="container grid-3">{services.map(([Icon,t,d])=>{const I=Icon as typeof Leaf;return <article className="card" key={String(t)}><div className="icon-badge"><I size={22}/></div><h3>{String(t)}</h3><Collapsible><p>{String(d)}</p></Collapsible></article>})}</div></section></Reveal></PageShell>}
