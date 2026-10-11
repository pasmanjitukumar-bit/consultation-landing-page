import { content } from '@/lib/content';

export default function ThankYouContent({ videoId }: { videoId: string }) {
  return (
    <main className="form-section min-h-[calc(100vh-6rem)] px-5 py-14 text-center sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl text-blue-600" aria-hidden="true">✓</div>
        <p className="eyebrow mt-6 text-blue-600">YOUR NEXT STEP</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Congratulations!<br /><span className="gradient-text">Let’s talk about your website.</span></h1>
        <h2 className="mt-7 text-xl font-semibold sm:text-2xl">Watch this video</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">Then connect with me on WhatsApp to discuss your next steps.</p>
        <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm">
          {videoId ? <iframe src={`https://player.vimeo.com/video/${videoId}?autoplay=0&dnt=1`} title="Websathi — watch your next steps" className="aspect-video w-full" allow="fullscreen; picture-in-picture" allowFullScreen loading="lazy" /> :
            <div className="flex aspect-video items-center justify-center px-7" role="region" aria-label="Vimeo video placeholder"><div><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white" aria-hidden="true">▷</span><p className="mt-4 text-sm text-slate-300">Video coming soon</p></div></div>}
        </div>
        <a className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-green-700 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-green-800 sm:w-auto sm:text-base" href={`https://wa.me/${content.whatsapp}?text=${encodeURIComponent(content.whatsappMessage)}`} target="_blank" rel="noopener noreferrer">Connect with me on WhatsApp <span aria-hidden="true">↗</span></a>
        <p className="mt-4 text-xs text-slate-500">Let’s find the right website for your business.</p>
      </div>
    </main>
  );
}
