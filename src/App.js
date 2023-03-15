import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="App">
            <h1>React Router</h1>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    {/* Dinamic route*/}
                    <Route path="/products/:id" element={<Product/>}/>
                    {/* nested route*/}
                    <Route path="/products/:id/info" element={<Info/>}/>
                    {/* 404 Page */}
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
