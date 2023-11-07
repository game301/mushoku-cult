import dotenv from "dotenv"
dotenv.config()
//console.log(dotenv.config())
//console.log(process.env)

import express, { json } from "express"
import mongoose from "mongoose"

import workoutRoutes from "./routes/workouts.js"

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
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to database")
        // listen to port
        app.listen(process.env.PORT, () => {
            console.log("listening for requests on port", process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })
