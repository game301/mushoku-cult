import { useAuthContext } from "./useAuthContext.jsx"
import { useWorkoutsContext } from "./useWorkoutsContext.jsx"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: dispatchWorkouts } = useWorkoutsContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem("user")

        // dispatch logout action
        dispatch({ type: "LOGOUT" })
        dispatchWorkouts({ type: "SET_WORKOUTS", payload: null })
    }

    return { logout }
}
