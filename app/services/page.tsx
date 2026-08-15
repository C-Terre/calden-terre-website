import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Collapsible from "@/components/Collapsible";
import Reveal from "@/components/Reveal";
import { Leaf, Building2, Target, BarChart3, Cog, ClipboardCheck } from "lucide-react";
export const metadata: Metadata = { title: "Services", description: "Connected capabilities for sustainability implementation: readiness and strategy, implementation and execution, operational systems, measurement and data, climate impact and responsible sourcing, and credible reporting." };
const services=[
[Leaf,"Sustainability Readiness and Strategy","We assess where sustainability efforts stand today and translate ambition, customer expectations, and market pressure into clear priorities and an achievable implementation roadmap."],
[Target,"Implementation Planning and Execution","We turn the roadmap into action through structured project and program plans, defined ownership, milestones, and coordinated delivery, so priorities do not stall after the planning stage."],
[Cog,"Operational Systems and Process Improvement","We build the everyday workflows, procedures, and accountability structures that embed sustainability into how the business actually operates."],
[BarChart3,"KPI Development, Data, and Decision Support","We develop key performance indicators, build dashboards, and design data collection processes that turn scattered information into evidence leadership can act on."],
[Building2,"Climate Impact and Responsible Sourcing","We measure climate and environmental performance and, where relevant, strengthen responsible sourcing and supply chain practices."],
[ClipboardCheck,"Credible Reporting and Continuous Improvement","We help businesses communicate progress honestly and build the internal capability to keep improving year after year, rather than starting over with each new initiative."]
];
export default function Services(){return <PageShell eyebrow="Services" title="Capabilities that turn sustainability goals into practical systems" description="Calden Terre combines sustainability expertise with hands-on implementation, operational systems, measurement, and credible communication, presented as one connected approach for established small and growing businesses working to move from intention to practical progress."><Reveal><section className="section"><div className="container grid-3">{services.map(([Icon,t,d])=>{const I=Icon as typeof Leaf;return <article className="card" key={String(t)}><div className="icon-badge"><I size={22}/></div><h3>{String(t)}</h3><Collapsible><p>{String(d)}</p></Collapsible></article>})}</div></section></Reveal></PageShell>}
