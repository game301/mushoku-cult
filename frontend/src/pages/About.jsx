const About = () => {
    return (
        <main className='flex items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div className='w-6/12 flex items-center justify-center flex-col'>
                    <img
                        src='../../src/assets/img/roxy-wallpaper.jpg'
                        alt=''
                        className='m-1.5 w-7/12 rounded-[5%]'
                    />
                    <div>
                        <h2 className='p-1.5 text-center font-fontNormal ease-in-out dark:text-darkModePrimaryColor text-cultSubHeaderSmallScreenFontSize duration-300 hover:scale-x-1 focus:scale-x-1'>
                            Mi vagyunk a Mushoku Cult
                        </h2>
                        <p className='p-1.5 font-fontNormal ease-in-out dark:text-darkModePrimaryColor text-footerCopyrightSize duration-300 hover:scale-x-1 focus:scale-x-1'>
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
