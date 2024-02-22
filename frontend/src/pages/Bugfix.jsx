const Bugfix = () => {
    return (
        <main className='flex items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div className='flex w-6/12 flex-col items-center justify-center'>
                    <img
                        src='../../src/assets/img/Goofy-Ahh-Picture.jpg'
                        alt=''
                        className='m-1.5 w-7/12 rounded-[5%]'
                    />
                    <div>
                        <h2 className='hover:scale-x-1 focus:scale-x-1 p-1.5 text-center font-fontNormal text-cultSubHeaderSmallScreenFontSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                            Nincs hiba, szóval nincs mit javítani
                        </h2>
                        <p className='hover:scale-x-1 focus:scale-x-1 p-1.5 font-fontNormal text-footerCopyrightSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                            Lehetne még bőven fejleszteni az oldalon, de mivel
                            csak azért hoztam létre, hogy különböző dolgokat
                            tesztelhessek egy helyen, ezért nem a 100%-os
                            működés a lényeg.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Bugfix
