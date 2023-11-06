import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <div
            id='nav-logo'
            className='w-navLogoWidth mt-navLogoMarginBlock mb-navLogoMarginBlock ms-navLogoMarginInlineStart text-center hidden navbarChange:block'
            onClick={window.scrollTo(0, 0)}>
            <Link to='/'>
                <img src='./src/assets/img/logo.png' alt='nav logo' />
            </Link>
        </div>
    )
}

export default Logo
