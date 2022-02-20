// Pseudocode:
// define a variable for playerSelection
// define a variable for computerSelection
// get input (rock, paper, scissors) from player and save in playerSelection
// lowercase playerSelection for case-insensitivity
// randomly pick between rock, paper, scissors for computerSelection
// compare playerSelection and computerSelection and go through logic for win/tie/loss:
//      if they are the same: (rock: rock)
//           it's a tie;
//      else if (computer is rock) && (player is scissors) OR
//              (computer is paper) && (player is rock) OR 
//              (computer is scissors) && (player is paper)
//           computer wins;
//      else:
//           player wins;


// To generate random ints, we need to add Math.floor() since JavaScript does not distinguish between ints and floats;
// see https://www.w3schools.com/js/js_random.asp
function computerPlay() {
    let computerIntSelection = Math.floor(Math.random() * 3);
    let computerSelection;
    switch (computerIntSelection) {
    case 0:
        computerSelection = 'rock';
        break;
    case 1:
        computerSelection = 'paper';
        break;
    case 2:
        computerSelection = 'scissors';
        break;
    }
    return computerSelection;result = alert(result)
}
function playRound(computerSelection, playerSelection) {
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (computerSelection == playerSelection) { 
        return "It's a tie!";
    } else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
               (computerSelection == 'paper' && playerSelection == 'rock') ||
               (computerSelection == 'scissors' && playerSelection == 'paper')) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You Win! ${playerSelection} beats ${computerSelection}`; 
        }
}


const computerSelection = computerPlay();
let playerSelection = prompt("Let's play! Rock! Paper! Scissors!");
playerSelection = playerSelection.toLowerCase();
result = playRound(computerSelection, playerSelection)
alert(result)
