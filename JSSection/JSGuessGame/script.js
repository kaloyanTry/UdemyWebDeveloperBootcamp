let maxNumInput = parseInt(prompt("Enter the max number:"));

while(!maxNumInput) {
    maxNumInput = parseInt(prompt("Enter a valid number:"));
}

const targetNum = Math.floor(Math.random() * maxNumInput) + 1;

let guess = parseInt(prompt("Enter your first guess:"));
let numberOfGuesses = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    
    numberOfGuesses++;

    if (guess > targetNum) {
        guess = prompt("Your guess is too high. Enter a new guess:");
    }
    else {
        guess = prompt("Your guess is too low. Enter a new guess:");
    }
}

if (guess === 'q') {
    console.log("You Quit!");
}
else {
    console.log(`You GUESS! It tooks you ${numberOfGuesses} guesses to guess the NUMBER ${targetNum}!`);
}


