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
      keyframes:{
        gradRotate:{
          "0%":{transform: "rotate(0)"},
          "100%":{transform:"rotate(75deg)"}
        }
      },animation:{
        gradrotate:"gradRotate 4s ease-in-out"
      }
    },
  },
  plugins: [],
}

