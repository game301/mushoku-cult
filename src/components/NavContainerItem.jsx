const NavContainerItem = ({ name, link }) => {
    return (
        <>
            <li className='nav-container-item'>
                <a href={link}>{name}</a>
            </li>
        </>
    )
}

export default NavContainerItem
