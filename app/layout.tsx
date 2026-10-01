import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Bhrugu Varia — AI, automation & product",description:"Portfolio of Bhrugu Varia, a Computer Science co-op student building thoughtful AI, automation and financial operations tools.",openGraph:{title:"Bhrugu Varia",description:"AI, automation & product builder based in Regina, SK.",type:"website"}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
