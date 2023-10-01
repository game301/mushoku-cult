/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "header-bgc": "hsla(220, 23%, 5%, 0.8)",
            },
            spacing: {
                "nav-logo-width": "clamp(1rem, 10vw + 3rem, 6rem)",
                "nav-logo-margin": "max(1vw, 0.8vw + 0.1rem)",
                "nav-logo-whitespace": "balance",
            },
        },
    },
    plugins: [],
}
