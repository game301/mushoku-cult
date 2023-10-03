import gsap from "gsap"
import { useEffect, useRef } from "react"

const Home = () => {
    function leszopol() {
        console.log("leszopol")
    }

    const mainHeadingContainerRef = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline({ defaults: { duration: 1 } })

        timeline.to(mainHeadingContainerRef.current, {
            opacity: 1,
            y: "0%",
            ease: "ease-in",
        })
    }, []) // Empty dependency array ensures that the effect runs once after the initial render

    return (
        <main>
            <div
                id='landing-page-container'
                className='relative navbarChange:mt-navNegativeMargin mt-0'>
                <div
                    id='main-heading-container'
                    ref={mainHeadingContainerRef}
                    className='translate-y-[-10%] opacity-0 flex flex-col justify-center items-center z-10 absolute inset-0 bottom-[45%] sm:bottom-[55%] md:bottom-[65%] navbarChange:bottom-0'>
                    <h1
                        id='main-heading'
                        className='whitespace-nowrap text-center [text-shadow:_2px_2px_0_rgb(0_0_0_/_90%)] dark:text-darkModePrimaryColor text-mainHeadingFontSize font-fontWriting'>
                        Mushoku Cult
                    </h1>
                    <p
                        id='main-subheading'
                        className='text-wrap-balance text-center [text-shadow:_2px_1px_0_rgb(0_0_0_/_90%)] dark:text-darkModePrimaryColor text-mainSubheadingFontSize font-fontWriting'>
                        A hely, ahol te is Rudeus vallásának tagja lehetsz!
                    </p>
                    <button
                        id='main-heading-button'
                        className='dark:text-darkModePrimaryColor border-0 cursor-pointer rounded-[2rem] duration-500 ease-in-out bg-mainHeadingButtonBgColor hover:bg-[hsla(0,0%,10%,100%)] font-bold font-fontBoard p-mainHeadingButtonPadding text-mainHeadingButtonFontSize'
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
                    className='w-full h-full object-cover aspect-[16/30] navbarChange:aspect-video'></video>
            </div>
        </main>
    )
}

export default Home
