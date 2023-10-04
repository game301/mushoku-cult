import gsap from "gsap"
import { useEffect, useRef } from "react"

const Cult = () => {
    const cultTitleRef = useRef(null)
    const cultSylphieRef = useRef(null)
    const cultRoxyRef = useRef(null)
    const cultErisRef = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline({ defaults: { duration: 1 } })

        timeline

            .to(
                cultTitleRef.current,
                {
                    opacity: 1,
                    scale: 1,
                    fontWeight: "400",
                    filter: "drop-shadow(-5px 5px 5px)",
                    ease: "ease-in",
                    duration: 1.5,
                },
                "<"
            )
            .to(
                cultSylphieRef.current,
                {
                    opacity: 1,
                    duration: 0,
                },
                "<1"
            )
            .to(
                cultRoxyRef.current,
                {
                    opacity: 1,
                    duration: 0,
                },
                "<0.5"
            )
            .to(
                cultErisRef.current,
                {
                    opacity: 1,
                    duration: 0,
                },
                "<0.5"
            )
    }, []) // Empty dependency array ensures that the effect runs once after the initial render

    return (
        <main id='cult-main' className='min-h-screen h-full'>
            <section
                id='cult-select'
                className='flex flex-col items-center font-fontWriting text-cultSelectSmallScreenFontSize pt-cultSelectSmallScreenPaddingBlock pb-cultSelectSmallScreenPaddingBlock goddessChange:text-cultSelectFontSize goddessChange:p-0'>
                <h1
                    id='cult-title'
                    ref={cultTitleRef}
                    className='font-bold drop-shadow-[-30px_20px_20px] scale-[2] opacity-0'>
                    Choose your Goddess!
                </h1>
            </section>
            <section
                id='cult-3-goddess-container'
                className='flex justify-around mt-cult3GoddessContainerMarginTop flex-col items-center goddessChange:items-start goddessChange:flex-row'>
                <div
                    id='cult-sylphie'
                    ref={cultSylphieRef}
                    className='flex flex-col items-center justify-center rounded-[3rem] opacity-0 mb-cultSmallScreenMarginBottom goddessChange:mb-0 max-w-cultSmallScreenMaxWidth goddessChange:max-w-cultMaxWidth duration-500 ease-in-out hover:scale-110 hover:bg-[rgb(0,255,0)] hover:shadow-cultSylphieBoxShadow'>
                    <h2 className='dark:text-darkModePrimaryColor text-cultSubHeaderSmallScreenFontSize goddesschange:text-cultSubHeaderFontSize font-fontWriting m-cultSubHeadingMargin text-center whitespace-nowrap'>
                        Goddess of Love
                    </h2>
                    <img
                        src='./src/assets/img/sylphy-figurine.png'
                        alt='sylphy figurine image'
                        className='w-cultImageWidth aspect-square rounded-[15%] duration-500 ease-in-out'
                    />
                    <p className='dark:text-darkModePrimaryColor text-cultSubHeaderSmallScreenFontSize goddesschange:text-cultParagraphFontSize font-fontWriting m-cultSubHeadingMargin text-center whitespace-nowrap'>
                        Sylphiette Greyrat
                    </p>
                    <button
                        type='button'
                        className='border-0 rounded-[3vw] duration-500 ease-in-out bg-[hsla(0,0%,10%,0.4)] hover:bg-[hsl(0,0%,10%)] dark:text-darkModePrimaryColor font-bold text-cultButtonSmallScreenFontSize goddesschange:text-cultButtonFontSize m-cultButtonSmallScreenMargin p-cultButtonSmallScreenMargin goddessChange:m-cultButtonMargin goddessChange:ps-cultButtonSmallScreenMargin goddessChange:pe-cultButtonSmallScreenMargin goddessChange:pt-0 goddessChange:pb-0'>
                        Join
                    </button>
                </div>
                <div
                    id='cult-roxy'
                    ref={cultRoxyRef}
                    className='flex flex-col items-center justify-center rounded-[3rem] opacity-0 mb-cultSmallScreenMarginBottom goddessChange:mb-0 max-w-cultSmallScreenMaxWidth goddessChange:max-w-cultMaxWidth duration-500 ease-in-out hover:scale-110 hover:bg-[rgb(0,0,255)] hover:shadow-cultRoxyBoxShadow'>
                    <h2 className='dark:text-darkModePrimaryColor text-cultSubHeaderSmallScreenFontSize goddesschange:text-cultSubHeaderFontSize font-fontWriting m-cultSubHeadingMargin text-center whitespace-nowrap'>
                        Goddess of Wisdom
                    </h2>
                    <img
                        src='./src/assets/img/roxy-figurine.png'
                        alt='roxy figurine image'
                        className='w-cultImageWidth aspect-square rounded-[15%] duration-500 ease-in-out'
                    />
                    <p className='dark:text-darkModePrimaryColor text-cultSubHeaderSmallScreenFontSize goddesschange:text-cultParagraphFontSize font-fontWriting m-cultSubHeadingMargin text-center whitespace-nowrap'>
                        Roxy Migurdia
                    </p>
                    <button
                        type='button'
                        className='border-0 rounded-[3vw] duration-500 ease-in-out bg-[hsla(0,0%,10%,0.4)] hover:bg-[hsl(0,0%,10%)] dark:text-darkModePrimaryColor font-bold text-cultButtonSmallScreenFontSize goddesschange:text-cultButtonFontSize m-cultButtonSmallScreenMargin p-cultButtonSmallScreenMargin goddessChange:m-cultButtonMargin goddessChange:ps-cultButtonSmallScreenMargin goddessChange:pe-cultButtonSmallScreenMargin goddessChange:pt-0 goddessChange:pb-0'>
                        Join
                    </button>
                </div>
                <div
                    id='cult-eris'
                    ref={cultErisRef}
                    className='flex flex-col items-center justify-center rounded-[3rem] opacity-0 mb-cultSmallScreenMarginBottom goddessChange:mb-0 max-w-cultSmallScreenMaxWidth goddessChange:max-w-cultMaxWidth duration-500 ease-in-out hover:scale-110 hover:bg-[rgb(255,0,0)] hover:shadow-cultErisBoxShadow'>
                    <h2 className='dark:text-darkModePrimaryColor text-cultSubHeaderSmallScreenFontSize goddesschange:text-cultSubHeaderFontSize font-fontWriting m-cultSubHeadingMargin text-center whitespace-nowrap'>
                        Goddess of War
                    </h2>
                    <img
                        src='./src/assets/img/eris-figurine.jpg'
                        alt='eris figurine image'
                        className='w-cultImageWidth aspect-square rounded-[15%] duration-500 ease-in-out'
                    />
                    <p className='dark:text-darkModePrimaryColor text-cultSubHeaderSmallScreenFontSize goddesschange:text-cultParagraphFontSize font-fontWriting m-cultSubHeadingMargin text-center whitespace-nowrap'>
                        Eris Greyrat
                    </p>
                    <button
                        type='button'
                        className='border-0 rounded-[3vw] duration-500 ease-in-out bg-[hsla(0,0%,10%,0.4)] hover:bg-[hsl(0,0%,10%)] dark:text-darkModePrimaryColor font-bold text-cultButtonSmallScreenFontSize goddesschange:text-cultButtonFontSize m-cultButtonSmallScreenMargin p-cultButtonSmallScreenMargin goddessChange:m-cultButtonMargin goddessChange:ps-cultButtonSmallScreenMargin goddessChange:pe-cultButtonSmallScreenMargin goddessChange:pt-0 goddessChange:pb-0'>
                        Join
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Cult
