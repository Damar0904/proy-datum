const express = require('express');

const {
    crearUsuario,
    obtenerUsuarioPorId,
    obtenerUsuarios,
    actualizarUsuario,
    eliminarUsuario,
} = require('../controllers/user.controllers');

const router = express.Router();

// Rutas para crear un nuevo usuario
router.post('/crear', crearUsuario);
// Rutas para obtener todos los usuarios
router.get('/', obtenerUsuarios);
// Rutas para obtener un usuario por ID ESPECIFICO
router.get("/:id", obtenerUsuarioPorId);
// Rutas para actualizar un usuario existente
router.put("/:id", actualizarUsuario)
// Rutas para eliminar un usuario existente
router.delete("/:id", eliminarUsuario)
module.exports = router;