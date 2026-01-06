
import React, { useState } from 'react';
import { PROFILE } from '../constants';

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-full flex flex-col lg:flex-row items-stretch lg:h-[600px] relative">
      {/* Left: Project Info & Selector */}
      <div className="lg:w-2/5 p-8 md:p-12 content-slip z-[15] border-r border-white/5 flex flex-col justify-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight signature-line">Projects</h2>
          <p className="text-slate-500 font-mono mt-4 uppercase tracking-[0.4em] text-[10px]">
            // LOG: {activeIndex + 1} / {PROFILE.projects.length}
          </p>
        </div>

        {/* Project Navigation List */}
        <div className="mb-8 space-y-2 border-l-2 border-white/5 pl-4">
          {PROFILE.projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => setActiveIndex(idx)}
              className={`block w-full text-left transition-all duration-300 group relative py-1 ${
                activeIndex === idx ? 'translate-x-3' : 'hover:translate-x-2 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`font-mono text-[9px] transition-colors ${activeIndex === idx ? 'text-blue-500 font-bold' : 'text-slate-600'}`}>
                  0{idx + 1}
                </span>
                <span className={`text-sm font-bold tracking-tight uppercase transition-all ${
                  activeIndex === idx ? 'text-white' : 'text-slate-500'
                }`}>
                  {project.title}
                </span>
              </div>
              {activeIndex === idx && (
                <div className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-3 h-0.5 bg-blue-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {PROFILE.projects[activeIndex].title}
          </h3>
          <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
            {PROFILE.projects[activeIndex].description}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {PROFILE.projects[activeIndex].tags.map(tag => (
              <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-4">
            {PROFILE.projects[activeIndex].githubUrl && (
              <a 
                href={PROFILE.projects[activeIndex].githubUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all border border-white/10 group-hover:border-blue-500/50">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100">SOURCE_CODE</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Right: Interactive Deck */}
      <div className="lg:w-3/5 h-[400px] lg:h-full relative perspective-1000 content-slip z-[15] overflow-hidden bg-slate-950/20" style={{ transitionDelay: '0.2s' }}>
        {PROFILE.projects.map((project, idx) => {
          const isActive = activeIndex === idx;
          const offset = idx - activeIndex;
          
          return (
            <div
              key={project.id}
              onClick={() => setActiveIndex(idx)}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                isActive ? 'z-50' : 'z-10 hover:translate-y-[-5%]'
              }`}
              style={{
                transform: `translate(-50%, -50%) rotateY(${offset * -15}deg) translateZ(${Math.abs(offset) * -80}px) translateX(${offset * 100}px)`,
                opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.4,
                pointerEvents: Math.abs(offset) > 2 ? 'none' : 'auto'
              }}
            >
              <div className={`glass-panel rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 group/card ${
                isActive ? 'border-blue-500/40 scale-105 shadow-blue-500/10' : 'border-white/5 saturate-50 grayscale-[0.2]'
              }`}>
                <div className={`h-10 flex items-center px-6 border-b transition-colors ${
                  isActive ? 'bg-blue-600/5 border-blue-500/20' : 'bg-white/5 border-white/5'
                }`}>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                  </div>
                  <span className="ml-auto text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                    ID_MODULE: 0x0{idx + 1}
                  </span>
                </div>

                <div className="relative aspect-video overflow-hidden group/img">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Hover Overlay with Title */}
                  <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-8">
                    <div className="transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 ease-out text-center">
                       <span className="block text-white font-bold text-xl tracking-tighter uppercase mb-1">
                         {project.title}
                       </span>
                       <span className="block text-blue-400 font-mono text-[8px] tracking-[0.3em] uppercase">
                         View Module Details
                       </span>
                    </div>
                  </div>

                  {!isActive && (
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] flex items-center justify-center group-hover/card:opacity-0 transition-opacity duration-300">
                      <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.4em]">STANDBY</span>
                    </div>
                  )}

                  {isActive && (
                    <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] group-hover/card:opacity-5 transition-opacity"></div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-blue-500/80 uppercase">Access Authorized</span>
                    <div className="flex gap-1">
                      {[1,2,3].map(i => (
                        <div key={i} className={`w-2.5 h-0.5 rounded-full ${isActive ? 'bg-blue-500/60' : 'bg-slate-800'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
