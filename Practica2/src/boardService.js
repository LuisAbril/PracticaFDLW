const productos = new Map();
let nextId = 0;

//crear varios productos diferentes con el siguiente formato:
addProduct({
    nombreProd: "AiPhone 15 Pro", precioProd: "1219,00", imgProd: "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777860/1838-apple-iphone-15-pro-256gb-titanio-azul-libre.jpg", imgProd2: "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777860/3456-apple-iphone-15-pro-256gb-titanio-azul-libre-mejor-precio.jpg",
    tipoProd: "Movil", cargaProd: "USB-C", capProd:"128 GB", colorProd: "#484E6E", nombreColor:"Titanio Azul", descProd:"\n- Telefono móvil  \n- 6,7″ o 6,1″ Pantalla Super Retina XDR \n- Tecnología ProMotion\n- Pantalla siempre activa\n- Titanio con parte trasera de vidrio mate texturizado\n- Botón Acción\n- Dynamic Island\n- Chip A17 Pro con GPU de 6 núcleos\n- Sistema de cámaras Pro\n- Principal de 48 Mpx, Ultra gran angular, Teleobjetivo\n- Fotos de superalta resolución (24 y 48 Mpx)\n- Hasta 29 horas de reproducción de video\n- Compatibilidad con USB 3 para transferencias hasta x20 más rápidas\n- Face ID"
});

addProduct({
    nombreProd: "Appel Uach Series 9", precioProd: "449,00", imgProd: "https://rossellimac.es/cdn/shop/files/Apple_Watch_Series_9_GPS_41mm_Starlight_Aluminum_Starlight_Sport_Loop_PDP_Image_Position-1__ESES_2048x.jpg?v=1699272388", imgProd2: "https://rossellimac.es/cdn/shop/files/Apple_Watch_Series_9_GPS_41mm_Starlight_Aluminum_Starlight_Sport_Loop_PDP_Image_Position-2__ESES_2048x.jpg?v=1699272392",
    tipoProd: "Reloj", cargaProd: "USB-C", capProd: "64 GB", colorProd: "#EDECD7", nombreColor: "Crema", descProd:"\n- Appel Uach Series 9 (2023)  \n- GPS \n- 41 mm\n- Gesto de doble toque\n- Caja de aluminio blanco estrella\n- Correa deportiva blanco estrella\n- Talla S/M "
})

addProduct({
    nombreProd: "AirPuds 3ªGen", precioProd: "1219,00", imgProd: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99832568?x=960&y=720&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=960&ey=720&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=960&cdy=720", imgProd2: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97316314?x=960&y=720&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=960&ey=720&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=960&cdy=720",
    tipoProd: "Auriculares", cargaProd: "USB-C", capProd: "No Aplica", colorProd: "#FFFFFF", nombreColor: "Blanco", descProd: "\n- APPEL AirPuds (2022 3ª gen)  \n- Inalámbricos \n- Bluetooth®\n- Estuche Carga no Inalámbrica\n- Chip H1\n- Siri\n- Blanco"
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


