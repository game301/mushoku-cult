/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                navbarChange: "950px",
                goddessChange: "800px",
            },

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

                cultSelectFontSize: "clamp(0.5rem, 3vw + 1rem, 5rem)",
                cultSelectSmallScreenFontSize:
                    "clamp(1rem, 5vw + 1.5rem, 5rem)",
                cultSubHeaderFontSize: "clamp(0.3rem, 0.5vw + 0.4rem, 1.8rem)",
                cultSubHeaderSmallScreenFontSize:
                    "clamp(1rem, 2vw + 0.8rem, 2.5rem)",
                cultParagraphFontSize: "clamp(0.3rem, 3vw + 0.5rem, 2rem)",
                cultButtonFontSize: "clamp(0.3em, 1vw + 0.5em, 1.5em)",
                cultButtonSmallScreenFontSize: "clamp(0.8em, 2vw + 0.5em, 2em)",
            },

            maxWidth: {
                cultMaxWidth: "clamp(3rem, 5vw + 10rem, 20rem)",
                cultSmallScreenMaxWidth: " clamp(3rem, 5vw + 20rem, 30rem)",
            },

            spacing: {
                // Margin
                navNegativeMargin: "-18vh",
                navLogoMarginInlineStart: "max(1vw, 0.8vw + 0.1rem)",
                navLogoMarginBlock: "max(1.3vw, 1vw + 0.3rem)",

                navIconContainerMarginRight: "max(1.5vw, 1vw + 0.1rem)",

                navContainerItemMargin: "max(1.5vw, 1vw + 0.2rem)",
                navContainerItemMarginInlineStart: "max(3vw, 1vw + 0.5rem)",
                navContainerItemMarginInlineEnd: "max(3vw, 1vw + 0.5rem)",

                cult3GoddessContainerMarginTop: "max(0.8vw, 0.6vw + 0.3rem)",
                cultSubHeadingMargin: "max(0.8vw, 0.6vw + 0.3rem)",
                cultButtonMargin: "max(0.6vw, 0.4vw + 0.2em)",
                cultButtonSmallScreenMargin: "max(0.6vw, 0.4vw + 0.2em)",
                cultSmallScreenMarginBottom: "max(10vw, 1vw + 1rem)",
                // Padding

                mainHeadingButtonPadding: "max(0.8vw, 0.4vw + 0.3em)",
                cultSelectSmallScreenPaddingBlock: "max(4vw, 3vw + 1rem)",

                // Width

                navLogoWidth: "clamp(1rem, 10vw + 3rem, 6rem)",
                navDarkModeToggleWidth: "min(1rem, 1vw + 0.2rem)",

                cultImageWidth: "min(40vw, 30vw + 10rem)",
            },

            boxShadow: {
                cultSylphieBoxShadow:
                    "0 0 2px hsl(0, 0%, 100%),0 0 10px hsl(0, 0%, 100%),0 0 25px hsl(150, 75%, 40%),0 0 50px hsl(150, 75%, 40%),0 0 75px hsl(150, 90%, 40%),0 0 100px hsl(150, 90%, 40%)",
                cultRoxyBoxShadow:
                    "0 0 2px hsl(0, 0%, 100%),0 0 10px hsl(0, 0%, 100%),0 0 25px hsl(250, 75%, 40%),0 0 50px hsl(250, 75%, 40%),0 0 75px hsl(250, 90%, 40%), 0 0 100px hsl(250, 90%, 40%)",
                cultErisBoxShadow:
                    "0 0 2px hsl(0, 0%, 100%),0 0 10px hsl(0, 0%, 100%),0 0 25px hsl(350, 75%, 40%),0 0 50px hsl(350, 75%, 40%),0 0 75px hsl(350, 90%, 40%),0 0 100px hsl(350, 90%, 40%)",
            },
        },
    },
    plugins: [],
}
