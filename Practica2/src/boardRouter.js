import express from 'express';
import * as boardService from './boardService.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        productos: boardService.getProducts()
    });
});

router.get('/nuevo-producto', (req, res) => {
    res.render('Practica3', {
        productos: boardService.getProducts()
    });
});


router.post('/product/new', (req, res) => {
    let {nombreProd, precioProd, imgProd, 
        tipoProd, cargaProd, capProd, colorProd} = req.body;
    boardService.addProduct({ nombreProd, precioProd, imgProd, 
        tipoProd, cargaProd, capProd, colorProd });
    res.render('saved_product');
});

router.get('/producto/:id', (req, res) => {
    console.log(req.params);
    let producto = boardService.getProduct(req.params.id);
    console.log(producto);
    res.render('Practica2', producto);
});

router.get('/post/:id/delete', (req, res) => {
    boardService.deleteProduct(req.params.id);
    res.render('deleted_post');
});

export default router;
