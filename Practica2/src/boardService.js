const productos = new Map();
let nextId = 0;
addProduct({
    prodNombre: "AiPhone 15 Pro", precio: "1219", imgURL: "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777860/1838-apple-iphone-15-pro-256gb-titanio-azul-libre.jpg"
});

export function addProduct(post) {
    let id = nextId++;
    post.id = id.toString();
    productos.set(post.id, post);
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


