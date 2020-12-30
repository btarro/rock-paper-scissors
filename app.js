// Rock, Paper, Scissors, Simple.

// Constants and variables
const gameObjects = ["rock", "paper", "scissors"];
var playerValue;
var opponentValue;

// Listen for player choice
document.getElementById("rock").addEventListener('click', findWinner);
document.getElementById("paper").addEventListener('click', findWinner);
document.getElementById("scissors").addEventListener('click', findWinner);



// Game Logic
function findWinner(e) {

    playerValue = e.target.id;
    opponentValue = gameObjects[Math.floor(Math.random() * gameObjects.length)];

    console.log("You: " + playerValue);
    console.log("CPU: " + opponentValue);

    (playerValue == opponentValue) ? console.log("DRAW")
        : (playerValue == "rock" && opponentValue == "scissors") ? console.log("YOU WIN")
            : (playerValue == "paper" && opponentValue == "rock") ? console.log("YOU WIN")
                : (playerValue == "scissors" && opponentValue == "paper") ? console.log("YOU WIN")
                    : console.log("YOU LOSE");
};

