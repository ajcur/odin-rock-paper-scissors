let roundNumber = 0;
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * options.length);
    let computerChoice = options[index];
    return computerChoice;
};

let buttons = document.querySelector("#buttons");

buttons.addEventListener("click", function(e) {
    roundNumber++;
    let humanChoice = "";
    switch (e.target.id) {
        case "btn-rock":
            humanChoice = "Rock";
            break;
        case "btn-paper":
            humanChoice = "Paper";
            break;
        case "btn-scissors":
            humanChoice = "Scissors";
    }
    playRound(humanChoice);
});

/* function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ");
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    if (humanChoice !== 'Rock' && humanChoice !== 'Scissors' && humanChoice !== 'Paper') {
        humanChoice = undefined;
    }
    return humanChoice;
} */

function determineRoundWinner(computerChoice, humanChoice) {
    let roundWinner;
    switch(humanChoice) {
        case 'Rock':
            if (computerChoice == 'Rock') {
                roundWinner = 'tie';
            } else if (computerChoice == 'Paper') {
                roundWinner = 'computer';
                computerScore++;
            } else if (computerChoice == 'Scissors') {
                roundWinner = 'human';
                humanScore++;
            }
            break;
        case 'Paper':
            if (computerChoice == 'Rock') {
                roundWinner = 'human';
                humanScore++;
            } else if (computerChoice == 'Paper') {
                roundWinner = 'tie';
            } else if (computerChoice == 'Scissors') {
                roundWinner = 'computer';
                computerScore++;
            }
            break; 
        case 'Scissors':
            if (computerChoice == 'Rock') {
                roundWinner = 'computer';
                computerScore++;
            } else if (computerChoice == 'Paper') {
                roundWinner = 'human';
                humanScore++;
            } else if (computerChoice == 'Scissors') {
                roundWinner = 'tie';
            }
            break;
    }
    return roundWinner;
};

function playRound(humanChoice) {
/*     let humanChoice = getHumanChoice();
    if (!humanChoice) {
        console.log('You might have had a spelling error – try again!');
        return;
    } */
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
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (humanScore >= 5) {
        console.log("Game Over! Human wins the game!");
    } else if (computerScore >= 5) {
        console.log("Game Over! Computer wins the game!");
    }
    return roundWinner;
};

/* function playGame() {
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

playGame(); */