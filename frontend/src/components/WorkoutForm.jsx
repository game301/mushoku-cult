import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError("You must be logged in")
            return
        }

        const workout = { title, load, reps }

        const response = await fetch("http://localhost:4000/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle("")
            setLoad("")
            setReps("")
            setError(null)
            setEmptyFields([])
            dispatch({ type: "CREATE_WORKOUT", payload: json })
        }
    }

    return (
        <div className='flex items-center justify-center'>
            <form className='create' onSubmit={handleSubmit}>
                <h3>Add a New Workout</h3>

                <label className='block mb-1'>Excersize Title:</label>
                <input
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className={`${
                        emptyFields.includes("title") ? "error" : ""
                    } block p-1 mb-1`}
                />

                <label className='block mb-1'>Load (in kg):</label>
                <input
                    type='number'
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}
                    className={`${
                        emptyFields.includes("load") ? "error" : ""
                    } block p-1 mb-1 rounded`}
                />

                <label className='block mb-1'>Reps:</label>
                <input
                    type='number'
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}
                    className={`${
                        emptyFields.includes("reps") ? "error" : ""
                    } block p-1 mb-2 rounded`}
                />

                <button
                    type='submit'
                    className='border-[1px] border-white rounded p-1 mb-2'
                >
                    Add Workout
                </button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}

export default WorkoutForm
