const Usuarios = require("../models/user.models");
const usuarioService = require("../services/user.service");

// Crear un nuevo usuario
const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await usuarioService.crearUsuario(req.body);
    res.status(201).json({
      exito: true,
      mensaje: "Usuario creado con éxito",
      datos: nuevoUsuario,
    });
  } catch (error) {
    res.status(404).json({
      exito: false,
      mensaje: "Error al crear el usuario",
      error: error.message,
    });
  }
};
// Obtener todos los usuarios
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioService.obtenerUsuarios();
    res.status(200).json({
      exito: true,
      mensaje: "Lista de usuarios",
      datos: usuarios,
    });
  } catch (error) {
    res.status(404).json({
      exito: false,
      mensaje: "Error al obtener los usuarios",
      error: error.message,
    });
  }
};

// Obtener un usuario por ID
const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await usuarioService.obtenerUsuarioPorId(req.params.id);
    res.status(200).json({
      exito: true,
      mensaje: "Usuario encontrado",
      datos: usuario,
    });
  } catch (error) {
    res.status(404).json({
      exito: false,
      mensaje: "Error al obtener el usuario",
      error: error.message,
    });
  }
};

// Actualizar un usuario existente 
const actualizarUsuario = async (req, res) => {
  try {
    const usuarioActualizado = await usuarioService.actualizarUsuario(
      req.params.id,
      req.body
    );
    res.status(200).json({
      exito: true,
      mensaje: "Usuario actualizado con éxito",
      datos: usuarioActualizado,
    });
  } catch (error) {
    res.status(404).json({
      exito: false,
      mensaje: "Error al actualizar el usuario",
      error: error.message,
    });
  }
};

//Eliminar un usuario
 const eliminarUsuario = async (req, res) => {
  try {
     const usuarioEliminado = await usuarioService.eliminarUsuario(req.params.id);
    res.status(200).json({
      exito: true,
      mensaje: "Usuario eliminado con éxito",
      datos: usuarioEliminado,
    });
  } catch (error) {
    res.status(404).json({
      exito: false,
      mensaje: "Error al eliminar el usuario",
      error: error.message,
    
    });
  }
 }
module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
};
