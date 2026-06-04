import React from 'react';
import heroImg from './assets/hero-image.png';

function App() {
  return (
    <div className="min-h-screen w-full studio-light flex flex-col justify-between relative overflow-hidden select-none p-2 md:p-3">
      
      <div className="flex-1 w-full max-w-[100%] mx-auto glass-panel rounded-[24px] flex flex-col justify-between relative overflow-hidden p-6 md:p-10">
        
        <nav className="w-full flex justify-between items-center z-50 relative">
          <div className="text-lg font-extrabold tracking-widest text-zinc-900">ZPF.</div>
          
          <div className="flex items-center space-x-6 md:space-x-10 text-xs md:text-sm font-bold tracking-wide text-zinc-800">
            <a href="#tentang" className="hover:text-black transition-colors duration-300">Tentang Saya</a>
            <a href="#experience" className="hover:text-black transition-colors duration-300">Experience</a>
            <a href="#achievements" className="hover:text-black transition-colors duration-300">Achievements</a>
            
            <a 
              href="https://drive.google.com/file/d/1MYO7DxFAo7uKOO4GsE0YjqP5URDtA5HA/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-900 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest bg-zinc-900 text-white hover:bg-transparent hover:text-zinc-900 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </nav>

        <div className="absolute left-[-10%] top-[-18%] w-32 h-32 md:w-96 md:h-96 glass-orb z-10 animate-float-1 pointer-events-none opacity-80"></div>
        
        <div className="absolute right-6 bottom-6 md:right-10 md:bottom-10 flex items-center space-x-4 z-50">
          
          <a 
            href="https://linkedin.com/in/zidanepf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/20 hover:bg-zinc-900 border border-white/30 text-zinc-800 hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
            aria-label="LinkedIn"
          >
            <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>

          <a 
            href="https://instagram.com/zidanepf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/20 hover:bg-zinc-900 border border-white/30 text-zinc-800 hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
            aria-label="Instagram"
          >
            <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m4.4 3a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m4.75-.75a.75.75 0 0 1 .75.75.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75.75.75 0 0 1 .75-.75z"/>
            </svg>
          </a>

        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center relative w-full my-auto z-20">
          <div className="relative w-full max-w-6xl flex flex-col items-center justify-center">
            
            <h2 className="font-creative text-7xl md:text-[9.5rem] text-zinc-900 absolute top-[-80px] md:top-[-200px] left-1/2 transform -translate-x-1/2 z-30 tracking-wide normal-case drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)] whitespace-nowrap">
              Creative
            </h2>

            <h1 className="text-4xl md:text-[6.5rem] font-black tracking-[0.2em] text-center text-zinc-900 flex items-center justify-center w-full z-0 leading-none">
              <span>PORTO</span>
              <span className="w-20 md:w-[32rem] inline-block"></span>
              <span className="mr-[-0.2em]">FOLIO</span>
            </h1>

            <div className="w-full max-w-5xl flex justify-between items-center mt-12 px-2 md:px-4 text-[10px] md:text-xs tracking-[0.25em] text-zinc-800 font-extrabold uppercase z-40">
              <span className="border-b border-zinc-900/30 pb-1">Programmer & Designer</span>
              <span className="border-b border-zinc-900/30 pb-1">Zidane Putra Fadilah</span>
            </div>

            <div className="absolute bottom-[-500px] left-1/2 transform -translate-x-1/2 w-[3000px] md:w-[1440px] z-20 pointer-events-none transition-all duration-500 hover:scale-[1.01]">
              <img 
                src={heroImg} 
                alt="Zidane Putra Fadilah" 
                className="w-full h-auto object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;