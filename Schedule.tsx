import React from 'react';
import { DAYS_DATA, SCHEDULE_VIDEO_URL } from '../constants';
import { Zap } from 'lucide-react';

export const Schedule: React.FC = () => {
  return (
    <section className="relative w-full bg-[#010117] py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/20 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/J9PD0z8SzMHT2KxXQClbD5Q7PU.png')] bg-repeat opacity-30" style={{backgroundSize: '400px'}} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-16">
        
        {/* Header */}
        <div className="text-center space-y-4 flex flex-col items-center">
          <div className="relative mb-6">
             {/* Custom Switch / Lightbulb Badge */}
             <div className="relative flex items-center bg-[#5c5c5c] rounded-l-full rounded-r-[5px] p-[1px] h-[60px] shadow-[inset_0_-4px_8px_rgba(0,0,0,0.8)] w-[240px]">
                {/* Switch part */}
                <div className="relative w-[70px] h-full bg-[#5c5c5c] rounded-l-full rounded-r-[5px] flex items-center justify-center">
                   <div className="absolute right-0 top-1 bottom-1 w-[50px] bg-white/60 blur-[4px] rounded-l-full"></div>
                   <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-white/20 blur-[2px]"></div>
                </div>
                
                {/* Text Label Part */}
                <div className="absolute left-[60px] top-0 bottom-0 right-0 bg-[#010117] border border-white/10 rounded-r-[50px] rounded-l-[5px] flex items-center gap-2 px-4 shadow-[inset_0_-4px_4px_-1px_rgba(255,255,255,0.5),0_0_2px_#e11d48]">
                   {/* Light Effect on text container */}
                   <div className="absolute top-1 left-0 w-[120px] h-[30px] bg-gradient-to-r from-white/30 to-transparent rounded-r-full pointer-events-none"></div>
                   
                   <Zap className="w-5 h-5 text-white drop-shadow-[0_0_2px_#e11d48]" fill="currentColor" />
                   <span className="font-mono font-bold text-white text-lg tracking-tight drop-shadow-[0_0_2px_#e11d48]">EPISODES</span>
                </div>
                
                {/* Glow behind */}
                <div className="absolute -inset-4 bg-red-600/30 blur-xl -z-10 rounded-full"></div>
             </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-display text-center">
            EVERYTHING YOU'LL LEARN<br />DURING THESE 5 DAYS
          </h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto text-sm md:text-base">
            A Comprehensive Look at What You'll Experience in the 5-Day LIVE Workshop
          </p>
        </div>

        {/* Days List */}
        <div className="w-full flex flex-col gap-0 relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent hidden md:block" />

          {DAYS_DATA.map((item, index) => (
            <div key={index} className="relative w-full flex flex-col md:flex-row items-center justify-center group">
              
              <div className="w-full max-w-4xl mx-auto bg-white/[0.02] border border-white/[0.05] rounded-3xl p-1 mb-8 backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden relative">
                 {/* Top border gradient line simulation */}
                 <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
                 
                <div className="flex flex-col md:flex-row items-stretch">
                  
                  {/* Day Indicator with Video Background */}
                  <div className="relative flex-none w-full md:w-64 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex flex-col items-center justify-center gap-2 overflow-hidden bg-black/40 border-b md:border-b-0 md:border-r border-white/5">
                    {/* Video Background */}
                    <div className="absolute inset-0 z-0 opacity-100 mix-blend-screen">
                        <video 
                            src={SCHEDULE_VIDEO_URL} 
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                            className="w-full h-full object-cover opacity-50"
                        />
                    </div>
                    
                    <div className="relative z-10 flex flex-col items-center gap-4 py-8 md:py-0">
                        {/* Icon Box */}
                        <div className="bg-black border border-purple-500/50 rounded-lg p-3 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                          {item.icon}
                        </div>
                        <span className="text-3xl font-bold font-display tracking-wide">{item.day}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-10 flex flex-col justify-center gap-6">
                    {/* Date Row */}
                    <div className="flex items-center gap-4 w-full">
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0" />
                      <span className="text-sm font-mono text-gray-300 whitespace-nowrap tracking-wider">{item.date}</span>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-200/80 leading-tight">
                      {item.title}
                    </h3>
                    
                    {/* Divider */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                    
                    {/* Description */}
                    <p className="text-gray-400 text-center text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>

              {/* Connecting dot/line for desktop */}
              {index < DAYS_DATA.length - 1 && (
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-4 w-[1px] h-8 bg-gradient-to-b from-purple-500/50 to-transparent z-0" />
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
