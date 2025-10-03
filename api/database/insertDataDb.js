import UsuariosInv from './models/UsuariosInv.js'
import StockInv from './models/StockInv.js'
import PedidosMat from './models/PedidosMat.js'
import StockMat from './models/StockMat.js'
import Roles from './models/Roles.js'

async function insertDataInDB() {

    await Roles.create({nombre: 'admin'}) // idRol 1
    await Roles.create({nombre: 'team'}) // idRol 2
    
    await UsuariosInv.create({
        idRol: 2,
        username: 'team',
        password: 'team',
        nombres: 'Alberto',
        apellidos: 'Ronaldo',
        telefono: '1122334456',
        dni: 12345678,
        correo: 'team@gmail.com'
    })

    await UsuariosInv.create({
        idRol: 1,
        username: 'admin',
        password: 'admin',
        nombres: 'Joaco',
        apellidos: 'Cazon',
        telefono: '1122334455',
        dni: 12345679,
        correo: 'admin@gmail.com'
    })

    await StockInv.create({
        nombre: 'Producto 1',
        descripcion: 'Descripcion del producto 1',
        cantidad: 10,
        talle: 'M',
        precio: 1000.00,
        stockDisponible: 10,
        mostrar: 0
    })

    await StockInv.create({
        nombre: 'Producto 2',
        descripcion: 'Descripcion del producto 2',
        cantidad: 4,
        talle: 'L',
        precio: 1500.00,
        stockDisponible: 15,
        mostrar: 0
    })

    await StockInv.create({
        nombre: 'Producto 3',
        descripcion: 'Descripcion del producto 3',
        cantidad: 25,
        talle: 'S',
        precio: 500.00,
        stockDisponible: 4,
        mostrar: 0
    })

    await StockInv.create({
        nombre: 'Producto 4',
        descripcion: 'Descripcion del producto 4',
        cantidad: 10,
        talle: 'XL',
        precio: 2000.00,
        stockDisponible: 8,
        mostrar: 0
    })

    await StockMat.create({
        nombre: 'materia prima1',
        descripcion: 'materia prima1',
        proveedor: 'albertitoTelas1',
        cantidad: 25,
        precioXUn: 15000.00
    })
    
    await StockMat.create({
        nombre: 'materia prima2',
        descripcion: 'materia prima2',
        proveedor: 'albertitoTelas2',
        cantidad: 20,
        precioXUn: 105000.00
    })

    await StockMat.create({
        nombre: 'materia prima3',
        descripcion: 'materia prima3',
        proveedor: 'albertitoTelas3',
        cantidad: 10,
        precioXUn: 1000.00
    })

    await PedidosMat.create({
        idMat: 1,
        cantidad: 10,
        estado: 'No salio',
        llegadaEstimada: new Date('2024-07-20')
    })

    await PedidosMat.create({
        idMat: 2,
        cantidad: 15,
        estado: 'Despachado',
        llegadaEstimada: new Date('2024-07-15')
    })

}

export default insertDataInDB
