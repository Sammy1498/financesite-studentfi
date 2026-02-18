/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#30abe8",
                "background-light": "#fbfcfd",
                "background-dark": "#111c21",
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "1.5rem",
                "lg": "2.5rem",
                "xl": "4rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
}
