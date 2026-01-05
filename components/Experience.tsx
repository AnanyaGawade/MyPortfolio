
import React from 'react';
import { PROFILE } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="w-full py-4 h-full flex flex-col">
      <div className="mb-12 content-slip">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight signature-line">The Journey</h2>
        <p className="text-slate-500 font-mono mt-3 uppercase tracking-[0.4em] text-[10px]">
          // SYSTEM_EVOLUTION_LOGS
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 content-slip">
        {/* Industry Column */}
        <div className="space-y-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-blue-500"></div>
            <h3 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.3em]">Industry_Experience</h3>
          </div>
          
          <div className="space-y-12">
            {PROFILE.experience.map((exp) => (
              <div key={exp.id} className="relative pl-6 group">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 group-hover:bg-blue-500/50 transition-colors"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-slate-800 group-hover:bg-blue-500 transition-colors shadow-[0_0_8px_rgba(59,130,246,0.3)]"></div>
                
                <span className="text-[9px] font-mono text-slate-500 mb-2 block uppercase tracking-widest">{exp.period}</span>
                <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                <p className="text-blue-400 text-sm font-medium mb-4">{exp.company}</p>
                <div className="space-y-2">
                  {exp.description.map((point, i) => (
                    <p key={i} className="text-xs text-slate-400 font-light leading-relaxed">
                      • {point}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Column */}
        <div className="space-y-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-emerald-500"></div>
            <h3 className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em]">Academic_Foundation</h3>
          </div>
          
          <div className="space-y-12">
            {PROFILE.education.map((edu) => (
              <div key={edu.id} className="relative pl-6 group">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 group-hover:bg-emerald-500/50 transition-colors"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-slate-800 group-hover:bg-emerald-500 transition-colors shadow-[0_0_8px_rgba(16,185,129,0.3)]"></div>
                
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{edu.period}</span>
                  <div className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[9px] font-bold rounded-full border border-emerald-500/20">
                    {edu.gpa}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                <p className="text-slate-400 text-sm font-light mb-4">{edu.institution}</p>
                
                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map((h, i) => (
                    <span key={i} className="text-[8px] font-mono bg-white/5 px-2 py-1 rounded text-slate-500 border border-white/5">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
