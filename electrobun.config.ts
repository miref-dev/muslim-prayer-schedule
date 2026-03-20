import type { ElectrobunConfig } from "electrobun";

export default {
	app: {
		name: "Muslim Prayer Schedule",
		identifier: "muslim-prayer-schedule.miref.app",
		version: "0.0.2",
		description: "Indonesian Muslim Prayer Schedule"
	},
	build: {
		copy: {
			"dist/index.html": "views/mainview/index.html",
			"dist/assets": "views/mainview/assets",
			"resources/icon.icns": "resources/icon.icns",
			"resources/icon.png": "resources/icon.png",
			"resources/icon.ico": "resources/icon.ico",
		},
		mac: {
			bundleCEF: false,
			icons: "resources/icon.icns",
		},
		linux: {
			bundleCEF: false,
			icon: "resources/icon.png",
		},
		win: {
			bundleCEF: false,
			icon: "resources/icon.ico",
		},
	},

} satisfies ElectrobunConfig;
