import express from 'express'
const router = express.Router()

router.post('/loadPedidoMat', async (req, res) => {
    const { idMaterial, cantidad, estado } = req.body

    try {
        await PedidosMat.create({
            idMat: idMaterial,
            cantidad: cantidad,
            estado: estado
        })
        return res.status(200).json({ message: 'Pedido creado correctamente' })
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el pedido' })
    }
    
})

export default router
