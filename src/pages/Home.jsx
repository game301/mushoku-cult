const Home = () => {
    function leszopol() {
        console.log("leszopol")
    }

    return (
        <main>
            <div
                id='landing-page-container'
                className='relative mt-navNegativeMargin'>
                <div
                    id='main-heading-container'
                    className='flex flex-col justify-center items-center z-10 absolute inset-0 bottom-[30%] min-[600px]:bottom-[50%] min-[800px]:bottom-[60%] min-[950px]:bottom-0'>
                    <h1
                        id='main-heading'
                        className='whitespace-nowrap text-center [text-shadow:_2px_2px_0_rgb(0_0_0_/_90%)] text-darkModePrimaryColor text-mainHeadingFontSize font-fontWriting'>
                        Mushoku Cult
                    </h1>
                    <p
                        id='main-subheading'
                        className='whitespace-nowrap text-center [text-shadow:_2px_1px_0_rgb(0_0_0_/_90%)] text-darkModePrimaryColor text-mainSubheadingFontSize font-fontWriting'>
                        A hely, ahol te is Rudeus vallásának tagja lehetsz!
                    </p>
                    <button
                        id='main-heading-button'
                        className='text-darkModePrimaryColor border-0 cursor-pointer rounded-[2rem] duration-500 ease-in-out bg-mainHeadingButtonBgColor hover:bg-mainHeadingButtonBgColor font-bold text-fontBoard p-mainHeadingButtonPadding text-mainHeadingButtonFontSize'
                        type='button'
                        onClick={() => {
                            leszopol()
                        }}>
                        Csatlakozás
                    </button>
                </div>
                <video
                    id='landing-page-bg-video'
                    src='./src/assets/video/landing-page-video.mp4'
                    autoPlay
                    muted
                    loop
                    className='w-full h-full object-cover'></video>
            </div>
        </main>
    )
}

export default Home
