const {Schema, model}= require('mongoose')

const InsumosSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    precio: {
        type: Number,
        required: [true, 'Campo obligatorio']
    },
    estado: {
        type: Boolean,
        defaul: true
    }
})

module.exports = model('insumos', InsumosSchema)