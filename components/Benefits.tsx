import React from 'react';
import { BENEFITS } from '../constants';
import { Button } from './ui/Button';

export const Benefits: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-4 bg-gradient-to-b from-[#2e1065] to-[#040313] overflow-hidden">
      
      {/* Stars Background */}
      <div className="absolute inset-0 opacity-50 pointer-events-none" style={{
        backgroundImage: `url("https://framerusercontent.com/images/J9PD0z8SzMHT2KxXQClbD5Q7PU.png")`,
        backgroundSize: '400px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-12">
        
        <div className="text-center max-w-3xl space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight">
            After <span className="text-purple-400">10 years</span> and <span className="text-purple-400">$100M+ earned</span>, I’m about to uncover one of the biggest waves in the online world.
          </h2>
          <p className="text-xl text-gray-300 underline decoration-sky-500/50 underline-offset-4">
            And how you can take advantage of it using AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="group relative rounded-[32px] overflow-hidden border border-white/10 bg-[#010117] transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
              
              {/* Image */}
              <div className="h-[400px] w-full relative">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-center text-center gap-4">
                <h3 className="text-2xl font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 space-y-8">
          <h3 className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl">
            And just need to catch this AI wave method right now, before it's too late.
          </h3>
          
          <div className="flex justify-center" id="footer-cta">
            <Button className="scale-125">GET MY FREE TICKET</Button>
          </div>
        </div>

      </div>
    </section>
  );
};
