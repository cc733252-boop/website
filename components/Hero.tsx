import React from 'react';
import { Button } from './ui/Button';
import { HERO_BG_IMAGE, LOGO_IMAGE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden bg-black pt-24 pb-10">
      
      {/* Background Board Image */}
      <div className="absolute top-0 left-0 w-full h-[600px] z-0 opacity-100">
        <img 
          src={HERO_BG_IMAGE} 
          alt="Board Background" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradients to fade image into black */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center gap-8 mt-10 md:mt-20">
        
        {/* Logo */}
        <div className="w-48 md:w-64 mb-4">
          <img src={LOGO_IMAGE} alt="Agency Accelerator" className="w-full h-auto" />
        </div>

        {/* Headlines */}
        <div className="text-center max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-display tracking-tight">
            5 Days to <span className="text-purple-400">Copy My AI System</span> and <span className="text-purple-400">Start Generating Income Online</span> in 2026
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Watch over my shoulder as I show you the exact system that generated $8.9M in 90 days for those who applied last time.
          </p>
        </div>

        {/* CTA */}
        <div className="w-full max-w-md mt-6">
          <Button fullWidth onClick={() => document.getElementById('footer-cta')?.scrollIntoView({behavior: 'smooth'})}>GET MY FREE TICKET</Button>
        </div>

        {/* Features with specific Icons */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-6 text-gray-400 text-sm font-medium">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
               {/* No showing your face icon approximation based on reference */}
               <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" opacity="0.5"/>
               <path d="M12 6a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 6zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 11zM7 16.4a5 5 0 0 1 10 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
               <path d="M4 20l16-16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>No showing your face</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                {/* No experience icon approximation */}
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.5"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span>No experience needed</span>
          </div>
        </div>

      </div>
      
      {/* Bottom fade line graphic */}
      <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2">
        <img src="https://framerusercontent.com/images/fX4qDtjEx58RDMEQ2paoAsRYtqI.svg" alt="" className="w-full object-cover opacity-50" />
      </div>
    </section>
  );
};