const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStandApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


    const seedProducts = [
    {
        name: "Grapefruit",
        price: 1.99,
        category: 'fruit'
    },
    {
        name: "Red Tommato",
        price: 0.99,
        category: 'vegetable'
    },
    {
        name: "Organic Goddness Melon",
        price: 4.99,
        category: 'fruit'
    },
    {
        name: "Mini Seeedless Watermelon",
        price: 3.99,
        category: 'fruit'
    },
        {
        name: " Organic Celery",
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: "Whole Milk",
        price: 2.69,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
    console.log(res);
    })
    .catch(e => {
    console.log(e);
})