const url = 'mongodb://localhost:27017/webreshape'
const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err.message);
        throw err; // Ensure the server exits on failure
    }
};

module.exports = { dbConnection };
