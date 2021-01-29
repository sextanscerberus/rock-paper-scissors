const userList = document.querySelectorAll("#user-choice button");
const computerList = document.querySelectorAll("#computer-choice button");
const resetGame = document.getElementById("reset-game");
const score = document.getElementById("result");
const versus = document.getElementById("match");

let userOption;
let userScore = 0,
    computerScore = 0;

// Adding a listener for each user button and  plays the game
userList.forEach((option) => {
    option.addEventListener("click", () => {
        userOption = option.value;
        match(userOption);
        updateScore();
        endOfGame();

    });
});

// This function updates the score while you are playing
const updateScore = () => (score.innerHTML = `${userScore} - ${computerScore}`);

// This function matches the both options and print who is the winner
const match = (option) => {
    let computerOption = computerList[Math.floor(Math.random() * (3 - 0) + 0)];
    if (option == computerOption) {
        versus.innerHTML = "TIE!!! TRY AGAIN";
        scalesOption(computerOption);
    } else {
        switch (option) {
            case "rock":
                if (computerOption.value == "paper") {
                    versus.innerHTML = "YOU LOSE! PAPER BEATS ROCK";
                    computerScore++;
                    scalesOption(computerOption);
                } else {
                    versus.innerHTML = "YOU WIN! ROCK BEATS SCISSORS";
                    userScore++;
                    scalesOption(computerOption);
                }
                break;
            case "paper":
                if (computerOption.value == "scissors") {
                    versus.innerHTML = "YOU LOSE! SCISSORS BEATS PAPER";
                    computerScore++;
                    scalesOption(computerOption);
                } else {
                    versus.innerHTML = "YOU WIN! PAPER BEATS ROCK";
                    userScore++;
                    scalesOption(computerOption);
                }
                break;
            case "scissors":
                if (computerOption.value == "scissors") {
                    versus.innerHTML = "YOU LOSE! ROCK BEATS SCISSORS";
                    computerScore++;
                    scalesOption(computerOption);
                } else {
                    versus.innerHTML = "YOU WIN! SCISSORS BEATS PAPER";
                    userScore++;
                    scalesOption(computerOption);
                }
                break;
        }
    }
};

//This function print a message if you win or lose
const endOfGame = () => {
    if (userScore == 5) {
        versus.innerHTML = `WINNER WINNER CHICKEN DINNER! YOU WIN!!!!`;
        resetGame.innerHTML = "New Game?";
    } else if (computerScore == 5) {
        versus.innerHTML = `NOBODY CAN'T BEATS ME! YOU LOSE!!!!`;
        resetGame.innerHTML = "New Game?";
    }
};

//This function scales the computer option when it pick an option
const scalesOption = (option) => {
    option.style.transform = "scale(1.2)";
    setTimeout(() => (option.style.transform = "scale(1.0)"), 750);
};

// Updating all the variable to begin a new game
const reset = () => {
    userScore = 0;
    computerScore = 0;
    updateScore();
    versus.innerHTML = "";
    resetGame.innerHTML = "Reset Game!";
};

resetGame.addEventListener("click", reset());