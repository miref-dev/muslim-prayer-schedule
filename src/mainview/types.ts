export const PRAYER_TIMES_LOCAL_KEY = "prayerTime";
export const PRAYER_TIMES_CITY_KEY = "city";
export const PRAYER_TIMES_PROVINCE_KEY = "province";
export const PRAYER_TIMES_THEME_KEY = "theme";

export interface Theme {
    titleText: string;
    dateLoc: string;
    prayerRow: string;
    prayerCircle: string;
    prayerName: string;
    prayerTime: string;
    backgroundImage: string;
}

export interface PrayerTimes {
    jadwal: PrayerSchedule[];
    kabkota: string;
    provinsi: string;
    zona: string;
    bulan: number;
    tahun: number;
    bulan_nama: string;
}

export interface PrayerSchedule {
    ashar: string;
    dhuha: string;
    dzuhur: string;
    hari: string;
    imsak: string;
    isya: string;
    maghrib: string;
    subuh: string;
    tanggal: number;
    tanggal_lengkap: string;
    terbit: string;
}


export const themes = {
    glass: {
        titleText: 'text-3xl font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
        dateLoc: 'bg-white/10 backdrop-blur-md border border-white/30 shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)] text-white font-medium',
        prayerRow: 'bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] rounded-[2.5rem]',
        prayerCircle: 'rounded-full bg-gradient-to-br from-white/30 to-white/5 backdrop-blur-lg border border-white/40 shadow-[0_4px_15px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.1)] group-hover:scale-110 group-hover:from-white/40 group-hover:to-white/20 ease-out',
        prayerName: 'text-[11px] font-bold text-white/80 group-hover:text-white drop-shadow-sm',
        prayerTime: 'text-sm font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]',
        backgroundImage: 'bg-image-glass',
    },
    skeuomorphism: {
        titleText: 'text-3xl font-bold text-slate-800 drop-shadow-[0_1px_0_rgba(255,255,255,1)]',
        dateLoc: 'bg-slate-200 border border-slate-300 shadow-[inset_0_2px_5px_rgba(0,0,0,0.15),0_1px_0_white] text-slate-600 font-semibold',
        prayerRow: 'bg-slate-100 border-t border-l border-white border-b-2 border-r-2 border-slate-300 shadow-[10px_10px_20px_rgba(0,0,0,0.1),-5px_-5px_15px_white] rounded-[2rem]',
        prayerCircle: 'rounded-full bg-gradient-to-br from-slate-50 to-slate-200 border-t border-l border-white border-b-2 border-r-2 border-slate-400/50 shadow-[4px_4px_8px_rgba(0,0,0,0.1),-2px_-2px_6px_white] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2)] active:translate-y-0.5 group-hover:scale-[1.02]',
        prayerName: 'text-xs font-bold text-slate-600 group-hover:text-slate-900 drop-shadow-[0_1px_0_white]',
        prayerTime: 'text-sm font-bold text-slate-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]',
        backgroundImage: 'bg-slate-200',
    },
    neobrutalism: {
        titleText: 'text-4xl font-[900] text-black italic drop-shadow-[3px_3px_0_rgba(0,0,0,1)]',
        dateLoc: 'bg-[#FFD700] border-[3px] border-black font-black text-black shadow-[4px_4px_0_0_#000] rounded-none',
        prayerRow: 'bg-[#FF6AC1] border-[2px] border-black shadow-[5px_5px_0_0_#000] rounded-none',
        prayerCircle: 'rounded-none bg-[#00F5FF] border-[3px] border-black shadow-[5px_5px_0_0_#000] group-hover:translate-x-[3px] group-hover:translate-y-[3px] group-hover:shadow-none duration-100',
        prayerName: 'text-[10px] font-black text-black bg-white border-2 border-black py-0.5 duration-100 group-hover:bg-black group-hover:text-white',
        prayerTime: 'text-sm font-black text-black',
        backgroundImage: 'bg-[#3366FF]',
    },
    claymorphism: {
        titleText: 'text-3xl font-black text-slate-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]',
        dateLoc: 'bg-white/80 shadow-[6px_6px_12px_rgba(0,0,0,0.08),inset_-3px_-3px_8px_rgba(0,0,0,0.05),inset_3px_3px_8px_rgba(255,255,255,1)] text-slate-500 font-bold',
        prayerRow: 'bg-[#f8fafc] rounded-[40px] shadow-[12px_12px_24px_rgba(0,0,0,0.06),inset_-6px_-6px_15px_rgba(0,0,0,0.05),inset_6px_6px_15px_rgba(255,255,255,1)] border border-white/40',
        prayerCircle: 'bg-white shadow-[6px_6px_12px_rgba(0,0,0,0.08),inset_-3px_-3px_6px_rgba(0,0,0,0.05),inset_3px_3px_6px_rgba(255,255,255,1)] group-hover:scale-110 group-hover:shadow-[8px_8px_16px_rgba(0,0,0,0.1)] ease-out rounded-[22px]',
        prayerName: 'text-xs font-black text-slate-400 group-hover:text-indigo-600',
        prayerTime: 'text-base font-black text-indigo-600',
        backgroundImage: 'bg-[#e2e8f0]',
    },
    minimalism: {
        titleText: 'text-2xl font-extralight text-zinc-800 tracking-[0.2em] mb-1 text-center',
        dateLoc: 'text-[9px] font-semibold tracking-[0.4em] text-zinc-400 mb-10 px-0 py-0',
        prayerRow: 'w-full max-w-md border-t border-zinc-200/60 pt-10 px-0',
        prayerCircle: 'w-12 h-12 bg-transparent',
        prayerName: 'text-[10px] font-light text-zinc-400 writing-mode-vertical',
        prayerTime: 'text-base font-light text-zinc-800 font-sans group-hover:text-zinc-500',
        backgroundImage: 'bg-zinc-50',
    },
    retro: {
        titleText: 'text-2xl font-mono tracking-[0.2em] text-[#00ff41] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)] mb-4',
        dateLoc: 'border border-[#00ff41] bg-black text-[#00ff41] text-[10px] font-mono shadow-[0_0_5px_rgba(0,255,65,0.5)]',
        prayerRow: 'bg-black border-2 border-[#00ff41] shadow-[0_0_20px_rgba(0,255,65,0.2)]',
        prayerCircle: 'w-20 h-12 bg-transparent border-x-2 border-[#00ff41]/50 group-hover:bg-[#00ff41]/10 duration-200',
        prayerName: 'text-[10px] font-mono text-[#00ff41]/70 group-hover:text-[#00ff41]',
        prayerTime: 'text-base font-mono font-bold text-[#00ff41]',
        backgroundImage: 'bg-black',
    },
    cyberpunk: {
        titleText: 'text-4xl font-black italic tracking-tighter text-white drop-shadow-[0_0_10px_#f0abfc] skew-x-[-10deg] mb-4',
        dateLoc: 'bg-[#00f3ff] text-black font-black italic skew-x-[-15deg] shadow-[4px_4px_0_0_#ff00ff] text-xs',
        prayerRow: 'bg-slate-950/90 border-2 border-[#ff00ff] shadow-[0_0_15px_rgba(255,0,255,0.4),inset_0_0_15px_rgba(255,0,255,0.2)] rounded-none',
        prayerCircle: 'bg-transparent border border-[#00f3ff] shadow-[0_0_10px_rgba(0,243,255,0.5)] rotate-45 group-hover:bg-[#00f3ff]/20',
        prayerName: 'text-[10px] font-black text-[#ff00ff] drop-shadow-[0_0_5px_#ff00ff]',
        prayerTime: 'text-sm font-black text-[#00f3ff] -rotate-45 drop-shadow-[0_0_8px_#00f3ff]',
        backgroundImage: 'bg-[#0b0e14]',
    }
} satisfies Record<string, Theme>;