document.addEventListener('DOMContentLoaded', () => {
  const datos = JSON.parse(localStorage.getItem('datosCompra'));
  const productos = JSON.parse(localStorage.getItem('carritoResumen'));
  const codigoPedido = localStorage.getItem('codigoPedido');

  if (datos && productos) {
    document.getElementById('res-nombre').textContent = datos.nombre;
    document.getElementById('res-direccion').textContent = datos.direccion;
    document.getElementById('res-telefono').textContent = datos.telefono;
    document.getElementById('res-correo').textContent = datos.correo;

    // Mostrar método de pago más amigable
    let metodoTexto = '';
    switch (datos.metodoPago) {
      case 'tarjeta': metodoTexto = 'Tarjeta de crédito/débito'; break;
      case 'paypal': metodoTexto = 'PayPal'; break;
      case 'transferencia': metodoTexto = 'Transferencia bancaria'; break;
      case 'contra-entrega': metodoTexto = 'Pago contra entrega'; break;
      case 'qr': metodoTexto = 'Pago con código QR'; break;
      default: metodoTexto = 'No especificado';
    }
    document.getElementById('res-metodo-pago').textContent = metodoTexto;

    // Antes de crear, eliminar si ya existe (para evitar duplicados)
    const viejoCodigo = document.getElementById('codigo-pedido-container');
    if (viejoCodigo) viejoCodigo.remove();

    // Mostrar código pedido solo si existe y es pago QR
    if (datos.metodoPago === 'qr' && codigoPedido) {
      const contenedor = document.createElement('p');
      contenedor.id = 'codigo-pedido-container';
      contenedor.innerHTML = `<strong>Código del pedido:</strong> <span>${codigoPedido}</span>`;
      const metodoPagoElem = document.getElementById('res-metodo-pago');
      metodoPagoElem.parentNode.insertBefore(contenedor, metodoPagoElem.nextSibling);
    }

    let total = 0;
    const lista = document.getElementById('res-productos');
    productos.forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${p.nombre} - Bs ${p.precio.toFixed(2)}`;
      lista.appendChild(li);
      total += p.precio;
    });

    document.getElementById('res-total').textContent = total.toFixed(2);
  }
});
