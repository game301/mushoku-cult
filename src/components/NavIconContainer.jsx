import { useState } from "react"

const NavIconContainer = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleDarkModeToggle = () => {
        setIsDarkMode((prevDarkMode) => !prevDarkMode)
    }

    return (
        <div
            id='nav-icon-container'
            className='flex justify-end items-center dark:text-darkModePrimaryColor ml-auto text-navIconContainerFontSize'>
            <button className='ps-2 pe-2'>
                <i id='nav-search' className='fa-solid fa-magnifying-glass'></i>
            </button>
            <button className='ps-2 pe-2'>
                <i
                    id='nav-dark-mode-toggle'
                    className={`fa-solid w-navDarkModeToggleWidth fa ${
                        isDarkMode ? "fa-moon" : "fa-sun"
                    }`}
                    onClick={handleDarkModeToggle}></i>
            </button>
            <button className='ps-2 pe-2 mr-2'>
                <i id='nav-login' className='fa-solid fa-key'></i>
            </button>
        </div>
    )
}

export default NavIconContainer
