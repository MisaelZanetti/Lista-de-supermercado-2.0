
function Item(props) {
    let BtnCE = null

    if (props.producto.comprado === false) {
        BtnCE = <button className='comprar' onClick={() => props.hec(props.producto)}>Cambiar Estado</button>
    }

    return (
        <li className="producto producto_0" id={props.producto.id}>
            <div className='id-nombre'>
                <p>Producto: {props.producto.nombre}</p>
            </div>
            <span className='precio'>${props.producto.precio}</span>
            <p className="p_categoria">{props.producto.categoria}</p>
            <p className='p_stock'>{props.producto.comprado ? 'Comprado' : 'Pendiente'}</p>
            <div>
                {BtnCE}
                <button className='eliminar' onClick={() => props.eliminar(props.producto.id)}>Borrar</button>
            </div>
        </li>
    )
}

export default Item

