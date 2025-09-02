import { useOutletContext } from 'react-router-dom';
import Item from '../Item';
import MenuLinks from './MenuLinks';

export default function CompradosPage() {
    // Desestructuramos todo el mensaje
    const [Lista, setLista, MarcarStock, Borrar] = useOutletContext();

    console.log(Lista);

    return (
        <>
            <h2>Productos Comprados</h2>
            <ul className='lista_comprados'>
                {Lista.filter(producto => producto.comprado === true).map((producto) => {
                    return (
                        <Item
                            key={producto.id}
                            producto={producto}
                            hec={() => {
                                // Cambiar comprado desde el estado
                                const nuevaLista = Lista.map(p =>
                                    p.id === producto.id ? { ...p, comprado: !p.comprado } : p
                                );
                                setLista(nuevaLista);
                                MarcarStock(producto.id, !producto.comprado);
                            }}
                            eliminar={() => Borrar(producto.id)}
                        />
                    )
                })}
            </ul>
        </>
    )
}
