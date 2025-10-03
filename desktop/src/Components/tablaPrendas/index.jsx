import { useState, useEffect } from 'react'
import './tablaPrendas.css'

function tableStockMat() {

    /*
        cosas pendientes :

        1.
        interactuar con el back para cargar los datos de la db
        
        2.
        hacer el menu del boton de acciones y q este vinculado con a ese material
    */

    const [productos, setproductos] = useState([])
    
        useEffect(() => {
            const getDataTable = () => {
                fetch('https://friendly-fiesta-6p9p5ww956v34gqw-3000.app.github.dev/tableStockInv',{ credentials: 'include' })
                .then(res => res.json())
                .then(data => setproductos(data))
            }
            getDataTable()
        }, [])

    return (
        <div className="mainSection">
            <div className="tablaPrendas-wrapper">
                <table className="tablaPrendas">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Talle</th>
                            <th>Cantidad</th>
                            <th>Precio x UN</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos.length == 0 
                            ?
                            <tr>
                                <th colSpan={6}>No existen materiales en el deposito</th>
                            </tr>
                            :
                            productos.map((c, i) => {
                                return(
                                <tr key={i}>
                                    <td>{c.nombre}</td>
                                    <td>{c.descripcion}</td>
                                    <td>{c.talle}</td>
                                    <td>{c.stockDisponible}</td>
                                    <td>{c.precio}</td>
                                    <td><button>Opciones</button></td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default tableStockMat
