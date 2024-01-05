
function waitingSearch(input) {
    var typingTimer;
    var endTypingTimer = 400; //ms
    input.addEventListener("input", function () {
        clearTimeout(typingTimer);

        typingTimer = setTimeout(function () {
            search(input);
        }, endTypingTimer);

    })
}
const template = `
{{#productos}}
<div class="cuadrado">
    <div class="preview">
        <a href="producto/{{id}}" class="redir">
            <img src="{{imgProd}}" class="prodimg">
            <div class="prodname">{{nombreProd}}</div>
            <div class="price">Desde {{precioProd}}€</div>
        </a>
    </div>
</div>
{{/productos}}
{{^productos}}
<div class="no-products-message">No se encontraron productos.</div>
{{/productos}}
`;
async function search(input) {
    if(!input.value){
        window.location.href="/";
    } else {
        const response = await fetch("/get-productos");
        let productos = await response.json();
        productos = productos.filter(producto => producto.nombreProd.toLowerCase().includes(input.value.toLowerCase()));
        mostrarProductos(productos);
    }
}
function mostrarProductos(productosArray) {
    const container = document.getElementById('busqueda');
    const rendered = Mustache.render(template, { productos: productosArray });
    container.innerHTML = rendered;

    const loadButton = document.getElementById('load');
    loadButton.style.display = "none";
}


