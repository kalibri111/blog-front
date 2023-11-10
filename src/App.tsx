import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhotographerPage from "./photographer-page/PhotographerPage";
import DeveloperPage from "./developer-page/DeveloperPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/photographer-page" element={<PhotographerPage/>} />
                    <Route path="/developer-page" element={<DeveloperPage/>} />
                    <Route path="/main-page" element={<AboutPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
