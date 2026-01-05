
import React from 'react';

interface ProfileImageProps {
  imageUrl: string;
}

const Profile3D: React.FC<ProfileImageProps> = ({ imageUrl }) => {
  return (
    <div className="w-full h-full relative group overflow-hidden">
      {/* Static Image with High Fidelity Styling */}
      <img 
        src={imageUrl} 
        alt="Ananya Gawade" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Subtle Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem]"></div>
      
      {/* Decorative Corner Accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-500/30 rounded-tl-[3rem]"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-emerald-500/30 rounded-br-[3rem]"></div>
    </div>
  );
};

export default Profile3D;
