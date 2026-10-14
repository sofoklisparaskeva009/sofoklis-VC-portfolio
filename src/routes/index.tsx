import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from '@/components/portfolio';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'Sofoklis Paraskeva — Developer & AI Builder' },
      { name: 'description', content: 'I turn ideas into live web apps with AI. Explore full-stack applications, interactive tools, and AI prototypes by Sofoklis Paraskeva.' },
      { property: 'og:title', content: 'Sofoklis Paraskeva — Developer & AI Builder' },
      { property: 'og:description', content: 'Human vision. AI-powered execution. Discover real products designed and built by Sofoklis Paraskeva.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Portfolio,
});
