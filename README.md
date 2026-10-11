# Websathi consultation landing page

Next.js App Router, TypeScript, React, Tailwind CSS 4. Header contains only the centered Websathi wordmark. Replace `public/logo.svg` with your official logo when available.

## Run locally

Install Node.js 20.9 or newer. In this folder run:

```sh
npm install
npm run dev
```

Open http://localhost:3000. The Next.js app cannot run by double-clicking an HTML file.

## Production checks

```sh
npm run typecheck
npm run build
npm start
```

## Content and video

Edit `lib/content.ts` and the section components to update the copy. Colors and reusable styles are in `app/globals.css`. Set `NEXT_PUBLIC_VIMEO_VIDEO_ID` to the numeric ID from your real Vimeo URL when ready. Private/unlisted Vimeo videos may need additional embed configuration. Autoplay is disabled. Without a video ID, the Thank You page shows a clearly labeled video placeholder.

## Form behavior

Required fields have inline validation. The optional URL must start with http:// or https://. Successful validation redirects to `/thank-you`. No backend exists, and no personal information is saved or transmitted. The confirmation explicitly identifies this as a demo. A session flag contains only a boolean, not the form data. WhatsApp opens a chat to +977 9761658442; the visitor must send the message manually. Connect a working backend and adjust confirmation copy before using this form for real enquiries.

## Vercel

Push this folder to its own GitHub repository. Import the repository into Vercel, choose Next.js, and keep the standard build settings. If this folder is inside a larger repository, set Root Directory to `websathi-next`. Set `NEXT_PUBLIC_SITE_URL` to your deployed HTTPS URL for correct absolute Open Graph links. Optionally set `NEXT_PUBLIC_VIMEO_VIDEO_ID`, then deploy. Do not commit secrets. No paid service is required by this project.

## File map

- `app/page.tsx`: landing page composition
- `app/layout.tsx`: SEO, Open Graph and Twitter metadata
- `app/globals.css`: Tailwind import, theme and responsive styles
- `app/thank-you/page.tsx`: Thank You route
- `app/opengraph-image.tsx`: generated share image
- `components/Header.tsx`, `Hero.tsx`, `Problem.tsx`, `Benefits.tsx`, `Process.tsx`, `Urgency.tsx`, `CTAForm.tsx`, `ThankYouContent.tsx`: reusable UI
- `public/logo.svg`: current Websathi wordmark
- `.env.example`: environment variable guide
