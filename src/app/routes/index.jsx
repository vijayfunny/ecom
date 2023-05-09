import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/navpages/Home';
import Contact from '../pages/navpages/Contact';
import Login from '../pages/auth/Login';
import Navbar from '../components/Navbar';

const MainRoute = () => {
    const isLoggedIn = true;
    return (
        <>
            <Navbar />
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Login />} path='/login' />
                <Route element={<Contact />} path='/contact' />
                <Route element={<Home />} path='*' />
            </Routes>
        </>
    )
}

export default MainRoute