const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    });

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    categories: [String] 
});

const Product = mongoose.model('Product', productsSchema);

const bike = new Product({ name: 'Mountain bike', price: 599, categories:['Cycling', 'Safety'] })
bike.save()
    .then(data => {
        console.log("It worked!")
        console.log(data);
    }).catch(err => {
        console.log("OH no error!")
        console.log(err)
})