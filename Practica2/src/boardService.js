const productos = new Map();
let nextId = 0;

//crear varios productos diferentes con el siguiente formato:
addProduct({
    nombreProd: "AiPhone 15 Pro", precioProd: "1219,00", imgProd: "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777860/1838-apple-iphone-15-pro-256gb-titanio-azul-libre.jpg", imgProd2: "https://thumb.pccomponentes.com/w-530-530/articles/1077/10777860/3456-apple-iphone-15-pro-256gb-titanio-azul-libre-mejor-precio.jpg",
    tipoProd: "Movil", cargaProd: "USB-C", capProd:"128 GB", colorProd: "#484E6E", nombreColor:"Titanio Azul", descProd:"\n- Telefono móvil  \n- 6,7″ o 6,1″ Pantalla Super Retina XDR \n- Tecnología ProMotion\n- Pantalla siempre activa\n- Titanio con parte trasera de vidrio mate texturizado\n- Botón Acción\n- Dynamic Island\n- Chip A17 Pro con GPU de 6 núcleos\n- Sistema de cámaras Pro\n- Principal de 48 Mpx, Ultra gran angular, Teleobjetivo\n- Fotos de superalta resolución (24 y 48 Mpx)\n- Hasta 29 horas de reproducción de video\n- Compatibilidad con USB 3 para transferencias hasta x20 más rápidas\n- Face ID",
    tipo: [{ProdN: "Movil", selected: true}, {ProdN: "Tableta", selected: false},{ProdN: "Ordenador", selected: false}, {ProdN: "Reloj", selected: false}, {ProdN: "Auriculares", selected: false}, {ProdN: "Accesorios", selected: false}],
    carga: [{ CargaN: "Ninguno", selected: false }, { CargaN: "Lighting", selected: false }, { CargaN: "USB-C", selected: true }, { CargaN: "Inalambrico", selected: false }],
    cap: [{ CapN: "No aplica", selected: false }, { CapN: "64 GB", selected: false }, { CapN: "128 GB", selected: true }, { CapN: "256 GB", selected: false }, { CapN: "512 GB", selected: false }, { CapN: "1 TB", selected: false }]

});

addProduct({
    nombreProd: "Appel Uach Series 9", precioProd: "449,00", imgProd: "https://rossellimac.es/cdn/shop/files/Apple_Watch_Series_9_GPS_41mm_Starlight_Aluminum_Starlight_Sport_Loop_PDP_Image_Position-1__ESES_2048x.jpg?v=1699272388", imgProd2: "https://rossellimac.es/cdn/shop/files/Apple_Watch_Series_9_GPS_41mm_Starlight_Aluminum_Starlight_Sport_Loop_PDP_Image_Position-2__ESES_2048x.jpg?v=1699272392",
    tipoProd: "Reloj", cargaProd: "USB-C", capProd: "64 GB", colorProd: "#EDECD7", nombreColor: "Crema", descProd:"\n- Appel Uach Series 9 (2023)  \n- GPS \n- 41 mm\n- Gesto de doble toque\n- Caja de aluminio blanco estrella\n- Correa deportiva blanco estrella\n- Talla S/M ",
    tipo: [{ProdN: "Movil", selected: false}, {ProdN: "Tableta", selected: false},{ProdN: "Ordenador", selected: false}, {ProdN: "Reloj", selected: true}, {ProdN: "Auriculares", selected: false}, {ProdN: "Accesorios", selected: false}],
    carga: [{ CargaN: "Ninguno", selected: false }, { CargaN: "Lighting", selected: false }, { CargaN: "USB-C", selected: true }, { CargaN: "Inalambrico", selected: false }],
    cap: [{ CapN: "No aplica", selected: false }, { CapN: "64 GB", selected: true }, { CapN: "128 GB", selected: false }, { CapN: "256 GB", selected: false }, { CapN: "512 GB", selected: false }, { CapN: "1 TB", selected: false }]
})

