const { Router } = require('express')
const router = Router() //Obtener la función Router
const { check } = require('express-validator')

const { getInsumo,postInsumo,putInsumo,deleteInsumo  } = require('../controller/insumos')
const { validarCampos } = require('../middelewares/validar-campos')

router.get('/',getInsumo)
router.post('/', [
    check('nombre', 'El nombre es obligatorio!!').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria!!').not().isEmpty(),
    validarCampos
],
postInsumo)

router.put('/',[
    check('nombre','Debe agregar un nombre para modificar').not().isEmpty(),
    validarCampos
],
putInsumo)

router.delete('/',deleteInsumo)

module.exports = router