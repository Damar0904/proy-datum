const express = require("express");
const connectDB = require("./config/database");
const usuarioRoutes = require("./routes/user.routes");

//Inicializar express
const app = express();

//Middleware para parsear el cuerpo de las peticiones
app.use(express.json());
//Conectar a la base de datos
connectDB();
// Definir las rutas
app.get("/", (req, res) => {
  res.send("Hello a la API de usuarios!");
  // console.dir(req, { depth:null, colors:true });
  console.log(
    "Esta es la REQ, que nos envia el cliente" +
      JSON.stringify(req.body, null, 2)
  );
});

// Rutas de usuarios
app.use("/api/usuarios", usuarioRoutes);

// iniciar el servidor
const PORT = 3000;

app.listen(PORT, () => {
  //console.log(`Server is running en  http://localhost:${PORT}`);
  console.log("Server is running on http://localhost:", PORT);
});

/* import express from 'express';

const express = require('express');

const app = express();
app.use(express.json());



app.get('/', (req, res) => {
  res.json("Hello World!");
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
 */
