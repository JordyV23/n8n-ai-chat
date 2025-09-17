import data from "../../clientes.json";

export async function handler(event, context) {
  const id = parseInt(event.queryStringParameters?.id);
  const cliente = data.clientes.find((c) => c.id === id);

  if (cliente) {
    return JSON.stringify(cliente);
  } else {
    return JSON.stringify({ mensaje: "Cliente no encontrado" });
  }
}
