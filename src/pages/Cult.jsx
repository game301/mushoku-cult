const Cult = () => {
    return (
        <main id='cult-main' className='min-h-screen h-full'>
            <section
                id='cult-select'
                className='flex flex-col items-center font-fontWriting text-cultSelectSmallScreenFontSize pt-cultSelectSmallScreenPaddingBlock pb-cultSelectSmallScreenPaddingBlock goddessChange:text-cultSelectFontSize goddessChange:p-0'>
                <h1 id='cult-title' className='font-normal'>
                    Choose your Goddess!
                </h1>
            </section>
            <section
                id='cult-3-goddess-container'
                className='flex justify-around mt-cult3GoddessContainerMarginTop flex-col items-center goddessChange:items-start goddessChange:flex-row'>
                <div
                    id='cult-sylphie'
                    className='flex flex-col items-center justify-center rounded-[3rem] opacity-0 mb-cultSmallScreenMarginBottom goddessChange:mb-0 max-w-cultSmallScreenMaxWidth goddessChange:max-w-cultMaxWidth duration-500 ease-in-out hover:scale-110 hover:bg-[rgb(0,255,0)] hover:shadow-cultSylphieBoxShadow'>
                    <h2 className='text-cultSubHeaderSmallScreenFontSize goddesschange:text-cultSubHeaderFontSize font-fontWriting m-cultSubHeadingMargin text-center whitespace-nowrap'>
                        Goddess of Love
                    </h2>
                    <img
                        src='./src/assets/img/sylphy-figurine.png'
                        alt='sylphy figurine image'
                        className='w-cultImageWidth aspect-square rounded-[15%] duration-500 ease-in-out'
                    />
                    <p className='text-cultSubHeaderSmallScreenFontSize goddesschange:text-cultParagraphFontSize font-fontWriting m-cultSubHeadingMargin text-center whitespace-nowrap'>
                        Sylphiette Greyrat
                    </p>
                    <button
                        type='button'
                        className='border-0 rounded-[3vw] cursor-pointer duration-500 ease-in-out bg-[hsla(0,0%,10%,0.4)] hover:bg-[hsl(0,0%,10%)] text-darkModePrimaryColor font-bold text-cultButtonSmallScreenFontSize goddesschange:text-cultButtonFontSize m-cultButtonSmallScreenMargin p-cultButtonSmallScreenMargin goddessChange:m-cultButtonMargin goddessChange:p-cultButtonMargin'>
                        Join
                    </button>
                </div>
                <div
                    id='cult-roxy'
                    className='flex flex-col items-center justify-center rounded-[3rem] opacity-0 mb-cultSmallScreenMarginBottom goddessChange:mb-0 max-w-cultSmallScreenMaxWidth goddessChange:max-w-cultMaxWidth duration-500 ease-in-out hover:scale-110 hover:bg-[rgb(0,0,255)] hover:shadow-cultRoxyBoxShadow'>
                    <h2 className='text-cultSubHeaderSmallScreenFontSize goddesschange:text-cultSubHeaderFontSize font-fontWriting m-cultSubHeadingMargin text-center whitespace-nowrap'>
                        Goddess of Wisdom
                    </h2>
                    <img
                        src='./src/assets/img/roxy-figurine.png'
                        alt='roxy figurine image'
                        className='w-cultImageWidth aspect-square rounded-[15%] duration-500 ease-in-out'
                    />
                    <p className='text-cultSubHeaderSmallScreenFontSize goddesschange:text-cultParagraphFontSize font-fontWriting m-cultSubHeadingMargin text-center whitespace-nowrap'>
                        Roxy Migurdia
                    </p>
                    <button
                        type='button'
                        className='border-0 rounded-[3vw] cursor-pointer duration-500 ease-in-out bg-[hsla(0,0%,10%,0.4)] hover:bg-[hsl(0,0%,10%)] text-darkModePrimaryColor font-bold text-cultButtonSmallScreenFontSize goddesschange:text-cultButtonFontSize m-cultButtonSmallScreenMargin p-cultButtonSmallScreenMargin goddessChange:m-cultButtonMargin goddessChange:p-cultButtonMargin'>
                        Join
                    </button>
                </div>
                <div
                    id='cult-eris'
                    className='flex flex-col items-center justify-center rounded-[3rem] opacity-0 mb-cultSmallScreenMarginBottom goddessChange:mb-0 max-w-cultSmallScreenMaxWidth goddessChange:max-w-cultMaxWidth duration-500 ease-in-out hover:scale-110 hover:bg-[rgb(255,0,0)] hover:shadow-cultErisBoxShadow'>
                    <h2 className='text-cultSubHeaderSmallScreenFontSize goddesschange:text-cultSubHeaderFontSize font-fontWriting m-cultSubHeadingMargin text-center whitespace-nowrap'>
                        Goddess of War
                    </h2>
                    <img
                        src='./src/assets/img/eris-figurine.jpg'
                        alt='eris figurine image'
                        className='w-cultImageWidth aspect-square rounded-[15%] duration-500 ease-in-out'
                    />
                    <p className='text-cultSubHeaderSmallScreenFontSize goddesschange:text-cultParagraphFontSize font-fontWriting m-cultSubHeadingMargin text-center whitespace-nowrap'>
                        Eris Greyrat
                    </p>
                    <button
                        type='button'
                        className='border-0 rounded-[3vw] cursor-pointer duration-500 ease-in-out bg-[hsla(0,0%,10%,0.4)] hover:bg-[hsl(0,0%,10%)] text-darkModePrimaryColor font-bold text-cultButtonSmallScreenFontSize goddesschange:text-cultButtonFontSize m-cultButtonSmallScreenMargin p-cultButtonSmallScreenMargin goddessChange:m-cultButtonMargin goddessChange:p-cultButtonMargin'>
                        Join
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Cult
