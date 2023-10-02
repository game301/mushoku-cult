/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                // Color
                darkModePrimaryColor: "hsl(0, 0%, 100%)",
                darkModePrimaryColorHover: "hsl(0, 0%, 40%)",
                darkModeAccentColor: "",
                darkModeAccentColorHover: "",

                lightModePrimaryColor: "",
                lightModePrimaryColorHover: "",
                lightModeAccentColor: "",
                lightModeAccentColorHover: "",

                // Background-color

                darkModeBgColor:
                    "radial-gradient(circle,rgba(23, 19, 109, 1) 0%,rgba(0, 0, 0, 1) 100%)",

                lightModeBgColor:
                    "radial-gradient(circle, rgb(85, 85, 185) 0%,rgb(200, 180, 170) 100%)",

                navbarBgColor: "hsla(220, 23%, 5%, 0.8)",

                mainHeadingButtonBgColor: "hsla(0, 0%, 10%, 40%)",
                mainHeadingButtonBgColorHover: "hsla(0, 0%, 10%, 4%)",
            },
            fontFamily: {
                fontNormal: "Quando",
                fontWriting: "Love Light",
                fontBoard: "Liu Jian Mao Cao",
            },

            fontSize: {
                navContainerItemLinkFontSize:
                    "clamp(0.2rem, 0.7vw + 0.4rem, 1rem)",
                navIconContainerFontSize: "clamp(0.2rem, 1vw + 0.5rem, 1rem)",

                mainHeadingFontSize: "clamp(0.5rem, 3vw + 1rem, 4rem)",
                mainSubheadingFontSize: "clamp(0.3rem, 2vw + 0.8rem, 3rem)",
                mainHeadingButtonFontSize: "clamp(0.3em, 1vw + 1em, 2em)",
            },

            spacing: {
                // Margin
                navNegativeMargin: "-18vh",
                navLogoMarginInlineStart: "max(1vw, 0.8vw + 0.1rem)",
                navLogoMarginBlock: "max(1.5vw, 1vw + 0.2rem)",

                navIconContainerMarginRight: "max(1.5vw, 1vw + 0.1rem)",

                navContainerItemMargin: "max(1.5vw, 1vw + 0.2rem)",
                navContainerItemMarginInlineStart: "max(3vw, 1vw + 0.5rem)",
                navContainerItemMarginInlineEnd: "max(3vw, 1vw + 0.5rem)",

                // Padding

                mainHeadingButtonPadding: "max(0.8vw, 0.6vw + 0.3em)",

                // Width

                navLogoWidth: "clamp(1rem, 10vw + 3rem, 6rem)",
                navDarkModeToggleWidth: "min(1rem, 1vw + 0.2rem)",
            },
        },
    },
    plugins: [],
}
