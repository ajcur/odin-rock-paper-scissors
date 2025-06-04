/* Create function getComputerChoice
Create variable computerChoice within function scope.
getComputerChoice generates a random number between 0-1 using Math.random 3 times
Compare these 3 numbers – if first one is highest, computerChoice is assigned rock, if second one is highest, computerChoice is assigned paper, and if third one is highest, computerChoice is assigned scissors
getComputerChoice returns computerChoice as a string */

function getComputerChoice() {
    let computerChoice;
    let number1 = Math.random();
    let number2 = Math.random();
    let number3 = Math.random();
    if (number1 > number2 && number1 > number3) {
        computerChoice = 'rock';
    } else if (number2 > number1 && number2 > number3) {
        computerChoice = 'paper';
    } else if (number3 > number1 && number3 > number2) {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

/* Create function getHumanChoice
Create variable humanChoice within function scope
prompt() method asks user for their choice and assigns their choice to variable humanChoice
humanChoice is then made all-lowercase, to make sure it's case-insensitive
getHumanChoice returns humanChoice as a string */

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

/* Create variable computerScore and initialise to 0
Create variable humanScore and intialise to 0 */

let computerScore = 0;
let humanScore = 0;

/* Create function playRound that takes computerChoice and humanChoice as arguments
Create variable roundWinnter within function scope
playRound checks all the possible combinations for computerChoice and humanChoice and assigns roundWinnter to be either 'human' or 'computer'
If roundWinner is 'human', output "you win!" message and increment humanScore by 1
If roundWinner is 'computer', output "you lose!" message and increment computerScore by 1 */

function playRound(computerChoice, humanChoice, roundNumber) {
    console.log(`Computer chose: ${computerChoice}!`)
    let roundWinner;
    switch(humanChoice) {
        case 'rock':
            if (computerChoice == 'rock') {
                roundWinner = 'tie';
            } else if (computerChoice == 'paper') {
                roundWinner = 'computer';
            } else if (computerChoice == 'scissors') {
                roundWinner = 'human';
            }
            break;
        case 'paper':
            if (computerChoice == 'rock') {
                roundWinner = 'human';
            } else if (computerChoice == 'paper') {
                roundWinner = 'tie';
            } else if (computerChoice == 'scissors') {
                roundWinner = 'computer';
            }
            break; 
        case 'scissors':
            if (computerChoice == 'rock') {
                roundWinner = 'computer';
            } else if (computerChoice == 'paper') {
                roundWinner = 'human';
            } else if (computerChoice == 'scissors') {
                roundWinner = 'tie';
            }
            break;
    }
    if (roundWinner == 'human') {
        console.log(`You win Round Number ${roundNumber}! ${humanChoice} beats ${computerChoice}!`);
        ++ humanScore;
    } else if (roundWinner == 'computer') {
        console.log(`You lose Round Number ${roundNumber}! ${computerChoice} beats ${humanChoice}!`);
        ++ computerScore;
    } else if (roundWinner == 'tie') {
        console.log(`Round Number ${roundNumber} is a tie! Try again!`);
    }
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

/* Create function playGame that calls playRound five times */

function playGame() {
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
}

playGame();