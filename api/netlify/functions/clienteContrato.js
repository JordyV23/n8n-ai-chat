import data from "../../clientes.json";

export async function handler(event, context) {
  const idContrato = event.queryStringParameters?.idContrato;
  let clienteEncontrado = null;

  for (const cliente of data.clientes) {
    const servicio = cliente.servicios.find((s) => s.idContrato === idContrato);
    if (servicio) {
      clienteEncontrado = { ...cliente, servicio };
      break;
    }
  }

  if (clienteEncontrado) {
    return JSON.stringify(clienteEncontrado);
  } else {
    return JSON.stringify({ mensaje: "Contrato no encontrado" });
  }
}
