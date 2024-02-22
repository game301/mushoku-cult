import { useState } from "react"
import { Link } from "react-router-dom"

import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

const NavIconContainer = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleDarkModeToggle = () => {
        setIsDarkMode((prevDarkMode) => !prevDarkMode)
    }

    const [isFocusedOnSearch, setIsFocusedOnSearch] = useState(false)

    const handleFocusedOnSearch = () => {
        setIsFocusedOnSearch((focusedOnSearch) => !focusedOnSearch)
    }

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleLogoutClick = () => {
        logout()
    }

    return (
        <div
            id='nav-icon-container'
            className='ms-auto flex items-center justify-end text-navIconContainerFontSize dark:text-darkModePrimaryColor'>
            <button type='button' className='pe-2 ps-2' title='no search'>
                <i
                    id='nav-search'
                    className={`fa-solid fa-magnifying-glass`}
                    onClick={handleFocusedOnSearch}></i>
                {isFocusedOnSearch ? (
                    <input placeholder='Search' className='ms-2 p-1'></input>
                ) : (
                    ""
                )}
            </button>
            <button type='button' className='pe-2 ps-2' title='no dark mode'>
                <i
                    id='nav-dark-mode-toggle'
                    className={`fa-solid fa w-navDarkModeToggleWidth ${
                        isDarkMode ? "fa-moon" : "fa-sun"
                    }`}
                    onClick={handleDarkModeToggle}></i>
            </button>

            {user && (
                <>
                    <button type='button' className='me-2 pe-2 ps-2'>
                        <Link to='/user'>
                            <i className='fa-solid fa-user'></i>
                        </Link>
                    </button>
                    <button
                        type='button'
                        onClick={handleLogoutClick}
                        className='me-2 pe-2 ps-2'>
                        <i
                            id='nav-logout'
                            className='fa-solid fa-right-from-bracket'></i>
                    </button>
                </>
            )}
            {!user && (
                <button className='me-2 pe-2 ps-2'>
                    <Link to='/login'>
                        <i id='nav-login' className='fa-solid fa-key'></i>
                    </Link>
                </button>
            )}
        </div>
    )
}

export default NavIconContainer
