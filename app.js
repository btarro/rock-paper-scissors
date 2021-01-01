const gameObjects = ["rock", "paper", "scissors"];
const status = document.getElementById('status-info');
const outcome = document.getElementById('outcome');

var playerValue;
var opponentValue;

document.getElementById("rock").addEventListener('click', renderWin);
document.getElementById("paper").addEventListener('click', renderWin);
document.getElementById("scissors").addEventListener('click', renderWin);
document.getElementById('play-again').addEventListener('click', () => window.location.reload());

function renderWin(e) {

    playerValue = e.target.id;
    opponentValue = gameObjects[Math.floor(Math.random() * gameObjects.length)];

    document.getElementById(playerValue).classList.toggle("btn-action-player");
    document.getElementById(opponentValue).classList.toggle("btn-action-opp");
    document.getElementById('outcome').classList.toggle("status-flaunt");
    document.getElementById('play-again').classList.remove("hidden-play-again");
    document.getElementById('play-again').classList.add("show-play-again");
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

    status.textContent = "You picked " + playerValue + " and the CPU picked " + opponentValue + "..";

    (playerValue == opponentValue) ? outcome.textContent = "IT'S A DRAW!"
        : (playerValue == "rock" && opponentValue == "scissors") ? outcome.textContent = "YOU WIN!"
            : (playerValue == "paper" && opponentValue == "rock") ? outcome.textContent = "YOU WIN!"
                : (playerValue == "scissors" && opponentValue == "paper") ? outcome.textContent = "YOU WIN!"
                    : outcome.textContent = "YOU LOSE!";

};