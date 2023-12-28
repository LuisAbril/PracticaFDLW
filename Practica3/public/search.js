document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const listaResultados = document.getElementById('listaResultados');

    // Lista de productos (simulación)
    const productos = [Producto1, producto2, producto3];

    // Función para mostrar los resultados filtrados
    function mostrarResultados(filtro) {
        const resultadosFiltrados = productos.filter(producto =>
            producto.toLowerCase().includes(filtro.toLowerCase())
        );

        // Limpiar lista de resultados
        listaResultados.innerHTML = '';

        // Mostrar resultados filtrados en la lista
        resultadosFiltrados.forEach(resultado => {
            const li = document.createElement('li');
            li.textContent = resultado;
            listaResultados.appendChild(li);
        });
    }

    // Evento al escribir en el campo de búsqueda
    searchInput.addEventListener('input', function (event) {
        const textoBusqueda = event.target.value;
        mostrarResultados(textoBusqueda);
    });
});
