import { Outlet } from "react-router-dom";
import MenuLinks from "./MenuLinks";
import { useState } from "react";

export default function HomePage() {
    const [Lista, setLista] = useState([])

    const MarcarStock = (id, estado) => {
        let x = document.getElementById(id);
        let p_stock = x.getElementsByClassName('p_stock')[0];
        if (estado === false) {
            p_stock.textContent = 'No Comprado'
        } if (estado === true) {
            p_stock.textContent = 'Comprado'
        }
    }

    const Borrar = (id) => {
        const li = document.getElementById(id);
        li.remove();
    };

    const mensaje = [Lista, setLista, MarcarStock, Borrar]

    return (
        <>
            <div className="container">
                <h1>🛒 Lista de Supermercado</h1>
                <p>Organizá tus compras de manera fácil y rápida.
                    Una herramienta sencilla para que no te olvides de nada en tu próxima visita al súper.</p>
            </div>

            <Outlet context={mensaje} />

            <MenuLinks />
        </>
    )
}
