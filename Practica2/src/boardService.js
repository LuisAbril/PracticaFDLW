const posts = new Map();
let nextId = 0;
addProducts({
    prodNombre: "AiPhone 15 Pro", precio: "1219", imgURL: "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777860/1838-apple-iphone-15-pro-256gb-titanio-azul-libre.jpg"
});

export function addProduct(post) {
    let id = nextId++;
    post.id = id.toString();
    posts.set(post.id, post);
}
export function deleteProduct(id) {
    posts.delete(id);
}
export function getProducts() {
    return [...posts.values()];
}
export function getProduct(id) {
    return posts.get(id);
}


