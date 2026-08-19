import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Collapsible from "@/components/Collapsible";
import Reveal from "@/components/Reveal";
import { Leaf, Building2, Target, BarChart3, Cog, ClipboardCheck, Landmark } from "lucide-react";
export const metadata: Metadata = { title: "Services", description: "Connected capabilities for sustainability implementation: readiness and strategy, implementation and program management, operational systems, measurement and data, climate impact and responsible sourcing, credible reporting, and sustainable lending advisory." };
const services=[
[Leaf,"Sustainability and Climate Strategy","We assess where sustainability efforts stand today and translate ambition, customer expectations, and market pressure into clear priorities and an achievable implementation roadmap."],
[Target,"Implementation and Program Management","We turn the roadmap into action through structured project and program plans, defined ownership, milestones, and coordinated delivery, so priorities do not stall after the planning stage."],
[Cog,"Operational Systems and Process Improvement","We build the everyday workflows, procedures, and accountability structures that embed sustainability into how the business actually operates."],
[BarChart3,"Data, Measurement, and Reporting","We develop key performance indicators, build dashboards, and design data collection processes that turn scattered information into evidence leadership can act on."],
[Building2,"Climate Impact and Resilience","We measure climate and environmental performance and help the business plan for resilience where it matters most to its operations."],
[ClipboardCheck,"Responsible Sourcing and Supply Chain","We help businesses respond to customer and lender sustainability requirements and strengthen sourcing and supply chain practices."],
[Landmark,"Sustainable Lending & Investment Advisory","A distinct offering built for banks, CDFIs, and other financial institutions rather than for growing businesses directly. We help these institutions build the ESG due diligence frameworks, risk scorecards, and climate disclosure systems they need to lend, invest, and report with confidence."]
];
export default function Services(){return <PageShell eyebrow="Services" title="Calden Terre combines sustainability expertise with hands-on implementation, operational systems, measurement, and credible communication, presented as one connected approach for established small and growing businesses working to move from intention to practical progress."><Reveal><section className="section"><div className="container grid-3">{services.map(([Icon,t,d],i)=>{const I=Icon as typeof Leaf;const isFinance=i===services.length-1;return <article className="card" id={isFinance?"finance":undefined} key={String(t)}><div className="icon-badge"><I size={22}/></div><h3>{String(t)}</h3><Collapsible><p>{String(d)}</p></Collapsible></article>})}</div>
</section></Reveal></PageShell>}
