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
    boardService.addProduct({ nombreProd, precioProd, imgProd, imgProd2, descProd,
        tipoProd, cargaProd, capProd, colorProd, nombreColor });
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
    let id = req.params.id;
    let producto = boardService.getProduct(req.params.id);
    let productoTotal;
    switch (producto.tipoProd){
        case "Movil":
            let Movil = true;
            productoTotal = {producto, Movil};
        break
        case "Tableta":
            let Tableta = true;
            productoTotal = {producto, Tableta};
        break
        case "Ordenador":
            let Ordenador = true;
            productoTotal = {producto, Ordenador};
        break
        case "Reloj":
            let Reloj = true;
            productoTotal = {producto, Reloj};
        break
        case "Auriculares":
            let Auriculares = true;
            productoTotal = {producto, Auriculares};
        break
        case "Accesorios":
            let Accesorios = true;
            productoTotal = {producto, Accesorios};
        break
    }
    res.render('modificacion', productoTotal);
});

//borra producto y crea uno nuevo
router.post('/formedit/:id', (req, res) => {
    let { nombreProd, precioProd, imgProd, imgProd2, descProd,
        tipoProd, cargaProd, capProd, colorProd, nombreColor } = req.body;
    boardService.editProduct(req.params.id, {
        nombreProd, precioProd, imgProd, imgProd2, descProd,
        tipoProd, cargaProd, capProd, colorProd, nombreColor
    });
    res.redirect("/");
});

export default router;
