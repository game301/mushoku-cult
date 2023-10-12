/* eslint-disable react/prop-types */

//import PropTypes from "prop-types"

const CultBox = ({
    id,
    ref,
    cultClasses,
    h2Content,
    pContent,
    imgSrc,
    imgAlt,
}) => {
    return (
        <div id={id} ref={ref} className={cultClasses}>
            <h2 className='cult-subheader'>{h2Content}</h2>
            <img
                src={imgSrc}
                alt={imgAlt}
                className='w-cultImageWidth aspect-square rounded-[15%] duration-500 ease-in-out'
            />
            <p className='cult-paragraph'>{pContent}</p>
            <button
                type='button'
                className='border-0 rounded-[3vw] duration-500 ease-in-out bg-[hsla(0,0%,10%,0.4)] hover:bg-[hsl(0,0%,10%)] dark:text-darkModePrimaryColor font-bold text-cultButtonSmallScreenFontSize goddessChange:text-cultButtonFontSize m-cultButtonSmallScreenMargin p-cultButtonSmallScreenMargin goddessChange:m-cultButtonMargin goddessChange:ps-cultButtonSmallScreenMargin goddessChange:pe-cultButtonSmallScreenMargin goddessChange:pt-0 goddessChange:pb-0'>
                Join
            </button>
        </div>
    )
}
/*
CultBox.PropTypes = {
    id: PropTypes.number.isRequired,
    ref: PropTypes.string.isRequired,
    h2Content: PropTypes.string.isRequired,
    pContent: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
}
*/
export default CultBox
