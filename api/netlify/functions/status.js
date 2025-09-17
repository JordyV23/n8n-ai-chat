import data from "../../clientes.json";

export async function handler(event, context) {
  // Cantidad de clientes y servicios
  const totalClientes = data.clientes.length;
  const totalServicios = data.clientes.reduce(
    (acc, cliente) => acc + cliente.servicios.length,
    0
  );

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "ok",
      message: "La API está corriendo",
      totalClientes,
      totalServicios,
      uptime: Math.floor(process.uptime()), // segundos que lleva activo el proceso
      timestamp: new Date().toISOString()
    })
  };
}
