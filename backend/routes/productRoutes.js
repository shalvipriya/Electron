const express = require('express');
const Product = require('../models/products');
const router = express.Router();

router.post('/add-product', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.json({ message: 'Product added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add product' });
    }
});

module.exports = router;
