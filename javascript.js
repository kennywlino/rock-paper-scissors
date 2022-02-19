// Pseudocode:
// define a variable for playerSelection
// define a variable for computerSelection
// get input (rock, paper, scissors) from player and save in playerSelection
// lowercase playerSelection for case-insensitivity
// randomly pick between rock, paper, scissors for computerSelection
// compare playerSelection and computerSelection and go through logic for win/tie/loss:
//      if they are the same: (rock: rock)
//           it's a tie;
//      else if (player is rock) && (computer is paper) OR
//              (player is scissors) && (computer is rock) OR 
//              (player is paper) && (computer is scissors)
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
    return computerSelection;
}


let computerSelection = computerPlay();
let playerSelection = prompt("");
