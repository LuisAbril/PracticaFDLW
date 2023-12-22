async function agregarCarrito(id){
    console.log(id);
    const response = await fetch("/agregar-al-carrito/"+id, {method: 'POST'});
    const newProdCarrito = await response.text();

    const carritoDiv = document.getElementById('carrito');

    carritoDiv.innerHTML = newProdCarrito;
}

async function renderCarrito(){
    const response = await fetch("/render-carrito");
    const prodsCarrito = await response.text();

    const carritoDiv = document.getElementById('carrito');

    carritoDiv.innerHTML = prodsCarrito;
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