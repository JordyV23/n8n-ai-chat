import data from "../../clientes.json";

export async function handler(event, context) {
  const id = parseInt(event.queryStringParameters?.id);
  const cliente = data.clientes.find(c => c.id === id);

  if (cliente) {
    return { statusCode: 200, body: cliente };
  } else {
    return { statusCode: 404, body: { mensaje: "Cliente no encontrado" } };
  }
}
