import { Route, Routes, useNavigate } from "react-router-dom"
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
import { useEffect } from "react"

// react
//import { useLayoutEffect } from "react"

function App() {
    // onload scroll to top

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [navigate])

    return (
        <>
            <div id='page-full-height-setter'>
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
            </div>
        </>
    )
}

export default App
