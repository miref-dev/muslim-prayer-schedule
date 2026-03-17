# 🕌 Muslim Prayer Schedule App (Aplikasi Jadwal Sholat)

A simple, beautiful desktop application to keep track of Muslim prayer times. Built with modern web technologies, it features dynamic themes including glassmorphism, claymorphism, and cyberpunk.

Aplikasi desktop sederhana yang cantik untuk melihat jadwal sholat. Dibangun dengan teknologi web modern, dilengkapi berbagai tema dinamis seperti *glassmorphism*, *claymorphism*, dan *cyberpunk*.

---

## 🇺🇸 English (For Non-Technical Users)

### How to Install and Run
You do **not** need to install any coding tools or open your terminal to run this application! 

1. **Download the App**
   - Go to the [Releases page](../../releases) on this GitHub repository.
   - Look for the latest version (it is usually at the top) and click **Assets**.
   - Download the file that matches your computer:
     - For **Windows**: Download the `.exe` file.
     - For **Mac**: Download the `.dmg` or `.app` file.
     - For **Linux**: Download the `.AppImage` or `.deb` file.

2. **Run the App**
   - **Windows**: Double-click the downloaded `.exe` file to install it, then launch it from your Start Menu.
   - **Mac**: Double-click the downloaded `.dmg` file, drag the application icon into your "Applications" folder, and then open it from your Finder or Launchpad. 
   - **Linux**: Right-click the `.AppImage` file, go to Properties > Permissions, check "Allow executing file as program", and double-click to run.

You can change the visual themes using the circular button in the top right corner of the app window!

---

## 🇮🇩 Bahasa Indonesia (Untuk Pengguna Non-Teknis)

### Cara Install dan Menjalankan Aplikasi
Anda **tidak perlu** meng-install alat ngoding atau membuka Terminal untuk menjalankan aplikasi ini!

1. **Unduh Aplikasinya**
   - Pergi ke halaman [Releases](../../releases) (Rilis) di repositori GitHub ini.
   - Perhatikan versi terbaru (biasanya berada di posisi paling atas) lalu klik tulisan **Assets**.
   - Unduh file yang sesuai dengan sistem komputer Anda:
     - Untuk **Windows**: Unduh file yang berakhiran `.exe`.
     - Untuk **Mac**: Unduh file yang berakhiran `.dmg` atau `.app`.
     - Untuk **Linux**: Unduh file yang berakhiran `.AppImage` atau `.deb`.

2. **Jalankan Aplikasinya**
   - **Windows**: Klik dua kali pada file `.exe` yang baru saja diunduh untuk meng-*install*, lalu buka dari menu Start.
   - **Mac**: Klik dua kali pada file `.dmg`, geser ikon aplikasi ke dalam folder "Applications" (Aplikasi), dan buka dari menu Finder atau Launchpad.
   - **Linux**: Klik kanan pada file `.AppImage`, masuk ke Properties > Permissions, centang "Allow executing file as program", lalu klik dua kali untuk membuka.

Jendela aplikasi jadwal sholat akan langsung muncul di layar Anda. Anda dapat mengubah tema visual menggunakan tombol bulat di sudut kanan atas!

---

## Installation

If you prefer to run the application from source or want to contribute to the code, ensure you have [Bun](https://bun.sh/) installed, then follow these standard steps:

```bash
# Clone the repository
git clone https://github.com/miref-fev/muslim-prayer-schedule.git
cd muslim-prayer-schedule

# Install dependencies
bun install

# Run the live-reload development server
bun run dev:hmr

# Build release executables (macOS, Windows, Linux)
bun run build:canary
```
