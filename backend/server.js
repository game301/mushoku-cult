import dotenv from "dotenv"
dotenv.config()
//console.log(dotenv.config())

import envKeys from "./envKeys.js"

import express, { json } from "express"
import mongoose from "mongoose"

import workoutRoutes from "./routes/workouts.js"

// deleteable
/*
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
//console.log(__dirname)

dotenv.config({ path: path.resolve(__dirname, "../.env") })
//console.log(dotenv.config({ path: path.resolve(__dirname, "../.env") }))
//console.log(dotenv.config({ path: __dirname + "/../.env" }))
*/

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

//console.log(import.meta)
//console.log(import.meta.url)
//console.log(import.meta.env)
//console.log(import.meta.env.VITE_PORT)

// connect to db
mongoose
    //.connect(import.meta.env.MONGO_URI)
    .connect(envKeys.mongoURI)
    .then(() => {
        console.log("connected to database")
        // listen to port
        //app.listen(import.meta.env.VITE_PORT, () => {
        app.listen(envKeys.port, () => {
            console.log(
                "listening for requests on port",
                //import.meta.env.VITE_PORT
                envKeys.port
            )
        })
    })
    .catch((err) => {
        console.log(err)
    })
