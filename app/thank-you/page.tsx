import type { Metadata } from 'next';
import Header from '@/components/Header';
import ThankYouContent from '@/components/ThankYouContent';
export const metadata:Metadata={title:'Next steps — Websathi',robots:{index:false,follow:false}};
export default function ThankYou() {const id=process.env.NEXT_PUBLIC_VIMEO_VIDEO_ID||'';return <><Header/><ThankYouContent videoId={/^\d+$/.test(id)?id:''}/></>;}
