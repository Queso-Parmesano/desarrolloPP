import PedidosMatPrima from '../../Components/gestionPedidos/Components/pedidosMatPrima'
import LoadMatPrima from '../../Components/gestionPedidos/Components/loadMatPrima'
import TableStockPrendas from '../../Components/tablaPrendas'
import GestionPedidos from '../../Components/gestionPedidos'
import TableStockMat from '../../Components/tableStockMat'
import MenuPanel from '../../Components/menuPanel'
import UserPanel from '../../Components/userPanel'
import { useState } from 'react'
import './Panel.css'

function Panel({rol}){
    const [sectionSelect, setSection] = useState(0)

    return (
        <main>
            <MenuPanel rol={rol} setSection={setSection}/>
            <div className='panelMain'>
                {sectionSelect === 0 && <UserPanel/>}
                {sectionSelect === 1 && <TableStockMat/>}
                {sectionSelect === 2 && <TableStockPrendas />}
                {sectionSelect === 3 && <GestionPedidos setSection={setSection}/>}
                {sectionSelect === 4 && <h2>Panel de Configuracion</h2>}
                {sectionSelect === 5 && <h2>Panel de Admin</h2>}
                {sectionSelect === 6 && <PedidosMatPrima/>}
                {sectionSelect === 7 && <LoadMatPrima/>}
                {sectionSelect === 8 && <h2>Panel de Admin</h2>}
            </div>
        </main>
    )
}

export default Panel
