function dieFunc() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

dieFunc();


function yourName(firstName) {
    console.log(`Your name is ${firstName}`);
}
yourName("Erik");

//rank exercise:
function rant(message) {
    let mesgToUpper = message.toUpperCase();
    console.log(mesgToUpper);
    console.log(mesgToUpper);
    console.log(mesgToUpper);
}
rant("I hate beets");


// Snake Eyes function:
function isSnakeEyes(numFirst, numSecond) {
    if (numFirst === 1 && numSecond === 1) {
        console.log("Snake Eyes!");
    }
    else {
        console.log("Not Snake Eyes!");
    }
}
isSnakeEyes(1, 1);

// Return values practice:
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
multiply(2, 3);

//isShortWeather
function isShortWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    else {
        return false;
    }
}
isShortWeather(80);

//Last Element
function lastElement(arr) {
    let lastEl = arr[arr.length - 1];

    if (arr.length === 0) {
        return null;
    }

    return lastEl;
}
lastElement([3, 5, 7]);

//First letter UpperCase:
function capitalize(str) {
    let wordUp = str.replace(/^./, str[0].toUpperCase());
    return wordUp;
}
capitalize("elwphun");

//Sum Array:
function sumArray(arrNums) {
    let total = 0;
    
    for (let i = 0; i <= arrNums.length - 1; i++) {
        total += arrNums[i];
    }
    
    return total;
}

//Days of the week:
function returnDay(num) {
    if (num <= 0 || num > 7) {
        return null;
    }

    if (num === 1) {
        return "Monday";
    } else if (num === 2) {
        return "Tuesday";
    } else if (num === 3) {
        return "Wednesday";
    } else if (num === 4) {
        return "Thursday";
    } else if (num === 5) {
        return "Friday";
    } else if (num === 6) {
        return "Saturday";
    } else if (num === 7) {
        return "Sunday";
    }
}

//Methods shortcut:
const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
};

//Egg Laying Exercise:
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG";
    }
};
hen.name;
hen.eggCount;
hen.layAnEgg();
hen.layAnEgg();
hen.eggCount;

//forEach: very popular 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

nums.forEach(function (el) {
    console.log(el);
});

//the new and more efficient way is for... of
for (let elem of nums) {
    console.log(Element);
}

//Method map function array practice
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function (names) {
    return names.first;
});