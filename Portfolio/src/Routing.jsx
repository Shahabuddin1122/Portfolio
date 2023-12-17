import React from "react";
import { Routes,Route } from "react-router-dom";

import App from './App.jsx'
import First_page from "./first_pge.jsx"

const Routing = ()=>{
    return (
        <>
            <Routes>
                <Route path='/' element={<First_page/>}></Route>
                <Route path='/book' element={<App/>}></Route>
            </Routes>
        </>
    )
}
export default Routing;