import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import PendientesPage from './pages/PendientesPage.jsx'
import CompradosPage from './pages/CompradosPage.jsx'
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
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
//  element={<CompradosPage Borrar={Borrar} Lista={Lista} setLista={setLista} />}
// element={<PendientesPage Borrar={Borrar} MarcarStock={MarcarStock} Lista={Lista} setLista={setLista} />}