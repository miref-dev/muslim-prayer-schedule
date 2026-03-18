import render from "./main";
import "./style.css";
import { fetchCity, fetchPrayerTimes, province } from "./server";
import { PRAYER_TIMES_CITY_KEY, PRAYER_TIMES_LOCAL_KEY, PRAYER_TIMES_PROVINCE_KEY, PRAYER_TIMES_THEME_KEY, themes } from "./types";

function renderSettings() {
    const container = document.createElement("div");
    container.className = "flex flex-col gap-4 bg-white p-4 rounded-md h-screen overflow-y-auto";
    container.innerHTML = `
        <h1 class="text-2xl font-bold">Pengaturan</h1>
        <div class="flex flex-col gap-2">
            <label for="province">Provinsi</label>
            <select id="province" class="border border-gray-300 rounded-md p-2">
                <option value="">Pilih Provinsi</option>
                ${province.map((p) => `<option value="${p}">${p}</option>`).join("")}
            </select>
        </div>
        <div class="flex flex-col gap-2">
            <label for="city">Kota</label>
            <select id="city" class="border border-gray-300 rounded-md p-2">
                <option value="">Pilih Kota</option>
            </select>
        </div>
        <div class="flex flex-col gap-2">
            <label for="theme" class="block text-sm font-medium text-heading">Tema</label>
            <select id="theme" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                <option value="skeuomorphism">Skeuomorphism</option>
                <option value="neobrutalism">Neobrutalism</option>
                <option value="glass">Glassmorphism</option>
                <option value="claymorphism">Claymorphism</option>
                <option value="cyberpunk">Cyberpunk</option>
                <option value="minimalism">Minimalism</option>
                <option value="retro">Retro</option>
            </select>
        </div>
        <div class="flex flex-col gap-2">
            <button id="save" class="bg-blue-500 text-white rounded-md p-2 cursor-pointer">Simpan</button>
        </div>
    `;
    document.getElementById("app")?.appendChild(container);

    const provinceSelect = document.getElementById("province") as HTMLSelectElement;
    const citySelect = document.getElementById("city") as HTMLSelectElement;
    const themeSelect = document.getElementById("theme") as HTMLSelectElement;
    const saveButton = document.getElementById("save") as HTMLButtonElement;

    // Load saved data on init
    const savedProvince = localStorage.getItem(PRAYER_TIMES_PROVINCE_KEY);
    const savedCity = localStorage.getItem(PRAYER_TIMES_CITY_KEY);
    const savedTheme = localStorage.getItem(PRAYER_TIMES_THEME_KEY);

    if (savedTheme) {
        themeSelect.value = savedTheme;
    }

    if (savedProvince) {
        provinceSelect.value = savedProvince;
        fetchCity(savedProvince).then(cities => {
            citySelect.innerHTML = `<option value="">Pilih Kota</option>` + cities.map((city: string) => `<option value="${city}">${city}</option>`).join("");
            if (savedCity && cities.includes(savedCity)) {
                citySelect.value = savedCity;
            }
        });
    }

    provinceSelect.addEventListener("change", async () => {
        const province = provinceSelect.value;
        if (province) {
            localStorage.setItem(PRAYER_TIMES_PROVINCE_KEY, province);
        } else {
            localStorage.removeItem(PRAYER_TIMES_PROVINCE_KEY);
        }

        // Reset city when province changes
        localStorage.removeItem(PRAYER_TIMES_CITY_KEY);
        const cities = await fetchCity(province);
        citySelect.innerHTML = `<option value="">Pilih Kota</option>` + cities.map((city: string) => `<option value="${city}">${city}</option>`).join("");
    });

    citySelect.addEventListener("change", async () => {
        const city = citySelect.value;
        const province = provinceSelect.value;
        if (city) {
            localStorage.setItem(PRAYER_TIMES_CITY_KEY, city);
        } else {
            localStorage.removeItem(PRAYER_TIMES_CITY_KEY);
        }

        const prayerTime = await fetchPrayerTimes({ city, province });
        localStorage.setItem(PRAYER_TIMES_LOCAL_KEY, JSON.stringify(prayerTime.data));
    });

    themeSelect.addEventListener("change", async () => {
        const theme = themeSelect.value;
        if (theme) {
            localStorage.setItem(PRAYER_TIMES_THEME_KEY, theme);
        } else {
            localStorage.removeItem(PRAYER_TIMES_THEME_KEY);
        }
    });

    saveButton.addEventListener("click", () => {
        fetchPrayerTimes({ city: citySelect.value, province: provinceSelect.value }).then(prayerTime => {
            localStorage.setItem(PRAYER_TIMES_LOCAL_KEY, JSON.stringify(prayerTime.data));
            const city = citySelect.value;
            const province = provinceSelect.value;
            const theme = themeSelect.value;
            if (city && province && theme) {
                localStorage.setItem(PRAYER_TIMES_CITY_KEY, city);
                localStorage.setItem(PRAYER_TIMES_PROVINCE_KEY, province);
                localStorage.setItem(PRAYER_TIMES_THEME_KEY, theme);
                render();
            }
        });
    });
}

export default renderSettings