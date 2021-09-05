//NORMAL function:
/* function add(x, y) {
    return x + y;
}
add(3, 5); */

// ARROW function:
// const sum = (a, b) => (a + b);
// sum(3, 4);

// RETURNING functions:
// function makeBetweenFunction(min, max) {
//     return function (val) {
//         return val >= min && val <= max;
//     }
// }
// const inAgeRange =  makeBetweenFunction(18, 65);
// inAgeRange(17);

// METHODS = properties on objects:
// const math = {
//     multiply: function (x, y) {
//         return x * y;
//     },
//     divide: function (x, y) {
//         return x / y;
//     },
//     square: function (x) {
//         return x * x;
//     }
// };
// shorthand /since ES6/:
// const math = {
//     multiply(x, y) {
//         return x * y;
//     },
//     add(x, y) {
//         return x + y;
//     }
// };

// Default params /since ES6/:
// function multiply(x = 1, y = 1) {
//     return x * y;
// }

//Map function:
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers.map(function (num) {
//     return num / 2;
// });