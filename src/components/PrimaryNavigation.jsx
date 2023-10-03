import Logo from "./Logo"
import NavContainer from "./NavContainer"
import NavIconContainer from "./NavIconContainer"

const PrimaryNavigation = () => {
    return (
        <>
            <header
                id='primary-header'
                className='w-full z-50 fixed top-auto bottom-0 navbarChange:sticky navbarChange:top-0'>
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
