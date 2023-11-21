const productos = new Map();
let nextId = 0;
addProduct({
    nombreProd: "AiPhone 15 Pro", precioProd: "1219", imgProd: "https://static.fnac-static.com/multimedia/Images/ES/NR/f1/b3/82/8565745/1540-1.jpg", imgProd2:"https://static.fnac-static.com/multimedia/Images/ES/NR/f1/b3/82/8565745/1541-1.jpg",
    descProd:"muy bonito", tipoProd: "Movil", cargaProd: "USB-C", capProd:"128 GB", colorProd: "#484E6E", nombreColor:"Titanio Azul"
});

addProduct({
    nombreProd: "AiPhone 15 Pro", precioProd: "1219", imgProd: "https://static.fnac-static.com/multimedia/Images/ES/NR/f1/b3/82/8565745/1540-1.jpg", imgProd2: "https://static.fnac-static.com/multimedia/Images/ES/NR/f1/b3/82/8565745/1541-1.jpg",
    descProd: "muy bonito", tipoProd: "Movil", cargaProd: "USB-C", capProd: "128 GB", colorProd: "#484E6E", nombreColor: "Titanio Azul"
});

export function addProduct(product) {
    console.log(product);
    let id = nextId++;
    product.id = id.toString();
    productos.set(product.id, product);
}
export function deleteProduct(id) {
    productos.delete(id);
}
export function getProducts() {
    return [...productos.values()];
}
export function getProduct(id) {
    return productos.get(id);
}


