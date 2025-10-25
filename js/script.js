function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let computerChoice = getComputerChoice();

if (computerChoice === 0) {
    console.log("Rock");
} else if (computerChoice === 1) {
    console.log("Paper");
} else if (computerChoice === 2) {
    console.log("Scissors");
} else {
    console.log("Invalid computer choice.");
}

function getHumanChoice() {
    return parseInt(prompt("Type 1 = Rock, 2 = Paper, 3 = Scissors"));
}

let humanChoice = getHumanChoice();

switch (humanChoice) {
    case 1:
        console.log("Rock");
        break;
    case 2:
        console.log("Paper");
        break;
    case 3:
        console.log("Scissors");
        break;
    default:
        console.log("Invalid choice");
        break;
}