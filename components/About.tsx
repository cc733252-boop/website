import React from 'react';
import { TIMELINE_DATA } from '../constants';

export const About: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-16">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display">
            Why You Should Listen To Me
          </h2>
        </div>

        <div className="relative w-full flex flex-col gap-20">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />

          {TIMELINE_DATA.map((item, index) => (
            <div key={item.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 relative ${item.isReversed ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Node */}
              <div className="absolute left-[10px] md:left-1/2 top-0 w-5 h-5 rounded-full bg-black border-2 border-purple-500 z-10 md:-translate-x-1/2 translate-y-2 md:translate-y-0">
                <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-20" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 text-left md:text-right">
                 {/* Only show text here if NOT reversed on desktop, or ALWAYS show text here if mobile? 
                    Let's stick to a simpler alternating layout.
                    If !isReversed: Text Left, Image Right (Desktop).
                    If isReversed: Image Left, Text Right (Desktop).
                 */}
                 <div className={`flex flex-col gap-4 ${item.isReversed ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                    {!item.isReversed ? (
                        <>
                           <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-600">{item.title}</h3>
                           <p className="text-gray-400 leading-relaxed">{item.description}</p>
                        </>
                    ) : (
                        // Image Container for Reversed
                        <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
                            <img src={item.image} alt={item.imageAlt} className="w-full h-full object-cover" />
                        </div>
                    )}
                 </div>
              </div>

              {/* Image/Text Side (Opposite) */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0">
                 <div className={`flex flex-col gap-4 ${item.isReversed ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                    {!item.isReversed ? (
                        // Image Container
                        <div className="relative w-full max-w-md aspect-[4/5] md:aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
                            <img src={item.image} alt={item.imageAlt} className="w-full h-full object-cover" />
                        </div>
                    ) : (
                        // Text Container for Reversed
                        <>
                           <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-600">{item.title}</h3>
                           <p className="text-gray-400 leading-relaxed">{item.description}</p>
                        </>
                    )}
                 </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
