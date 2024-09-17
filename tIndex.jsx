/////* eslint-disable no-unused-vars */
////import { useState } from 'React';
////import { BrowserRouter as Router, Routes, Route, Link } from "ReactRouterDOM";
////import Login from "./Pages/Login";
//////import Register from "./Pages/Register";
//////import Home from "./Pages/Home";
////import { Container, Toast, Modal, Button } from 'ReactBootstrap';
////import Navbar from './work/Components/Navbar'

import { BrowserRouter as Router, Routes, Route, Link } from "ReactRouterDOM";
import { StoreProvider } from './store';
import Navbar from "./Pages/Navbar";
import { Menu } from "./Pages/Menu";

let Menuxx = () => <div>asdfasdf</div>

export function App() {
    return (
        <div>
            <StoreProvider>
                <Router>
                    <Routes>
                        <Route path="*" element={<Menu />} />
                    </Routes>
                </Router>
            </StoreProvider>
        </div>
    );
}

//export default App;