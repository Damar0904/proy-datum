const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const usuariosSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
    unique: true,
    match: [/\S+@\S+\.\S+/, "El email no tiene un formato válido"],
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
    minlength: [8, "La contraseña debe tener al menos 8 caracteres"],
    select: false, //NO devolver la contraseña en las consultas
    validate: {
      validator: function (valor) {
        // Requisitos de complejidad: mínimo 8 caracteres, al menos 1 letra y 1 número
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(valor);
      },
      message:
        "La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra y un número",
    },
  },
  edad: {
    type: Number,
    required: [true, "La edad es obligatoria"],
    min: 18,
    max: 99,
  },
  estado: {
    type: Boolean,
    default: true,
  },

  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

// Antes de guardar, hacer hash de la contraseña
usuariosSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); // Solo si la contraseña fue modificada o nueva
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

const Usuarios = mongoose.model("Usuario", usuariosSchema);
module.exports = Usuarios;