import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"

import WorkoutsContextProvider from "./context/WorkoutsContextProvider"
import AuthContextProvider from "./context/AuthContextProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <WorkoutsContextProvider>
                    <App />
                </WorkoutsContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
