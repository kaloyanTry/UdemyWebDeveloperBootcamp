console.log("Hello from JS file!");

let ratingn = 6;

if (ratingn === 6) {
    console.log("You are right! Perfect!");
}
else if (ratingn === 0) {
    console.log("Not a positive number");
}
else {
    console.log("Sorry, to hear it ;(");
}

function isEven(num){
   if (num % 2 === 0) {
       console.log("even");
   }
}

function getColor(phrase){
    if (phrase === 'stop') {
        console.log('red');
    } else if (phrase === 'slow') {
        console.log('yellow')
    } else if (phrase === 'go') {
        console.log('green')
    }
    else {
        console.log('purple');
    }
}

const pass = prompt("Please, enter your password:");

if (pass.length >= 6) {
    if (pass.indexOf(' ') === -1) {
        console.log("Valid password");
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("Short password.At least 6 chars+");
}

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    default:
        console.log("Hooreyday :)")
}

