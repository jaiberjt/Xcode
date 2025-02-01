// Datos iniciales
const existencias = [
    { producto: "Producto A", cantidad: 100, ubicacion: "Zona 1", vencimiento: "2025-01-01" },
    { producto: "Producto B", cantidad: 50, ubicacion: "Zona 2", vencimiento: "2024-12-01" },
  ];
  
  // Renderizar tabla
  function renderTablaExistencias() {
    const tabla = document.getElementById("tabla-existencias");
    tabla.innerHTML = "";
    existencias.forEach((item, index) => {
      const row = `
        <tr>
          <td>${item.producto}</td>
          <td><input type="number" value="${item.cantidad}" class="form-control" /></td>
          <td>${item.ubicacion}</td>
          <td>${item.vencimiento}</td>
          <td><button class="btn btn-success" onclick="guardarCambios(${index})">Guardar</button></td>
        </tr>
      `;
      tabla.innerHTML += row;
    });
  }
  
  function guardarCambios(index) {
    const cantidad = document.querySelectorAll("#tabla-existencias input")[index].value;
    existencias[index].cantidad = parseInt(cantidad, 10);
    alert("Cantidad actualizada con éxito.");
  }
  
  renderTablaExistencias();
  