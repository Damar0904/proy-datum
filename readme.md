# API REST básica para la gestión de usuarios 
Con operaciones CRUD (Crear, Leer, Actualizar y Eliminar) utilizando Node.js, Express y MongoDB

# Autor
Damar Taylor
dtaylor1est@gmail.com

# Arquitectura : una analogía con un Restaurante
 
1— Clientes (usuarios de ta API): Hacen pedidos a traves de la carta Cendpoints. 
2— Camareros (Funciones del controlador) : Reciben los pedidos de tos clientes, tos anotan y tos llevan a la cocina. Luego traen comida de vuelta a tos clientes. 
3— Cocineros (Funciones del servicio): los platos segun tas recetas. Tienen el conocimiento de cocinar cada 
plato. 
4- Recetas (Modelos): Definen debe ser cada plata, que ingredientes lleva y debe prepararse. 
5-Carta Del menu(Rutas): 
Lista de platos disponible y como pedirlos. 

6-Almacen (Base de datos): Donde se guardan todos los ingredientes y se registran los pdidos. 

# Como Funciona
Modelo (usuario) 
Es como la receta de un plato. Define que infomacion debe tener un usuario. 
-Nombre
-Emait 
-Edad
-Estado
—Fecha de creacion 

# Servicios (Funciones) 
Son Vas recetas espciÇicas para preparar cada plato: 
— CrearUsuario: Funcion para crear usuarios nuevos 
— obtenerusuarios : Funcion para buscar t"os los usuarios 
—obtenerUsuarioPorId: Funcion para buscar un usuario especifico 
— ActualizarUsuiario: Funcion para nodificar un usuario existente 
— eliminarUsuario : Funcion para eliminar usuario 

# Controladores (Funciones) 
Son cono las instrucciones para los caureros: 
—'crearusuario•: Recibe ta peticion, valida tos datos y pide al servicio que cree  el usuario 
— ObtenerUsuario: Pide al servicio la Vista de usuarios y la entrega al cliente 
—'obtenerusuarioporld' : Busca un usario especifico y Io entrega al cliente 
— Actualizarusuario : Recibe LOS cambios y le pide servicio que aplique 
—EliminarUsuario : Pide al servicio que elimine un usuario y confirna el resultado 

# Rutas (Exress Router)
Es como la carta del restaurante que muestra:
- `POST /api/usuarios`: Crear un nuevo usuario
- `GET /api/usuarios`: Obtener todos los usuarios
- `GET /api/usuarios/:id`: Obtener un usuario específico
- `PUT /api/usuarios/:id`: Actualizar un usuario existente
- `DELETE /api/usuarios/:id`: Eliminar un usuario


# ¿Que es un CRW? 
CRUD son tas siglas de Create (Crear) , Read (Leer), (Actualizar) y Delete (Elininar). 
Es administrar una biblioteca: 
— Create: Añadir un nuevo libro a biblioteca. 
— "Read: Consultar que libros hay o un Ubro espci6ico. 
— Update: Canbiar infomacion de un libro 
— Delete: Retirar un libro de ta biblioteca. 

# ¿Que es Rongoose? 
Moongose es un traductor entre Javascript y MongoDB
Inagina que habla un idioma (Documentos BSON) y tu aplicacion habla otro (Objetos js) 
Hongoose traduce entre ambos para que puedan entenderse. 

# Ques Async/A.ait? 
Es pedir conida para llevar: 
 — async :  Voy a hacer un pedido que tomara tiempo
- Await: Esperare aqui hasta que pedido este Listo

En tugar de quedarte esperando activanente, puedes hacer otras cosas mientras se prepara tu pedido, y cuando este listo te avisaran 

# Que es ta programacion funcional? 
La progranacion Funcional es cono una receta de cocina donde: 
— Cada paso esta claranente definido cono una funcion indeFndiente. 
— Cada Funci0n hace una Cosa y hace bien. 
— Las Funciones no canbian ingredientes que no les pertenences. 
— Puedes combinar funciones como si Fueran pasos de una receta. 

Por ejeplo en lugar de tener un Chef sabe hacer todo (una clase), tenemos especialistas para cada tarea (funciones): uno 
que corta las verduras, otro que prepara la salsa, otro que cocina la carne, etc. 

# Conclusion 
Este proyecto denuestra un basico siguiendo enfoque de programacion Funcional. 
Cada funcion tiene una responsabilidad unica y clara, IO que hace que el codigo Sea mas matenible, testeabte y de facil entender. 
