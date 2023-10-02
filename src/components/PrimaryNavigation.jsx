import Logo from "./Logo"
import NavContainer from "./NavContainer"
import NavIconContainer from "./NavIconContainer"

const PrimaryNavigation = () => {
    return (
        <>
            <header id='primary-header' className='w-full sticky top-0 z-50'>
                <nav
                    id='primary-nav'
                    className='flex items-center justify-start min-[950px]:rounded-b-2xl bg-navbarBgColor '>
                    <Logo />
                    <NavContainer />
                    <NavIconContainer />
                </nav>
            </header>
        </>
    )
}

export default PrimaryNavigation
