'use client';
import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { content } from '@/lib/content';
type Field = 'fullName' | 'email' | 'whatsapp' | 'business' | 'website' | 'message';
const fields: {name: Field; label: string; placeholder: string; required?: boolean; type?: string; autocomplete?: string}[] = [
  {name:'fullName',label:'Full Name',placeholder:'Your full name',required:true,autocomplete:'name'},
  {name:'email',label:'Active Email',placeholder:'you@example.com',required:true,type:'email',autocomplete:'email'},
  {name:'whatsapp',label:'WhatsApp Number',placeholder:'+977 98XXXXXXXX',required:true,type:'tel',autocomplete:'tel'},
  {name:'business',label:'Business Name',placeholder:'Your business name',required:true,autocomplete:'organization'},
  {name:'website',label:'Website or Facebook URL',placeholder:'https://yourwebsite.com',type:'url'},
];
export default function CTAForm() {
  const router = useRouter();
  const [errors,setErrors] = useState<Partial<Record<Field,string>>>({});
  const [busy,setBusy] = useState(false);
  const [status,setStatus] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (busy) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: Field) => String(data.get(key)||'').trim();
    const next: Partial<Record<Field,string>> = {};
    for (const field of fields) if(field.required && !value(field.name)) next[field.name] = `Please enter your ${field.label.toLowerCase()}.`;
    if(value('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email'))) next.email = 'Enter a valid email address.';
    const phone = value('whatsapp');
    if(phone && (!/^\+?[\d\s().-]+$/.test(phone) || phone.replace(/\D/g,'').length<7 || phone.replace(/\D/g,'').length>15)) next.whatsapp = 'Enter a valid number with 7–15 digits, including your country code.';
    if(value('website')) {try {const url=new URL(value('website')); if(!['https:','http:'].includes(url.protocol)||!url.hostname.includes('.')) throw new Error();} catch {next.website='Enter a complete URL, starting with https://.';}}
    setErrors(next);
    const first = Object.keys(next)[0];
    if(first) {setStatus('Please check the highlighted fields.'); (form.elements.namedItem(first) as HTMLInputElement)?.focus(); return;}
    setBusy(true); setStatus('Demo completed. Opening next steps…');
    // No personal details are stored or sent. This marker only controls the demo confirmation.
    try { sessionStorage.setItem('websathi-demo-completed','true'); } catch { /* navigation still works */ }
    router.push('/thank-you');
  }
  return <section id="consultation" className="form-section px-5 py-16 sm:py-20"><div className="mx-auto max-w-2xl rounded-3xl border border-white/70 bg-white p-6 shadow-[0_20px_80px_#10204b0d] sm:p-11"><div className="text-center"><p className="eyebrow text-blue-600">LET’S TALK ABOUT YOUR BUSINESS</p><h2 className="heading mt-4">Your better website<br />starts here.</h2><p className="mt-4 text-sm leading-7 text-slate-600">Share a few details to explore your free consultation.</p></div><form className="mt-8" noValidate onSubmit={submit}><div className="grid gap-5 sm:grid-cols-2">{fields.map(field=><div key={field.name} className={field.name==='website'?'sm:col-span-2':''}><label className="field-label" htmlFor={field.name}>{field.label} {field.required?<span className="text-blue-600">*</span>:<span className="font-normal text-slate-500">(optional)</span>}</label><input className="field-input" id={field.name} name={field.name} type={field.type||'text'} autoComplete={field.autocomplete} placeholder={field.placeholder} required={field.required} maxLength={field.name==='website'?500:160} aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name]?`${field.name}-error`:undefined} onChange={()=>{setErrors(previous=>({...previous,[field.name]:undefined}));setStatus('');}} />{errors[field.name]&&<p id={`${field.name}-error`} className="mt-2 text-xs text-red-700">{errors[field.name]}</p>}</div>)}<div className="sm:col-span-2"><label className="field-label" htmlFor="message">Anything You Want to Say <span className="font-normal text-slate-500">(optional)</span></label><textarea className="field-input min-h-28 resize-y" id="message" name="message" placeholder="Tell us about your goals or questions…" maxLength={2000}/></div></div><button className="cta mt-7 w-full disabled:opacity-60" type="submit" disabled={busy}>{busy?'Opening next steps…':content.cta}<span aria-hidden="true">↗</span></button><p className="mt-4 text-center text-xs text-slate-500">We respect your privacy. No spam.</p><p className="mt-3 text-center text-xs leading-5 text-slate-500">Demo form: details are not sent or saved. Contact us on WhatsApp on the next page to arrange your call.</p><p role="status" aria-live="polite" className="mt-2 text-center text-sm text-slate-600">{status}</p></form></div></section>;
}
