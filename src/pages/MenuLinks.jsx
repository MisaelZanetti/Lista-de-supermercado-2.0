import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuLinks() {
    return (
        <>
            <div id='menu-paginas'>
                <h3>Eliga la ruta:</h3>
                <p>
                    <li>
                        <NavLink to={'/principal'}>Pagina principal</NavLink>
                    </li>
                </p>
                <p>
                    <li>
                        <NavLink to={'/principal/comprados'}>Comprados</NavLink>
                    </li>
                </p>
                <p>
                    <li>
                        <NavLink to={'/principal/pendientes'}>Pendientes</NavLink>
                    </li>
                </p>
            </div>
        </>
    )
}
