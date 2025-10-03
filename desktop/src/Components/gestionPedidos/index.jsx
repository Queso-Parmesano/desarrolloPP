import './gestionPedidos.css'

function gestionPedidos({ setSection }) {

    const setMain = (x) =>{
        setSection(x)
    }

    return (
        <div className='mainSection'>
            <div className='sectionBotones'>
                <div className='sectionVer'>
                    <button onClick={() => setMain(6)}>Ver pedidos de Materia Prima</button>
                </div>
                <div className='sectionNuevo'>
                    <button onClick={() => setMain(7)}>Cargar Materia Prima nueva</button>
                    <button onClick={() => setMain(8)}>Cargar pedido nuevo de Mat. Prima</button>
                </div>
            </div>
        </div>
    )

}

export default gestionPedidos
