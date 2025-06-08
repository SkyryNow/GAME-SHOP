  function filtrarProductos() {
    const input = document.getElementById('busqueda');
    const filtro = input.value.toLowerCase();
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
      const texto = producto.innerText.toLowerCase();
      producto.style.display = texto.includes(filtro) ? 'block' : 'none';
    });
  }