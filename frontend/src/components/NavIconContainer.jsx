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
            className='flex justify-end items-center dark:text-darkModePrimaryColor ms-auto text-navIconContainerFontSize'
        >
            <button type='button' className='ps-2 pe-2' title='no search'>
                <i
                    id='nav-search'
                    className={`fa-solid fa-magnifying-glass`}
                    onClick={handleFocusedOnSearch}
                ></i>
                {isFocusedOnSearch ? (
                    <input placeholder='Search' className='p-1 ms-2'></input>
                ) : (
                    ""
                )}
            </button>
            <button type='button' className='ps-2 pe-2' title='no dark mode'>
                <i
                    id='nav-dark-mode-toggle'
                    className={`fa-solid w-navDarkModeToggleWidth fa ${
                        isDarkMode ? "fa-moon" : "fa-sun"
                    }`}
                    onClick={handleDarkModeToggle}
                ></i>
            </button>

            {user && (
                <>
                    <button type='button' className='ps-2 pe-2 me-2'>
                        <Link to='/user'>
                            <i className='fa-solid fa-user'></i>
                        </Link>
                    </button>
                    <button
                        type='button'
                        onClick={handleLogoutClick}
                        className='ps-2 pe-2 me-2'
                    >
                        <i
                            id='nav-logout'
                            className='fa-solid fa-right-from-bracket'
                        ></i>
                    </button>
                </>
            )}
            {!user && (
                <button className='ps-2 pe-2 me-2'>
                    <Link to='/login'>
                        <i id='nav-login' className='fa-solid fa-key'></i>
                    </Link>
                </button>
            )}
        </div>
    )
}

export default NavIconContainer
