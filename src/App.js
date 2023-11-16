// import logo from './logo.svg';
import './App.css';
import * as React from "react";
// export class Redirect extends React.Component
// import {Route, Switch} from "react-router-dom";
import {
    BrowserRouter, Routes, Route,
} from 'react-router-dom'
// import Developer from "./pages/developer/Developer";
// import Photographer from "./pages/photographer/Photographer";
import AboutMe from "./pages/about-me/AboutMe";
import Developer from "./pages/developer/Developer";
import Test from "./test/Test";
import Photographer from "./pages/photographer/Photographer";
import FooterFAB from "./components/footer-fabs/FooterFAB";
import FAB from "./components/FAB/FAB";
import HeaderAppBar from "./components/HeaderAppBar/HeaderAppBar";

function App() {
    // ⛔️ Warning: React.jsx: type is invalid -- expected a string
    // (for built-in components) or a class/function
    // (for composite components) but got:
    const elem =
        <div>
            <button>Click</button>
            <h1>hello world</h1>
        </div>
    return (
    // <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<AboutMe/>} />
                <Route exact path='/about-me' element={<AboutMe/>} />
                <Route exact path='/developer' element={<Developer/>} />
                <Route exact path='/photographer' element={<Photographer/>} />
                {/*<Route exact path="/" element={<Test/>} />*/}
            </Routes>
        </BrowserRouter>
    // </Provider>
    );
}

// function App() {
//     // ⛔️ Warning: React.jsx: type is invalid -- expected a string
//     // (for built-in components) or a class/function
//     // (for composite components) but got:
//     const elem =
//         <div>
//             <button>Click</button>
//             <h1>hello world</h1>
//         </div>
//     return (
//         elem
//     );
// }

export default App;
