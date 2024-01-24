import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { Link } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <main className='flex items-center justify-center'>
            <form className='login' onSubmit={handleSubmit}>
                <h3>Login</h3>

                <label className='block mb-1'>Email address:</label>
                <input
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className='block p-1 mb-1 rounded'
                />
                <label className='block mb-1'>Password:</label>
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className='block p-1 mb-2 rounded'
                />
                <div className='flex justify-between'>
                    <button
                        type='submit'
                        disabled={isLoading}
                        className='border-[1px] border-white rounded p-1 mb-2'
                    >
                        Log in
                    </button>

                    <button
                        type='button'
                        className='border-[1px] border-white rounded p-1 mb-2'
                    >
                        <Link to='/signup'>Sign Up</Link>
                    </button>
                </div>
                <div className='text-sm text-right'>
                    Do not have an account?
                </div>
                {error && <div className='error'>{error}</div>}
            </form>
        </main>
    )
}

export default Login
