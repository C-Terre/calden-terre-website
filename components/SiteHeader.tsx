import Link from "next/link";
import Image from "next/image";

export default function SiteHeader(){
  return <header className="site-header"><div className="container nav">
    <Link href="/" className="brand"><Image src="/logo.png" alt="Calden Terre" width={38} height={53} style={{height:38,width:"auto"}}/><span>Calden Terre</span></Link>
    <nav className="nav-links" aria-label="Primary navigation">
      <Link href="/services">Services</Link><Link href="/framework">Framework</Link><Link href="/selected-work">Selected Work</Link><Link href="/resources">Resources</Link><Link href="/insights">Insights</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
    </nav>
    <Link className="btn btn-primary" href="/contact">Start a Project</Link>
  </div></header>
}
