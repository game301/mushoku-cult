import gsap from "gsap"
import { useEffect, useRef, useState } from "react"

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

    const [isSylphie, setIsSylphie] = useState(false)

    const handleIsSylphie = () => {
        setIsSylphie((prevSylphie) => !prevSylphie)
    }

    const [isRoxy, setIsRoxy] = useState(false)

    const handleIsRoxy = () => {
        setIsRoxy((prevRoxy) => !prevRoxy)
    }

    const [isEris, setIsEris] = useState(false)

    const handleIsEris = () => {
        setIsEris((prevEris) => !prevEris)
    }

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
                    className='cult hover:scale-110 hover:bg-[rgb(0,255,0)] hover:shadow-cultSylphieBoxShadow'>
                    <h2 className='cult-subheader '>Goddess of Love</h2>
                    <img
                        src='./src/assets/img/sylphie-cropped1.webp'
                        alt='sylphy figurine image'
                        className='w-cultImageWidth aspect-square rounded-[15%] duration-500 ease-in-out'
                    />
                    <p className='cult-paragraph'>Sylphiette Greyrat</p>
                    <button
                        type='button'
                        onClick={handleIsSylphie}
                        className='border-0 rounded-[3vw] duration-500 ease-in-out bg-[hsla(0,0%,10%,0.4)] hover:bg-[hsl(0,0%,10%)] dark:text-darkModePrimaryColor font-bold text-cultButtonSmallScreenFontSize goddessChange:text-cultButtonFontSize m-cultButtonSmallScreenMargin p-cultButtonSmallScreenMargin goddessChange:m-cultButtonMargin goddessChange:ps-cultButtonSmallScreenMargin goddessChange:pe-cultButtonSmallScreenMargin goddessChange:pt-0 goddessChange:pb-0'>
                        {isSylphie ? "Show less" : "Show more"}
                    </button>
                </div>

                <div
                    id='cult-roxy'
                    ref={cultRoxyRef}
                    className='cult hover:scale-110 hover:bg-[rgb(0,0,255)] hover:shadow-cultRoxyBoxShadow'>
                    <h2 className='cult-subheader'>Goddess of Wisdom</h2>
                    <img
                        src='./src/assets/img/roxy-cropped2.png'
                        alt='roxy figurine image'
                        className='w-cultImageWidth aspect-square rounded-[15%] duration-500 ease-in-out'
                    />
                    <p className='cult-paragraph'>Roxy Migurdia</p>
                    <button
                        type='button'
                        onClick={handleIsRoxy}
                        className='border-0 rounded-[3vw] duration-500 ease-in-out bg-[hsla(0,0%,10%,0.4)] hover:bg-[hsl(0,0%,10%)] dark:text-darkModePrimaryColor font-bold text-cultButtonSmallScreenFontSize goddessChange:text-cultButtonFontSize m-cultButtonSmallScreenMargin p-cultButtonSmallScreenMargin goddessChange:m-cultButtonMargin goddessChange:ps-cultButtonSmallScreenMargin goddessChange:pe-cultButtonSmallScreenMargin goddessChange:pt-0 goddessChange:pb-0'>
                        {isRoxy ? "Show less" : "Show more"}
                    </button>
                </div>

                <div
                    id='cult-eris'
                    ref={cultErisRef}
                    className='cult hover:scale-110 hover:bg-[rgb(255,0,0)] hover:shadow-cultErisBoxShadow'>
                    <h2 className='cult-subheader'>Goddess of War</h2>
                    <img
                        src='./src/assets/img/eris-cropped2.png'
                        alt='eris figurine image'
                        className='w-cultImageWidth aspect-square rounded-[15%] duration-500 ease-in-out'
                    />
                    <p className='cult-paragraph'>Eris Greyrat</p>
                    <button
                        type='button'
                        onClick={handleIsEris}
                        className='border-0 rounded-[3vw] duration-500 ease-in-out bg-[hsla(0,0%,10%,0.4)] hover:bg-[hsl(0,0%,10%)] dark:text-darkModePrimaryColor font-bold text-cultButtonSmallScreenFontSize goddessChange:text-cultButtonFontSize m-cultButtonSmallScreenMargin p-cultButtonSmallScreenMargin goddessChange:m-cultButtonMargin goddessChange:ps-cultButtonSmallScreenMargin goddessChange:pe-cultButtonSmallScreenMargin goddessChange:pt-0 goddessChange:pb-0'>
                        {isEris ? "Show less" : "Show more"}
                    </button>
                </div>
            </section>

            {isSylphie ? (
                <section className='flex'>
                    <img
                        src='/src/assets/img/sylphie-cropped2-1000x1000.png'
                        alt='sylphie crop'
                        className='ms-20 mt-20 mb-20 w-4/12'
                    />
                    <div className='flex flex-col goddessChange:justify-center goddessChange:items-center'>
                        <h2 className='ms-20 me-20 mb-5 text-center font-bold font-fontNormal'>
                            Sylphie the Best Kind Green Pokémon
                        </h2>
                        <p className='ms-cultJoinedMargin me-cultJoinedMargin mb-5 font-fontNormal text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non dolor tempora officiis, quisquam inventore
                            laboriosam esse ut quod quae sequi officia mollitia
                            suscipit nulla
                        </p>
                        <button
                            type=''
                            className='block border-[1px] w-2/12 ms-cultJoinedMargin me-cultJoinedMargin border-white rounded p-1 mb-2'>
                            Join
                        </button>
                    </div>
                </section>
            ) : (
                ""
            )}

            {isRoxy ? (
                <section className='flex flex-row-reverse'>
                    <img
                        src='/src/assets/img/roxy-cropped1-1000x1000-2.png'
                        alt='roxy crop'
                        className='me-20 mt-20 mb-20 w-4/12'
                    />

                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='ms-20 me-20 mb-5 text-center font-bold font-fontNormal'>
                            Roxy the Best Blue Teacher Pokémon
                        </h2>
                        <p className='ms-cultJoinedMargin me-cultJoinedMargin mb-5 font-fontNormal text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non dolor tempora officiis, quisquam inventore
                            laboriosam esse ut quod quae sequi officia mollitia
                            suscipit nulla
                        </p>
                        <button
                            type=''
                            className='block border-[1px] w-2/12 ms-cultJoinedMargin me-cultJoinedMargin border-white rounded p-1 mb-2'>
                            Join
                        </button>
                    </div>
                </section>
            ) : (
                ""
            )}

            {isEris ? (
                <section className='flex'>
                    <img
                        src='/src/assets/img/eris-cropped3-1000x1000.png'
                        alt='eris crop'
                        className='ms-20 mt-20 mb-20 w-4/12'
                    />

                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='ms-20 me-20 mb-5 text-center font-bold font-fontNormal'>
                            Eris the Best Red Husband Pokémon
                        </h2>
                        <p className='ms-cultJoinedMargin me-cultJoinedMargin mb-5 font-fontNormal text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non dolor tempora officiis, quisquam inventore
                            laboriosam esse ut quod quae sequi officia mollitia
                            suscipit nulla
                        </p>
                        <button
                            type=''
                            className='block border-[1px] w-2/12 ms-cultJoinedMargin me-cultJoinedMargin border-white rounded p-1 mb-2'>
                            Join
                        </button>
                    </div>
                </section>
            ) : (
                ""
            )}
        </main>
    )
}

export default Cult
