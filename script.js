const options = ["rock", "paper", "scissors"];

const computerPlay = () => {
    let randomNum = Math.floor(Math.random() * (3 - 0) + 0);
    return options[randomNum];
};