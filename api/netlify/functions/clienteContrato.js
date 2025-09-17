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
    return { statusCode: 200, body: clienteEncontrado };
  } else {
    return { statusCode: 404, body: { mensaje: "Contrato no encontrado" } };
  }
}
