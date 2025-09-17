import data from "../../clientes.json";

export async function handler(event, context) {
  const identificacion = event.queryStringParameters?.identificacion;
  const cliente = data.clientes.find(
    (c) => c.identificacion === identificacion
  );

  if (cliente) {
    return JSON.stringify(cliente);
  } else {
    return;
    JSON.stringify({ mensaje: "Cliente no encontrado" });
  }
}
