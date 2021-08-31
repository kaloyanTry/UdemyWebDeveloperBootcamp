//Creating an object:
const product = {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"]
};

//adjusting the key/price:
product.price = 3.09;

//Create new properties:
product.country = "USSR";


//Taking info from the object:
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
let fullAddress = restaurant.address + " " + restaurant.city + " " + restaurant.state + " " + restaurant.zipcode;


//LOOPS:
//Exercise1:
for (let num = 1; num <= 6; num += 1) {
    console.log("Da ba dee da ba daa");
    console.log(num);
}

//Exercise1:
for(let i = 25; i >= 0; i-=5) {
    console.log(i);
}

//Exercise1:
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}