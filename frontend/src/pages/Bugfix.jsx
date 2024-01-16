const Bugfix = () => {
    return (
        <main className='flex items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div className='w-6/12 flex items-center justify-center flex-col'>
                    <img
                        src='../../src/assets/img/Goofy-Ahh-Picture.jpg'
                        alt=''
                        className='m-1.5 w-7/12 rounded-[5%]'
                    />
                    <div>
                        <h2 className='p-1.5 text-center font-fontNormal ease-in-out dark:text-darkModePrimaryColor text-cultSubHeaderSmallScreenFontSize duration-300 hover:scale-x-1 focus:scale-x-1'>
                            Nincs hiba, szóval nincs mit javítani
                        </h2>
                        <p className='p-1.5 font-fontNormal ease-in-out dark:text-darkModePrimaryColor text-footerCopyrightSize duration-300 hover:scale-x-1 focus:scale-x-1'>
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
