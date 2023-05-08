const CHOICES = ['ROCK','PAPER','SCISSORS'];
let choiceMessage = 'Please select ROCK, PAPER, or SCISSORS';
let playerWins = 0;
let computerWins = 0;
let ties = 0;

game();

// This function runs 1 round of rock paper scissors
function playRound() {
    let playerChoice = getPlayerChoice().toUpperCase();
    let computerChoice = getComputerChoice().toUpperCase();
    if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') 
    || (playerChoice === 'PAPER' && computerChoice === 'ROCK') 
    || (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')) {
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        playerWins++;
    } else if ((computerChoice === 'ROCK' && playerChoice === 'SCISSORS') 
    || (computerChoice === 'PAPER' && playerChoice === 'ROCK') 
    || (computerChoice === 'SCISSORS' && playerChoice === 'PAPER')) {
        console.log(`You Lose! ${playerChoice} is beaten by ${computerChoice}`);
        computerWins++;
    } else {
        console.log(`Its a Tie! Both players chose ${playerChoice}`);
        ties++;
        

    }
}

// This function takes no input and uses a random number 0, 1, or 2 to decide rock, paper, or scissors
function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

// This function returns a value entered by the user
function getPlayerChoice() {
    return prompt(choiceMessage, 'ROCK');
}

// This function plays a game of rock paper scissors with 5 rounds
function game() {
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerWins > computerWins) {
        console.log(`You won ${playerWins}/5 games of ROCK PAPER SCISSORS!`);
    } else if (playerWins < computerWins) {
        console.log(`You lost, and the computer won ${computerWins}/5 games of ROCK PAPER SCISSORS!`);
    } else {
        console.log(`You ties with the computer!`);
    }
}