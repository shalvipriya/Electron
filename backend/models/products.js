const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
    discount: { type: Number, default: 0 },
    images: { type: [String], required: true },
    rating: { type: Number, default: 0 },
    reviewsCount: { type: Number, default: 0 },
    originalPrice: { type: Number }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
