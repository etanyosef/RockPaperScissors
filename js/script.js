// get computer choice using math random with floor(*3) = 0 to 2
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

const roundResults = document.querySelector('.round-results');
const txtComputerScore = document.querySelector('.computer-score');
const txtPlayerScore = document.querySelector('.player-score');

// initialize player score
let computerScore = 0;
let playerScore = 0;

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
        const roundResult = document.createElement('li');
        roundResult.textContent = `You picked ${humanChoice}, Computer picked ${computerChoice}. Draw!`;
        roundResults.prepend(roundResult); 
    } else if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        const roundResult = document.createElement('li');
        roundResult.textContent = `You picked ${humanChoice}, Computer picked ${computerChoice}. ${humanChoice} beats ${computerChoice}. Player wins!`;        
        roundResults.prepend(roundResult);
        // add score
        playerScore++;
        // display score
        txtPlayerScore.textContent = playerScore;
    } else if (
        computerChoice === "Rock" && humanChoice === "Scissors" ||
        computerChoice === "Paper" && humanChoice === "Rock" ||
        computerChoice === "Scissors" && humanChoice === "Paper"
    ) {
        const roundResult = document.createElement('li');
        roundResult.textContent = `You picked ${humanChoice}, Computer picked ${computerChoice}. ${computerChoice} beats ${humanChoice}. Computer wins!`;
        roundResults.prepend(roundResult);
        computerScore++;
        txtComputerScore.textContent = computerScore;
    }
    
    const roundResult = document.createElement('li');
    if (playerScore === 5) {
        roundResult.textContent = "You won the game!";
        // add color to result
        roundResult.classList.add('green');
        roundResults.prepend(roundResult);

        finishGame();        
        // add color to final scores
        txtPlayerScore.classList.add('green');
        txtComputerScore.classList.add('red');
    } else if (computerScore === 5) {
        roundResult.textContent = "You Lost. Computer Wins!";

        roundResult.classList.add('red');
        roundResults.prepend(roundResult);
        finishGame();

        txtPlayerScore.classList.add('red');
        txtComputerScore.classList.add('green');
    }

}

function finishGame() {
    // disable selection buttons
    const btnRPS = document.querySelectorAll('.rps-btn');
    btnRPS.forEach( (btn) => {
        btn.disabled = true;
    });
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

function newGame() {
    const btnRPS = document.querySelectorAll('.rps-btn');

    // reset scores to 0
    playerScore = 0;
    computerScore = 0;
    txtPlayerScore.textContent = playerScore;
    txtComputerScore.textContent = computerScore;

    // remove class
    txtPlayerScore.classList.remove('red');
    txtPlayerScore.classList.remove('green');
    txtComputerScore.classList.remove('red');
    txtComputerScore.classList.remove('green');
    
    const roundResult = document.createElement('li');
    roundResult.textContent = "----------------------NEW GAME!----------------------";
    roundResults.prepend(roundResult);

    // enable rock paper scissor choices
    btnRPS.forEach( (btn) => {
        btn.disabled = false;
    });
}

const btnNewGame = document.querySelector('#new-game');
btnNewGame.addEventListener('click', newGame);