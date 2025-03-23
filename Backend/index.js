const express = require('express');
const app = express();
const {dbConnection}=require('./db/dbConnection');


dbConnection()
    .then(() => console.log('Database connected successfully'))
    .catch((err) => {
        console.error('Database connection error:', err);
    });

app.get('/', (req, res) => {
    res.send("Hello VNIT");
})

app.listen(4000, () => {
    console.log("Server started!");
})