const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/products', productRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
