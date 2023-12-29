
function waitingSearch(input) {
    var typingTimer;
    var endTypingTimer = 800; //ms
    input.addEventListener("input", function () {
        clearTimeout(typingTimer);

        typingTimer = setTimeout(function () {
            search(input);
        }, endTypingTimer);

    })
}

async function search(input) {
    const response = await fetch("/get-productos");
    let productos = await response.json();
    productos = productos.filter(producto => producto.nombreProd.toLowerCase().includes(input.value.toLowerCase()));

    mostrarProductos(productos);
}
function mostrarProductos(productosArray) {
    const template = document.getElementById('templateProductos').innerHTML;
    const rendered = Mustache.render(template, { productos: productosArray });
    document.getElementById('listaProductos').innerHTML = rendered;
}

// Llamar a la función para mostrar los productos al cargar la página
document.addEventListener('DOMContentLoaded', mostrarProductos);