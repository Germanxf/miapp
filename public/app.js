document.addEventListener('DOMContentLoaded', async () => {
  const contenedor = document.getElementById('productos');

  try {
    const res = await fetch('/api/productos');
    const productos = await res.json();

    if (!Array.isArray(productos) || productos.length === 0) {
      contenedor.innerHTML = "<p>No hay productos disponibles.</p>";
      return;
    }

    productos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.innerHTML = `
        <img src="${producto.image}" alt="${producto.name}">
        <p><strong>${producto.name}</strong></p>
        <p>${producto.description}</p>
        <p class="precio">$${producto.price}</p>
        <div class="botones">
          <button class="boton-detalles">Detalles</button>
          <button class="boton-agregar">Agregar</button>
        </div>
      `;
      contenedor.appendChild(div);
    });
  } catch (error) {
    contenedor.innerHTML = "<p>Error cargando productos.</p>";
    console.error('Error:', error);
  }
});

