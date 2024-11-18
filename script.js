let choices = ['ROCK','PAPER','SICSSORS'];
let computerScore =0;
let humanScore =0;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    return choice;
}
let getHumanChoice = ()=>{
    let humanChoice =  prompt('Type your choice (rock,paper,sicssors) or (0,1,2):');
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
    }else if ( (computer === 0 && human === 1) || (computer === 1 && human === 2) || 
        (computer === 2 && human === 0) ){
            // human wins
            humanScore++;
            alert('You played '+choices[human]+' Computer played '+choices[computer]);
            alert('You won !');
        } else{
            // computer wins
            computerScore++;
            alert('You played '+choices[human]+' Computer played '+choices[computer]);
            alert('You lost !');
        }
    }


function playGame(){
    let n = parseInt(prompt("How many rounds do you wanna play ?"));
    for (let i =0; i<n;i++){
        const humanChoice = getHumanChoice();
        const computerChoice= getComputerChoice();
        playRound(computerChoice,humanChoice);
        console.log('Your score: '+humanScore);
        console.log('Computer score: '+computerScore);
    }
    alert('Your score: '+humanScore+'Computer score: '+computerScore);
    if (humanScore > computerScore){alert('You win !')}else{'You lost'};
}

playGame();