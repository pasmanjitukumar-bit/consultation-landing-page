import { content } from '@/lib/content';
export default function Process() {
  return <section className="section text-center"><p className="eyebrow text-blue-600">SIMPLE FROM THE START</p><h2 className="heading mt-4">Three steps to your next chapter.</h2><ol className="mt-10 grid gap-8 md:grid-cols-3">{content.steps.map((step,i)=><li key={step.title}><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50 font-bold text-blue-600">0{i+1}</span><h3 className="mt-5 text-lg font-bold">{step.title}</h3><p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-slate-600">{step.text}</p></li>)}</ol></section>;
}
