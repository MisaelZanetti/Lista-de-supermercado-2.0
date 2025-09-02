import { useState } from 'react';
import MenuLinks from './MenuLinks'
import Item from '../Item';
import { useOutletContext } from 'react-router-dom';

export default function PendientesPage() {
    const [Lista, setLista, MarcarStock, Borrar] = useOutletContext();

    const [estock, setEStock] = useState(true);
    const [id, setId] = useState(1)
    const [enombre, setENombre] = useState("")
    const [eprecio, setEPrecio] = useState(0)
    const [ecategoria, setECategoria] = useState('')
    console.log(Lista);

    let nombre = document.getElementsByName('nombre')[0];
    let precio = document.getElementsByName('precio')[0];
    let categoria = document.getElementsByName('categoria')[0];

    const ObtenerDatos = (e) => {
        if (e.target.name === 'nombre') {
            setENombre(e.target.value)
        } if (e.target.name === 'precio') {
            setEPrecio(e.target.value)
        } if (e.target.name === 'categoria') {
            setECategoria(e.target.value)
        }
    }

    const CrearProducto = (e) => {
        e.preventDefault()
        nombre.value = '';
        precio.value = '';
        categoria.value = '';

        let ProductoNuevo = {
            id: id,
            nombre: enombre,
            precio: eprecio,
            categoria: ecategoria,
            comprado: false
        }
        let listaAnterior = [...Lista]
        setLista([...Lista, ProductoNuevo])
        setId(id + 1)
        console.log(Lista);
    }

    return (
        <>
            <section id='form'>
                <form id="form-producto" onSubmit={CrearProducto}>
                    <h1>Ingresar Datos:</h1>
                    <label>Nombre: </label>
                    <input type="text" name="nombre" placeholder="Nombre del producto" onInput={ObtenerDatos} required />
                    <label>Precio: </label>
                    <input type="number" name="precio" step="100" placeholder="Precio" min={0} onInput={ObtenerDatos} required />
                    <label>Elegir categoria: </label>
                    <select name="categoria" onChange={ObtenerDatos} required>
                        <option value="">Seleccionar categoría</option>
                        <option value="Verduras">Verduras</option>
                        <option value="Lácteos">Lácteos</option>
                        <option value="Carnes">Carnes</option>
                        <option value="Bebidas">Bebidas</option>
                        <option value="Otros">Otros</option>
                    </select>
                    <button type="submit">Agregar producto</button>
                </form>
            </section>

            <h2>Productos Pendientes</h2>
            <ul className='lista'>
                {Lista.filter(producto => producto.comprado === false).map((producto) => {
                    return (

                        <Item
                            key={producto.id}
                            producto={producto}
                            hec={(producto) => {
                                setEStock(!estock);
                                producto.comprado = !producto.comprado
                                MarcarStock(producto.id, producto.comprado);
                            }}
                            eliminar= {Borrar}
                        />
                    )
                })}
            </ul>
        </>
    )
}
