
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onHireClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'ABOUT', id: 'about' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'JOURNEY', id: 'experience' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center transition-all duration-500 px-6 py-3 rounded-2xl ${
          isScrolled ? 'bg-slate-900/80 backdrop-blur-xl border border-white/5 shadow-2xl' : ''
        }`}>
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="text-lg font-bold font-mono tracking-tighter flex items-center gap-2 group">
             <span className="text-blue-500 group-hover:scale-125 transition-transform">◆</span>
             <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent uppercase">ANANYA</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-4 py-2 text-[10px] font-mono tracking-[0.2em] transition-all relative group ${
                  activeSection === link.id ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-500 transition-all duration-300 ${
                  activeSection === link.id ? 'w-4 opacity-100' : 'w-0 opacity-0'
                }`}></span>
              </a>
            ))}
          </div>

          <button onClick={onHireClick} className="px-5 py-2 bg-white text-slate-950 text-[10px] font-bold rounded-full hover:bg-blue-400 transition-all uppercase tracking-widest whitespace-nowrap">
            interested to hire me?
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
