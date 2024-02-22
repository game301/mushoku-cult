import gsap from "gsap"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

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
                className='relative mt-0 navbarChange:mt-navNegativeMargin'>
                <div
                    id='main-heading-container'
                    ref={mainHeadingContainerRef}
                    className='absolute inset-0 bottom-[45%] z-10 flex translate-y-[-10%] flex-col items-center justify-center opacity-0 sm:bottom-[55%] md:bottom-[65%] navbarChange:bottom-0'>
                    <h1
                        id='main-heading'
                        className='whitespace-nowrap text-center font-fontWriting text-mainHeadingFontSize [text-shadow:_2px_2px_0_rgb(0_0_0_/_90%)] dark:text-darkModePrimaryColor'>
                        Mushoku Cult
                    </h1>
                    <p
                        id='main-subheading'
                        className='text-wrap-balance text-center font-fontWriting text-mainSubheadingFontSize [text-shadow:_2px_1px_0_rgb(0_0_0_/_90%)] dark:text-darkModePrimaryColor'>
                        A hely, ahol te is Rudeus vallásának tagja lehetsz!
                    </p>
                    <button
                        id='main-heading-button'
                        className='rounded-[2rem] border-0 bg-mainHeadingButtonBgColor p-mainHeadingButtonPadding font-fontBoard text-mainHeadingButtonFontSize font-bold duration-500 ease-in-out hover:bg-[hsla(0,0%,10%,100%)] dark:text-darkModePrimaryColor'
                        type='button'
                        onClick={() => {
                            leszopol()
                        }}>
                        <Link to='/cult'>Csatlakozás</Link>
                    </button>
                </div>
                <video
                    id='landing-page-bg-video'
                    src='./src/assets/video/landing-page-video.mp4'
                    autoPlay
                    muted
                    loop
                    className='aspect-[16/30] h-full w-full object-cover navbarChange:aspect-video'></video>
            </div>
        </main>
    )
}

export default Home
