import { Link } from "react-router-dom"

const NavContainer = () => {
    return (
        <ul
            id='nav-container'
            className='flex items-center justify-center text-wrap-balance'>
            <li className='text-wrap-balance text-center w-fit relative ms-navContainerItemMarginInlineStart me-navContainerItemMarginInlineEnd hidden navbarChange:block'>
                <Link
                    to='/Cult'
                    href='./src/pages/Cult.jsx'
                    className='font-fontNormal before:content-[""] before:absolute before:w-full before:h-[3px] before:bottom-0 before:left-0 dark:before:bg-darkModePrimaryColor before:invisible before:hover:visible before:rounded before:scale-x-0 before:hover:scale-x-[1] before:ease-linear before:duration-200 p-1.5 ease-in-out  dark:text-darkModePrimaryColor text-navContainerItemLinkFontSize text-[max(3vw, 1vw + 0.5rem)] duration-300 hover:scale-x-1 focus:scale-x-1'>
                    Cult
                </Link>
            </li>
            <li className='text-wrap-balance text-center w-fit relative ms-navContainerItemMarginInlineStart me-navContainerItemMarginInlineEnd hidden navbarChange:block'>
                <Link
                    to='/cut-content'
                    className='font-fontNormal before:content-[""] before:absolute before:w-full before:h-[3px] before:bottom-0 before:left-0 dark:before:bg-darkModePrimaryColor before:invisible before:hover:visible before:rounded before:scale-x-0 before:hover:scale-x-[1] before:ease-linear before:duration-200 p-1.5 ease-in-out  dark:text-darkModePrimaryColor text-navContainerItemLinkFontSize text-[max(3vw, 1vw + 0.5rem)] duration-300 hover:scale-x-1 focus:scale-x-1'>
                    Cut Content
                </Link>
            </li>
            <li className='text-wrap-balance text-center w-fit relative ms-navContainerItemMarginInlineStart me-navContainerItemMarginInlineEnd hidden navbarChange:block'>
                <Link
                    to='random'
                    className='font-fontNormal before:content-[""] before:absolute before:w-full before:h-[3px] before:bottom-0 before:left-0 dark:before:bg-darkModePrimaryColor before:invisible before:hover:visible before:rounded before:scale-x-0 before:hover:scale-x-[1] before:ease-linear before:duration-200 p-1.5 ease-in-out  dark:text-darkModePrimaryColor text-navContainerItemLinkFontSize text-[max(3vw, 1vw + 0.5rem)] duration-300 hover:scale-x-1 focus:scale-x-1'>
                    Random Content
                </Link>
            </li>
            <li className='text-wrap-balance text-center w-fit relative ms-navContainerItemMarginInlineStart me-navContainerItemMarginInlineEnd hidden navbarChange:block'>
                <a
                    href='https://mushokutensei.fandom.com/wiki/Mushoku_Tensei_Wiki'
                    target='_blank'
                    rel='noreferrer'
                    className='font-fontNormal before:content-[""] before:absolute before:w-full before:h-[3px] before:bottom-0 before:left-0 dark:before:bg-darkModePrimaryColor before:invisible before:hover:visible before:rounded before:scale-x-0 before:hover:scale-x-[1] before:ease-linear before:duration-200 p-1.5 ease-in-out dark:text-darkModePrimaryColor text-navContainerItemLinkFontSize text-[max(3vw, 1vw + 0.5rem)] duration-300 hover:scale-x-1 focus:scale-x-1'>
                    Wiki
                </a>
            </li>
            <li className='text-wrap-balance text-center w-fit relative ms-navContainerItemMarginInlineStart me-navContainerItemMarginInlineEnd hidden navbarChange:block'>
                <Link
                    to='/about'
                    className='font-fontNormal before:content-[""] before:absolute before:w-full before:h-[3px] before:bottom-0 before:left-0 dark:before:bg-darkModePrimaryColor before:invisible before:hover:visible before:rounded before:scale-x-0 before:hover:scale-x-[1] before:ease-linear before:duration-200 p-1.5 ease-in-out  dark:text-darkModePrimaryColor text-navContainerItemLinkFontSize text-[max(3vw, 1vw + 0.5rem)] duration-300 hover:scale-x-1 focus:scale-x-1'>
                    About
                </Link>
            </li>
            <li className='text-wrap-balance text-center w-fit relative ms-navContainerItemMarginInlineStart me-navContainerItemMarginInlineEnd hidden navbarChange:block'>
                <Link
                    to='/bugfix'
                    className='font-fontNormal before:content-[""] before:absolute before:w-full before:h-[3px] before:bottom-0 before:left-0 dark:before:bg-darkModePrimaryColor before:invisible before:hover:visible before:rounded before:scale-x-0 before:hover:scale-x-[1] before:ease-linear before:duration-200 p-1.5 ease-in-out  dark:text-darkModePrimaryColor text-navContainerItemLinkFontSize text-[max(3vw, 1vw + 0.5rem)] duration-300 hover:scale-x-1 focus:scale-x-1'>
                    Bugfix
                </Link>
            </li>
        </ul>
    )
}

export default NavContainer
