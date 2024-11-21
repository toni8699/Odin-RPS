let choices = ['ROCK','PAPER','SICSSORS'];
let computerScore =0;
let humanScore =0;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    return choices[choice];
}
let getHumanChoice = ()=>{
    humanChoice = humanChoice.toUpperCase();
    switch (humanChoice){
        case "0" : case "ROCK": return 0;
        case "1": case "PAPER":return 1;
        case "2": case "SICSSORS":return 2;
        default :alert('Invalid input');
    }
}


function playRound (computer,human){
    // if computer and human have the same choice, its a draw
    if (computer === human){
        alert('DRAW');
    }else if ( (computer === 'ROCK' && human === 'PAPER') || (computer === 'PAPER' && human === 'SICSSORS') || 
        (computer === 'SICSSORS' && human === 'ROCK') ){
            // human wins
            humanScore++;
            alert('You won !');
        } else{
            // computer wins
            computerScore++;
            alert('You lost !');
        }
    }

function playGame(){
        const computerChoice= getComputerChoice();
        //playRound(computerChoice,humanChoice);
        console.log('Your score: '+humanScore);
        console.log('Computer score: '+computerScore);
    alert('Your score: '+humanScore+'Computer score: '+computerScore);
    if (humanScore > computerScore){alert('You win !')}else{'You lost'};
}
const buttons = document.querySelectorAll('button');

console.log(buttons);
 const ROCK = buttons[0];
 const PAPER = buttons[1];
 const SICSSORS =buttons[2];
ROCK.addEventListener('click',()=>{
    const computerChoice = getComputerChoice();
    alert('you played ROCK');
    alert('computer played'+computerChoice);
    playRound(computerChoice,'PAPER');

});
PAPER.addEventListener('click',()=>{
    const computerChoice = getComputerChoice();
    alert('You played PAPER');
    alert('computer played'+computerChoice);
    playRound(computerChoice,'PAPER');
});
SICSSORS.addEventListener('click',()=>{
    const computerChoice = getComputerChoice();
    alert('You played SICSSORS');
    alert('computer played'+computerChoice);s
    playRound(computerChoice,'SICSSORS');
});

