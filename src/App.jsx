import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import PendientesPage from './pages/PendientesPage.jsx'
import CompradosPage from './pages/CompradosPage.jsx'
import Carrito from './pages/Carrito.jsx'
import './App.css'
import { useState } from 'react'

export default function Apps() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/principal' element={<HomePage />}>
                        <Route path='pendientes' element={<PendientesPage />} />
                        <Route path='comprados' element={<CompradosPage />} />
                        <Route path='carrito' element={<Carrito />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}