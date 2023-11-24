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

addProduct({
    nombreProd: "Funda Aiphone 12", precioProd: "33,00", imgProd: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D828/https://d2e6ccujb3mkqf.cloudfront.net/3dff6202-8b26-4e90-929d-d93d7e62809f-1_d79b1281-d2c3-445a-b9d3-beb2662b0bdf.jpg", imgProd2: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D828/https://d2e6ccujb3mkqf.cloudfront.net/3dff6202-8b26-4e90-929d-d93d7e62809f-2_2a092461-148e-4fd4-b472-4398258a60b1.jpg",
    tipoProd: "Accesorios", cargaProd: "Ninguno", capProd: "No Aplica", colorProd: "#0E75CF", nombreColor: "Azul", descProd: "\n- Funda Appel AiPhone 12 \n- MagSafe \n- Silicona \n- Azul"
})

addProduct({
    nombreProd: "AiPad Mini", precioProd: "463,00", imgProd: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-digitalmat-gallery-1-202111?wid=730&hei=666&fmt=png-alpha&.v=1635183174000", imgProd2: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-digitalmat-gallery-1-202111?wid=730&hei=666&fmt=png-alpha&.v=1635183174000",
    tipoProd: "Tableta", cargaProd: "Lightning", capProd: "264 GB", colorProd: "1BB678", nombreColor: ""
})

addProduct({
    nombreProd: "AiPhone EseE", precioProd: "529,00", imgProd: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphonese-digitalmat-gallery-1-202203_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1645574660944", imgProd2: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphonese-digitalmat-gallery-1-202203_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1645574660944",
    tipoProd: "Movil", cargaProd: "Lightning", capProd: "64 GB", colorProd: "#000000", nombreColor: "Negro", descProd: "Pequeño"
})

addProduct({
    nombreProd: "MacBuk Er", precioProd: "33,00", imgProd: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-digitalmat-gallery-4-202111_GEO_ES?wid=728&hei=666&fmt=png-alpha&.v=1665173234808", imgProd2: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-digitalmat-gallery-4-202111_GEO_ES?wid=728&hei=666&fmt=png-alpha&.v=1665173234808",
    tipoProd: "Ordenador", cargaProd: "1 T", capProd: "USB-C", colorProd: "#8F989C", nombreColor: "Gris", descProd: "Potente"
})

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