addProduct({
    nombreProd: "AirPuds 3ªGen", precioProd: "1219,00", imgProd: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99832568?x=960&y=720&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=960&ey=720&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=960&cdy=720", imgProd2: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97316314?x=960&y=720&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=960&ey=720&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=960&cdy=720",
    tipoProd: "Auriculares", cargaProd: "USB-C", capProd: "No Aplica", colorProd: "#FFFFFF", nombreColor: "Blanco", descProd: "\n- APPEL AirPuds (2022 3ª gen)  \n- Inalámbricos \n- Bluetooth®\n- Estuche Carga no Inalámbrica\n- Chip H1\n- Siri\n- Blanco",
    tipo: [{ProdN: "Movil", selected: false}, {ProdN: "Tableta", selected: false},{ProdN: "Ordenador", selected: false}, {ProdN: "Reloj", selected: false}, {ProdN: "Auriculares", selected: true}, {ProdN: "Accesorios", selected: false}],
    carga: [{ CargaN: "Ninguno", selected: false }, { CargaN: "Lighting", selected: false }, { CargaN: "USB-C", selected: true }, { CargaN: "Inalambrico", selected: false }],
    cap: [{ CapN: "No aplica", selected: true }, { CapN: "64 GB", selected: false }, { CapN: "128 GB", selected: false }, { CapN: "256 GB", selected: false }, { CapN: "512 GB", selected: false }, { CapN: "1 TB", selected: false }]
});

addProduct({
    nombreProd: "Funda Aiphone 12", precioProd: "33,00", imgProd: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D828/https://d2e6ccujb3mkqf.cloudfront.net/3dff6202-8b26-4e90-929d-d93d7e62809f-1_d79b1281-d2c3-445a-b9d3-beb2662b0bdf.jpg", imgProd2: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D828/https://d2e6ccujb3mkqf.cloudfront.net/3dff6202-8b26-4e90-929d-d93d7e62809f-2_2a092461-148e-4fd4-b472-4398258a60b1.jpg",
    tipoProd: "Accesorios", cargaProd: "Ninguno", capProd: "No Aplica", colorProd: "#0E75CF", nombreColor: "Azul", descProd: "\n- Funda Appel AiPhone 12 \n- MagSafe \n- Silicona \n- Azul",
    tipo: [{ProdN: "Movil", selected: false}, {ProdN: "Tableta", selected: false},{ProdN: "Ordenador", selected: false}, {ProdN: "Reloj", selected: false}, {ProdN: "Auriculares", selected: false}, {ProdN: "Accesorios", selected: true}],
    carga: [{ CargaN: "Ninguno", selected: true }, { CargaN: "Lighting", selected: false }, { CargaN: "USB-C", selected: false }, { CargaN: "Inalambrico", selected: false }],
    cap: [{ CapN: "No aplica", selected: true }, { CapN: "64 GB", selected: false }, { CapN: "128 GB", selected: false }, { CapN: "256 GB", selected: false }, { CapN: "512 GB", selected: false }, { CapN: "1 TB", selected: false }]
})

addProduct({
    nombreProd: "AiPad Mini", precioProd: "463,00", imgProd: "https://cf4.certideal.com/29979-prod_large/ipad-mini-2019-5a-generation-64-go-plata-wifi-4g.jpg", imgProd2:"https://cf6.certideal.com/29978-thickbox_default/ipad-mini-2019-5a-generation-64-go-plata-wifi-4g.jpg",
    tipoProd: "Tableta", cargaProd: "Lightning", capProd: "64 GB", colorProd: "#B0B0B0", nombreColor: "Plata", descProd: "\n- Appel AiPad Mini (2019) \n- 64 GB \n- Plata \n- Wifi + 4G \n- 7,9 pulgadas \n- 2048 x 1536 píxeles \n- 300,5 g",
    tipo: [{ProdN: "Movil", selected: false}, {ProdN: "Tableta", selected: true},{ProdN: "Ordenador", selected: false}, {ProdN: "Reloj", selected: false}, {ProdN: "Auriculares", selected: false}, {ProdN: "Accesorios", selected: false}],
    carga: [{ CargaN: "Ninguno", selected: false }, { CargaN: "Lighting", selected: true }, { CargaN: "USB-C", selected: false }, { CargaN: "Inalambrico", selected: false }],
    cap: [{ CapN: "No aplica", selected: true }, { CapN: "64 GB", selected: false }, { CapN: "128 GB", selected: false }, { CapN: "256 GB", selected: false }, { CapN: "512 GB", selected: false }, { CapN: "1 TB", selected: false }]
})

