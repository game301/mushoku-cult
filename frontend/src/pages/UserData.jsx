const UserData = () => {
    return (
        <main className='flex items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div className='w-6/12 flex items-center justify-center flex-col'>
                    <img
                        src='../../src/assets/img/roxy1.jpg'
                        alt=''
                        className='m-1.5 w-7/12 rounded-[5%]'
                    />
                    <div>
                        <h2 className='p-1.5 text-center font-fontNormal ease-in-out dark:text-darkModePrimaryColor text-cultSubHeaderSmallScreenFontSize duration-300 hover:scale-x-1 focus:scale-x-1'>
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
