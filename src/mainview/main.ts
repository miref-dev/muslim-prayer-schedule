import renderSettings from "./settings";
import "./style.css";
import { PRAYER_TIMES_LOCAL_KEY, PrayerSchedule, PrayerTimes, themes } from "./types";

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
document.body.style.overflow = 'hidden';



function getPrayerLocalTimes(): PrayerTimes | null {
	const data = localStorage.getItem(PRAYER_TIMES_LOCAL_KEY);
	if (data) {
		return JSON.parse(data);
	}
	return null;
}

function getTodaySchedule(): PrayerSchedule | null {
	const schedule = getPrayerLocalTimes()?.jadwal;
	if (!schedule?.length) return null;
	const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
	return schedule.find(s => s.tanggal_lengkap === today) ?? schedule[0];
}

function buildPrayerTimes(schedule: PrayerSchedule | null) {
	if (!schedule) return [
		{ name: "Subuh", time: "--:--" },
		{ name: "Dzuhur", time: "--:--" },
		{ name: "Ashar", time: "--:--" },
		{ name: "Maghrib", time: "--:--" },
		{ name: "Isya", time: "--:--" },
	];
	return [
		{ name: "Subuh", time: schedule.subuh },
		{ name: "Dzuhur", time: schedule.dzuhur },
		{ name: "Ashar", time: schedule.ashar },
		{ name: "Maghrib", time: schedule.maghrib },
		{ name: "Isya", time: schedule.isya },
	];
}

// Returns the index of the currently active prayer (most recently passed)
function getActivePrayerIndex(prayers: { name: string; time: string }[]): number {
	const now = new Date();
	const nowMins = now.getHours() * 60 + now.getMinutes();

	let activeIdx = -1;
	for (let i = 0; i < prayers.length; i++) {
		const [h, m] = prayers[i].time.split(":").map(Number);
		if (isNaN(h) || isNaN(m)) continue;
		const prayerMins = h * 60 + m;
		if (nowMins >= prayerMins) {
			activeIdx = i;
		}
	}
	return activeIdx;
}


export default function render() {
	const themeName = localStorage.getItem("theme") as keyof typeof themes;
	const theme = themes[themeName];
	const todaySchedule = getTodaySchedule();
	const prayerTimes = buildPrayerTimes(todaySchedule);

	const city = localStorage.getItem("city") ?? "";
	const dateLabel = todaySchedule
		? `${todaySchedule.hari}, ${formatDate(todaySchedule.tanggal_lengkap)}${city ? " · " + city : ""}`
		: city;

	const activeIdx = getActivePrayerIndex(prayerTimes);

	app.innerHTML = `
		<main class="min-h-screen ${theme.backgroundImage} px-4 py-2 flex flex-col items-center justify-center select-none cursor-default font-sans relative">
			
			<!-- Setting Button -->
			<div class="absolute top-4 right-4 z-50">
				<button id="setting-button" class="cursor-pointer w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full text-white shadow-lg transition-all hover:rotate-45">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
				</button>
			</div>

			<div class="w-full max-w-[500px] relative z-10 mx-auto">
				<header class="text-center my-2 drag-region">
					<h1 class="${theme.titleText} tracking-tight uppercase" style="-webkit-app-region: drag;">
						Jadwal Sholat
					</h1>
					<p class="uppercase tracking-widest ${theme.dateLoc} px-4 py-1.5 relative rounded-full inline-block">
						${dateLabel}
					</p>
				</header>

				<div class="flex justify-between items-center ${theme.prayerRow} p-6 relative overflow-hidden">

					${prayerTimes.map((prayer, i) => {
		const isActive = i === activeIdx;
		return `
										<div class="group relative flex flex-col items-center justify-center transition-transform duration-300 ease-out hover:-translate-y-1 z-10 ${isActive ? 'scale-110' : ''}"> 
											<div class="relative flex items-center justify-center w-16 h-16 transition-all duration-300 mb-3 ${theme.prayerCircle} ${isActive ? 'ring-2 ring-white/80 ring-offset-2 ring-offset-transparent shadow-[0_0_20px_rgba(255,255,255,0.4)]' : ''}">
												<span class="font-mono tracking-wide relative z-10 ${theme.prayerTime}">
													${prayer.time}
												</span>
											</div>
											<span class="uppercase tracking-widest transition-colors px-2 pt-1 ${theme.prayerName}">
												${prayer.name}
											</span>
											${isActive ? `<span class="mt-1 text-[9px] font-bold uppercase tracking-widest ${theme.prayerName} bg-white/20 rounded-full px-2 py-0.5 animate-pulse">● Sekarang</span>` : ''}
										</div>
									`;
	}).join('')}
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
				render();
			}
		});
	});

	const settingButton = document.getElementById("setting-button") as HTMLButtonElement;
	settingButton.addEventListener("click", () => {
		localStorage.removeItem("prayerTime");
		location.reload();
	});
}


const prayerTime = localStorage.getItem("prayerTime");
if (!prayerTime) {
	renderSettings();
} else {
	render();

	// Re-render every minute so the active prayer badge stays in sync with the clock
	setInterval(() => {
		render();
	}, 60 * 1000);
}


function formatDate(date: string) {
	const d = new Date(date);
	return d.toLocaleDateString("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}