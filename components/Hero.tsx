
import React from 'react';
import { PROFILE } from '../constants';
import ThreeBackground from './ThreeBackground';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-8">
      <ThreeBackground />
      
      <div className="text-center z-10 content-slip">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-mono uppercase tracking-[0.3em] mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Open for Internships
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-bold mb-8 tracking-tighter leading-tight bg-gradient-to-r from-white via-white to-blue-500 bg-clip-text text-transparent uppercase">
          {PROFILE.name}
        </h1>
        
        <div className="max-w-xl mx-auto">
          <p className="text-slate-400 text-xl md:text-2xl font-light mb-12 leading-relaxed tracking-tight">
            {PROFILE.shortBio}
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center font-mono text-[10px] tracking-[0.4em] text-slate-500 uppercase">
            <span>// PCCOE PUNE</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-800"></span>
            <span>// FULL STACK DEV</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-800"></span>
            <span>// ENGR. 2025</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-slate-500">INITIATE_SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
