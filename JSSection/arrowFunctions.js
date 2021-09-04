const sum = (x, y) => {
    return x + y;
};

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
};

//shorter way:
const rollDieShort = () => (
    Math.floor(Math.random() * 6) + 1
);

//even shorter:
const add = (a, b) => a + b;



//Set intervals: pass function interval:
console.log("HELLOOOO!");
setTimeout(() => {
    console.log("... are you here?")
}, 3000);

//JS Exercise: filter function:
function validUserNames(names) {
    let filetredNames = names.filter(function (name) {
        return name.length < 10;
    })
    return filetredNames;
}

//Every and some funcctions:
function allEvens(nums) {
    return nums.every(nums => nums % 2 === 0);
}

