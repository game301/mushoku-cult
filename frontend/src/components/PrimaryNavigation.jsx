import { useEffect, useRef } from "react"
import Logo from "./Logo"
import NavContainer from "./NavContainer"
import NavIconContainer from "./NavIconContainer"
import gsap from "gsap"

const PrimaryNavigation = () => {
    const headerRef = useRef(null)

    useEffect(() => {
        gsap.to(headerRef.current, {
            y: "0%",
            ease: "bounce",
            duration: 1,
        })
    }, []) // Empty dependency array ensures that the effect runs once after the initial render

    return (
        <>
            <header
                id='primary-header'
                ref={headerRef}
                className='w-full z-50 fixed top-auto bottom-0 navbarChange:sticky navbarChange:top-0 translate-y-[-100%]'>
                <nav
                    id='primary-nav'
                    className='flex items-center justify-start navbarChange:rounded-b-2xl bg-navbarBgColor '>
                    <Logo />
                    <NavContainer />
                    <NavIconContainer />
                </nav>
            </header>
        </>
    )
}

export default PrimaryNavigation
