import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Routes, Route, HashRouter} from "react-router-dom";
import About from "./pages/About";

function App() {
    return (
        <HashRouter>
            <Navbar/>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="" element={<About/>}/>
                {/*TODO*/}
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
