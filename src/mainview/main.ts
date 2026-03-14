import "./style.css";

const app = document.getElementById("app")!;

// Disable context menu (devtools) and common shortcuts
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
	if (
		e.key === "F12" ||
		(e.metaKey && e.altKey && e.key.toLowerCase() === "i") ||
		(e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i")
	) {
		e.preventDefault();
	}
});
// document.body.style.overflow = 'hidden';

const prayerTimes = [
	{ name: "Fajr", time: "05:01" },
	{ name: "Dhuhr", time: "12:15" },
	{ name: "Asr", time: "15:28" },
	{ name: "Maghrib", time: "18:10" },
	{ name: "Isha", time: "19:20" },
];

interface Theme {
	titleText: string;
	dateLoc: string;
	prayerRow: string;
	prayerCircle: string;
	prayerName: string;
	prayerTime: string;
	backgroundImage: string;
}

const themes: Record<string, Theme> = {
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
}

function render(themeName: keyof typeof themes) {
	const theme = themes[themeName];
	const themeKeys = Object.keys(themes);

	app.innerHTML = `
		<main class="min-h-screen ${theme.backgroundImage} px-4 py-2 flex flex-col items-center justify-center select-none cursor-default font-sans relative">
			
			<!-- Theme Switcher -->
			<div class="absolute top-4 right-4 z-50">
				<div class="relative group" id="theme-dropdown-container">
					<button id="theme-button" class="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full text-white shadow-lg transition-all group-hover:rotate-45">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
					</button>
					
					<div id="theme-menu" class="absolute right-0 mt-2 w-48 max-h-64 bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl overflow-y-auto opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform origin-top translate-y-[-10px] group-hover:translate-y-0">
						<div class="py-2">
							${themeKeys.map(key => `
								<button class="theme-option w-full text-left px-4 py-2 text-sm font-semibold uppercase tracking-wider text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors ${key === themeName ? 'bg-indigo-50/50 text-indigo-600' : ''}" data-theme="${key}">
									${key}
								</button>
							`).join('')}
						</div>
					</div>
				</div>
			</div>

			<div class="w-full max-w-[500px] relative z-10 mx-auto">
				<header class="text-center my-2 drag-region">
					<h1 class="${theme.titleText} tracking-tight uppercase" style="-webkit-app-region: drag;">
						Prayer Schedule
					</h1>
					<p class="uppercase tracking-widest ${theme.dateLoc} px-4 py-1.5 relative rounded-full inline-block">
						Friday, October 20, Jakarta Selatan
					</p>
				</header>

				<div class="flex justify-between items-center ${theme.prayerRow} p-6 relative overflow-hidden">

					${prayerTimes.map(prayer => `
						<div class="group relative flex flex-col items-center justify-center transition-transform duration-300 ease-out hover:-translate-y-1 z-10">
							
							<div class="relative flex items-center justify-center w-16 h-16 transition-all duration-300 mb-3 ${theme.prayerCircle}">
								<span class="font-mono tracking-wide relative z-10 ${theme.prayerTime}">
									${prayer.time}
								</span>
							</div>
							
							<span class="uppercase tracking-widest transition-colors px-2 ${theme.prayerName}">
								${prayer.name}
							</span>
						</div>
					`).join('')}
				</div>
			</div>
		</main>
	`;

	// Re-attach event listeners after render
	const themeOptions = document.querySelectorAll('.theme-option');
	themeOptions.forEach(option => {
		option.addEventListener('click', (e) => {
			const selectedTheme = (e.currentTarget as HTMLButtonElement).dataset.theme as keyof typeof themes;
			if (selectedTheme && selectedTheme !== themeName) {
				render(selectedTheme);
			}
		});
	});
}

// Initial render
render("glass");


