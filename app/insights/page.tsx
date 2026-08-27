import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Scale, Landmark, TrendingUp, ClipboardCheck, ShieldAlert, ArrowRight } from "lucide-react";
export const metadata: Metadata = { title: "Insights", description: "Perspectives on regulatory exposure, market pressure, and sustainability implementation for established small and growing businesses." };
const insights=[
[Scale,"Regulatory Exposure","Out of Scope Does Not Mean Off the Hook","Almost none of our clients are directly regulated by SB 253, SB 261, or the narrowed CSRD. Here is why the pressure has not gone away anyway.","/insights/out-of-scope-not-off-the-hook"],
[Landmark,"Regulatory Update","Where the Climate Disclosure Rules Actually Stand Right Now","A plain look at where the federal, California, and EU climate disclosure rules actually stand as of August 2026.","/insights/where-climate-disclosure-rules-stand"],
[TrendingUp,"Market Pressure","The Price of Being Unverifiable","Suppliers who can prove their sustainability data are starting to compete on trust. The ones who cannot are left competing on price alone.","/insights/price-of-being-unverifiable"],
[ClipboardCheck,"Regulatory Update","Your CDP Score Just Got Harder to Coast On","CDP's 2026 changes mean recycling last year's answers is no longer a safe strategy. Here is what actually changed.","/insights/cdp-2026-scoring-changes"],
[ShieldAlert,"Market Pressure","The Greenwashing Net Just Got Wider","A retailer can now be liable for a supplier's misleading claim. That pressure is moving down the chain fast.","/insights/greenwashing-liability-widens"],
] as const;
export default function Insights(){return <PageShell eyebrow="Insights" title="Where the regulatory and market pressure on sustainability actually stands right now, and what it means for organizations doing the real work."><Reveal><section className="section"><div className="container grid-3">{insights.map(([Icon,tag,t,teaser,href])=>{const I=Icon as typeof Scale;return <Link href={String(href)} className="card" key={String(href)} style={{display:"block",textDecoration:"none"}}><div className="icon-badge"><I size={22}/></div><span style={{display:"block",fontSize:13,fontWeight:600,color:"var(--terracotta)",marginBottom:8,letterSpacing:".02em",textTransform:"uppercase"}}>{String(tag)}</span><h3>{String(t)}</h3><p>{String(teaser)}</p><span style={{display:"inline-flex",alignItems:"center",gap:6,marginTop:10,color:"var(--terracotta)",fontWeight:600,fontSize:14}}>Read the full piece <ArrowRight size={15}/></span></Link>})}</div></section></Reveal></PageShell>}
