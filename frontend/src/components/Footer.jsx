import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer className='flex items-center justify-center rounded-t-2xl bg-navbarBgColor'>
            <div className='hidden items-center justify-center  text-navIconContainerFontSize dark:text-darkModePrimaryColor navbarChange:flex'>
                <button type='button' className='pe-2 ps-2'>
                    <a
                        href='https://www.facebook.com/mushokutense/'
                        target='_blank'
                        rel='noreferrer'>
                        <i className='fa-brands fa-facebook'></i>
                    </a>
                </button>
                <button type='button' className='pe-2 ps-2'>
                    <a
                        href='https://twitter.com/mushoku_anime'
                        target='_blank'
                        rel='noreferrer'>
                        <i className='fa-brands fa-twitter'></i>
                    </a>
                </button>
                <button type='button' className='me-2 pe-2 ps-2'>
                    <a
                        href='https://www.reddit.com/r/sixfacedworld/'
                        target='_blank'
                        rel='noreferrer'>
                        <i className='fa-brands fa-reddit'></i>
                    </a>
                </button>
            </div>

            <ul
                id='nav-container'
                className='text-wrap-balance flex items-center justify-center'>
                <li className='text-wrap-balance relative me-1.5 ms-navContainerItemMarginInlineStart hidden w-fit text-center navbarChange:block'>
                    <Link
                        to='/Cult'
                        className='text-[max(3vw, 1vw +  0.5rem)] hover:scale-x-1 focus:scale-x-1 p-1.5 font-fontNormal text-footerCopyrightSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                        Cult
                    </Link>
                </li>

                <li className='text-wrap-balance relative me-1.5 ms-navContainerItemMarginInlineStart hidden w-fit text-center navbarChange:block'>
                    <Link
                        to='/random'
                        className='text-[max(3vw, 1vw +  0.5rem)] hover:scale-x-1 focus:scale-x-1 p-1.5 font-fontNormal text-footerCopyrightSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                        Random Content
                    </Link>
                </li>
                <li className='text-wrap-balance relative me-1.5 ms-navContainerItemMarginInlineStart hidden w-fit text-center navbarChange:block'>
                    <Link
                        to='/about'
                        className='text-[max(3vw, 1vw +  0.5rem)] hover:scale-x-1 focus:scale-x-1 p-1.5 font-fontNormal text-footerCopyrightSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                        About
                    </Link>
                </li>
                <li className='text-wrap-balance relative me-1.5 ms-navContainerItemMarginInlineStart hidden w-fit text-center navbarChange:block'>
                    <Link
                        to='/bugfix'
                        className='text-[max(3vw, 1vw +  0.5rem)] hover:scale-x-1 focus:scale-x-1 p-1.5 font-fontNormal text-footerCopyrightSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                        Bugfix
                    </Link>
                </li>
            </ul>
            <div className='relative me-1.5 ms-navContainerItemMarginInlineStart hidden w-fit items-center navbarChange:flex'>
                <div className='hover:scale-x-1 focus:scale-x-1 font-fontNormal text-footerCopyrightSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                    &copy;2024 Mushoku Cult | Minden jog fenntartva
                </div>
            </div>
        </footer>
    )
}

export default Footer
