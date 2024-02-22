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

                <label className='mb-1 block'>Email address:</label>
                <input
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className='mb-1 block rounded p-1'
                />
                <label className='mb-1 block'>Password:</label>
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className='mb-2 block rounded p-1'
                />
                <div className='flex justify-between'>
                    <button
                        type='submit'
                        disabled={isLoading}
                        className='mb-2 rounded border-[1px] border-white p-1'>
                        Log in
                    </button>

                    <button
                        type='button'
                        className='mb-2 rounded border-[1px] border-white p-1'>
                        <Link to='/signup'>Sign Up</Link>
                    </button>
                </div>
                <div className='text-right text-sm'>
                    Do not have an account?
                </div>
                {error && <div className='error'>{error}</div>}
            </form>
        </main>
    )
}

export default Login
