import Swal from "sweetalert2";

export default function Conjunto({ titulo, descripcion, productos, agregarPack}) {
    const mostrarInfo = () => {
        Swal.fire({
            title: titulo,
            html: `
        <ul style="text-align:left; padding-left:20px; margin:0;">
          ${productos.map((p) => `<p>${p.nombre} - $${p.precio}</p>`).join("")}
        </ul>
      `,
            icon: "info",
            confirmButtonText: "Cerrar",
            confirmButtonColor: "#3498db",
        });
    }; 

    const precioTotal = productos.reduce((acc, item) => acc + parseInt(item.precio), 0);

    return (
        <div className="bloque">
            <div>
                <h2>{titulo} - ${precioTotal}</h2>
                <p>{descripcion}</p>
            </div>
            <div className="botones">
                <button className="info" onClick={mostrarInfo}>
                    Más info
                </button>
                <button className="comprar" onClick={agregarPack}>Comprar</button>
            </div>
        </div>
    );
}
