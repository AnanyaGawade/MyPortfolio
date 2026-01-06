
import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AiAssistant from './components/AiAssistant';
import Experience from './components/Experience';
import { PROFILE } from './constants';

const AnimatedDivider: React.FC<{ type: 'top' | 'bottom', id: string }> = ({ type, id }) => {
  const isTop = type === 'top';
  const path = isTop 
    ? "M0 0 H1440 V0 C1080 30 360 100 0 120 Z" 
    : "M0 120 H1440 V120 C1080 90 360 20 0 0 Z";
  
  const linePath = isTop 
    ? "M1440 0 C1080 30 360 100 0 120" 
    : "M1440 120 C1080 90 360 20 0 0";

  return (
    <div className={isTop ? "section-divider-top" : "section-divider-bottom"}>
      <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className="gradient-sweep" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" className="gradient-sweep" />
          </linearGradient>
        </defs>
        <path d={path} className="divider-path-fill" />
        <path d={linePath} className="divider-path-line" stroke={`url(#grad-${id})`} />
      </svg>
    </div>
  );
};

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { 
      threshold: 0.25,
    });

    document.querySelectorAll('.reveal-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-screen bg-slate-950 overflow-hidden">
      <Navbar />
      
      <div ref={containerRef} className="snap-container">
        {/* HERO SECTION */}
        <section id="hero" className="snap-section reveal-section">
          <Hero />
          <AnimatedDivider type="bottom" id="hero-b" />
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="snap-section reveal-section">
          <AnimatedDivider type="top" id="about-t" />
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex items-center justify-center pt-24 pb-12">
            <div className="glass-panel w-full max-w-6xl rounded-[3rem] p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 md:gap-20 border-white/10 shadow-3xl overflow-hidden relative">
              <div className="tech-mesh-bg"></div>
              
              <div className="md:w-1/2 content-slip z-10">
                 <div className="mb-6">
                   <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight signature-line">About Me</h2>
                 </div>
                 <p className="text-lg text-slate-400 leading-relaxed font-light mb-8">
                   {PROFILE.bio}
                 </p>
                 <div className="flex gap-8 items-center">
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center min-w-[120px]">
                     <span className="block text-3xl font-bold text-blue-500">8.0</span>
                     <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">GPA</span>
                   </div>
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center min-w-[120px]">
                     <span className="block text-3xl font-bold text-emerald-500">10+</span>
                     <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">TECH STACK</span>
                   </div>
                 </div>
              </div>
              <div className="md:w-1/2 relative group content-slip z-10" style={{ transitionDelay: '0.2s' }}>
                 <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full group-hover:bg-blue-500/40 transition-all"></div>
                 <div className="hologram-container shadow-2xl border border-white/10 relative overflow-hidden rounded-[2.5rem]">
                    <div className="hologram-scan"></div>
                    <img 
                      src="https://lh3.googleusercontent.com/d/14y1cvfu6Rk9eCpkQ4GoJf_gvTfxgybF2" 
                      alt="Ananya Gawade" 
                      className="w-full aspect-[4/5] object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80"></div>
                 </div>
              </div>
            </div>
          </div>
          <AnimatedDivider type="bottom" id="about-b" />
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="snap-section reveal-section">
          <AnimatedDivider type="top" id="skills-t" />
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex items-center justify-center pt-24 pb-12">
            <div className="glass-panel w-full max-w-6xl rounded-[3rem] p-8 md:p-12 border-white/10 shadow-3xl overflow-hidden">
              <Skills />
            </div>
          </div>
          <AnimatedDivider type="bottom" id="skills-b" />
        </section>
        
        {/* PROJECTS SECTION */}
        <section id="projects" className="snap-section reveal-section">
          <AnimatedDivider type="top" id="projects-t" />
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex items-center justify-center pt-24 pb-12">
            <div className="glass-panel w-full max-w-6xl rounded-[3rem] overflow-hidden border-white/10 shadow-3xl">
              <Projects />
            </div>
          </div>
          <AnimatedDivider type="bottom" id="projects-b" />
        </section>

        {/* EXPERIENCE/JOURNEY SECTION */}
        <section id="experience" className="snap-section reveal-section">
          <AnimatedDivider type="top" id="exp-t" />
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex items-center justify-center pt-24 pb-12">
            <div className="glass-panel w-full max-w-6xl rounded-[3rem] p-8 md:p-12 border-white/10 shadow-3xl max-h-[80vh] overflow-y-auto">
              <Experience />
            </div>
          </div>
          <AnimatedDivider type="bottom" id="exp-b" />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="snap-section reveal-section">
           <AnimatedDivider type="top" id="contact-t" />
           <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex items-center justify-center pt-24 pb-12">
             <div className="glass-panel w-full max-w-4xl rounded-[3rem] p-12 md:p-20 border-white/10 shadow-3xl text-center content-slip">
               <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight signature-line">Let's Connect</h2>
               <p className="text-slate-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                 I'm currently looking for new opportunities and collaborations. 
                 Feel free to drop a message through any channel!
               </p>
               <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
                 <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4 text-slate-500 hover:text-white transition-all hover:-translate-y-2">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600/10 group-hover:border-blue-500/50 transition-all shadow-lg">
                     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   </div>
                   <span className="text-[11px] font-mono tracking-[0.1em] lowercase opacity-80">/AnanyaGawade</span>
                 </a>
                 <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4 text-slate-500 hover:text-blue-500 transition-all hover:-translate-y-2">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600/10 group-hover:border-blue-500/50 transition-all shadow-lg">
                     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                   </div>
                   <span className="text-[11px] font-mono tracking-[0.1em] lowercase opacity-80">/ananya-gawade</span>
                 </a>
                 <a href={`mailto:${PROFILE.email}`} className="group flex flex-col items-center gap-4 text-slate-500 hover:text-red-500 transition-all hover:-translate-y-2">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-red-600/10 group-hover:border-red-500/50 transition-all shadow-lg">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </div>
                   <span className="text-[11px] font-mono tracking-[0.1em] lowercase opacity-80">{PROFILE.email}</span>
                 </a>
               </div>
             </div>
           </div>
        </section>
      </div>

      <AiAssistant />
    </div>
  );
};

export default App;
