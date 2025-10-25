// get computer choice using math random with floor(*3) = 0 to 2
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    return parseInt(prompt("Type 1 = Rock, 2 = Paper, 3 = Scissors"));
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    switch (humanChoice) {
        case 1:
            humanChoice = "Rock";
            break;
        case 2:
            humanChoice = "Paper";
            break;
        case 3:
            humanChoice = "Scissors";
            break;
        default:
            console.log("Player: Invalid choice");
            break;
    }

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
        console.log("Draw");
    } else if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        console.log(`${humanChoice} beats ${computerChoice}. Player wins!`);
        humanScore++;
    } else if (
        computerChoice === "Rock" && humanChoice === "Scissors" ||
        computerChoice === "Paper" && humanChoice === "Rock" ||
        computerChoice === "Scissors" && humanChoice === "Paper"
    ) {
        console.log(`${computerChoice} beats ${humanChoice}. Computer wins!`);
        computerScore++;
    }

    // print computer and player choice
    console.log(`Player choice: ${humanChoice} ----- Computer choice: ${computerChoice}`);
    // print score
    console.log(`Player score: ${humanScore} ----- Computer score: ${computerScore}`);

}

function playGame() {
    for (round = 1; round <= 5; round++) {
        console.log(`Round: ${round}`);
        playRound();
    }
}

playGame();