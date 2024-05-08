const UserData = () => {
    return (
        <main className='flex items-center justify-center'>
            <div className='flex min-h-screen items-center justify-center'>
                <div className='rounded p-8 shadow-lg'>
                    <h1 className='mb-4 text-3xl font-bold'>User Profile</h1>
                    <div className='mb-4 flex items-center'>
                        <img
                            src='../../src/assets/img/roxy1.jpg'
                            alt='user avatar'
                            className='mr-4 h-16 w-16 rounded-full'
                        />
                        <div>
                            <h2 className='text-xl font-bold'>John Doe</h2>
                            <p className='dark:text-darkModePrimaryColor text-darkModePrimaryColor'>
                                john.doe@example.com
                            </p>
                        </div>
                    </div>
                    <div className='border-t border-gray-200 pt-4'>
                        <h3 className='mb-2 text-lg font-bold'>Bio:</h3>
                        
                        <ul>
                            <li>Name: John Doe</li>
                            <li>Age: 30</li>
                            <li>Location: City, Country</li>
                            <li>Email: johndoe@example.com</li>
                            <li>Phone: +1234567890</li>
                            <li>Occupation: Software Developer</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default UserData
