async function search(input){
    const response = await fetch("/get-productos");
    let productos = await response.json();
    productos = productos.filter(producto => producto.nombreProd.toLowerCase().includes(input.value.toLowerCase()));
    console.log(productos);
}