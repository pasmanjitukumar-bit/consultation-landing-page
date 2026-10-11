import type { Metadata } from 'next';
import { content } from '@/lib/content';
import './globals.css';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const metadata: Metadata = {
  metadataBase:new URL(siteUrl), title:content.title, description:content.description,
  openGraph:{type:'website',locale:'en_US',siteName:'Websathi',title:content.title,description:content.description,images:[{url:'/opengraph-image',width:1200,height:630,alt:'Websathi — Your business deserves a better website'}]},
  twitter:{card:'summary_large_image',title:content.title,description:content.description,images:['/opengraph-image']},
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>;}
