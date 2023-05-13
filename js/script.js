const CHOICES = ['ROCK','PAPER','SCISSORS'];
let playerWins = 0;
let computerWins = 0;
let ties = 0;
let gameOverFlag = false;

// This function runs 1 round of rock paper scissors
function playRound(e) {
    let playerChoice = this.id.toUpperCase();
    let computerChoice = getComputerChoice().toUpperCase();
    //determine who won and increment total points
    if (gameOverFlag) return;
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
    //update score banner
    if (playerWins >= 5) {
        currentScore.innerHTML = `You've won! Congratulations!`;
        gameOverFlag = true;
    } else if (computerWins >= 5) {
        currentScore.innerHTML = `Oh no, you lost! Better luck next time!`;
        gameOverFlag = true;
    } else {
        currentScore.innerHTML = `Player: ${playerWins}, Computer: ${computerWins}, Ties: ${ties}`;
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

function resetScore() {
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    gameOverFlag = false;
    currentScore.innerHTML = 'Please select ROCK, PAPER, or SCISSORS to begin the game';
}

const currentScore = document.getElementById('score');

//initialize event listeners for the rock, paper, and scissors buttons
const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click',playRound));

//initialize event listener on the reset button
const reset = document.querySelector('#reset');
reset.addEventListener('click', resetScore);