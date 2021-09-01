/* const seatingChart = [
    ["Kristen", "Erik", "Julia"],
    ["Georg", "Juan", "Antonio", "Kevin"],
    ["Yame", "Sakura", "Jack", "Elena"]
];

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        const name = row[j];
        console.log(`${i + 1} name`);      
    }
}

let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}

const sectret = "baBy";
let guess = prompt("enter yuor code: ");
while (guess != sectret) {

    guess = prompt("enter yuor code: ");
}
console.log("Congrats!!!"); */

//Square of numbers exercise:
const numbers = [1,2,3,4,5,6,7,8,9]; 
for (let num of numbers) {
    console.log(num * num);
}
//for...of:
const seatingChart2 = [
    ["Kristen", "Erik", "Julia"],
    ["Georg", "Juan", "Antonio", "Kevin"],
    ["Yame", "Sakura", "Jack", "Elena"]
];

for (const seat of seatingChart2) {
    console.log(seat);
}

//Loops over OBJECTS: for...in:
const testScores = {
    keni: 89,
    bily: 91,
    jeni: 69,
    moris: 77,
    noni: 99
};

for (const student in testScores) {
    console.log(`${student} scored: ${testScores[student]}`);
}

let totalScore = 0;
let scores = Object.values(testScores);

for (const score in scores) {
    totalScore += score;
}

console.log(totalScore);

let avrgScore = total / scores;
console.log(avrgScore);