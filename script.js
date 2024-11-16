const hand = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let computerScore = 0;
let userScore = 0;

/*
Function that capitalizes the first letter while keeping the rest lowercase.
*/
function title(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/*
Random Number Generator function that returns a number between 1 and 5 corresponsing a string of one of the choices:
[Rock, Paper, Scissors, Lizard, Spock]
*/
function getComputerChoice(min, max){
    const minceil = Math.ceil(min);
    const maxfloor = Math.floor(max);

    const computerchoice = Math.floor(Math.random() * (maxfloor - minceil + 1) + minceil);

    return title(hand[computerchoice]);
}

/*
User prompt function that returns the user prompt, checking if it is within the hand array for a valid choice
*/
function getUserChoice(){
    var choice;
    do {
        choice = prompt("Type your choice: [Rock, Paper, Scissors, Lizard, Spock]");
        
        if(!hand.includes(title(choice))) {

            console.log("Please enter a valid option");

        }

    } while (!hand.includes(title(choice)));
    
    return title(choice);

    }

/*
Game function that runs one round of RPLS by checking if the user's choice is within the computer choice's weaknesses
*/
function playRound(computerChoice, userChoice){
    const rules = {
        Rock: ["Scissors", "Lizard"],
        Paper: ["Rock", "Spock"],
        Scissors: ["Paper", "Lizard"],
        Lizard: ["Spock", "Paper"],
        Spock: ["Rock", "Scissors"]
    }

    if (computerChoice === userChoice) return "Tie";

    return rules[computerChoice].includes(userChoice) ? "Computer Wins" : "User Wins";
}

let computerChoice = getComputerChoice(0,4);
let userChoice = getUserChoice();

const result = playRound(computerChoice, userChoice);

console.log(`Computer Hand: ${computerChoice}`);
console.log(`User Hand: ${userChoice}`);
console.log(result);