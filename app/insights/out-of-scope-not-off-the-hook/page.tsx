import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";
export const metadata: Metadata = { title: "Out of Scope Does Not Mean Off the Hook", description: "Almost none of our clients are directly regulated by SB 253, SB 261, or the narrowed CSRD. Here is why the pressure has not gone away anyway." };
export default function Article(){return <PageShell eyebrow="Regulatory Exposure" title="Out of Scope Does Not Mean Off the Hook"><Reveal><section className="section"><div className="container prose">
<p style={{color:"var(--body)",fontSize:14,marginBottom:8}}>Updated August 2026</p>
<h2>The thresholds keep rising</h2>
<p>In February 2026, the Council of the European Union gave final approval to a package of changes narrowing the Corporate Sustainability Reporting Directive. Companies must now have more than 1,000 employees and above &euro;450 million in annual turnover before they are directly required to report. In California, SB 253 applies only to companies with more than $1 billion in annual revenue, and SB 261 only above $500 million. Measured against thresholds like these, the overwhelming majority of established small and growing businesses are not directly regulated by any major sustainability disclosure law in effect today, and even the rules that do apply keep shifting, as we cover in <Link href="/insights/where-climate-disclosure-rules-stand">Where the Climate Disclosure Rules Actually Stand Right Now</Link>.</p>
<h2>Then why does the pressure keep growing</h2>
<p>If regulation were the only driver of sustainability activity, this would be the moment for smaller organizations to quietly stand down. A recent survey found the opposite is happening. Among companies that lost their CSRD reporting obligation entirely under the new thresholds, 90 percent said they plan to maintain or expand their sustainability reporting anyway. The reasons they gave had almost nothing to do with regulation: better operational and resource planning, stronger investor confidence, clearer supply chain risk visibility, and requirements set by customers and partners, not governments.</p>
<h2>What this means for a business that is not directly regulated</h2>
<p>The lesson is not that sustainability reporting stops mattering once a company falls below a legal threshold. It is that the reporting was rarely about the threshold in the first place. Lenders ask questions before renewing a credit line. Larger customers pass along their own reporting obligations through supplier questionnaires. Insurers, landlords, and acquirers increasingly expect a documented answer, not because a regulator requires it, but because the absence of an answer has become its own red flag. An organization waiting for a law to name it directly before building any sustainability infrastructure is optimizing for the wrong signal.</p>
<h2>The practical takeaway</h2>
<p>Treat regulatory scope as one data point, not the whole picture. The <Link href="/#who-we-serve">Implementation Gap Assessment</Link> is built around exactly this distinction, sorting what actually applies to a specific business from what does not, so effort goes toward the pressure that is real rather than the headline that is loudest.</p>
<div className="prose-divider"><span className="prose-divider-line"/><span className="prose-divider-dot"/><span className="prose-divider-line"/></div>
<p><Link href="/resources" style={{display:"inline-flex",alignItems:"center",gap:6,fontWeight:600,textDecoration:"none"}}>Get the free Implementation Gap Assessment <ArrowRight size={16}/></Link></p>
<p style={{marginTop:24}}><Link href="/insights" style={{display:"inline-flex",alignItems:"center",gap:6,textDecoration:"none"}}><ArrowLeft size={16}/> Back to Insights</Link></p>
<div style={{marginTop:32,paddingTop:24,borderTop:"1px solid var(--line)"}}>
<p style={{fontSize:13,fontWeight:600,color:"var(--ink)",marginBottom:8,textTransform:"uppercase",letterSpacing:".02em"}}>Sources</p>
<ul style={{fontSize:14,color:"var(--body)",paddingLeft:18,lineHeight:1.8,margin:0}}>
<li><a href="https://www.consilium.europa.eu/en/press/press-releases/2026/02/24/council-signs-off-simplification-of-sustainability-reporting-and-due-diligence-requirements-to-boost-eu-competitiveness/" target="_blank" rel="noopener noreferrer">Council of the EU, final approval of the CSRD Omnibus thresholds, February 2026</a></li>
<li><a href="https://www.persefoni.com/blog/california-sb253-sb261" target="_blank" rel="noopener noreferrer">Persefoni, SB 253 and SB 261 revenue thresholds</a></li>
<li><a href="https://osapiens.com/company-news/new-osapiens-study-sustainability-reporting-after-eu-omnibus-2026/" target="_blank" rel="noopener noreferrer">osapiens, survey on sustainability reporting after the EU Omnibus, 2026</a></li>
</ul>
</div>
</div></section></Reveal></PageShell>}
