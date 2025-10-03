import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './menuPanel.css'

function menuPanel({ rol, setSection }) {
    const navigate = useNavigate()
    const [buttons, setButtons] = useState([true, false, false, false, false, false])

    const changeSelected = (x) => {
        setButtons(butt => butt.map((_, i) => i === x))
        setSection(x)
    }

    const logOut = () => {
        fetch('https://friendly-fiesta-6p9p5ww956v34gqw-3000.app.github.dev/logout', {
            method: 'POST',
            credentials: 'include'
        })
            .then(response => {
                if (response.ok) {
                    navigate('/login')
                }
            }
            )
    }

    return (
        <div className="menuPanel">
            <div className="sectionMenu">

                <button className={buttons[0] ? "opcionMenu active" : "opcionMenu"} onClick={() => changeSelected(0)}>Perfil</button>

                <button className={buttons[1] ? "opcionMenu active" : "opcionMenu"} onClick={() => changeSelected(1)}>Ver stock de mat. primas</button>

                <button className={buttons[2] ? "opcionMenu active" : "opcionMenu"} onClick={() => changeSelected(2)}>Ver stock de prendas</button>

                <button className={buttons[3] ? "opcionMenu active" : "opcionMenu"} onClick={() => changeSelected(3)}>Gestion de pedidos</button>

                <button className={buttons[4] ? "opcionMenu active" : "opcionMenu"} onClick={() => changeSelected(4)}>Configuración</button>

                {
                    rol === "admin"
                    &&
                    (
                        <button className={buttons[5] ? "opcionMenu active" : "opcionMenu"} onClick={() => changeSelected(5)}>Más Opciones</button>
                    )
                }

            </div>

            <div className="sectionLogout">
                <button className="logOut" onClick={logOut}>Cerrar sesion</button>
            </div>
        </div >

    )

}

export default menuPanel
