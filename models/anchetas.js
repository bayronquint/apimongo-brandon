const {Schema, model}= require('mongoose')

const AnchetaSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    insumos: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    precio: {
        type: Number,
        required: [true, 'Campo obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    }
})

module.exports = model('anchetas', AnchetaSchema)