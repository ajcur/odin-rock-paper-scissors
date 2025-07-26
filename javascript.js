function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * options.length);
    let computerChoice = options[index];
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ");
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    if (humanChoice !== 'Rock' && humanChoice !== 'Scissors' && humanChoice !== 'Paper') {
        humanChoice = undefined;
    }
    return humanChoice;
}

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