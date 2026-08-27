import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";
export const metadata: Metadata = { title: "The Greenwashing Net Just Got Wider", description: "A retailer can now be liable for a supplier's misleading claim. That pressure is moving down the chain fast." };
export default function Article(){return <PageShell eyebrow="Market Pressure" title="The Greenwashing Net Just Got Wider, and It Reaches Smaller Suppliers Too"><Reveal><section className="section"><div className="container prose">
<p style={{color:"var(--body)",fontSize:14,marginBottom:8}}>Updated August 2026</p>
<h2>A retailer can now be liable for a supplier&apos;s claim</h2>
<p>In 2026, the UK&apos;s Competition and Markets Authority issued guidance clarifying something many businesses had assumed was someone else&apos;s problem: a retailer can be held responsible for a misleading environmental claim made by a manufacturer, simply by stocking the product. The regulator&apos;s language was direct. A business may be treated as repeating an environmental claim where it stocks a product carrying one, whether or not it wrote the claim itself.</p>
<h2>What retailers are starting to ask for</h2>
<p>The practical effect moves downstream fast. Retailers who can be held liable for a supplier&apos;s unsubstantiated claim have a clear incentive to stop carrying products they cannot verify. The guidance specifically points suppliers toward furnishing verification records, testing documentation, and independent assessments, not as a courtesy, but as <Link href="/insights/price-of-being-unverifiable">the price of keeping the account</Link>.</p>
<h2>This is not only a UK story</h2>
<p>Around the same period, the European Securities and Markets Authority recommended that listed small and medium enterprises reporting under CSRD be required to include a concise account of their material positive sustainability impacts, alongside voluntary aggregate-level disclosure of opportunities, specifically to close a gap where a company could publicize a sustainability achievement without any obligation to back it up in its formal reporting. The proposal is a recommendation to EFRAG in response to a consultation, not an adopted rule, and it reaches a narrower group than the UK guidance does. But the direction across jurisdictions is consistent: the businesses making a claim, and increasingly the businesses simply carrying that claim to market, are expected to be able to prove it on request.</p>
<h2>What this means for a smaller supplier</h2>
<p>A claim without a document behind it is no longer just a marketing risk. It is becoming a trading risk, the kind of gap that shows up in a vendor review or a renewal conversation and quietly ends a relationship rather than triggering a fine. The fix is not to make fewer claims. It is to make sure every claim made can be handed over as a document the moment someone asks.</p>
<div className="prose-divider"><span className="prose-divider-line"/><span className="prose-divider-dot"/><span className="prose-divider-line"/></div>
<p><Link href="/services#finance" style={{display:"inline-flex",alignItems:"center",gap:6,fontWeight:600,textDecoration:"none"}}>See our Credibility & Readiness Support service <ArrowRight size={16}/></Link></p>
<p style={{marginTop:24}}><Link href="/insights" style={{display:"inline-flex",alignItems:"center",gap:6,textDecoration:"none"}}><ArrowLeft size={16}/> Back to Insights</Link></p>
<div style={{marginTop:32,paddingTop:24,borderTop:"1px solid var(--line)"}}>
<p style={{fontSize:13,fontWeight:600,color:"var(--ink)",marginBottom:8,textTransform:"uppercase",letterSpacing:".02em"}}>Sources</p>
<ul style={{fontSize:14,color:"var(--body)",paddingLeft:18,lineHeight:1.8,margin:0}}>
<li><a href="https://www.whitecase.com/insight-alert/supply-chain-green-claims-uk-cma-signals-enforcement-escalation" target="_blank" rel="noopener noreferrer">White &amp; Case, UK CMA signals enforcement escalation on supply chain green claims</a></li>
<li><a href="https://www.grcworldforums.com/esma-proposes-revisions-to-sustainability-reporting-for-smes-to-reduce-greenwashing/9638.article" target="_blank" rel="noopener noreferrer">GRC World Forums, ESMA proposes revisions to sustainability reporting for SMEs to reduce greenwashing</a></li>
</ul>
</div>
</div></section></Reveal></PageShell>}
