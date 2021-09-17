const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
    console.log('Mongo connection open!!!')
    })
    .catch(err => {
        console.log('Ohh, NO Mongo connection error!')
        console.log(err);
    })

mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    });


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('Woof!')
})

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
})