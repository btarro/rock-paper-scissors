// Rock, Paper, Scissors, Simple.

// 


var rock;
var paper;
var scissors;

const gameObjects = ["rock", "paper", "scissors"];

var playerValue = gameObjects[Math.floor(Math.random() * gameObjects.length)];

var opponentValue = gameObjects[Math.floor(Math.random() * gameObjects.length)];

console.log(playerValue);
console.log(opponentValue);

console.log(playerValue + opponentValue);

// Next session - Let's combine to make win/lose/draw variables

