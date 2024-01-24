import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer className='flex items-center justify-center'>
            <div className='justify-center items-center dark:text-darkModePrimaryColor  text-navIconContainerFontSize navbarChange:flex hidden'>
                <button type='button' className='ps-2 pe-2'>
                    <a
                        href='https://www.facebook.com/mushokutense/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='fa-brands fa-facebook'></i>
                    </a>
                </button>
                <button type='button' className='ps-2 pe-2'>
                    <a
                        href='https://twitter.com/mushoku_anime'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='fa-brands fa-twitter'></i>
                    </a>
                </button>
                <button type='button' className='ps-2 pe-2 me-2'>
                    <a
                        href='https://www.reddit.com/r/sixfacedworld/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='fa-brands fa-reddit'></i>
                    </a>
                </button>
            </div>

            <ul
                id='nav-container'
                className='flex items-center justify-center text-wrap-balance'
            >
                <li className='text-wrap-balance text-center w-fit relative ms-navContainerItemMarginInlineStart me-1.5 hidden navbarChange:block'>
                    <Link
                        to='/Cult'
                        className='font-fontNormal p-1.5 ease-in-out  dark:text-darkModePrimaryColor text-footerCopyrightSize text-[max(3vw, 1vw + 0.5rem)] duration-300 hover:scale-x-1 focus:scale-x-1'
                    >
                        Cult
                    </Link>
                </li>

                <li className='text-wrap-balance text-center w-fit relative ms-navContainerItemMarginInlineStart me-1.5 hidden navbarChange:block'>
                    <Link
                        to='/random'
                        className='font-fontNormal p-1.5 ease-in-out  dark:text-darkModePrimaryColor text-footerCopyrightSize text-[max(3vw, 1vw + 0.5rem)] duration-300 hover:scale-x-1 focus:scale-x-1'
                    >
                        Random Content
                    </Link>
                </li>
                <li className='text-wrap-balance text-center w-fit relative ms-navContainerItemMarginInlineStart me-1.5 hidden navbarChange:block'>
                    <Link
                        to='/about'
                        className='font-fontNormal p-1.5 ease-in-out  dark:text-darkModePrimaryColor text-footerCopyrightSize text-[max(3vw, 1vw + 0.5rem)] duration-300 hover:scale-x-1 focus:scale-x-1'
                    >
                        About
                    </Link>
                </li>
                <li className='text-wrap-balance text-center w-fit relative ms-navContainerItemMarginInlineStart me-1.5 hidden navbarChange:block'>
                    <Link
                        to='/bugfix'
                        className='font-fontNormal p-1.5 ease-in-out  dark:text-darkModePrimaryColor text-footerCopyrightSize text-[max(3vw, 1vw + 0.5rem)] duration-300 hover:scale-x-1 focus:scale-x-1'
                    >
                        Bugfix
                    </Link>
                </li>
            </ul>
            <div className='w-fit relative ms-navContainerItemMarginInlineStart me-1.5 navbarChange:flex items-center hidden'>
                <div className='font-fontNormal ease-in-out dark:text-darkModePrimaryColor text-footerCopyrightSize duration-300 hover:scale-x-1 focus:scale-x-1'>
                    &copy;2024 Mushoku Cult | Minden jog fenntartva
                </div>
            </div>
        </footer>
    )
}

export default Footer
