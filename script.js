function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    let computerPlay;
    switch (choice) {
        case 0: computerPlay ="Rock"; break;

        case 1:computerPlay ="Paper"; break;

        case 2:computerPlay ='Sicssors';break;

    }
    return computerPlay;
}
let getHumanChoice = ()=>{
    let choice = parseInt(prompt('0 : Rock, 1: Paper, 2: Sicssors : '));
    let humanPlay;
    switch (choice) {
        case 0: humanPlay ="Rock"; break;

        case 1:humanPlay ="Paper"; break;

        case 2:humanPlay ='Sicssors';break;
    }
    return humanPlay;

}
let computerScore =0;
let humanScore =0;
console.log(getHumanChoice());