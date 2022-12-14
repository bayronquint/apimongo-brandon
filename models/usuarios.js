const {Schema, model}= require('mongoose')

const UsuarioSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    rol:{
        type: String,
        required: [true, 'El rol es obligatoria'],
        enum: ['Admin', 'Asesor', 'Empleado']
    },
    estado: {
        type: Boolean,
        defaul: true
    }
})

module.exports = model('Usuario', UsuarioSchema)