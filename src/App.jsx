import { Route, Routes } from "react-router-dom"
//import { gsap } from "gsap"

// components
import Footer from "./components/Footer"
import PrimaryNavigation from "./components/PrimaryNavigation"

// pages
import Home from "./pages/Home"
import Cult from "./pages/Cult"
import CutContent from "./pages/CutContent"
import Random from "./pages/Random"
import About from "./pages/About"
import Bugfix from "./pages/Bugfix"

function App() {
    window.onload = () => {
        window.scrollTo(0, 0)
    }
    /*
    const darkModeButton = document.querySelector("#nav-dark-mode-toggle")

    darkModeButton.addEventListener("click", () => {
        console.log(darkModeButton)
        darkModeButton.firstElementChild.classList.toggle("fa-sun")
        darkModeButton.firstElementChild.classList.toggle("fa-moon")
    })

    const hamburgerMenuButton = document.querySelector(
        "#nav-hamburger-menu-toggle"
    )

    hamburgerMenuButton.addEventListener("click", () => {
        console.log(hamburgerMenuButton)
        hamburgerMenuButton.firstElementChild.classList.toggle("fa-bars")
        hamburgerMenuButton.firstElementChild.classList.toggle("fa-xmark")
    })
*/
    /*
    const timeline = gsap.timeline({ defaults: { duration: 1 } })
    timeline
        .from("#primary-header", {
            y: "-100%",
            ease: "bounce",
        })
        .from("#main-heading", {
            opacity: 0,
            y: "-10%",
            ease: "ease-in",
        })
        .from(
            "#cult-title",
            {
                opacity: 0,
                scale: 2,
                //boxShadow: "0px 0px 10px 10px rgba(255,255,255,1)",
                //textShadow: "10px 25px 50px rgba(255,255,255,1)",
                filter: "drop-shadow(-30px 20px 20px)",

                //backgroundColor: "rgba(255,255,255,1)",
                fontWeight: "600",
                ease: "ease-in",
                duration: 1.5,
            },
            "<"
        )

        .to(
            "#cult-sylphie",
            {
                opacity: 1,
                duration: 0,
            },
            "<1"
        )
        .to(
            "#cult-roxy",
            {
                opacity: 1,
                duration: 0,
            },
            "<0.5"
        )
        .to(
            "#cult-eris",
            {
                opacity: 1,
                duration: 0,
            },
            "<0.5"
        )
*/
    return (
        <>
            <PrimaryNavigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cult' element={<Cult />} />
                <Route path='/cut-content' element={<CutContent />} />
                <Route path='/random' element={<Random />} />
                <Route path='/about' element={<About />} />
                <Route path='/bugfix' element={<Bugfix />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
