import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";
export const metadata: Metadata = { title: "Your CDP Score Just Got Harder to Coast On", description: "CDP's 2026 changes mean recycling last year's answers is no longer a safe strategy. Here is what actually changed." };
export default function Article(){return <PageShell eyebrow="Regulatory Update" title="Your CDP Score Just Got Harder to Coast On"><Reveal><section className="section"><div className="container prose">
<p style={{color:"var(--body)",fontSize:14,marginBottom:8}}>Updated August 2026</p>
<h2>What actually changed</h2>
<p>CDP's 2026 questionnaire update makes four changes worth knowing about even for organizations that have submitted before. The Forests module expanded from four commodities to seven, adding cocoa, coffee, and rubber. New unscored questions on ocean-related impacts and dependencies have been introduced as a preview before they eventually count toward scoring. The Climate, Water, and Plastics questions now ask for more specific detail on governance, discharge management, and packaging format. And the scoring methodology itself has tightened: certain essential criteria now cap an organization&apos;s overall score if missed, regardless of how strong the rest of the response is.</p>
<h2>Recycling last year&apos;s answers no longer works</h2>
<p>Historically, an organization could submit a CDP response, update a few figures the following year, and expect a broadly similar score. That approach is now a liability. Organizations that resubmit largely unchanged answers are likely to see scores stagnate or decline, not because their performance regressed, but because the bar around them moved.</p>
<h2>The data usually lives in the wrong department</h2>
<p>A meaningful share of the newly scored information, particularly on forestry commodities and packaging, sits with procurement or supply chain teams rather than the sustainability function that typically owns the CDP relationship. Getting an accurate answer requires pulling those teams in well before the deadline, not discovering the gap during the final review, which is exactly the kind of cross-functional handoff our <Link href="/services">Ongoing Advisory &amp; Accountability</Link> work is built to catch early.</p>
<h2>The practical deadline</h2>
<p>CDP&apos;s 2026 scoring deadline lands in mid-September. Organizations that treat CDP preparation as a standing, cross-functional process rather than an annual scramble are the ones whose scores will hold up under the new methodology.</p>
<div className="prose-divider"><span className="prose-divider-line"/><span className="prose-divider-dot"/><span className="prose-divider-line"/></div>
<p><Link href="/services" style={{display:"inline-flex",alignItems:"center",gap:6,fontWeight:600,textDecoration:"none"}}>See our Ongoing Advisory & Accountability service <ArrowRight size={16}/></Link></p>
<p style={{marginTop:24}}><Link href="/insights" style={{display:"inline-flex",alignItems:"center",gap:6,textDecoration:"none"}}><ArrowLeft size={16}/> Back to Insights</Link></p>
<div style={{marginTop:32,paddingTop:24,borderTop:"1px solid var(--line)"}}>
<p style={{fontSize:13,fontWeight:600,color:"var(--ink)",marginBottom:8,textTransform:"uppercase",letterSpacing:".02em"}}>Sources</p>
<ul style={{fontSize:14,color:"var(--body)",paddingLeft:18,lineHeight:1.8,margin:0}}>
<li><a href="https://kpmg.com/us/en/frv/reference-library/2026/cdp-releases-2026-questionnaires-deadlines.html" target="_blank" rel="noopener noreferrer">KPMG, CDP releases 2026 questionnaires and deadlines</a></li>
<li><a href="https://nexioprojects.com/cdp-reporting-2026-the-new-questionnaire-decoded/" target="_blank" rel="noopener noreferrer">Nexio, CDP reporting 2026: the new questionnaire, decoded</a></li>
</ul>
</div>
</div></section></Reveal></PageShell>}
