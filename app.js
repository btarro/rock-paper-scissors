// Rock, Paper, Scissors, Simple.

// Constants and variables
const gameObjects = ["rock", "paper", "scissors"];
const status = document.getElementById('gameStatus');
const verbal = document.getElementById('verbal');

var playerValue;
var opponentValue;


// Listen for player choice
document.getElementById("rock").addEventListener('click', findWinner);
document.getElementById("paper").addEventListener('click', findWinner);
document.getElementById("scissors").addEventListener('click', findWinner);
document.getElementById('playAgain').addEventListener('click', resetGame);




// Game Logic
function findWinner(e) {

    // Collect Player Input & calculate CPU selection
    playerValue = e.target.id;
    opponentValue = gameObjects[Math.floor(Math.random() * gameObjects.length)];

    // Visual reaction & disable of onclick events after a choice is made
    document.getElementById(playerValue).classList.toggle("btnActionPlayer");
    document.getElementById(opponentValue).classList.toggle("btnActionOpp");
    document.getElementById('gameStatus').classList.toggle("heroFlex");
    document.getElementById('playAgain').classList.remove("hidePlayAgain");
    document.getElementById('playAgain').classList.add("showPlayAgain");
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

    verbal.textContent = "You picked " + playerValue + " and the CPU picked " + opponentValue + "..";

    (playerValue == opponentValue) ? status.textContent = "DRAW!"
        : (playerValue == "rock" && opponentValue == "scissors") ? status.textContent = "YOU WIN!"
            : (playerValue == "paper" && opponentValue == "rock") ? status.textContent = "YOU WIN!"
                : (playerValue == "scissors" && opponentValue == "paper") ? status.textContent = "YOU WIN!"
                    : status.textContent = "YOU LOSE!"

};

function resetGame() {
    window.location.reload();
}


