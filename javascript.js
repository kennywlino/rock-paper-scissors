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

// version with buttons
// add EventListener on each button
// on button click:
//    playerSelection = button;
//    computerSelection = random;
//    get player result
//    update the score
//    if  player or computer has 5 wins:
//        disable buttons
//        announce winner

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

function updateScore(playerResult, totalScore) {
    if (playerResult == 'win') {
        totalScore['player'] += 1;
    } else if (playerResult == 'loss') {
        totalScore['comp'] += 1;
    } else {
        totalScore['tie'] += 1;
    }
}

function isEndGame() {
    return totalScore.player == 5 || totalScore.comp == 5;
}

function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.disabled = true);
}

function getWinner(totalScore) {
    if (totalScore.player == 5) {
        return "Player";
    } else {
        return "Computer"
    }
}

function displayScore(playerResult, totalScore) {
    divScore = document.getElementById('score');
    divScore.querySelector('#player #player-score').textContent = totalScore.player;
    divScore.querySelector('#tie #tie-score').textContent = totalScore.tie;
    divScore.querySelector('#computer #computer-score').textContent = totalScore.comp;
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) { 
        return "tie";
    } else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
               (computerSelection == 'paper' && playerSelection == 'rock') ||
               (computerSelection == 'scissors' && playerSelection == 'paper')) {
        return "loss";
    } else {
        return "win";
    }
}

function playGame(totalScore) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            computerSelection = computerPlay();
            playerSelection = button.id;
            playerResult = playRound(computerSelection, playerSelection);
            updateScore(playerResult, totalScore);
            displayScore(playerResult, totalScore);
            if(isEndGame()) {
                disableButtons();
                winner = getWinner(totalScore);
                alert(`GG! ${winner} wins`);
            }
        });
    });
}


let totalScore = {
    player: 0,
    comp: 0,
    tie: 0,
};
playGame(totalScore);

