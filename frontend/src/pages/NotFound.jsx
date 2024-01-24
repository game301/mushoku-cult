import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <main className='flex items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div className='w-6/12 flex items-center justify-center flex-col'>
                    <img
                        src='../../src/assets/img/LN_Vol_12_JP.webp'
                        alt=''
                        className='m-1.5 w-7/12 rounded-[5%]'
                    />
                    <div>
                        <h2 className='p-1.5 text-center font-fontNormal ease-in-out dark:text-darkModePrimaryColor text-cultSubHeaderSmallScreenFontSize duration-300 hover:scale-x-1 focus:scale-x-1'>
                            404 Not Found
                        </h2>
                        <p className='pb-1.5 pt-1.5 font-fontNormal ease-in-out dark:text-darkModePrimaryColor text-footerCopyrightSize duration-300 hover:scale-x-1 focus:scale-x-1'>
                            A keresett oldal nem található.
                        </p>
                        <button
                            type='button'
                            className='border-[1px] border-white rounded p-1'
                        >
                            <Link to='/'>Vissza a főoldalra</Link>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NotFound
