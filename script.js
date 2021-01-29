const userList = document.querySelectorAll("#user-choice button");
const computerList = document.querySelectorAll("#computer-choice button");
const resetGame = document.getElementById("reset-game");
const score = document.getElementById("result");
const versus = document.getElementById("match");

let userOption;
// let computerOption = computerList[Math.floor(Math.random() * (3 - 0) + 0)].value
let userScore = 0,
    computerScore = 0;

// Adding a listener for each user button
userList.forEach(option => {
    option.addEventListener("click", () => {
        userOption = option.value;
    });
});

// Updating all the variable to begin a new game
const newGame = () => {
    userScore = 0;
    computerScore = 0;
};

// This function updates the score while you are playing
const updateScore = () => score.innerHTML = `${userScore} - ${computerScore}`;