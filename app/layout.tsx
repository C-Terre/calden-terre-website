import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: { default: "Calden Terre | Sustainability Implementation Consulting", template: "%s | Calden Terre" },
  description: "Implementation-focused sustainability, climate, operational systems, reporting, and program management support for SMEs and Community Development Financial Institutions.",
  metadataBase: new URL("https://caldenterre.com"),
  icons: { icon: "/favicon.png" }
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/><main>{children}</main><SiteFooter/><Script id="mailerlite-universal" strategy="afterInteractive">{`
    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '2550034');
  `}</Script></body></html>}
