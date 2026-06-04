import React from 'react';
import aboutImg from './assets/about-image.jpg';

function About({ onBack, onNavigate }) {
  return (
    <div className="min-h-screen w-full studio-light flex flex-col justify-between relative overflow-hidden select-none p-2 md:p-3">
      
      <div className="flex-1 w-full max-w-[100%] mx-auto glass-panel rounded-[24px] flex flex-col justify-between relative overflow-hidden p-6 md:p-12">
        
        {/* FOTO RAMPING */}
        <div className="w-full md:w-[420px] md:absolute md:left-0 md:top-0 md:bottom-0 h-[380px] md:h-full overflow-hidden z-10">
          <img 
            src={aboutImg} 
            alt="Zidane Kasual" 
            className="w-full h-full object-cover object-[0%_center] transition-all duration-700 ease-in-out scale-100 hover:scale-[1.01]"
          />
        </div>

        {/* BULETAN DEKORASI */}
        <div className="absolute left-[-10%] top-[-18%] w-32 h-32 md:w-96 md:h-96 glass-orb z-0 animate-float-1 pointer-events-none opacity-80"></div>
        
        {/* NAVBAR */}
        <nav className="w-full flex justify-between items-center z-50 relative mb-4">
          <button 
            onClick={onBack} 
            className="text-lg font-extrabold tracking-widest text-zinc-900 md:text-white md:mix-blend-difference hover:opacity-70 transition-opacity"
          >
            ZPF.
          </button>
          
          <div className="flex items-center space-x-6 md:space-x-10 text-xs md:text-sm font-bold tracking-wide text-zinc-800">
            {/* Halaman aktif saat ini */}
            <button className="text-black underline underline-offset-4 font-black">
              Tentang Saya
            </button>

            <button 
              onClick={() => onNavigate('experience')}
              className="hover:text-black transition-colors duration-300 font-bold"
            >
              Experience
            </button>
            
            {/* FIX: LINK MATI DIGANTI BUTTON NAVIGASI AKTIF */}
            <button 
              onClick={() => onNavigate('achievements')}
              className="hover:text-black transition-colors duration-300 font-bold"
            >
              Achievements
            </button>
            
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

        {/* AREA TEKS */}
        <div className="flex-1 flex flex-col justify-center relative w-full z-20 my-auto md:pl-[460px] md:pr-6">
          <div className="w-full max-w-4xl mx-auto space-y-6 text-zinc-900">
            
            <div className="space-y-4">
              <h3 className="font-creative text-5xl md:text-6xl tracking-tight text-zinc-900">Ciao!</h3>
              
              <p className="text-sm md:text-xl font-black tracking-tight text-zinc-800 uppercase">
                I'm Zidane, Seorang AI Researcher sekaligus Full-Stack Developer.
              </p>
              
              <p className="text-sm md:text-lg leading-relaxed tracking-tight text-zinc-600 font-medium text-justify">
                Aku suka mengeksplorasi dunia sains, teknologi, dan desain kreatif. Selain punya penelitian di arsitektur <span className="italic font-bold text-zinc-900">Deep Learning</span> buat citra medis, aku juga berpengalaman nge-build sistem web dari nol sampai siap pakai di instansi pemerintahan. Aku selalu siap buat ngubah ide-ide rumit jadi produk digital yang solutif, estetik, dan user-friendly.
              </p>
            </div>

            {/* GRID EDUCATION & SKILLS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-zinc-900/10">
              <div className="space-y-4">
                <h4 className="text-xs md:text-sm tracking-wide font-black uppercase text-zinc-400">Education</h4>
                <div className="space-y-5 pl-3 border-l-2 border-zinc-900/20 text-sm md:text-base tracking-tight">
                  <div>
                    <span className="text-xs font-bold text-zinc-400 block mb-0.5">2019 - 2022</span>
                    <span className="font-extrabold text-zinc-800 block leading-tight">SMA Negeri Sumatera Selatan</span>
                    <span className="text-zinc-500 font-medium block mt-0.5">Palembang</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-zinc-400 block mb-0.5">2022 - 2026</span>
                    <span className="font-extrabold text-zinc-800 block leading-tight">Universitas Sriwijaya</span>
                    <span className="text-zinc-500 font-medium block mt-0.5">Ogan Ilir</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs md:text-sm tracking-wide font-black uppercase text-zinc-400">Skills & Tooling</h4>
                <div className="space-y-4 text-sm font-extrabold tracking-tight">
                  <div className="border border-zinc-300 rounded-[12px] p-4 relative bg-white/40 shadow-sm">
                    <span className="absolute -top-2.5 left-3 px-2 bg-white text-[11px] font-black uppercase text-zinc-400 border border-zinc-200 rounded-full tracking-wide">Development</span>
                    <div className="flex flex-wrap gap-2 pt-1 text-zinc-700">
                      <span className="px-2.5 py-1 bg-zinc-200/60 rounded">Python</span>
                      <span className="px-2.5 py-1 bg-zinc-200/60 rounded">JavaScript</span>
                      <span className="px-2.5 py-1 bg-zinc-200/60 rounded">Java</span>
                      <span className="px-2.5 py-1 bg-zinc-200/60 rounded">React</span>
                      <span className="px-2.5 py-1 bg-zinc-200/60 rounded">DL</span>
                      <span className="px-2.5 py-1 bg-zinc-200/60 rounded">SQL</span>
                    </div>
                  </div>
                  <div className="border border-zinc-300 rounded-[12px] p-4 relative bg-white/40 shadow-sm">
                    <span className="absolute -top-2.5 left-3 px-2 bg-white text-[11px] font-black uppercase text-zinc-400 border border-zinc-200 rounded-full tracking-wide">Design</span>
                    <div className="flex flex-wrap gap-2 pt-1 text-zinc-700">
                      <span className="px-2.5 py-1 bg-zinc-200/60 rounded">Photoshop</span>
                      <span className="px-2.5 py-1 bg-zinc-200/60 rounded">Figma</span>
                      <span className="px-2.5 py-1 bg-zinc-200/60 rounded">Canva</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* TOMBOL BACK RUMAH (HOME) */}
        <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 z-50">
          <button 
            onClick={onBack}
            className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-black/40 hover:bg-white text-white hover:text-zinc-900 border border-white/20 hover:border-white transition-all duration-300 hover:scale-110 shadow-lg group"
            aria-label="Kembali ke Beranda"
          >
            <svg 
              className="w-5 h-5 md:w-8 md:h-8 transform group-hover:-translate-y-0.5 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;