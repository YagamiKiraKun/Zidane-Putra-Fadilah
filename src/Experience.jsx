import React from 'react';

function Experience({ onBack, onNavigate }) {
  return (
    <div className="min-h-screen w-full studio-light flex flex-col justify-between relative overflow-hidden select-none p-2 md:p-3">
      
      <div className="flex-1 w-full max-w-[100%] mx-auto glass-panel rounded-[24px] flex flex-col justify-between relative overflow-hidden p-4 md:p-12">
        
        {/* DEKORASI BULETAN GLASS */}
        <div className="absolute right-[-10%] bottom-[-18%] w-32 h-32 md:w-96 md:h-96 glass-orb z-0 animate-float-1 pointer-events-none opacity-80"></div>
        
        {/* NAVBAR */}
        <nav className="w-full flex justify-between items-center z-50 relative mb-6 md:mb-4">
          <button 
            onClick={onBack} 
            className="text-base md:text-lg font-extrabold tracking-widest text-zinc-900 hover:opacity-70 transition-opacity"
          >
            ZPF.
          </button>
          
          <div className="flex items-center space-x-3 md:space-x-10 text-[10px] md:text-sm font-bold tracking-wide text-zinc-800">
            <button onClick={() => onNavigate('about')} className="hover:text-black transition-colors duration-300 font-bold">Tentang Saya</button>
            <button className="text-black underline underline-offset-4 font-black">Experience</button>
            <button onClick={() => onNavigate('achievements')} className="hover:text-black transition-colors duration-300 font-bold">Achievements</button>
            <a 
              href="https://drive.google.com/file/d/1MYO7DxFAo7uKOO4GsE0YjqP5URDtA5HA/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-900 px-3 py-1.5 md:px-5 md:py-2 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest bg-zinc-900 text-white hover:bg-transparent hover:text-zinc-900 transition-all duration-300"
            >
              CV
            </a>
          </div>
        </nav>

        {/* ================= AREA KONTEN UTAMA ================= */}
        <div className="flex-1 flex flex-col justify-start items-center w-full z-20 pt-2 md:pt-8 pb-12">
          <div className="w-full max-w-6xl space-y-8 md:space-y-14">
            
            {/* HEADER JOURNEY */}
            <div className="w-full text-center">
              <h3 className="font-creative text-4xl md:text-7xl tracking-tight text-zinc-900 mb-2 leading-none">My Journey</h3>
              <p className="text-[10px] md:text-sm font-black tracking-[0.15em] text-zinc-400 uppercase">Rekam Jejak Karir, Proyek TI, & Organisasi</p>
            </div>

            {/* BENTO GRID EXPERIENCE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-16 w-full items-start">
              
              {/* WORK EXPERIENCE AND IT PROJECT (BLOK KIRI) */}
              <div className="space-y-4 md:space-y-8 w-full max-w-full md:max-w-md flex flex-col items-start md:justify-self-start">
                <div className="inline-block bg-zinc-900 text-white font-black text-[10px] md:text-base uppercase tracking-[0.1em] px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-sm tracking-tight">
                  Work Experience & IT Project
                </div>
                
                <div className="w-full space-y-6 text-left">
                  <div className="border-l-2 border-zinc-900/20 pl-3 md:pl-4 space-y-0.5 tracking-tight">
                    <span className="text-[10px] md:text-sm font-bold text-zinc-400 block">2023</span>
                    <h4 className="text-sm md:text-xl font-black text-zinc-800 leading-tight">Guru Privat Matematika dan Bahasa Inggris</h4>
                    <span className="text-xs md:text-base text-zinc-500 font-medium block mt-0.5">SIT Robbani Ogan Ilir</span>
                  </div>
                  
                  <div className="border-l-2 border-zinc-900/20 pl-3 md:pl-4 space-y-0.5 tracking-tight">
                    <span className="text-[10px] md:text-sm font-bold text-zinc-400 block">2024</span>
                    <h4 className="text-sm md:text-xl font-black text-zinc-800 leading-tight">Front End Hacker Developer</h4>
                    <span className="text-xs md:text-base text-zinc-500 font-medium block mt-0.5">Telkom Indonesia</span>
                  </div>

                  <div className="border-l-2 border-zinc-900/20 pl-3 md:pl-4 space-y-0.5 tracking-tight">
                    <span className="text-[10px] md:text-sm font-bold text-zinc-400 block">2024 - 2025</span>
                    <h4 className="text-sm md:text-xl font-black text-zinc-800 leading-tight">IT Staff and Back End Developer</h4>
                    <span className="text-xs md:text-base text-zinc-500 font-medium block mt-0.5">Badan Pendapatan Daerah Kota Palembang</span>
                  </div>

                  <div className="border-l-2 border-zinc-900/20 pl-3 md:pl-4 space-y-0.5 tracking-tight">
                    <span className="text-[10px] md:text-sm font-bold text-zinc-400 block">2025 - 2026</span>
                    <h4 className="text-sm md:text-xl font-black text-zinc-800 leading-tight">Asisten Laboratorium Pemrograman Lanjut</h4>
                    <span className="text-xs md:text-base text-zinc-500 font-medium block mt-0.5">Universitas Sriwijaya</span>
                  </div>
                </div>
              </div>

              {/* ORGANIZATION AND COMMUNITY (BLOK KANAN) */}
              <div className="space-y-4 md:space-y-8 w-full max-w-full md:max-w-md flex flex-col items-start md:justify-self-end">
                <div className="inline-block bg-zinc-900 text-white font-black text-[10px] md:text-base uppercase tracking-[0.1em] px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-sm tracking-tight">
                  Organization & Community
                </div>
                
                <div className="w-full space-y-6 text-left">
                  <div className="border-l-2 border-zinc-900/20 pl-3 md:pl-4 space-y-0.5 tracking-tight">
                    <span className="text-[10px] md:text-sm font-bold text-zinc-400 block">2022 - 2023</span>
                    <h4 className="text-sm md:text-xl font-black text-zinc-800 leading-tight">Staf Dinas Riset dan Teknologi</h4>
                    <span className="text-xs md:text-base text-zinc-500 font-medium block mt-0.5">BEM KM Fasilkom Unsri</span>
                  </div>

                  <div className="border-l-2 border-zinc-900/20 pl-3 md:pl-4 space-y-0.5 tracking-tight">
                    <span className="text-[10px] md:text-sm font-bold text-zinc-400 block">2023 - 2024</span>
                    <h4 className="text-sm md:text-xl font-black text-zinc-800 leading-tight">Staf Hubungan Masyarakat</h4>
                    <span className="text-xs md:text-base text-zinc-500 font-medium block mt-0.5">Fasilkom Science Community</span>
                  </div>

                  <div className="border-l-2 border-zinc-900/20 pl-3 md:pl-4 space-y-0.5 tracking-tight">
                    <span className="text-[10px] md:text-sm font-bold text-zinc-400 block">2024 - 2026</span>
                    <h4 className="text-sm md:text-xl font-black text-zinc-800 leading-tight">Ketua</h4>
                    <span className="text-xs md:text-base text-zinc-500 font-medium block mt-0.5">Ogan Ilir Book Party</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* TOMBOL BACK RUMAH */}
        <div className="absolute left-4 bottom-4 md:left-10 md:bottom-10 z-50">
          <button onClick={onBack} className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-black/40 hover:bg-white text-white hover:text-zinc-900 border border-white/20 hover:border-white transition-all duration-300 hover:scale-110 shadow-lg group">
            <svg className="w-5 h-5 md:w-8 md:h-8 transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Experience;