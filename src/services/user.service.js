const Usuario = require("../models/user.models");

//create user
const crearUsuario = async (usuarioData) => {
  try {
    const usuario = new Usuario(usuarioData);
    return await usuario.save();
  } catch (error) {
    //Manejo de validaciones del modelo de usuario
    if (error.name === "ValidationError") {
      const errores = Object.values(error.errors).map((err) => err.message);
      throw new Error(errores.join(", "));
    }

    // Manejo de duplicidad de correo electrónico
    if (error.code === 11000) {
        const campoDuplicado = Object.keys(error.keyPattern)[0];
        throw new Error(`${campoDuplicado} ya está registrado`);
      }
    console.error("Error al crear el usuario:", error);
    //Manejo de error interno de servidor
    throw new Error("Error interno al crear el usuario");
  }
};

//obtener todos los usuarios
const obtenerUsuarios = async () => {
  try {
    return await Usuario.find();
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    //Manejo de error interno de servidor
    throw new Error("Error interno al obtener los usuarios");
  }
};

//obtener un usuario por id
const obtenerUsuarioPorId = async (id) => {
  try {
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }
    return usuario;
  } catch (error) {
    console.error("Error al obtener el usuario por ID:", error);
    // Manejo de usuario no encontrado
    throw new Error(error.message || "Error interno al obtener el usuario");
  }
};

//actualizar un usuario existente
const actualizarUsuario = async (id, datosActualizados) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      datosActualizados,
      { new: true, runValidators: true }
    );
    if (!usuarioActualizado) {
      throw new Error ("Usuario no encontrado");
    }
    return usuarioActualizado;
  } catch (error) {
    // Manejo de validaciones del modelo de usuario
    if (error.name === "ValidationError") {
        const errores = Object.values(error.errors).map((err) => err.message);
        throw new Error(errores.join(", "));
      }

    console.error("Error al actualizar el usuario:", error);
    //Manejo de error interno de servidor
    throw new Error("Error interno al actualizar el usuario");
  }
};

//eliminar un usuario
const eliminarUsuario = async (id) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    if (!usuarioEliminado) {
      throw new Error ("Usuario no encontrado");
    }
    return usuarioEliminado;
  } catch (error) {
    console.error("Error al eliminar el usuario: " + id, error);
    //Manejo de error interno de servidor
    throw new Error("Error interno al eliminar el usuario");
  }
};

//exportar los servicios
module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
};
