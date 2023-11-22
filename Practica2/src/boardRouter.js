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
router.get('/product/:id/edit', (req, res) => {
    let producto = boardService.getProduct(req.params.id);
    res.render('modificacion', producto);
});
router.post('/formedit', (req, res) => {
    let { nombreProd, precioProd, imgProd, imgProd2, descProd,
        tipoProd, cargaProd, capProd, colorProd, nombreColor } = req.body;
    boardService.addProduct({
        nombreProd, precioProd, imgProd, imgProd2, descProd,
        tipoProd, cargaProd, capProd, colorProd, nombreColor
    });
    res.render('index', {
        productos: boardService.getProducts()
    });
});
export default router;
