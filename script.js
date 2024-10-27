/*
A function that checks for the winner, taking in the computer and user choices
*/


/*
Random Number Generator function that returns a number between 1 and 5 corresponsing a string of one of the choices:
(Rock, Paper, Scissors, Lizard, Spock)
*/
function getComputerChoice(min, max){
    const minceil = Math.ceil(min)
    const maxfloor = Math.floor(max)

    const computerchoice = Math.floor(Math.random() * (maxfloor - minceil + 1) + minceil)

    const hand = ("Rock", "Paper", "Scissors", "Lizard", "Spock")

    return hand[computerchoice]

}



console.log(getComputerChoice(0,4))