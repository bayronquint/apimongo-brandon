const Ancheta = require('../models/anchetas')
const bcrypt = require('bcrypt')

//METODO GET
const getAncheta = async (req, res) => {
    const ancheta = await Ancheta.find()
    res.json({
        msg: 'GET API Anchetas',
        ancheta
    })
}

//METODO POST
const postAncheta = async (req, res) => {
    const { nombre, insumos, precio, estado } = req.body

    const ancheta = new Ancheta({ nombre, insumos, precio, estado })

    await ancheta.save()

    res.json({
        msg: 'POST API Anchetas',
        ancheta
    })
}

//METODO PUT
const putAncheta = async (req, res) => {
    const { nombre, nombrenew, insumos, precio, estado } = req.body
    const ancheta = await Ancheta.findOneAndUpdate({ nombre: nombre },{nombre: nombrenew,insumos:insumos,precio:precio,estado:estado})
    
    res.json({
        msg: "PUT API Ancheta",
        ancheta
    })
}

//METODO DELETE
const deleteAncheta = async (req, res) => {
    const { nombre } = req.query

    const ancheta = await Ancheta.findOneAndDelete({ nombre: nombre })

    res.json({
        msg: 'DELETE API Ancheta',
        ancheta
    })
}

module.exports = {
    getAncheta,
    postAncheta,
    putAncheta,
    deleteAncheta
}
