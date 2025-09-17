import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

// Leer archivo JSON
const rawData = fs.readFileSync("clientes.json");
const data = JSON.parse(rawData);

// Obtener todos los clientes
app.get("/clientes", (req, res) => {
  res.json(data.clientes);
});

// 🔎 Búsqueda por ID de cliente
app.get("/clientes/id/:id", (req, res) => {
  const cliente = data.clientes.find(c => c.id === parseInt(req.params.id));
  cliente ? res.json(cliente) : res.status(404).json({ mensaje: "Cliente no encontrado" });
});

// 🔎 Búsqueda por identificación (cédula u otro identificador único)
app.get("/clientes/identificacion/:identificacion", (req, res) => {
  const cliente = data.clientes.find(c => c.identificacion === req.params.identificacion);
  cliente ? res.json(cliente) : res.status(404).json({ mensaje: "Cliente no encontrado" });
});

// 🔎 Búsqueda por nombre de cliente (case-insensitive)
app.get("/clientes/nombre/:nombre", (req, res) => {
  const nombre = req.params.nombre.toLowerCase();
  const clientes = data.clientes.filter(c => c.nombre.toLowerCase().includes(nombre));
  clientes.length > 0 ? res.json(clientes) : res.status(404).json({ mensaje: "Cliente no encontrado" });
});

// 🔎 Búsqueda por contrato
app.get("/clientes/contrato/:idContrato", (req, res) => {
  const contrato = req.params.idContrato;
  let clienteEncontrado = null;

  for (const cliente of data.clientes) {
    const servicio = cliente.servicios.find(s => s.idContrato === contrato);
    if (servicio) {
      clienteEncontrado = { ...cliente, servicio };
      break;
    }
  }

  clienteEncontrado ? res.json(clienteEncontrado) : res.status(404).json({ mensaje: "Contrato no encontrado" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
