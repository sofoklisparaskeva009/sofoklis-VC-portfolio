import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Atom, Braces, Check, ChevronUp, Code2, GitBranch, Github, Heart, Linkedin, Mail, Menu, Send, Sparkles, Terminal, Triangle, Wind, Workflow, X, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'
import sculpture from '@/assets/gold-sculpture.jpg'

const tools = [
  { name: 'Vercel', icon: Triangle, detail: 'Deployment & hosting' },
  { name: 'Resend', icon: Send, detail: 'Transactional email' },
  { name: 'Lovable', icon: Heart, detail: 'AI-powered building' },
  { name: 'Antigravity IDE', icon: Terminal, detail: 'Agentic development' },
  { name: 'Git / GitHub', icon: GitBranch, detail: 'Version control' },
  { name: 'React', icon: Atom, detail: 'Interactive interfaces' },
  { name: 'Tailwind CSS', icon: Wind, detail: 'Thoughtful styling' },
  { name: 'REST APIs', icon: Braces, detail: 'Connected systems' },
]

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div id="top" className="portfolio">
      <header className="site-header">
        <div className="page-width header-inner">
          <a href="#top" className="wordmark" aria-label="Sofoklis Paraskeva home"><img src="/logo.png" alt="Sofoklis Paraskeva — Vibe Coding Builder" className="brand-mark" width={512} height={512} decoding="async" /><span className="wordmark-name">SOFOKLIS<br />PARASKEVA</span></a>
          <nav aria-label="Main navigation" className="desktop-nav"><a className="nav-active" href="#projects">Projects</a><a href="#about">About</a><a href="#toolkit">Toolkit</a></nav>
          <Button asChild variant="outline" className="header-contact"><a href="#contact">Let’s talk <ArrowUpRight /></a></Button>
          <Button variant="ghost" size="icon" className="mobile-menu" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="mobile-nav">{[['Projects', '#projects'], ['About', '#about'], ['Toolkit', '#toolkit'], ['Contact', '#contact']].map(([label, link]) => <a key={link} href={link} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}</nav>}
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <img src={sculpture} alt="Sculptural gold ribbon in an obsidian studio" className="hero-art" width={1536} height={1024} fetchPriority="high" />
          <div className="hero-shade" />
          <div className="page-width hero-inner">
            <div className="hero-content">
              <div className="eyebrow hero-eyebrow"><span className="tiny-line" /> INDEPENDENT DEVELOPER & AI BUILDER</div>
              <h1 id="hero-heading">I turn ideas into<br /><span className="gold-text">live web apps</span><br />with AI<span className="text-primary">.</span></h1>
              <p className="hero-description">I'm <strong>Sofoklis Paraskeva</strong> — I design, prompt, and ship full-stack web applications, interactive tools, and AI prototypes using modern vibe coding tools.</p>
              <div className="hero-actions"><Button asChild size="lg" className="gold-button"><a href="#projects">View My Projects <ArrowUpRight /></a></Button><Button asChild variant="outline" size="lg"><a href="#contact">Contact Me <ArrowRight /></a></Button></div>
              <div className="hero-note"><span className="status-dot" /> From a first idea to a real, live product.</div>
            </div>
            <div className="art-caption"><span className="caption-cross">+</span><span>HUMAN VISION.<br /><strong>AI-POWERED EXECUTION.</strong></span></div>
            <a className="scroll-cue" href="#projects"><ArrowDown size={14} /> SCROLL TO EXPLORE</a>
            <span className="hero-edition">PORTFOLIO — 2026</span>
          </div>
        </section>

        <div className="built-with-band"><div className="page-width built-with"><span className="eyebrow built-label">IDEAS MEET<br />THE RIGHT TOOLS</span><span><Triangle />Vercel</span><span><Send />Resend<span className="tool-suffix"> API</span></span><span><Terminal />Antigravity<span className="tool-suffix"> IDE</span></span><span><Heart />Lovable</span><span><Sparkles />Gemini</span><span><Atom />React</span><span><Wind />Tailwind CSS</span></div></div>

        <section id="projects" className="page-width section projects-section">
          <div className="section-heading"><div><p className="eyebrow"><span className="text-primary">01 /</span> SELECTED WORK</p><h2>Featured Builds<span className="text-primary">.</span></h2></div><p className="section-intro">Not just concepts.<br />Real products, out in the world.</p></div>
          <div className="project-grid">{projects.filter(project => project.featured).map((project, index) => (
            <article className="project-card" key={project.liveUrl}>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-image-link" aria-label={`Visit ${project.title}`}><div className="browser-bar"><span /><span /><span /><span className="browser-url">{new URL(project.liveUrl).hostname}</span><ArrowUpRight size={12} /></div><div className="project-image-wrap"><img src={project.image} alt={`${project.title} live website preview`} width={1440} height={960} loading="lazy" /></div><span className="project-visit">Explore live project <ArrowUpRight size={15} /></span></a>
              <div className="project-content"><div className="project-category"><span>{project.category}</span><span className="project-index">0{index + 1}</span></div><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-title"><h3>{project.title}</h3><ArrowUpRight size={21} /></a><p className="project-tagline">{project.tagline}</p><p className="project-description">{project.description}</p><div className="project-tags">{project.techStack.map(tech => <span key={tech}>{tech}</span>)}</div><a className="project-bottom-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer"><span className="live-indicator"><span className="status-dot" /> Live project</span><ArrowUpRight size={17} /></a></div>
            </article>
          ))}</div>
          <div className="work-footnote"><Code2 size={15} /><span>Designed with intention. Built with AI. Shipped for real.</span></div>
        </section>

        <section id="about" className="about-band"><div className="page-width section about-inner"><div className="about-copy"><p className="eyebrow"><span className="text-primary">02 /</span> THE MINDSET</p><h2>Big ideas.<br />No unnecessary<br /><span className="gold-text">complexity.</span></h2><p>I’m Sofoklis — a builder at the intersection of creativity, code, and AI. I turn “what if” into something you can actually use.</p><p>From the first prompt to the final deployment, I connect thoughtful design with reliable systems. The goal is always the same: make it feel simple, and make it work.</p><div className="about-signature">Sofoklis Paraskeva <span>DEVELOPER & AI BUILDER</span></div></div><div className="process-list">{[
            { icon: Sparkles, name: 'Start with the idea', text: 'Find the real problem. Shape the concept, the experience, and what matters most.' },
            { icon: Terminal, name: 'Prototype with AI', text: 'Prompt, build, and iterate quickly. Turn the concept into something tangible.' },
            { icon: Workflow, name: 'Connect the systems', text: 'Bring interfaces, databases, APIs, and automated workflows together.' },
            { icon: Zap, name: 'Ship to the real world', text: 'Refine the details, deploy to production, and keep making it better.' },
          ].map((step, index) => <div className="process-step" key={step.name}><div className="process-icon"><step.icon size={19} /></div><div><span className="process-number">0{index + 1}</span><h3>{step.name}</h3><p>{step.text}</p></div><Check className="step-check" size={15} /></div>)}</div></div></section>

        <section id="toolkit" className="page-width section toolkit-section"><div className="section-heading"><div><p className="eyebrow"><span className="text-primary">03 /</span> MY TOOLKIT</p><h2>The right tools.<br />Better possibilities<span className="text-primary">.</span></h2></div><p className="section-intro">A modern stack.<br />A builder’s mindset.</p></div><div className="tool-grid">{tools.map(tool => <div className="tool-item" key={tool.name} tabIndex={0} title={tool.detail}><tool.icon size={25} strokeWidth={1.5} /><div><h3>{tool.name}</h3><span>{tool.detail}</span></div><ArrowUpRight className="tool-arrow" size={15} /></div>)}</div></section>

        <section id="contact" className="contact-band"><div className="page-width contact-inner"><div><p className="eyebrow"><span className="text-primary">04 /</span> WHAT’S NEXT?</p><h2>Your next idea.<br /><span className="gold-text">Let’s make it real.</span></h2><p>Have a project in mind, an interesting challenge,<br className="desktop-break" /> or just want to say hello? Let’s connect.</p></div><div className="contact-links"><div className="contact-heading"><span>START A CONVERSATION</span><ArrowUpRight size={24} /></div><Button asChild variant="outline" className="contact-link"><a href="mailto:sofoklisparaskeva009@gmail.com"><Mail /><span>Email</span><ArrowUpRight /></a></Button><Button asChild variant="outline" className="contact-link"><a href="https://github.com/sofoklisparaskeva009" target="_blank" rel="noopener noreferrer"><Github /><span>GitHub</span><ArrowUpRight /></a></Button><Button asChild variant="outline" className="contact-link"><a href="https://www.linkedin.com/in/sofoklis-paraskeva-109264118" target="_blank" rel="noopener noreferrer"><Linkedin /><span>LinkedIn</span><ArrowUpRight /></a></Button></div></div></section>
      </main>

      <footer className="page-width site-footer"><a href="#top" className="footer-mark" aria-label="Back to top"><img src="/logo.png" alt="Sofoklis Paraskeva — Vibe Coding Builder" className="brand-mark" width={512} height={512} decoding="async" loading="lazy" /></a><p>© 2026 Sofoklis Paraskeva. All rights reserved.</p><a className="back-top" href="#top">BACK TO TOP <ChevronUp size={15} /></a></footer>
    </div>
  )
}