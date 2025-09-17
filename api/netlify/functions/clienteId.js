import data from "../../clientes.json";

export async function handler(event, context) {
  const id = parseInt(event.queryStringParameters?.id);
  const cliente = data.clientes.find(c => c.id === id);

  if (cliente) {
    return { statusCode: 200, body: JSON.stringify(cliente) };
  } else {
    return { statusCode: 404, body: JSON.stringify({ mensaje: "Cliente no encontrado" }) };
  }
}
