import Link from "next/link";
import Image from "next/image";
export default function SiteFooter(){return <footer className="footer"><div className="container"><div className="footer-grid">
<div><div className="brand"><span style={{background:"#fff",borderRadius:8,padding:"4px 8px",display:"inline-flex"}}><Image src="/logo.png" alt="Calden Terre" width={30} height={42} style={{height:30,width:"auto"}}/></span><span>Calden Terre</span></div><p>Helping SMEs and Community Development Financial Institutions translate sustainability ambition into practical systems, measurable implementation, and long-term organizational performance.</p></div>
<div><h3>Explore</h3><p><Link href="/services">Services</Link></p><p><Link href="/framework">Framework</Link></p><p><Link href="/selected-work">Selected Work</Link></p><p><Link href="/resources">Resources</Link></p></div>
<div><h3>Connect</h3><p><a href="mailto:info@caldenterre.com">info@caldenterre.com</a></p><p><Link href="/contact">Start a project</Link></p><p><Link href="/about">About Calden Terre</Link></p></div>
</div><div className="footer-bottom"><span>© 2026 Calden Terre LLC. All rights reserved.</span><span>Turning sustainability commitments into measurable outcomes.</span></div></div></footer>}
