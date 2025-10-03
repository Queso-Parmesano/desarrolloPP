import { useState, useEffect } from 'react'
import './loadMatPrima.css'

function loadMatPrima() {

    return (
        <div className='mainSection'>
            <div className='formSection'>

                <h1>Creacion de usuario</h1>
                <form className='registerForm' action="">
                    <div>
                        <label htmlFor="">Nombres</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Apellidos</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Usuario</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Contraseña</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Telefono</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Correo</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Rol</label>
                        <select name="" id="">
                            <option value="">Team</option>
                            <option value="">Admin</option>
                        </select>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>

        </div>
    )

}

export default loadMatPrima
