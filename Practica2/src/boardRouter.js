import express from 'express';
import * as boardService from './boardService.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        productos: boardService.getProducts()
    });
});

router.get('/nuevo-producto', (req, res) => {
    res.render('Practica3');
});


router.post('/', (req, res) => {
    let {nombreProd, precioProd, imgProd, imgProd2, descProd,
        tipoProd, cargaProd, capProd, colorProd, nombreColor} = req.body;
     
    let tipo=[{ProdN: "Movil", selected: tipoProd=="Movil"}, {ProdN: "Tableta", selected: tipoProd=="Tableta"},{ProdN: "Ordenador", selected: tipoProd=="Ordenador"}, {ProdN: "Reloj", selected: tipoProd=="Reloj"}, {ProdN: "Auriculares", selected: tipoProd=="Auriculares"}, {ProdN: "Accesorios", selected: tipoProd=="Accesorios"}];    

    boardService.addProduct({ nombreProd, precioProd, imgProd, imgProd2, descProd,
        tipoProd, tipo, cargaProd, capProd, colorProd, nombreColor });
    res.redirect("/");
});

router.get('/producto/:id', (req, res) => {
    let producto = boardService.getProduct(req.params.id);
    res.render('Practica2', producto);
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
    res.render('modificacion', producto);
});

//borra producto y crea uno nuevo
router.post('/formedit/:id', (req, res) => {
    let { nombreProd, precioProd, imgProd, imgProd2, descProd,
        tipoProd, cargaProd, capProd, colorProd, nombreColor } = req.body;

    let tipo=[{ProdN: "Movil", selected: tipoProd=="Movil"}, {ProdN: "Tableta", selected: tipoProd=="Tableta"},{ProdN: "Ordenador", selected: tipoProd=="Ordenador"}, {ProdN: "Reloj", selected: tipoProd=="Reloj"}, {ProdN: "Auriculares", selected: tipoProd=="Auriculares"}, {ProdN: "Accesorios", selected: tipoProd=="Accesorios"}];    

    boardService.editProduct(req.params.id, {
        nombreProd, precioProd, imgProd, imgProd2, descProd,
        tipoProd, tipo, cargaProd, capProd, colorProd, nombreColor
    });
    res.redirect("/");
});

export default router;
