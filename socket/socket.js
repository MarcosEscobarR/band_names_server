const {io} = require('../index')
//mensajes del socket
io.on("connection", (client) => {
  let nombre;
  client.on("disconnect", (data) => console.log("Cliente desconectado"));

  client.on("mensaje", (payload) => {
    nombre = payload.nombre;
    console.log("mensaje", payload);

    io.emit("mensaje", { admin: nombre });

  });
});