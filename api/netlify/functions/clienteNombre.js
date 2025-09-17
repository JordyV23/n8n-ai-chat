import data from "../../clientes.json";

export async function handler(event, context) {
  const nombre = event.queryStringParameters?.nombre?.toLowerCase() || "";
  const clientes = data.clientes.filter((c) =>
    c.nombre.toLowerCase().includes(nombre)
  );

  if (clientes.length > 0) {
    return { statusCode: 200, body: clientes };
  } else {
    return { statusCode: 404, body: { mensaje: "Cliente no encontrado" } };
  }
}
