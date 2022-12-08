const { Router } = require('express')
const router = Router() //Obtener la función Router
const { check } = require('express-validator')

const { getAncheta,postAncheta,putAncheta,deleteAncheta  } = require('../controller/anchetas')
const { validarCampos } = require('../middelewares/validar-campos')

router.get('/',getAncheta)
router.post('/', [
    check('nombre', 'El nombre es obligatorio!!').not().isEmpty(),
    check('insumos', 'Los productos son obligatorios!!').not().isEmpty(),
    validarCampos
],
postAncheta)

router.put('/',[
    check('nombre','Debe ingresar un nombre para modificar').not().isEmpty(),
    validarCampos
],
putAncheta)

router.delete('/',deleteAncheta)

module.exports = router