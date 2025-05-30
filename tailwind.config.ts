import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				bg: "#151c2c",
				bgSoft: "#182237",
				text: "#fff",
				textSoft: "#b7abc1",
			},
		},
	},
	plugins: [],
};
export default config;
