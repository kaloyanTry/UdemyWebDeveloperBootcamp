//Second way of events JSq the first is on htmel directly
const btn = document.querySelector("#v2");

btn.onclick = function () {
    console.log("You clicked me!");
};

function scream() {
    console.log("AHHHHHH!");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = function () {
    alert("You just ckicked the h1!");
};

//Third way: the best way: addEventListener or remove
const btn3 = document.querySelector("#v3");

btn3.addEventListener('dbclick', function () {
    alert("you clicked btn3");
});

//btn3.addEventListener('click', () => alert("You clicked btn3")); arrow function
//Practise 60: Click Events:
// const btnHello = document.querySelector("#hello");
// btnHello.addEventListener('click', function () {
//     console.log("hello");
// });

// const btnGB = document.querySelector("#goodbye");
// btnGB.addEventListener('click', function () {
//     console.log("goodbye");
// });

const btnColor = document.querySelector("#v4");
const h2 = document.querySelector("h2");

btnColor.addEventListener('click', function () {
    //document.body.style.backgroundColor = "green"; one Color

    const newColor = makeColor();
    document.body.style.backgroundColor = newColor;
    h2.innerText = newColor;
});

const makeColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};