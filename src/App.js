import './App.css';
import * as React from "react";
import {BrowserRouter, Route, Routes,} from 'react-router-dom'
import Login from "./pages/login/Login";
import ChampionshipTable from "./components/Table/ChampionshipTable";
import ChampionshipList from "./components/List/ChampionshipList";
import Registration from "./pages/registration/Registration";
import {Stack} from "@mui/material";
import Championship from "./pages/Champoinship/Championship";
import Favourite from "./pages/Favourite/Favourite";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Championship/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/register' element={<Registration/>} />
                <Route exact path='/favourites' element={<Favourite/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
