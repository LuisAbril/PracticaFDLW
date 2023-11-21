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
    let {nombreProd, precioProd, imgProd, 
        tipoProd, cargaProd, capProd, colorProd, nombreColor} = req.body;
    boardService.addProduct({ nombreProd, precioProd, imgProd, 
        tipoProd, cargaProd, capProd, colorProd, nombreColor });
    res.render('index', {
        productos: boardService.getProducts()
    });
});

router.get('/producto/:id', (req, res) => {
    let producto = boardService.getProduct(req.params.id);
    res.render('Practica2', producto);
});

router.get('/product/:id/delete', (req, res) => {
    boardService.deleteProduct(req.params.id);
    res.render('index',{
        productos: boardService.getProducts()
    });
});

export default router;
