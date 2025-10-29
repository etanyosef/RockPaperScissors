// get computer choice using math random with floor(*3) = 0 to 2
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

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
        console.log(`Player: ${humanChoice} & Computer: ${computerChoice} is Draw!`);
    } else if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        console.log(`Player: ${humanChoice} beats Computer: ${computerChoice}. Player wins!`);
        // add score
        humanScore++;
    } else if (
        computerChoice === "Rock" && humanChoice === "Scissors" ||
        computerChoice === "Paper" && humanChoice === "Rock" ||
        computerChoice === "Scissors" && humanChoice === "Paper"
    ) {
        console.log(`Computer: ${computerChoice} beats Player: ${humanChoice}. Computer wins!`);
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