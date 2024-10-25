/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		backgroundImage: {
			"gradient-15": "linear-gradient(15deg, var(--tw-gradient-stops))",
			"gradient-90": "linear-gradient(90deg, var(--tw-gradient-stops))",
			"gradient-to-r": "linear-gradient(90deg, var(--tw-gradient-stops))",
		},

		extend: {
			keyframes: {
				textinc2: {
					"0%": { transform: "translateY(20%)", opacity: "0" },

					"100%": { transform: "translateY(0%)", opacity: "100" },
				},
				gradRotate: {
					"0%": { transform: "rotate(0)" },
					"100%": { transform: "rotate(75deg)" },
				},
			},
			animation: {
				textinc: "textinc2 0.5s ease-in",
				gradrotate: "gradRotate 1s ease-in-out",
			},
		},
	},
	plugins: [require("tailwindcss-3d")],
};
