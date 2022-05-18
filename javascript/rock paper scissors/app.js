// console.log("Rock Paper Scissors");

const arr = ['Rock', 'Paper', 'scissors'];

function computerPlay(){
    let len = arr.length;
    let rand = Math.floor(Math.random() * len);

    // console.log(arr[rand]);
    return arr[rand];
}


function playRound(playerSelection, computerSelection){

    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    if(cs == ps){
        return "It's a tie: ";
    }
    else if(cs != ps) {
        return `${cs} , 'beats', ${ps}`;
    }

}

const playerSelection = "rock";
let computerSelection;

function game(){
    for(let i=0; i<5; i++){
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

    }
}

game();