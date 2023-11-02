import dotenv from "dotenv"
dotenv.config()

import express, { json } from "express"
import { connect } from "mongoose"

import workoutRoutes from "./routes/workouts"

// express app
const app = express()

// middleware
app.use(json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/workouts", workoutRoutes)

// connect to db
connect(import.meta.env.MONGO_URI)
    .then(() => {
        console.log("connected to database")
        // listen to port
        app.listen(import.meta.env.PORT, () => {
            console.log("listening for requests on port", import.meta.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })
