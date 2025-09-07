import { useOutletContext } from "react-router-dom";
import Conjunto from "../BloquePack";
// NO ESTA HECHO EL CARRITO TODAVIA, ESTA EN PROCESO

export default function Carrito() {
    const [Lista, setLista, MarcarStock, Borrar] = useOutletContext();

    const agregarPack = () => {
        
    }

    const conjuntos = [
        {
            titulo: "Pack Desayuno",
            descripcion: "Incluye productos básicos para un buen desayuno.",
            productos: [
                { nombre: "Leche", precio: 1200 },
                { nombre: "Café", precio: 2500 },
                { nombre: "Pan", precio: 800 },
                { nombre: "Mermelada", precio: 1500 },
                { nombre: "Manteca", precio: 1300 },
            ],
        },
        {
            titulo: "Pack Asado",
            descripcion: "Ideal para compartir en familia y amigos.",
            productos: [
                { nombre: "Carne", precio: 6500 },
                { nombre: "Chorizo", precio: 2200 },
                { nombre: "Pan", precio: 900 },
                { nombre: "Chimichurri", precio: 700 },
                { nombre: "Bebidas", precio: 1800 },
            ],
        },
        {
            titulo: "Pack Limpieza",
            descripcion: "Todo lo que necesitás para mantener tu casa impecable.",
            productos: [
                { nombre: "Lavandina", precio: 600 },
                { nombre: "Detergente", precio: 1200 },
                { nombre: "Esponja", precio: 500 },
                { nombre: "Trapo de piso", precio: 1000 },
            ],
        },
    ];

    return (
        <div className="contenedor">
            <h1>Packs Predeterminados</h1>
            <div className="packs">
                {conjuntos.map((c, index) => (
                    <Conjunto
                        key={index}
                        titulo={c.titulo}
                        descripcion={c.descripcion}
                        productos={c.productos}
                        agregarPack={agregarPack}
                    />
                ))}
            </div>

            <div className="divProceso">
                <p className="proceso">No pude terminar de hacer esta parte Fede</p>
            </div>
        </div>
    );
}