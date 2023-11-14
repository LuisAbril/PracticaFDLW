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


router.post('/post/new', (req, res) => {
    let { user, title, text } = req.body;
    boardService.addProduct({ user, title, text });
    res.render('saved_post');
});

router.get('/post/:id', (req, res) => {
    let post = boardService.getProduct(req.params.id);
    res.render('show_post', { post });
});

router.get('/post/:id/delete', (req, res) => {
    boardService.deleteProduct(req.params.id);
    res.render('deleted_post');
});

export default router;