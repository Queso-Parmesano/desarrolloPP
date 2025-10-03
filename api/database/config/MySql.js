import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const passwordDB = process.env.passwordDB
const nameDB = process.env.nameDB
const userDB = process.env.userDB
const hostDB = process.env.hostDB

console.log()

const sequelize = new Sequelize(nameDB, userDB, passwordDB, {
    host: hostDB,
    dialect: 'mysql',
    logging: false,
    timezone: '-03:00'
})

export default sequelize