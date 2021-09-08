const btnPlayer1 = document.querySelector("#btnPl1Score");
const btnPlayer2 = document.querySelector("#btnPl2Score");
const displayPl1 = document.querySelector("#pl1Display");
const displayPl2 = document.querySelector("#pl2Display");
const winningScoreSelect = document.querySelector("#scores");
const btnReset = document.querySelector("#btnReset");

let isGameOver = false;
let winningScore = 3;
let playerOneScore = 0;
let playerTwoScore = 0;

btnPlayer1.addEventListener('click', function () {
        if (!isGameOver) {
        playerOneScore++;
        if (playerOneScore === winningScore) {
            isGameOver = true;
            displayPl1.classList.add("winner");
            displayPl2.classList.add("loser");
        }
        displayPl1.textContent = playerOneScore;
    }
})

btnPlayer2.addEventListener('click', function () {
        if (!isGameOver) {
        playerTwoScore++;
        if (playerTwoScore === winningScore) {
            isGameOver = true;
            displayPl2.classList.add("winner");
            displayPl1.classList.add("loser");
        }
        displayPl2.textContent = playerTwoScore;
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

btnReset.addEventListener('click', reset);

function reset() {
    isGameOver = false;

    playerOneScore = 0;
    playerTwoScore = 0;
    displayPl1.textContent = 0;
    displayPl2.textContent = 0;
    displayPl1.classList.remove("winner", "loser");
    displayPl2.classList.remove("winner", "loser");
}