const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/livia'); // ✅ No need for deprecated options
        console.log('✅ MongoDB connected successfully');
    } catch (err) {
        console.error('❌ Failed to connect to MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
