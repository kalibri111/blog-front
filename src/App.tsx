import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhotographerPage from "./photographer-page/PhotographerPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/photographer-page" element={<PhotographerPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
