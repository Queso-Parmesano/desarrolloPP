import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"

function ProtectedRoute({ children, rolAuthorizated }) {
    const [rol, setRol] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {

        const checkAuth = async () => {
            
            await fetch('https://friendly-fiesta-6p9p5ww956v34gqw-3000.app.github.dev/check-auth', { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                const authorization = rolAuthorizated.includes(data.rol)
                setRol(data.rol)
                if(!authorization){
                    navigate("/login")
                }
            })
        }
        checkAuth()
    }, [rol]);

    return children(rol);
}

export default ProtectedRoute;
