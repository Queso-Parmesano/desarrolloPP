import UsuariosInv from '../database/models/UsuariosInv.js'
import PedidosMat from '../database/models/PedidosMat.js'
import Materiales from '../database/models/StockMat.js'
import Productos from '../database/models/StockInv.js'
import express from 'express'
const router = express.Router()

router.get('/userPanel', async (req, res) => {

    const result = await UsuariosInv.findAll({
        where: {
            idUserInv: req.user.idUser,
        },
    })

    const inicial = result[0].dataValues.username.charAt(0).toUpperCase()
    const nombre = result[0].dataValues.username
    const dni = result[0].dataValues.dni


    return res.status(200).json({
        inicial: inicial,
        nombre: nombre,
        dni: dni,
        rol: req.user.rol
    })

})

router.get('/tableStockMat', async (req, res) => {

    const results = await Materiales.findAll({})

    const data = []

    results.map((_, i) => {
        data.push(results[i].dataValues)
    })

    return res.status(200).json(data)

})

router.get('/tableStockInv', async (req, res) => {

    const results = await Productos.findAll({})

    const data = []

    results.map((_, i) => {
        data.push(results[i].dataValues)
    })

    return res.status(200).json(data)

})

router.get('/pedidosMatPrima', async (req, res) => {
    const results = await PedidosMat.findAll({
        include : [{
            model: Materiales,
            attributes: ['nombre', 'descripcion', 'precioXUn']
        }]
    })

    const data = []

    results.map((_, i) => {
        data.push(results[i].dataValues)
    })

    return res.status(200).json(data)

})

export default router
