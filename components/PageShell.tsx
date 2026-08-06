import type { ReactNode } from "react";
export default function PageShell({eyebrow,title,description,children}:{eyebrow:string;title:string;description:string;children:ReactNode}){return <><section className="page-hero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p className="lead">{description}</p></div></section>{children}</>}
