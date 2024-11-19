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
Random Number Generator function that returns 
a number between 1 and 5 corresponsing the index of one of the choices:
[Rock, Paper, Scissors, Lizard, Spock]
*/
function getComputerChoice(min, max){
    const minceil = Math.ceil(min);
    const maxfloor = Math.floor(max);

    const computerchoice =
    Math.floor(Math.random() * (maxfloor - minceil + 1) + minceil);

    return title(hand[computerchoice]);
}

/*
User prompt function that returns the user prompt, 
checking if it is within the hand array for a valid choice
*/
function getUserChoice(){
    var choice;
    do {
        choice = prompt("Type your choice: [Rock, Paper, Scissors, Lizard, Spock]");
        
        // if the prompt is not inside the array "hand", catch error
        if(!hand.includes(title(choice))) {

            console.log("Please enter a valid option");

        }

    } while (!hand.includes(title(choice)));
    
    return title(choice);

    }

/*
Round function that runs one round of RPLS by 
checking if the user's choice is within the computer choice's weaknesses
*/
function playRound(computerChoice, userChoice){
    // dictionary to list the strengths of each hand
    const rules = {
        Rock: ["Scissors", "Lizard"],
        Paper: ["Rock", "Spock"],
        Scissors: ["Paper", "Lizard"],
        Lizard: ["Spock", "Paper"],
        Spock: ["Rock", "Scissors"]
    }

    if (computerChoice === userChoice) return 0;

    // if the key value of the computer choice has the user's choice in it, computer wins
    return rules[computerChoice].includes(userChoice) ? 1 : 2;
}

/*
Game function that using a for loop, 
runs playRound() and appends the scores depending on the result.
*/
function playGame(rounds){
    for (let i = 0; i < rounds; i++){
        // run choice functions to get each player's current choices
        let computerChoice = getComputerChoice(0,4);
        let userChoice = getUserChoice();

        console.log(`User Hand: ${userChoice}`);
        console.log(`Computer Hand: ${computerChoice}`);
        
        let result = playRound(computerChoice, userChoice);
        
        console.log(`${result == 0 ? "Tie" : result > 1 ? "User Wins" : "Computer Wins"}`)
        if (result == 1){
            computerScore +=1;
        }
        else if (result == 2){
            userScore +=1;
        }
        else{
            i-=1; // Add one more round if tied
        }
    }
    // returns result using ternary operation
    return userScore == computerScore ? "Tie" 
        : userScore > computerScore ? "User Wins" : "Computer Wins"
}


let result = playGame(3)
console.log(`Computer Score: ${computerScore}`);
console.log(`User Score: ${userScore}`);

console.log(`In the best out of ${computerScore+userScore}: ${result}`)