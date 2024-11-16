const hand = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const computerScore = 0;
const userScore = 0;

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
    let userchoice
    do {
        userchoice = prompt("Type your choice: [Rock, Paper, Scissors, Lizard, Spock]");
        
        if(!hand.includes(title(userchoice))) {

            console.log("Please enter a valid option");

        }

    } while (!hand.includes(title(userchoice)))
    
    return title(userchoice);

    }

/*
A function that checks for the winner, taking in the computer and user choices
*/


console.log(getComputerChoice(0,4));
console.log(getUserChoice())
