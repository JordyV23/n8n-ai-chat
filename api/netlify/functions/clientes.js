import data from "../../clientes.json";

export async function handler(event, context) {
  return JSON.stringify(data.clientes);
}
