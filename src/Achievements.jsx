import React from 'react';

function Achievements({ onBack, onNavigate }) {
  return (
    <div className="min-h-screen w-full studio-light flex flex-col justify-between relative overflow-hidden select-none p-2 md:p-3">
      
      <div className="flex-1 w-full max-w-[100%] mx-auto glass-panel rounded-[24px] flex flex-col justify-between relative overflow-hidden p-4 md:p-12">
        
        {/* DEKORASI BULETAN GLASS */}
        <div className="absolute right-[-5%] top-[-10%] w-64 h-64 md:w-[500px] md:h-[500px] glass-orb z-0 animate-float-1 pointer-events-none opacity-60"></div>
        <div className="absolute left-[-5%] bottom-[-10%] w-48 h-48 md:w-[400px] md:h-[400px] glass-orb z-0 animate-float-2 pointer-events-none opacity-40"></div>
        
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
            <button onClick={() => onNavigate('experience')} className="hover:text-black transition-colors duration-300 font-bold">Experience</button>
            <button className="text-black underline underline-offset-4 font-black">Achievements</button>
            
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
            
            {/* HEADER */}
            <div className="text-center">
              <h3 className="font-creative text-4xl md:text-7xl tracking-tight text-zinc-900 mb-2 leading-none">Achievements</h3>
              <p className="text-[10px] md:text-sm font-black tracking-[0.15em] text-zinc-400 uppercase">Daftar Penghargaan & Medali Olimpiade Nasional</p>
            </div>

            {/* BENTO GRID KARTU KACA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
              
              {/* KARTU 1: OSSI */}
              <div className="md:col-span-2 group bg-white/30 backdrop-blur-md border border-white/40 p-5 md:p-8 rounded-[24px] md:rounded-[32px] shadow-xl shadow-zinc-900/5 hover:bg-white/50 transition-all duration-500 hover:scale-[1.01]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                  <div className="space-y-2.5 flex-1">
                    <h4 className="text-base md:text-3xl font-black text-zinc-900 leading-tight">
                      Olimpiade Sains Seluruh Indonesia (OSSI) 2023
                    </h4>
                    <p className="text-zinc-500 font-bold text-xs md:text-base uppercase tracking-wider">
                      Pusat Kejuaraan Sains Nasional
                    </p>
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      <span className="bg-yellow-400/20 text-yellow-700 px-2.5 py-1 rounded-full text-[9px] md:text-xs font-black uppercase tracking-tighter">Emas</span>
                      <span className="bg-zinc-900/5 text-zinc-600 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold">Matematika</span>
                      <span className="bg-zinc-900/5 text-zinc-600 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold">Biologi</span>
                      <span className="bg-zinc-900/5 text-zinc-600 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold">Inggris</span>
                      <span className="bg-zinc-900/5 text-zinc-600 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold">Sejarah</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://drive.google.com/drive/folders/1rPKQgXJz2UqSf91fzE1E6llEP7KW4ZgD?usp=drive_link" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 bg-zinc-900 text-white p-4 md:p-6 rounded-xl md:rounded-2xl hover:bg-zinc-700 transition-all group-hover:rotate-3 flex justify-center items-center"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Certificate</span>
                      <svg className="w-4 h-4 md:w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* KARTU 2: OSSAN */}
              <div className="group bg-white/30 backdrop-blur-md border border-white/40 p-5 md:p-8 rounded-[24px] md:rounded-[32px] shadow-xl shadow-zinc-900/5 hover:bg-white/50 transition-all duration-500 flex flex-col justify-between space-y-4 hover:scale-[1.01]">
                <div className="space-y-2">
                  <h4 className="text-base md:text-2xl font-black text-zinc-900 leading-tight">
                    Olimpiade Sains Siswa Nasional (OSSAN) 2023
                  </h4>
                  <p className="text-zinc-400 font-bold text-[10px] md:text-sm uppercase tracking-wider">
                    Presmanesia
                  </p>
                  <p className="text-xs md:text-base text-zinc-700 font-semibold leading-relaxed">
                    ● Meraih Medali Emas Matematika Olimpiade Mahasiswa Tingkat Nasional.
                  </p>
                </div>
                <a 
                  href="https://drive.google.com/file/d/10we1CEl3cC4bg7rYAPFwU3wTQyrxUbME/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-zinc-900 font-black text-[10px] md:text-sm uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-300 pt-2"
                >
                  <span>View Certificate</span>
                  <svg className="w-3 h-3 md:w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                </a>
              </div>

              {/* KARTU 3: IOS */}
              <div className="group bg-white/30 backdrop-blur-md border border-white/40 p-5 md:p-8 rounded-[24px] md:rounded-[32px] shadow-xl shadow-zinc-900/5 hover:bg-white/50 transition-all duration-500 flex flex-col justify-between space-y-4 hover:scale-[1.01]">
                <div className="space-y-2">
                  <h4 className="text-base md:text-2xl font-black text-zinc-900 leading-tight">
                    Indonesian Olympiad of Science (IOS) 2023
                  </h4>
                  <p className="text-zinc-400 font-bold text-[10px] md:text-sm uppercase tracking-wider">
                    Presmanesia
                  </p>
                  <p className="text-xs md:text-base text-zinc-700 font-semibold leading-relaxed">
                    ● Meraih Medali Perak Kimia Olimpiade Mahasiswa Tingkat Nasional.
                  </p>
                </div>
                <a 
                  href="https://drive.google.com/file/d/10zeK1ukkfZVvNqUiQXH_hlr34lXciKve/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-zinc-900 font-black text-[10px] md:text-sm uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-300 pt-2"
                >
                  <span>View Certificate</span>
                  <svg className="w-3 h-3 md:w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* TOMBOL BACK RUMAH */}
        <div className="absolute left-4 bottom-4 md:left-10 md:bottom-10 z-50">
          <button 
            onClick={onBack}
            className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-black/40 hover:bg-white text-white hover:text-zinc-900 border border-white/20 hover:border-white transition-all duration-300 hover:scale-110 shadow-lg group"
          >
            <svg className="w-5 h-5 md:w-8 md:h-8 transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Achievements;