
import React, { useState } from 'react';
import { PROFILE } from '../constants';

const Skills: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('Frontend');

  const categories = Array.from(new Set(PROFILE.skills.map(s => s.category)));

  const toggleCategory = (cat: string) => {
    setExpandedCategory(expandedCategory === cat ? null : cat);
  };

  return (
    <div className="max-w-6xl mx-auto px-8 w-full py-20 h-full flex flex-col justify-center">
      <div className="mb-16 content-slip">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter signature-line">Tech Skills</h2>
        <p className="text-slate-500 font-mono mt-4 uppercase tracking-[0.4em] text-xs">// SYSTEM CAPABILITIES</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 content-slip" style={{ transitionDelay: '0.2s' }}>
        {categories.map((cat) => {
          const categorySkills = PROFILE.skills.filter(s => s.category === cat);
          const isExpanded = expandedCategory === cat;

          return (
            <div 
              key={cat}
              className={`glass-card rounded-[2rem] transition-all duration-500 overflow-hidden border-white/5 ${
                isExpanded ? 'lg:col-span-2 bg-slate-900/80 border-blue-500/30' : 'hover:border-white/20'
              }`}
            >
              <button 
                onClick={() => toggleCategory(cat)}
                className="w-full p-8 flex items-center justify-between group"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    isExpanded ? 'bg-blue-500 text-white' : 'bg-white/5 text-slate-500 group-hover:text-blue-400'
                  }`}>
                    <span className="font-mono text-sm font-bold">0{categories.indexOf(cat) + 1}</span>
                  </div>
                  <div className="text-left">
                    <h3 className={`text-xl font-bold tracking-tight ${isExpanded ? 'text-white' : 'text-slate-400'}`}>
                      {cat}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      {categorySkills.length} MODULES DETECTED
                    </p>
                  </div>
                </div>
                <div className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out ${
                  isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="px-8 pb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="p-4 rounded-2xl bg-white/5 border border-white/5 group/skill hover:border-blue-500/30 transition-all">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-bold text-slate-200 group-hover/skill:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[9px] font-mono text-slate-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 transition-all duration-1000"
                          style={{ width: isExpanded ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
