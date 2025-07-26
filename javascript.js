/* Create function getComputerChoice
Create variable computerChoice within function scope.
getComputerChoice generates a random number between 0-1 using Math.random 3 times
Compare these 3 numbers – if first one is highest, computerChoice is assigned rock, if second one is highest, computerChoice is assigned paper, and if third one is highest, computerChoice is assigned scissors
getComputerChoice returns computerChoice as a string */

/* let computerChoice;
let humanChoice; */

function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * options.length);
    let computerChoice = options[index];
    return computerChoice;
}

/* Create function getHumanChoice
Create variable humanChoice within function scope
prompt() method asks user for their choice and assigns their choice to variable humanChoice
humanChoice is then made all-lowercase, to make sure it's case-insensitive
getHumanChoice returns humanChoice as a string */

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ");
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    if (humanChoice !== 'Rock' && humanChoice !== 'Scissors' && humanChoice !== 'Paper') {
        humanChoice = undefined;
    }
    return humanChoice;
}

/* Create variable computerScore and initialise to 0
Create variable humanScore and intialise to 0 */

/* let computerScore = 0;
let humanScore = 0; */

/* Create function playRound that takes computerChoice and humanChoice as arguments
Create variable roundWinnter within function scope
playRound checks all the possible combinations for computerChoice and humanChoice and assigns roundWinnter to be either 'human' or 'computer'
If roundWinner is 'human', output "you win!" message and increment humanScore by 1
If roundWinner is 'computer', output "you lose!" message and increment computerScore by 1 */

function determineRoundWinner(computerChoice, humanChoice) {
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

/* function logWinner(roundWinner, roundNumber, computerChoice, humanChoice) {
    if (roundWinner == 'human') {
            console.log(`You win Round ${roundNumber}! ${humanChoice} beats ${computerChoice}!`);
        } else if (roundWinner == 'computer') {
            console.log(`You lose Round ${roundNumber}! ${computerChoice} beats ${humanChoice}!`);
        } else if (roundWinner == 'tie') {
            console.log(`Round ${roundNumber} is a tie! Try again!`);
    }
} */

function playRound(roundNumber) {
    let humanChoice = getHumanChoice();
    if (!humanChoice) {
        console.log('You might have had a spelling error – try again!');
        return;
    }
    let computerChoice = getComputerChoice();
    console.log(`Computer chose: ${computerChoice}!`)
    let roundWinner = determineRoundWinner(computerChoice, humanChoice);
    switch (roundWinner) {
        case 'human':
            console.log(`You win Round ${roundNumber}! ${humanChoice} beats ${computerChoice}!`);
            break;
        case 'computer':
            console.log(`You lose Round ${roundNumber}! ${computerChoice} beats ${humanChoice}!`);
            break;
        case 'tie':
            console.log(`Round ${roundNumber} is a tie! Try again!`);
    }
    return roundWinner;
}

/* Create function playGame that calls playRound five times */

function playGame() {
    let roundNumber = 1;
    let humanScore = 0;
    let computerScore = 0;
    while (computerScore < 5 && humanScore < 5) {
        let roundWinner = playRound(roundNumber);
        switch (roundWinner) {
            case 'human':
                humanScore++;
                break;
            case 'computer':
                computerScore++;
        };
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        if (roundWinner) {
            roundNumber++;
        }
    }
    if (computerScore > humanScore) {
        console.log('Computer wins the game!');
    } else console.log('You win the game!');
}

playGame();