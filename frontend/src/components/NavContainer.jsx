import { Link } from "react-router-dom"

const NavContainer = () => {
    return (
        <ul
            id='nav-container'
            className='text-wrap-balance flex items-center justify-center'>
            <li className='text-wrap-balance relative me-navContainerItemMarginInlineEnd ms-navContainerItemMarginInlineStart hidden w-fit text-center navbarChange:block'>
                <Link
                    to='/cult'
                    className='text-[max(3vw, 1vw + 0.5rem)] hover:scale-x-1 focus:scale-x-1 p-1.5 font-fontNormal text-navContainerItemLinkFontSize duration-300 ease-in-out before:invisible before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full  before:scale-x-0 before:rounded before:duration-200 before:ease-linear before:content-[""] before:hover:visible before:hover:scale-x-[1] dark:text-darkModePrimaryColor dark:before:bg-darkModePrimaryColor'>
                    Cult
                </Link>
            </li>
            <li className='text-wrap-balance relative me-navContainerItemMarginInlineEnd ms-navContainerItemMarginInlineStart hidden w-fit text-center navbarChange:block'>
                <Link
                    to='/random'
                    className='text-[max(3vw, 1vw + 0.5rem)] hover:scale-x-1 focus:scale-x-1 p-1.5 font-fontNormal text-navContainerItemLinkFontSize duration-300 ease-in-out before:invisible before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full  before:scale-x-0 before:rounded before:duration-200 before:ease-linear before:content-[""] before:hover:visible before:hover:scale-x-[1] dark:text-darkModePrimaryColor dark:before:bg-darkModePrimaryColor'>
                    Random Content
                </Link>
            </li>
            <li className='text-wrap-balance relative me-navContainerItemMarginInlineEnd ms-navContainerItemMarginInlineStart hidden w-fit text-center navbarChange:block'>
                <a
                    href='https://mushokutensei.fandom.com/wiki/Mushoku_Tensei_Wiki'
                    target='_blank'
                    rel='noreferrer'
                    className='text-[max(3vw, 1vw + 0.5rem)] hover:scale-x-1 focus:scale-x-1 p-1.5 font-fontNormal text-navContainerItemLinkFontSize duration-300 ease-in-out before:invisible before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:scale-x-0 before:rounded before:duration-200 before:ease-linear before:content-[""] before:hover:visible before:hover:scale-x-[1] dark:text-darkModePrimaryColor dark:before:bg-darkModePrimaryColor'>
                    Wiki
                </a>
            </li>
            <li className='text-wrap-balance relative me-navContainerItemMarginInlineEnd ms-navContainerItemMarginInlineStart hidden w-fit text-center navbarChange:block'>
                <Link
                    to='/about'
                    className='text-[max(3vw, 1vw + 0.5rem)] hover:scale-x-1 focus:scale-x-1 p-1.5 font-fontNormal text-navContainerItemLinkFontSize duration-300 ease-in-out before:invisible before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full  before:scale-x-0 before:rounded before:duration-200 before:ease-linear before:content-[""] before:hover:visible before:hover:scale-x-[1] dark:text-darkModePrimaryColor dark:before:bg-darkModePrimaryColor'>
                    About
                </Link>
            </li>
            <li className='text-wrap-balance relative me-navContainerItemMarginInlineEnd ms-navContainerItemMarginInlineStart hidden w-fit text-center navbarChange:block'>
                <Link
                    to='/bugfix'
                    className='text-[max(3vw, 1vw + 0.5rem)] hover:scale-x-1 focus:scale-x-1 p-1.5 font-fontNormal text-navContainerItemLinkFontSize duration-300 ease-in-out before:invisible before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full  before:scale-x-0 before:rounded before:duration-200 before:ease-linear before:content-[""] before:hover:visible before:hover:scale-x-[1] dark:text-darkModePrimaryColor dark:before:bg-darkModePrimaryColor'>
                    Bugfix
                </Link>
            </li>
        </ul>
    )
}

export default NavContainer
