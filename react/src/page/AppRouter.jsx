import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from "../App"
import AddProduct from './AddProduct'
import Register from "./Register"
import Login from "./Login"
import Card from "./Card"
import Favourite from "./Favourite"


function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/add-product" element={<AddProduct/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/card" element={<Card/>} />
                <Route path="/favourite" element={<Favourite/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter