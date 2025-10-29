// get computer choice using math random with floor(*3) = 0 to 2
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let computerScore = 0;
let humanScore = 0;

const roundResults = document.querySelector('.round-results');
const playerScore = document.querySelector('.player-score');

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    const roundResult = document.createElement('li');

    switch (computerChoice) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        default:
            console.log("Computer: Invalid choice");
            break;
    }

    if(
        humanChoice == "Rock" && computerChoice == "Rock" ||
        humanChoice === "Paper" && computerChoice === "Paper" ||
        humanChoice === "Scissors" && computerChoice === "Scissors"
    ) {
        // print human, computer choices and result
        roundResult.textContent = `Player: ${humanChoice} & Computer: ${computerChoice} is Draw!`;
        roundResults.appendChild(roundResult); 
    } else if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        roundResult.textContent = `Player: ${humanChoice} beats Computer: ${computerChoice}. Player wins!`;
        roundResults.appendChild(roundResult);
        // add score
        humanScore++;
    } else if (
        computerChoice === "Rock" && humanChoice === "Scissors" ||
        computerChoice === "Paper" && humanChoice === "Rock" ||
        computerChoice === "Scissors" && humanChoice === "Paper"
    ) {
        roundResult.textContent = `Computer: ${computerChoice} beats Player: ${humanChoice}. Computer wins!`;
        roundResults.appendChild(roundResult);
        computerScore++;
    }

    // print score
    console.log(`Player score: ${humanScore} ----- Computer score: ${computerScore}`);

}

function playGame() {

    if (humanScore > computerScore) {
        console.log("Player won the game!");
        console.log(`Player score: ${humanScore} | Computer score: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log("Computer won the game!");
        console.log(`Player score: ${humanScore} | Computer score: ${computerScore}`);
    } else {
        console.log("Draw!");
    }
}

const rpsSelection = document.querySelector('.rps-selection');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

// use event delegation
rpsSelection.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playRound('Rock');
            break;
        case 'paper':
            playRound('Paper');
            break;
        case 'scissors':
            playRound('Scissors');
            break;
    }
});