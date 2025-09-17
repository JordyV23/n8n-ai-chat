import data from "../../clientes.json";

export async function handler(event, context) {
  const nombre = event.queryStringParameters?.nombre?.toLowerCase() || "";
  const clientes = data.clientes.filter((c) =>
    c.nombre.toLowerCase().includes(nombre)
  );

  if (clientes.length > 0) {
    return JSON.stringify(clientes);
  } else {
    return JSON.stringify({ mensaje: "Cliente no encontrado" });
  }
}
