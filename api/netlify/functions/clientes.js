import data from "../../clientes.json";

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: data.clientes
  };
}