addProduct({
    nombreProd: "AiPhone EseE", precioProd: "529,00", imgProd: "https://cf4.certideal.com/22351-prod_large/iphone-se-2020-64-gb-rojo.jpg", imgProd2:"https://cf4.certideal.com/22349-prod_large/iphone-se-2020-64-gb-rojo.jpg",
    tipoProd: "Movil", cargaProd: "Lightning", capProd: "64 GB", colorProd: "#FF0000", nombreColor: "Rojo", descProd: "\n- Appel AiPhone EseE (2020) \n- 64 GB \n- Rojo \n- 4,7 pulgadas \n- 1334 x 750 píxeles \n- 148 g",
    tipo: [{ProdN: "Movil", selected: true}, {ProdN: "Tableta", selected: false},{ProdN: "Ordenador", selected: false}, {ProdN: "Reloj", selected: false}, {ProdN: "Auriculares", selected: false}, {ProdN: "Accesorios", selected: false}],
    carga: [{ CargaN: "Ninguno", selected: false }, { CargaN: "Lighting", selected: true }, { CargaN: "USB-C", selected: false }, { CargaN: "Inalambrico", selected: false }],
    cap: [{ CapN: "No aplica", selected: true }, { CapN: "64 GB", selected: false }, { CapN: "128 GB", selected: false }, { CapN: "256 GB", selected: false }, { CapN: "512 GB", selected: false }, { CapN: "1 TB", selected: false }]
})

addProduct({
    nombreProd: "MacBuk Er", precioProd: "33,00", imgProd: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83551463?x=960&y=720&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=960&ey=720&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=960&cdy=720", imgProd2:"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_79165943?x=960&y=720&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=960&ey=720&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=960&cdy=720",
    tipoProd: "Ordenador", cargaProd: "USB-C", capProd: "1 T", colorProd: "#A8B3B8", nombreColor: "Gris Espacial", descProd:"\n- Appel MacBuk Er (2020) \n- 1 T \n- Gris Espacial \n- 13,3 pulgadas \n- 2560 x 1600 píxeles \n- 1,29 kg",
    tipo: [{ProdN: "Movil", selected: false}, {ProdN: "Tableta", selected: false},{ProdN: "Ordenador", selected: true}, {ProdN: "Reloj", selected: false}, {ProdN: "Auriculares", selected: false}, {ProdN: "Accesorios", selected: false}],
    carga: [{ CargaN: "Ninguno", selected: false }, { CargaN: "Lighting", selected: false }, { CargaN: "USB-C", selected: true }, { CargaN: "Inalambrico", selected: false }],
    cap: [{ CapN: "No aplica", selected: true }, { CapN: "64 GB", selected: false }, { CapN: "128 GB", selected: false }, { CapN: "256 GB", selected: false }, { CapN: "512 GB", selected: false }, { CapN: "1 TB", selected: true }]
})

addProduct({
    nombreProd: "Appel TV 4k", precioProd: "129,00", imgProd: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=1076&hei=1070&fmt=jpeg&qlt=90&.v=1664896361408", imgProd2:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=1076&hei=1070&fmt=jpeg&qlt=90&.v=1664896361408",
    tipoProd: "Accesorios", cargaProd: "USB-C", capProd: "No Aplica", colorProd: "#8F989C", nombreColor: "Gris", descProd:"\n- Appel TV 4k \n- Buena capacidad de conexion \n- Gris \n- 4K",
    tipo: [{ProdN: "Movil", selected: false}, {ProdN: "Tableta", selected: false},{ProdN: "Ordenador", selected: false}, {ProdN: "Reloj", selected: false}, {ProdN: "Auriculares", selected: false}, {ProdN: "Accesorios", selected: true}],
    carga: [{ CargaN: "Ninguno", selected: false }, { CargaN: "Lighting", selected: false }, { CargaN: "USB-C", selected: true }, { CargaN: "Inalambrico", selected: false }],
    cap: [{ CapN: "No aplica", selected: true }, { CapN: "64 GB", selected: false }, { CapN: "128 GB", selected: false }, { CapN: "256 GB", selected: false }, { CapN: "512 GB", selected: false }, { CapN: "1 TB", selected: false }]
})

