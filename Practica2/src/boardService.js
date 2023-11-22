const productos = new Map();
let nextId = 0;
addProduct({
    nombreProd: "AiPhone 15 Pro", precioProd: "1219,00", imgProd: "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777860/1838-apple-iphone-15-pro-256gb-titanio-azul-libre.jpg", imgProd2: "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777860/3456-apple-iphone-15-pro-256gb-titanio-azul-libre-mejor-precio.jpg",
    tipoProd: "Movil", cargaProd: "USB-C", capProd:"128 GB", colorProd: "#484E6E", nombreColor:"Titanio Azul", descProd:"\n- Telefono móvil  \n- 6,7″ o 6,1″ Pantalla Super Retina XDR \n- Tecnología ProMotion\n- Pantalla siempre activa\n- Titanio con parte trasera de vidrio mate texturizado\n- Botón Acción\n- Dynamic Island\n- Chip A17 Pro con GPU de 6 núcleos\n- Sistema de cámaras Pro\n- Principal de 48 Mpx, Ultra gran angular, Teleobjetivo\n- Fotos de superalta resolución (24 y 48 Mpx)\n- Hasta 29 horas de reproducción de video\n- Compatibilidad con USB 3 para transferencias hasta x20 más rápidas\n- Face ID"
});

addProduct({
    nombreProd: "AiPhone 15 Pro", precioProd: "1219,00", imgProd: "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777860/1838-apple-iphone-15-pro-256gb-titanio-azul-libre.jpg", imgProd2: "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777860/3456-apple-iphone-15-pro-256gb-titanio-azul-libre-mejor-precio.jpg",
    tipoProd: "Movil", cargaProd: "USB-C", capProd: "128 GB", colorProd: "#484E6E", nombreColor: "Titanio Azul", descProd: "\n- Telefono móvil  \n- 6,7″ o 6,1″ Pantalla Super Retina XDR \n- Tecnología ProMotion\n- Pantalla siempre activa\n- Titanio con parte trasera de vidrio mate texturizado\n- Botón Acción\n- Dynamic Island\n- Chip A17 Pro con GPU de 6 núcleos\n- Sistema de cámaras Pro\n- Principal de 48 Mpx, Ultra gran angular, Teleobjetivo\n- Fotos de superalta resolución (24 y 48 Mpx)\n- Hasta 29 horas de reproducción de video\n- Compatibilidad con USB 3 para transferencias hasta x20 más rápidas\n- Face ID"
});

export function addProduct(product) {
    let id = nextId++;
    product.id = id.toString();
    productos.set(product.id, product);
}
export function deleteProduct(id) {
    productos.delete(id);
}
export function editProduct(id, product) {
    product.id=id.toString();
    productos.set(product.id, product);
}
export function getProducts() {
    return [...productos.values()];
}
export function getProduct(id) {
    return productos.get(id);
}


