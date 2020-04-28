let playerScore = 0;
let computerScore = 0;

function computerPlay (){
    let computerChoice;
    let choice = 1 + (Math.random() * (3))
    if (choice < 2) {
        computerChoice = 'rock';
    }
    else if (choice <= 3) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return 'tie';
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return 'loss';
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return 'loss';
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return 'loss';
    }
    else {return 'win'}
}

function updateScore(e) {
    if (playRound(e.target.id, computerPlay() ) == 'loss') {
        computerScore += 1;
        document.getElementById("computerScore").innerHTML = computerScore;
    }
    else if (playRound(e.target.id, computerPlay() ) == 'win') {
        playerScore += 1;
        document.getElementById("playerScore").innerHTML = playerScore;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", updateScore);
    });