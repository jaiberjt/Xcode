// Manejo del formulario de registro de productos
document.getElementById("form-registro-producto").addEventListener("submit", function (e) {
    e.preventDefault();
    const producto = {
      codigo: document.getElementById("codigo-producto").value,
      descripcion: document.getElementById("descripcion").value,
      proveedor: document.getElementById("proveedor").value,
      unidadMedida: document.getElementById("unidad-medida").value,
      especificaciones: document.getElementById("especificaciones").value,
    };
  
    // Guardar en localStorage
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
  
    alert("Producto registrado con éxito.");
    this.reset();
  });
  