import express from 'express';
import * as boardService from './boardService.js';

const router = express.Router();

router.get('/', (req, res) => {
    boardService.resetTemporal();
    res.render('index', {
        productos: boardService.getProducts()
    });
});

router.get('/nuevo-producto', (req, res) => {
    let producto=boardService.getTemporal();
    res.render('Practica3', producto);
});


router.post('/', (req, res) => {
    boardService.resetTemporal();
    let {nombreProd, precioProd, imgProd, imgProd2, descProd,
        tipoProd, cargaProd, capProd, colorProd, nombreColor} = req.body;

    let tipo=[{ProdN: "Movil", selected: tipoProd=="Movil"}, {ProdN: "Tableta", selected: tipoProd=="Tableta"},{ProdN: "Ordenador", selected: tipoProd=="Ordenador"}, {ProdN: "Reloj", selected: tipoProd=="Reloj"}, {ProdN: "Auriculares", selected: tipoProd=="Auriculares"}, {ProdN: "Accesorios", selected: tipoProd=="Accesorios"}];    
    let carga=[{CargaN: "Ninguno", selected: cargaProd=="Ninguno"}, {CargaN: "Lighting", selected: cargaProd=="Lighting"},{CargaN: "USB-C", selected: cargaProd=="USB-C"}, {CargaN: "Inalambrico", selected: cargaProd=="Inalambrico"}];    
    let cap=[{CapN: "No aplica", selected: capProd=="No aplica"}, {CapN: "64 GB", selected: capProd=="64 GB"},{CapN: "128 GB", selected: capProd=="128 GB"}, {CapN: "256 GB", selected: capProd=="256 GB"}, {CapN: "512 GB", selected: capProd=="512 GB"}, {CapN: "1 TB", selected: capProd=="1 TB"}];
    let comments = new Map();
    let nextIdComment = 0;

    if (!nombreProd || !precioProd || !imgProd || !imgProd2 || !tipoProd) {
        let error = true;
        let prod = { nombreProd, precioProd, imgProd, imgProd2, descProd,
            tipoProd, tipo, cargaProd, carga, capProd, cap, colorProd, nombreColor, comments, nextIdComment, error};
        boardService.prodTemporal(prod);
        res.redirect('/nuevo-producto');
    } else {
        boardService.addProduct({ nombreProd, precioProd, imgProd, imgProd2, descProd,
            tipoProd, tipo, cargaProd, carga, capProd, cap, colorProd, nombreColor, comments, nextIdComment });
        res.redirect("/");
    }
});

router.get('/producto/:id', (req, res) => {
    boardService.resetTemporal();
    let producto = boardService.getProduct(req.params.id);
    let comments = boardService.getComments(producto);
    res.render('Practica2', {producto,comments});
});

//eliminacion
router.get('/product/:id/delete', (req, res) => {
    boardService.deleteProduct(req.params.id);
    res.redirect("/");
});

//modificacion del producto en pagina modificacion
//lleva a modifcicacion
router.get('/product/edit/:id', (req, res) => {
    let producto = boardService.getProduct(req.params.id);
    let prodTemp = boardService.getTemporal();
    if(prodTemp.error) {producto=prodTemp};
    res.render('modificacion', producto);
});

//borra producto y crea uno nuevo
router.post('/formedit/:id', (req, res) => {
    boardService.resetTemporal();
    let { nombreProd, precioProd, imgProd, imgProd2, descProd,
        tipoProd, cargaProd, capProd, colorProd, nombreColor } = req.body;

    let tipo=[{ProdN: "Movil", selected: tipoProd=="Movil"}, {ProdN: "Tableta", selected: tipoProd=="Tableta"},{ProdN: "Ordenador", selected: tipoProd=="Ordenador"}, {ProdN: "Reloj", selected: tipoProd=="Reloj"}, {ProdN: "Auriculares", selected: tipoProd=="Auriculares"}, {ProdN: "Accesorios", selected: tipoProd=="Accesorios"}];    
    let carga=[{CargaN: "Ninguno", selected: cargaProd=="Ninguno"}, {CargaN: "Lighting", selected: cargaProd=="Lighting"},{CargaN: "USB-C", selected: cargaProd=="USB-C"}, {CargaN: "Inalambrico", selected: cargaProd=="Inalambrico"}];    
    let cap=[{CapN: "No aplica", selected: capProd=="No aplica"}, {CapN: "64 GB", selected: capProd=="64 GB"},{CapN: "128 GB", selected: capProd=="128 GB"}, {CapN: "256 GB", selected: capProd=="256 GB"}, {CapN: "512 GB", selected: capProd=="512 GB"}, {CapN: "1 TB", selected: capProd=="1 TB"}];
    
    let prodAux = boardService.getProduct(req.params.id);
    let comments = prodAux.comments;
    let nextIdComment = prodAux.nextIdComment;

    if (!nombreProd || !precioProd || !imgProd || !imgProd2 || !tipoProd) {
        let error = true;
        let id = req.params.id;
        let prod = { id, nombreProd, precioProd, imgProd, imgProd2, descProd,
            tipoProd, tipo, cargaProd, carga, capProd, cap, colorProd, nombreColor, comments, nextIdComment, error};
        boardService.prodTemporal(prod);
        res.redirect('/product/edit/'+id);
    } else {
    boardService.editProduct(req.params.id, { nombreProd, precioProd, imgProd, imgProd2, descProd,
        tipoProd, tipo, cargaProd, carga, capProd, cap, colorProd, nombreColor, comments, nextIdComment});
    res.redirect("/");}
});

//subir comentario
router.post('/producto/:id', (req, res) => {
    let id = req.params.id;
    let producto = boardService.getProduct(req.params.id);
    let {username, commentText, punt}= req.body
    let firstL = username[0];
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let comment = {username, firstL, commentText, punt, r, g, b};
    boardService.addComment(producto, comment);
    res.redirect('/producto/'+id);
});

export default router;
