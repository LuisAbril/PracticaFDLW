const productos = new Map();
let nextId = 0;
addProduct({
    nombreProd: "AiPhone 15 Pro", precioProd: "1219", imgProd: "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777860/1838-apple-iphone-15-pro-256gb-titanio-azul-libre.jpg", imgProd2:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV3?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693011640626",
    descProd:"muy bonito", tipoProd: "Movil", cargaProd: "USB-C", capProd:"128 GB", colorProd: "#484E6E", nombreColor:"Titanio Azul"
});

addProduct({
    nombreProd: "Appel Watch", precioProd: "500", imgProd: "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777860/1838-apple-iphone-15-pro-256gb-titanio-azul-libre.jpg", imgProd2:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV3?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693011640626",
    descProd:"muy bonito", tipoProd: "Movil", cargaProd: "USB-C", capProd:"128 GB", colorProd: "Titanio Azul"
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


