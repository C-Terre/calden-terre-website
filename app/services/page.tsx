import PageShell from "@/components/PageShell";
import Collapsible from "@/components/Collapsible";
const services=[
["Sustainability & ESG Strategy","Sustainability strategy, ESG readiness, materiality, governance integration, action planning, and framework alignment."],
["Climate Impact & Infrastructure Innovation","GHG measurement, climate resilience, infrastructure systems, environmental performance, and innovation planning."],
["Implementation Advisory & Strategic Execution","Implementation roadmaps, governance, ownership structures, stakeholder coordination, and execution support."],
["Data, Reporting & Decision Support","Dashboards, KPI systems, ESG reporting, data workflows, performance measurement, and management reporting."],
["Operational Systems & Process Optimization","Workflow design, process improvement, accountability systems, operating procedures, and continuous improvement."],
["Program & Project Management","Project planning, delivery governance, milestone tracking, stakeholder management, reporting, and operational coordination."]
];
export default function Services(){return <PageShell eyebrow="Services" title="Practical support for measurable implementation" description="Calden Terre combines sustainability expertise with operational execution, reporting, systems design, and program management to help organizations move from intention to sustained performance."><section className="section"><div className="container grid-3">{services.map(([t,d])=><article className="card" key={t}><h3>{t}</h3><Collapsible><p>{d}</p></Collapsible></article>)}</div></section></PageShell>}
