import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { Search, Compass, Rocket, TrendingUp, Settings, ShieldCheck, RefreshCw, ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Framework", description: "The Calden Terre Impact Framework: how we take established small and growing businesses from an unclear sustainability starting point to practical systems, measurable performance, and lasting progress." };

const stages = [
  [Search, "Discover", "Understand the business, its current practices, its priorities, and the implementation gaps standing between sustainability ambition and day-to-day operations.", [
    "Baseline review of current practices, policies, and available data",
    "Mapping what customers, lenders, and regulators are actually asking for",
    "Identifying the specific gaps between where the business stands and the pressure it is actually facing",
  ]],
  [Compass, "Strategize", "Define practical priorities, goals, responsibilities, and an achievable roadmap, sequenced to what the business can realistically resource and sustain.", [
    "Prioritizing the two or three issues that matter most right now",
    "Building a roadmap sequenced to available time, budget, and staff capacity",
    "Assigning clear ownership for each priority before work begins",
  ]],
  [Rocket, "Implement", "Put the agreed actions, systems, and processes into operation through structured workplans, clear ownership, and coordinated delivery.", [
    "Standing up the workflows, templates, and data collection processes the roadmap calls for",
    "Training the people who will own each process day to day",
    "Coordinating delivery across departments and, where relevant, suppliers",
  ]],
  [TrendingUp, "Measure", "Establish relevant KPIs, collect data, and monitor performance so progress is tracked with evidence rather than assumed.", [
    "Defining a small set of KPIs tied directly to the priorities set in Strategize",
    "Establishing a regular cadence for collecting and reviewing data",
    "Comparing actual results against the plan, not against assumptions",
  ]],
  [Settings, "Optimize", "Use results and lessons from measurement to improve systems, address bottlenecks, and strengthen decision-making.", [
    "Reviewing what the data shows is working and what is not",
    "Adjusting workflows, ownership, or targets based on evidence",
    "Removing steps that create friction without adding value",
  ]],
  [ShieldCheck, "Sustain", "Embed accountability, internal capability, and continuous improvement so progress becomes part of normal business practice, not a one-time project.", [
    "Embedding the new practices into standard operating procedure",
    "Building internal capability so progress does not depend on outside help",
    "Revisiting the cycle on a set cadence rather than waiting for a crisis to force it",
  ]],
] as const;

const positions = [
  { x: 350, y: 90 },
  { x: 575.17, y: 220 },
  { x: 575.17, y: 480 },
  { x: 350, y: 610 },
  { x: 124.83, y: 480 },
  { x: 124.83, y: 220 },
];
function pct(v: number) { return `${((v / 700) * 100).toFixed(2)}%`; }
const arcs = [
  { a: 0, b: 1, dashed: false },
  { a: 1, b: 2, dashed: false },
  { a: 2, b: 3, dashed: false },
  { a: 3, b: 4, dashed: false },
  { a: 4, b: 5, dashed: false },
  { a: 5, b: 0, dashed: true },
];

export default function Framework() {
  return <PageShell eyebrow="Calden Terre Impact Framework" title="The Calden Terre Impact Framework (CTIF) is how we take established small and growing businesses from an unclear starting point to practical systems, measurable results, and progress that holds without us in the room.">
    <Reveal><section className="section"><div className="container">
      <p className="lead">Most sustainability efforts do not fail from a lack of ambition. They fail because there is no consistent way to move from a stated goal to a working system. CTIF is the six-stage cycle we use to close that gap, on every engagement, regardless of industry or starting point. It is not a one-time project plan. Sustain feeds directly back into Discover, so the business keeps improving on a set cadence rather than starting over each time something changes.</p>
    </div></section></Reveal>

    <Reveal><section className="section section-soft"><div className="container">
      <div className="section-head"><div><div className="eyebrow">The Cycle</div><h2>Six stages, one continuous loop</h2><p>Each stage feeds the next in sequence, and Sustain closes the loop back to Discover rather than ending the process.</p></div></div>
      <div className="ctif-diagram-wrap">
        <svg viewBox="0 0 700 700" className="ctif-diagram-svg" aria-hidden="true">
          <defs>
            <marker id="ctifArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#a6763c" />
            </marker>
          </defs>
          {arcs.map(({ a, b, dashed }) => {
            const A = positions[a], B = positions[b];
            return <path key={`${a}-${b}`} d={`M${A.x},${A.y} A 260 260 0 0 1 ${B.x},${B.y}`} fill="none" stroke="#a6763c" strokeWidth={dashed ? 2 : 2.5} strokeDasharray={dashed ? "6 7" : undefined} strokeOpacity={dashed ? 0.55 : 0.85} markerEnd="url(#ctifArrow)" />;
          })}
        </svg>
        {stages.map(([Icon, title], i) => { const I = Icon as typeof Search; return <div className="ctif-node" key={String(title)} style={{ left: pct(positions[i].x), top: pct(positions[i].y), transform: "translate(-50%,-50%)" }}>
          <div className="ctif-node-badge"><I size={26} /><span className="ctif-node-num">{i + 1}</span></div>
          <div className="ctif-node-label">{String(title)}</div>
        </div>; })}
        <div className="ctif-center">
          <RefreshCw size={22} />
          <div className="ctif-center-label">Continuous<br />Improvement</div>
        </div>
      </div>
    </div></section></Reveal>

    <Reveal><section className="section"><div className="container">
      <div className="section-head"><div><div className="eyebrow">In Detail</div><h2>What actually happens at each stage</h2></div></div>
      <div className="ctif-stage-list">
        {stages.map(([Icon, title, desc, bullets], i) => { const I = Icon as typeof Search; return <div className="ctif-stage" key={String(title)}>
          <div className="ctif-stage-num">{i + 1}</div>
          <div>
            <div className="ctif-stage-head"><I size={22} color="var(--terracotta)" /><h3>{String(title)}</h3></div>
            <p className="lead" style={{ fontSize: 17, marginBottom: 0 }}>{String(desc)}</p>
            <ul>{(bullets as readonly string[]).map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        </div>; })}
      </div>
    </div></section></Reveal>

    <Reveal><section className="section section-soft"><div className="container" style={{ textAlign: "center" }}>
      <div className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>See It In Practice</div>
      <h2 style={{ margin: "12px auto 0", maxWidth: 640 }}>CTIF is not just a diagram. It is the structure behind every service we deliver and every tool in our Knowledge Suite.</h2>
      <div className="hero-actions" style={{ justifyContent: "center", marginTop: 28 }}>
        <Link className="btn btn-primary" href="/services">Explore Our Services <ArrowRight size={18} /></Link>
        <Link className="btn btn-secondary" href="/resources">See the Tools Built Around It</Link>
      </div>
    </div></section></Reveal>
  </PageShell>;
}