addProduct({
    nombreProd: "Houm Pod", precioProd: "299,00", imgProd: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-202210?wid=1080&hei=1080&fmt=jpeg&qlt=90&.v=1670557209908", imgProd2: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-202210?wid=1080&hei=1080&fmt=jpeg&qlt=90&.v=1670557209908",
    tipoProd: "Accesorios", cargaProd: "Inalambrico", capProd: "No Aplica", colorProd: "#8F989C", nombreColor: "Gris", descProd: "Potente",
    tipo: [{ProdN: "Movil", selected: false}, {ProdN: "Tableta", selected: false},{ProdN: "Ordenador", selected: false}, {ProdN: "Reloj", selected: false}, {ProdN: "Auriculares", selected: false}, {ProdN: "Accesorios", selected: true}],
    carga: [{ CargaN: "Ninguno", selected: false }, { CargaN: "Lighting", selected: false }, { CargaN: "USB-C", selected: false }, { CargaN: "Inalambrico", selected: true }],
    cap: [{ CapN: "No aplica", selected: true }, { CapN: "64 GB", selected: false }, { CapN: "128 GB", selected: false }, { CapN: "256 GB", selected: false }, { CapN: "512 GB", selected: false }, { CapN: "1 TB", selected: false }]
})
addProduct({
    nombreProd: "Loyitek Circle View", precioProd: "199,00", imgProd: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPGS2?wid=532&hei=582&fmt=png-alpha&.v=1659482179950", imgProd2: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPGS2?wid=532&hei=582&fmt=png-alpha&.v=1659482179950",
    tipoProd: "Accesorios", cargaProd: "Ninguno", capProd: "No Aplica", colorProd: "#8F989C", nombreColor: "Gris", descProd: "Potente",
    tipo: [{ProdN: "Movil", selected: false}, {ProdN: "Tableta", selected: false},{ProdN: "Ordenador", selected: false}, {ProdN: "Reloj", selected: false}, {ProdN: "Auriculares", selected: false}, {ProdN: "Accesorios", selected: true}],
    carga: [{ CargaN: "Ninguno", selected: true }, { CargaN: "Lighting", selected: false }, { CargaN: "USB-C", selected: false }, { CargaN: "Inalambrico", selected: false }],
    cap: [{ CapN: "No aplica", selected: true }, { CapN: "64 GB", selected: false }, { CapN: "128 GB", selected: false }, { CapN: "256 GB", selected: false }, { CapN: "512 GB", selected: false }, { CapN: "1 TB", selected: false }]
})
addProduct({
    nombreProd: "Appel Pencil", precioProd: "149,00", imgProd: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-pencil-2-splitter-202210?wid=560&hei=528&fmt=p-jpg&qlt=95&.v=1664466559350", imgProd2: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-pencil-2-splitter-202210?wid=560&hei=528&fmt=p-jpg&qlt=95&.v=1664466559350",
    tipoProd: "Accesorios", cargaProd: "USB-C", capProd: "No Aplica", colorProd: "#8F989C", nombreColor: "Gris", descProd: "Potente",
    tipo: [{ProdN: "Movil", selected: false}, {ProdN: "Tableta", selected: false},{ProdN: "Ordenador", selected: false}, {ProdN: "Reloj", selected: false}, {ProdN: "Auriculares", selected: false}, {ProdN: "Accesorios", selected: true}],
    carga: [{ CargaN: "Ninguno", selected: false }, { CargaN: "Lighting", selected: false }, { CargaN: "USB-C", selected: true }, { CargaN: "Inalambrico", selected: false }],
    cap: [{ CapN: "No aplica", selected: true }, { CapN: "64 GB", selected: false }, { CapN: "128 GB", selected: false }, { CapN: "256 GB", selected: false }, { CapN: "512 GB", selected: false }, { CapN: "1 TB", selected: false }]
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


