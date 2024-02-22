const UserData = () => {
    return (
        <main className='flex items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div className='flex w-6/12 flex-col items-center justify-center'>
                    <img
                        src='../../src/assets/img/roxy1.jpg'
                        alt=''
                        className='m-1.5 w-7/12 rounded-[5%]'
                    />
                    <div>
                        <h2 className='hover:scale-x-1 focus:scale-x-1 p-1.5 text-center font-fontNormal text-cultSubHeaderSmallScreenFontSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                            Felhasználói adatok
                        </h2>
                        <ul>
                            <li>adat1</li>
                            <li>adat2</li>
                            <li>adat3</li>
                            <li>adat4</li>
                            <li>adat5</li>
                            <li>adat6</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default UserData
