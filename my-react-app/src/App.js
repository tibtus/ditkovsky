import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import 'normalize.css';
// інші ваши стилі або компоненти
import Header from './views/Header';
import Footer from './views/Footer';
import About from './layouts/About';
import Main from './layouts/Main';
import OsnovniPraktyky from "./layouts/OsnovniPraktyky";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/osnovnipraktyky" element={<OsnovniPraktyky/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
