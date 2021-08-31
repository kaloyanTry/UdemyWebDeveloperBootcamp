let students = [];

let movies = ["Tom", "Line", "Pablo"];

movies.push("Oliver"); //add to end
movies.unshift("FirstName"); //add to start
movies.push("End", "End2"); // add several elements to start
movies.pop(); //remove from the end
movies.shift(); //remove from start

//exercise:
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; 
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");


movies.concat(planets); //merge arrays

//planets.slice(1, 4); //slice the array from 1 to 4 element

planets.splice(3, 1, "MARS"); // Remove the 3 element/just 1/ and add MARS

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3][1] = 'Hugo'; //update the value of null with Hugo
