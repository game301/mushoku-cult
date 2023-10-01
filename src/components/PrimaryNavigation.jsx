const PrimaryNavigation = () => {
    return (
        <>
            <header id='primary-header' className='w-full sticky top-0 z-50'>
                <nav
                    id='primary-nav'
                    className='flex items-center justify-start rounded-b-2xl bg-header-bgc'
                >
                    <div
                        id='nav-logo'
                        className='w-nav-logo-width m-nav-logo-margin text-center'
                    >
                        <a href='#'>
                            <img src='./src/assets/img/roxy1.jpg' alt='logo' />
                        </a>
                    </div>
                    <ul
                        id='nav-container'
                        className='flex items-center justify-center'
                    >
                        <li className='nav-item'>
                            <a href=''>Cult</a>
                        </li>
                        <li className='nav-item'>
                            <a href=''>Cut Content</a>
                        </li>
                        <li className='nav-item'>
                            <a href=''>Random</a>
                        </li>
                        <li className='nav-item'>
                            <a
                                href='https://mushokutensei.fandom.com/wiki/Mushoku_Tensei_Wiki'
                                target='blank'
                                rel='noopener norefferer'
                            >
                                Wiki
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href=''>About</a>
                        </li>
                        <li className='nav-item'>
                            <a href=''>Bugfix</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <i
                                id='nav-search'
                                className='fa-solid fa-magnifying-glass'
                            ></i>
                        </li>
                        <li>
                            <i
                                id='nav-dark-mode-toggle'
                                className='fa-solid fa-sun'
                            ></i>
                        </li>
                        <li>
                            <i id='nav-login' className='fa-solid fa-key'></i>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default PrimaryNavigation
