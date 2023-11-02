import { Router } from "express"

const router = Router()

// GET all workouts
router.get("/", (req, res) => {
    res.json({ mssg: "GET all workouts" })
})

// GET a single workout
router.get("/:id", (req, res) => {
    res.json({ mssg: "GET a single workout" })
})

// POST a new workout
router.post("/", (req, res) => {
    res.json({ mssg: "POST a new workout" })
})

// DELETE a workout
router.delete("/:id", (req, res) => {
    res.json({ mssg: "DELETE a workout" })
})

// UPDATE a workout
router.patch("/:id", (req, res) => {
    res.json({ mssg: "UPDATE a workout" })
})

export default router