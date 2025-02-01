document.addEventListener("DOMContentLoaded", () => {
  // Obtener el último proveedor registrado
  const proveedores = JSON.parse(localStorage.getItem("proveedores")) || [];
  const ultimoProveedor = proveedores[proveedores.length - 1];

  // Seleccionar el contenedor para mostrar la información
  const proveedorInfo = document.getElementById("proveedor-info");

  if (ultimoProveedor) {
    proveedorInfo.innerHTML = `
      <p><strong>Nombre:</strong> ${ultimoProveedor.nombre}</p>
      <p><strong>Dirección:</strong> ${ultimoProveedor.direccion}</p>
      <p><strong>Teléfono:</strong> ${ultimoProveedor.telefono}</p>
      <p><strong>Correo Electrónico:</strong> ${ultimoProveedor.correo}</p>
      <p><strong>Productos que Suministra:</strong> ${ultimoProveedor.productos}</p>
      <p><strong>Condiciones Comerciales:</strong> ${ultimoProveedor.condiciones}</p>
    `;
  } else {
    proveedorInfo.innerHTML = "Pat_inicio.html";
  }
});

  