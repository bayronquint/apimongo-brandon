const { response } = require('express')
const Insumos = require('../models/insumos')

//METODO GET
const getInsumo = async (req, res) => {

    const insumos = await Insumos.find()//Consultar todos los documentos
    res.json({
        msg: 'GET API Insumos',
        insumos
    })
}

//METODO POST
const postInsumo = async (req, res) => {
    //Desestructuración
    const { nombre, descripcion, precio, estado } = req.body
    const insumo = new Insumos({ nombre, descripcion, precio, estado })
    await insumo.save()//Guardar en la base de datos
    res.json({
        msg: 'POST API Insumos',
        insumo
    })
}

//METODO PUT
const putInsumo = async (req, res) => {
    //Desestructuracion
    const { nombre, nombreNew, descripcion, precio, estado } = req.body
    const insumo = await Insumos.findOneAndUpdate({ nombre: nombre },{nombre:nombreNew,descripcion:descripcion,precio:precio,estado:estado})
    
    res.json({
        msg: "PUT API Insumos",
        insumo
    })
}


//METODO DELETE
const deleteInsumo = async (req, res) => {
    const { nombre } = req.query

    const insumo = await Insumos.findOneAndDelete({ nombre: nombre })

    res.json({
        msg: 'DELETE API Insumos',
        insumo
    })
}

module.exports = {
    getInsumo,
    postInsumo,
    putInsumo,
    deleteInsumo
}
