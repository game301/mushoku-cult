import { useEffect } from "react"
import { Route, Routes, useNavigate, Navigate } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"

import Footer from "./components/Footer"
import PrimaryNavigation from "./components/PrimaryNavigation"

import HomePage from "./pages/HomePage"
import Cult from "./pages/Cult"
import Random from "./pages/Random"
import About from "./pages/About"
import Bugfix from "./pages/Bugfix"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import UserData from "./pages/UserData"
import NotFound from "./pages/NotFound"

function App() {
    // onload scroll to top
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [navigate])

    // auth
    const { user } = useAuthContext()

    return (
        <>
            <div id='page-full-height-setter'>
                <PrimaryNavigation />

                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/cult' element={<Cult />} />
                    <Route path='/random' element={<Random />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/bugfix' element={<Bugfix />} />

                    <Route
                        path='/user'
                        element={user ? <UserData /> : <Navigate to='/login' />}
                    />

                    <Route
                        path='/login'
                        element={!user ? <Login /> : <Navigate to='/' />}
                    />

                    <Route
                        path='/signup'
                        element={!user ? <Signup /> : <Navigate to='/' />}
                    />
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </div>
        </>
    )
}

export default App
