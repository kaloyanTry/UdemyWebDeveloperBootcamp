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

// const p = new Product({
//     name: "Grapefruit",
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//     console.log(e)
// })

const seedProducts = [
    {
        name: "Grapefruit",
        price: 1.99,
        category: 'fruit'
    },
    {
        name: "Tommato",
        price: 0.99,
        category: 'vegetable'
    },
    {
        name: "Melon",
        price: 4.99,
        category: 'fruit'
    },
    {
        name: "Watern=melon",
        price: 3.99,
        category: 'fruit'
    },
        {
        name: "Celery",
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