const About = () => {
    return (
        <main className='flex items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div className='flex w-6/12 flex-col items-center justify-center'>
                    <img
                        src='../../src/assets/img/roxy-wallpaper.jpg'
                        alt=''
                        className='m-1.5 w-7/12 rounded-[5%]'
                    />
                    <div>
                        <h2 className='hover:scale-x-1 focus:scale-x-1 p-1.5 text-center font-fontNormal text-cultSubHeaderSmallScreenFontSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                            Mi vagyunk a Mushoku Cult
                        </h2>
                        <p className='hover:scale-x-1 focus:scale-x-1 p-1.5 font-fontNormal text-footerCopyrightSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                            Ez az oldal csak azért jött létre, mert a Mushoku
                            Tensei Light Novel egy elképesztően jól megírt mű.
                            Ha valaki élvezte az animét, vagy csak szimplán
                            szereti a waifu war-t, az jó helyen jár, mert itt a
                            3 best girl-t lehet egy helyen imádni.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
