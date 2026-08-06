import type { Metadata } from "next";
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

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>}
