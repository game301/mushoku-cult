import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <main className='flex items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div className='flex w-6/12 flex-col items-center justify-center'>
                    <img
                        src='../../src/assets/img/LN_Vol_12_JP.webp'
                        alt=''
                        className='m-1.5 w-7/12 rounded-[5%]'
                    />
                    <div className='flex flex-col items-center'>
                        <h2 className='hover:scale-x-1 focus:scale-x-1 p-1.5 text-center font-fontNormal text-cultSubHeaderSmallScreenFontSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                            404 Not Found
                        </h2>
                        <p className='hover:scale-x-1 focus:scale-x-1 pb-1.5 pt-1.5 font-fontNormal text-footerCopyrightSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                            A keresett oldal nem található.
                        </p>
                        <button
                            type='button'
                            className='rounded border-[1px] border-white p-1'>
                            <Link to='/'>Vissza a főoldalra</Link>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NotFound
