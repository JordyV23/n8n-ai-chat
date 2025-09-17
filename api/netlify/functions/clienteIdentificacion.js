import data from "../../clientes.json";

export async function handler(event, context) {
  const identificacion = event.queryStringParameters?.identificacion;
  const cliente = data.clientes.find(
    (c) => c.identificacion === identificacion
  );

  if (cliente) {
    return { statusCode: 200, body: cliente };
  } else {
    return { statusCode: 404, body: { mensaje: "Cliente no encontrado" } };
  }
}
