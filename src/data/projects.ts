export interface Project {
  title: string
  tagline: string
  description: string
  category: string
  liveUrl: string
  techStack: string[]
  featured: boolean
  image: string
}

export const projects: Project[] = [
  {
    title: 'rythmoShow',
    tagline: 'Less admin. More showtime.',
    description: 'A complete, live online booking management system featuring an intuitive client-facing reservation flow, a secure Admin Dashboard for real-time booking management, and automated bilingual email workflows powered by Resend API on a verified custom domain.',
    category: 'FULL-STACK / LIVE PRODUCTION',
    liveUrl: 'https://www.rythmoshow.com/',
    techStack: ['React', 'Tailwind', 'Vercel', 'Resend API', 'Custom Domain', 'Admin Dashboard'],
    featured: true,
    image: '/rythmoshow.jpg',
  },
  {
    title: 'Little Coast Kitchen',
    tagline: 'A little coast. A seamless experience.',
    description: 'A Mediterranean restaurant website featuring a seamless online table reservation system that saves bookings and automatically notifies the internal team in real time.',
    category: 'FULL-STACK BUILD',
    liveUrl: 'https://little-coast-kitchen-nine.vercel.app/',
    techStack: ['React', 'Tailwind', 'Supabase', 'Vercel', 'Automated Workflows'],
    featured: true,
    image: '/littlecoast.jpg',
  },
  {
    title: 'Movie Night Picker',
    tagline: 'Your mood. Your next favorite movie.',
    description: 'A playful, mood-based movie recommendation interactive web app that suggests curated watch lists instantly based on user prompts and mood selection.',
    category: 'INTERACTIVE FRONTEND & AI',
    liveUrl: 'https://film-mood-finder.lovable.app/',
    techStack: ['Interactive UI', 'Lovable', 'React', 'AI Recommendations'],
    featured: true,
    image: '/movienight.jpg',
  },
]