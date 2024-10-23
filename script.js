/*
Random Number Generator function that returns a number between 1 and 5 corresponsing a string of one of the choices:
(Rock, Paper, Scissors, Lizard, Spock)
*/
function getComputerChoice(min, max){
const minceil = Math.ceil(min)
const maxfloor = Math.floor(max)

const computerchoice = Math.floor(Math.random() * (maxfloor - minceil + 1) + minceil)

if (computerchoice == 1){
    return ("Rock")
}
else if (computerchoice == 2){
    return ("Paper")
}
else if (computerchoice == 3){
    return ("Scissors")
}
else if (computerchoice == 4){
    return ("Lizard")
}
else if (computerchoice == 5){
    return ("Spock")
}
}


console.log(getComputerChoice(1,5))