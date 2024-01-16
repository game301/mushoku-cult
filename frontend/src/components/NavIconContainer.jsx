import { useState } from "react"

const NavIconContainer = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleDarkModeToggle = () => {
        setIsDarkMode((prevDarkMode) => !prevDarkMode)
    }

    const [isFocusedOnSearch, setIsFocusedOnSearch] = useState(false)

    const handleFocusedOnSearch = () => {
        setIsFocusedOnSearch((focusedOnSearch) => !focusedOnSearch)
    }

    return (
        <div
            id='nav-icon-container'
            className='flex justify-end items-center dark:text-darkModePrimaryColor ms-auto text-navIconContainerFontSize'
        >
            <button className='ps-2 pe-2' title='no search'>
                <i
                    id='nav-search'
                    className={`fa-solid fa-magnifying-glass`}
                    onClick={handleFocusedOnSearch}
                ></i>
                {isFocusedOnSearch ? <input placeholder='Search'></input> : ""}
            </button>
            <button className='ps-2 pe-2' title='no dark mode'>
                <i
                    id='nav-dark-mode-toggle'
                    className={`fa-solid w-navDarkModeToggleWidth fa ${
                        isDarkMode ? "fa-moon" : "fa-sun"
                    }`}
                    onClick={handleDarkModeToggle}
                ></i>
            </button>
            <button className='ps-2 pe-2 me-2' title='no feature'>
                <i id='nav-login' className='fa-solid fa-key'></i>
            </button>
        </div>
    )
}

export default NavIconContainer
