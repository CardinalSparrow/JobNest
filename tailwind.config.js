/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#22577A",
				secondary: "#38A3A5",
				grey: "#656565",
				dark: "#1f1f1f",
				background1: "#57CC99",
				fields: "#A5E0C6",
				background2: { default: "#80ED99", 100: "#C7F9CC" },
			},
			fontFamily: {
				pthin: ["Poppins-Thin", "sans-serif"],
				pextralight: ["Poppins-ExtraLight", "sans-serif"],
				plight: ["Poppins-Light", "sans-serif"],
				pregular: ["Poppins-Regular", "sans-serif"],
				pmedium: ["Poppins-Medium", "sans-serif"],
				psemibold: ["Poppins-SemiBold", "sans-serif"],
				pbold: ["Poppins-Bold", "sans-serif"],
				pextrabold: ["Poppins-ExtraBold", "sans-serif"],
				pblack: ["Poppins-Black", "sans-serif"],
			},
		},
	},
	plugins: [],
};
