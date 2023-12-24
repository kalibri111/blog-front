import './App.css';
import * as React from "react";
import {BrowserRouter, Route, Routes,} from 'react-router-dom'
import AboutMe from "./pages/about-me/AboutMe";
import Developer from "./pages/developer/Developer";
import Photographer from "./pages/photographer/Photographer";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<AboutMe/>} />
                <Route exact path='/about-me' element={<AboutMe/>} />
                <Route exact path='/developer' element={<Developer/>} />
                <Route exact path='/photographer' element={<Photographer/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/register' element={<Registration/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
