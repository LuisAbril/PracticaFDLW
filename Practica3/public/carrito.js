async function agregarCarrito(){
    const response = await fetch("/agregar-al-carrito", {method: 'POST'});
    const newProdCarrito = await response.text();

    const carritoDiv = document.getElementById('carrito');

    carritoDiv.innerHTML = '<button onclick="agregarCarrito()">Add</button>' + newProdCarrito;
}

async function renderCarrito(){
    const response = await fetch("/render-carrito");
    const prodsCarrito = await response.text();

    const carritoDiv = document.getElementById('carrito');

    carritoDiv.innerHTML = '<button onclick="agregarCarrito()">Add</button>' + prodsCarrito;
}

function mostrarCarrito(){
    const carritoDiv = document.getElementById('carrito');
    if (carritoDiv.style.display == "none"){
        renderCarrito();
        carritoDiv.style.display = "block";
    } else {
        carritoDiv.style.display = "none"
    }
}