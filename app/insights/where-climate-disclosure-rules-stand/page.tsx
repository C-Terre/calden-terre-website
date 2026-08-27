import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";
export const metadata: Metadata = { title: "Where the Climate Disclosure Rules Actually Stand Right Now", description: "A plain look at where the federal, California, and EU climate disclosure rules actually stand as of August 2026." };
export default function Article(){return <PageShell eyebrow="Regulatory Update" title="Where the Climate Disclosure Rules Actually Stand Right Now"><Reveal><section className="section"><div className="container prose">
<p style={{color:"var(--body)",fontSize:14,marginBottom:8}}>Updated August 2026</p>
<h2>Federally, the rule is alive on paper and abandoned in practice</h2>
<p>The SEC's climate disclosure rule, approved in 2024, has never been formally repealed. But in 2026 the SEC ended its own legal defense of the rule in court, effectively leaving its fate to the Eighth Circuit rather than following the standard process to amend or rescind it. The result is a rule that remains technically on the books while nobody, including the agency that wrote it, is currently enforcing or defending it.</p>
<h2>California has reset its own timeline twice this year</h2>
<p>The California Air Resources Board approved initial implementing regulations for SB 253 in February 2026, then withdrew them for clarification. The current Scope 1 and Scope 2 reporting deadline sits at November 10, 2026, reset from the original August 10 date, and CARB has confirmed that full Scope 3 emissions reporting will not be required until 2027, and even then only for a limited set of categories. SB 261, the companion law covering climate-related financial risk, remains paused entirely. The Ninth Circuit granted an injunction in late 2025 and heard oral arguments in January 2026, with a ruling still pending.</p>
<h2>The EU narrowed its scope rather than its ambition</h2>
<p>The Omnibus I package, finalized by the Council in February 2026, raised the CSRD's reporting threshold to more than 1,000 employees and above &euro;450 million in turnover. Fewer companies are directly obligated, a shift we unpack in <Link href="/insights/out-of-scope-not-off-the-hook">Out of Scope Does Not Mean Off the Hook</Link>, but the directive did not disappear, and survey data on post-Omnibus reporting behavior suggests most affected companies have no intention of stopping.</p>
<h2>What to do with a moving target</h2>
<p>None of these three tracks, federal, state, or EU, are settled, and there is no clear date by which any of them will be. Building a sustainability program around the assumption that clarity is imminent is a bet against the last three years of evidence. The more durable approach is to build systems around a durable methodology like the <Link href="/framework">Calden Terre Impact Framework</Link>, one that would satisfy a reasonable version of any of these rules, so the eventual outcome, whichever direction it lands, does not require starting over.</p>
<div className="prose-divider"><span className="prose-divider-line"/><span className="prose-divider-dot"/><span className="prose-divider-line"/></div>
<p><Link href="/framework" style={{display:"inline-flex",alignItems:"center",gap:6,fontWeight:600,textDecoration:"none"}}>See how the Calden Terre Impact Framework handles regulatory uncertainty <ArrowRight size={16}/></Link></p>
<p style={{marginTop:24}}><Link href="/insights" style={{display:"inline-flex",alignItems:"center",gap:6,textDecoration:"none"}}><ArrowLeft size={16}/> Back to Insights</Link></p>
<div style={{marginTop:32,paddingTop:24,borderTop:"1px solid var(--line)"}}>
<p style={{fontSize:13,fontWeight:600,color:"var(--ink)",marginBottom:8,textTransform:"uppercase",letterSpacing:".02em"}}>Sources</p>
<ul style={{fontSize:14,color:"var(--body)",paddingLeft:18,lineHeight:1.8,margin:0}}>
<li><a href="https://www.esgdive.com/news/sec-withdraws-climate-risk-disclosure-rule-defense-eighth-circuit-reactions/743860/" target="_blank" rel="noopener noreferrer">ESG Dive, SEC withdraws defense of the climate disclosure rule in the Eighth Circuit</a></li>
<li><a href="https://www.whitecase.com/insight-alert/california-climate-disclosure-laws-carb-delays-sb-253-reporting-deadline-november-10" target="_blank" rel="noopener noreferrer">White &amp; Case, CARB delays the SB 253 reporting deadline to November 10, 2026</a></li>
<li><a href="https://www.akingump.com/en/insights/blogs/speaking-sustainability/whats-next-for-sb-253-and-sb-261-ninth-circuit-oral-argument-recap" target="_blank" rel="noopener noreferrer">Akin, Ninth Circuit oral argument recap on SB 253 and SB 261</a></li>
<li><a href="https://www.consilium.europa.eu/en/press/press-releases/2026/02/24/council-signs-off-simplification-of-sustainability-reporting-and-due-diligence-requirements-to-boost-eu-competitiveness/" target="_blank" rel="noopener noreferrer">Council of the EU, final approval of the CSRD Omnibus thresholds, February 2026</a></li>
</ul>
</div>
</div></section></Reveal></PageShell>}
