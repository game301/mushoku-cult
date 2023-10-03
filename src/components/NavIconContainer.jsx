const NavIconContainer = () => {
    return (
        <ul
            id='nav-icon-container'
            className='flex justify-end items-center text-darkModePrimaryColor ml-auto text-navIconContainerFontSize'>
            <li className='ps-2 pe-2 cursor-pointer'>
                <i id='nav-search' className='fa-solid fa-magnifying-glass'></i>
            </li>
            <li className='ps-2 pe-2 cursor-pointer'>
                <i
                    id='nav-dark-mode-toggle'
                    className='fa-solid fa-sun w-navDarkModeToggleWidth'></i>
            </li>
            <li className='ps-2 pe-2 mr-2 cursor-pointer'>
                <i id='nav-login' className='fa-solid fa-key'></i>
            </li>
        </ul>
    )
}

export default NavIconContainer
