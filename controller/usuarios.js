const Usuario = require('../models/usuarios')
const bcrypt = require('bcrypt')

//METODO GET
const getUsuario = async (req, res) => {

    const usuarios = await Usuario.find()//Consultar todos los documentos
    res.json({
        msg: 'GET API Usuario',
        usuarios
    })
}

//METODO POST
const postUsuario = async (req, res) => {
    //Desestructuración
    const { nombre, correo, password, rol, estado } = req.body
    //Recibir parametros y desestructurarlos
    //Instanciar el objeto con los parametros y recibirlos
    const usuario = new Usuario({ nombre, correo, password, rol, estado })

    usuario.password=bcrypt.hashSync(password,10)


    await usuario.save()//Guardar en la base de datos

    res.json({
        msg: 'POST API Usuario',
        usuario
    })
}

//METODO PUT
const putUsuario = async (req, res) => {
    //Desestructuracion
    const { nombre, correo, password, rol, estado } = req.body
    const usuario = await Usuario.findOneAndUpdate({ nombre: nombre },{correo:correo,password:bcrypt.hashSync(password,10),rol:rol,estado:estado})
    
    res.json({
        msg: "PUT API Usuario",
        usuario
    })
}


//METODO DELETE
const deleteUsuario = async (req, res) => {
    const { correo } = req.query

    const usuario = await Usuario.findOneAndDelete({ correo: correo })
    res.json({
        msg: 'DELETE API Usuario',
        usuario
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario

}
