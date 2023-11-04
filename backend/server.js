import dotenv from "dotenv"
dotenv.config()

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

//const port = 4000
//const mongoURI ="mongodb+srv://teszt:teszt@mongodbnodetest.21tpgnd.mongodb.net/?retryWrites=true&w=majority"

console.log(import.meta.env)
//console.log(import.meta.env.VITE_PORT)

// connect to db
mongoose
    //.connect(import.meta.env.VITE_MONGO_URI)
    .connect(mongoURI)
    .then(() => {
        console.log("connected to database")
        // listen to port
        //app.listen(import.meta.env.VITE_PORT, () => {
        app.listen(port, () => {
            console.log(
                "listening for requests on port",
                //import.meta.env.VITE_PORT
                port
            )
        })
    })
    .catch((err) => {
        console.log(err)
    })
