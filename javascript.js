/* Create function getComputerChoice
Create variable computerChoice within function scope.
getComputerChoice generates a random number between 0-1 using Math.random 3 times
Compare these 3 numbers – if first one is highest, computerChoice is assigned rock, if second one is highest, computerChoice is assigned paper, and if third one is highest, computerChoice is assigned scissors
getComputerChoice returns computerChoice as a string */

let computerChoice;
let humanChoice;

function getComputerChoice() {
    let number1 = Math.random();
    let number2 = Math.random();
    let number3 = Math.random();
    if (number1 > number2 && number1 > number3) {
        computerChoice = 'Rock';
    } else if (number2 > number1 && number2 > number3) {
        computerChoice = 'Paper';
    } else if (number3 > number1 && number3 > number2) {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

/* Create function getHumanChoice
Create variable humanChoice within function scope
prompt() method asks user for their choice and assigns their choice to variable humanChoice
humanChoice is then made all-lowercase, to make sure it's case-insensitive
getHumanChoice returns humanChoice as a string */

function getHumanChoice() {
    humanChoice = prompt("Enter your choice: ");
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
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

function playRound(computerChoice, humanChoice) {
    console.log(`Computer chose: ${computerChoice}!`)
    let roundWinner;
    switch(humanChoice) {
        case 'Rock':
            if (computerChoice == 'Rock') {
                roundWinner = 'tie';
            } else if (computerChoice == 'Paper') {
                roundWinner = 'computer';
            } else if (computerChoice == 'Scissors') {
                roundWinner = 'human';
            }
            break;
        case 'Paper':
            if (computerChoice == 'Rock') {
                roundWinner = 'human';
            } else if (computerChoice == 'Paper') {
                roundWinner = 'tie';
            } else if (computerChoice == 'Scissors') {
                roundWinner = 'computer';
            }
            break; 
        case 'Scissors':
            if (computerChoice == 'Rock') {
                roundWinner = 'computer';
            } else if (computerChoice == 'Paper') {
                roundWinner = 'human';
            } else if (computerChoice == 'Scissors') {
                roundWinner = 'tie';
            }
            break;
    }
    return roundWinner;
}

/* Create function logWinner that takes roundWinner from that round as input and displays the appropriate message to the player */

function logWinner(roundWinner, roundNumber) {
    if (roundWinner == 'human') {
            console.log(`You win Round ${roundNumber}! ${humanChoice} beats ${computerChoice}!`);
            ++ humanScore;
        } else if (roundWinner == 'computer') {
            console.log(`You lose Round ${roundNumber}! ${computerChoice} beats ${humanChoice}!`);
            ++ computerScore;
        } else if (roundWinner == 'tie') {
            console.log(`Round ${roundNumber} is a tie! Try again!`);
        }
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

/* Create function playGame that calls playRound five times */

function playGame() {
    logWinner(playRound(getComputerChoice(), getHumanChoice()), '1');
    logWinner(playRound(getComputerChoice(), getHumanChoice()), '2');
    logWinner(playRound(getComputerChoice(), getHumanChoice()), '3');
    logWinner(playRound(getComputerChoice(), getHumanChoice()), '4');
    logWinner(playRound(getComputerChoice(), getHumanChoice()), '5');
    if (computerScore > humanScore) {
        console.log('Computer wins the game!');
    } else if (humanScore > computerScore) {
        console.log('You win the game!');
    } else console.log('The game is a tie!');
}

playGame();