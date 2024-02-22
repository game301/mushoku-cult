import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { Link } from "react-router-dom"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <main className='flex items-center justify-center'>
            <form className='signup' onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

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
                        Sign up
                    </button>

                    <button
                        type='button'
                        className='mb-2 rounded border-[1px] border-white p-1'>
                        <Link to='/login'>Login</Link>
                    </button>
                </div>
                <div className='text-right text-sm'>Have an account?</div>
                {error && <div className='error'>{error}</div>}
            </form>
        </main>
    )
}

export default Signup
