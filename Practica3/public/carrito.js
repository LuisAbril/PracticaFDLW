async function agregarCarrito(id){
    const response = await fetch("/agregar-al-carrito/"+id, {method: 'POST'});
    const newProdCarrito = await response.text();

    let total = calcularTotal(newProdCarrito);
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '<div id="precioTotal">Precio total: '+total.toFixed(2).replace('.',',')+'€</div>' + newProdCarrito;

    const numCarrito = document.getElementsByClassName("numCarrito")[0];
    numCarrito.innerHTML = parseInt(numCarrito.innerHTML) + 1;
}

async function quitarCarrito(id){
    const response = await fetch("/quitar-del-carrito/"+id, {method: 'POST'});
    const newProdCarrito = await response.text();

    let total = calcularTotal(newProdCarrito);
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML ='<div id="precioTotal">Precio total: '+total.toFixed(2).replace('.',',')+'€</div>' + newProdCarrito;

    const numCarrito = document.getElementsByClassName("numCarrito")[0];
    numCarrito.innerHTML = parseInt(numCarrito.innerHTML) - 1;
}

async function renderCarrito(){
    const response = await fetch("/render-carrito");
    const prodsCarrito = await response.text();

    const carritoDiv = document.getElementById('carrito');

    let total = calcularTotal(prodsCarrito);

    carritoDiv.innerHTML = '<div id="precioTotal">Precio total: '+total.toFixed(2).replace('.',',')+'€</div>' + prodsCarrito;
}

function mostrarCarrito(){
    const carritoDiv = document.getElementById('carrito');
    if (carritoDiv.style.display == "none"){
        renderCarrito();
        carritoDiv.style.display = "block";
    } else {
        carritoDiv.style.display = "none";
    }
}

function calcularTotal(prodsCarrito){
    let precios = prodsCarrito.match(/(\d+\,\d{1,2})/g);
    let total = 0;
    if (precios) {
        for (let i = 0; i < precios.length; i++) {
            total += parseFloat(precios[i].replace(',', '.'));
        }
    }
    return total;
}