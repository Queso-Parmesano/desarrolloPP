import { useState, useEffect } from 'react'
import './tableStockMat.css'

/*
    cosas pendientes :

    1.
    interactuar con el back para cargar los datos de la db

    litooo
    
    2.
    hacer el menu del boton de acciones y q este vinculado con a ese material
    ete no
    
*/

function tableStockMat() {
    const [materiales, setMateriales] = useState([])

    useEffect(() => {
        const getDataTable = () => {
            fetch('https://friendly-fiesta-6p9p5ww956v34gqw-3000.app.github.dev/tableStockMat',{ credentials: 'include' })
            .then(res => res.json())
            .then(data => setMateriales(data))
        }
        getDataTable()
    }, [])

    return (
        <div className="mainSection">
            <div className="tablaMat-wrapper">
                <table className="tablaMat">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Proveedor</th>
                            <th>Cantidad</th>
                            <th>Precio x UN</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            materiales.length == 0 
                            ?
                            <tr>
                                <th colSpan={6}>No existen materiales en el deposito</th>
                            </tr>
                            :
                            materiales.map((c, i) => {
                                return(
                                <tr key={i}>
                                    <td>{c.nombre}</td>
                                    <td>{c.descripcion}</td>
                                    <td>{c.proveedor}</td>
                                    <td>{c.cantidad}</td>
                                    <td>{c.precioXUn}</td>
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
