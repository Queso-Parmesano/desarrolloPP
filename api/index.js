import { Pedidos, RegistroAcciones, Roles, StockInv, Usuarios, UsuariosInv, StockMat, UserPerfil } from './database/Relaciones.js'
import tokenValidation from './middleware/tokenValidation.js'
import insertDataInDB from './database/insertDataDb.js'
import sequelize from './database/config/MySql.js'
import LoginRoute from './routes/accessManager.js'
import onlyAdmin from './middleware/onlyAdmin.js'
import FrontendRoute from './routes/frontend.js'
import ActionsRoutes from './routes/actions.js'
import AdminRoutes from './routes/admin.js'
import cookieParser from 'cookie-parser'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const port = 3000
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: "https://friendly-fiesta-6p9p5ww956v34gqw-5173.app.github.dev",
    credentials: true
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://friendly-fiesta-6p9p5ww956v34gqw-5173.app.github.dev");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

async function initSQLDatabase() {
    await sequelize.authenticate()
    await sequelize.sync({ force: true })
}

console.clear()

await initSQLDatabase()
.then(async () => {
    console.log('Database connection established successfully!')
    await insertDataInDB()
})
.catch((err) => console.log(err))

//app.use(getToken) // uso de middleware global para verificar token en todas las rutas

app.use(LoginRoute)

app.use('/frontend', tokenValidation, FrontendRoute)

app.use('/admin', onlyAdmin, AdminRoutes)

app.use('/actions', ActionsRoutes)

app.listen(port, () => console.log(`API listening at http://localhost:${port}`))
