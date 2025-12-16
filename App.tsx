import React from 'react';
import { Hero } from './components/Hero';
import { Schedule } from './components/Schedule';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
      <main>
        <Hero />
        <div className="relative z-10 bg-black">
            <Schedule />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <About />
            <Benefits />
        </div>
      </main>
      <Footer />
    </div>
  );
}
