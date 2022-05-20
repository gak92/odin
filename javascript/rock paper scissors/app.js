const arr = ['Rock', 'Paper', 'scissors'];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

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
        playerScore += 1;
        return "It's a tie: ";
    }
    else if(cs != ps) {
        computerScore += 1;
        return `${cs} , 'beats', ${ps}`;
    }

}


function game(){
    for(let i=0; i<5; i++){
        playerSelection = prompt("Enter your selection");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
    }
}

game();
if(playerScore > computerScore){
    console.log("You win the game.");
    console.log("Player Score: ", playerScore);
    console.log("Computer Score: ", computerScore);
}
else {
    console.log("You lose the game");
    console.log("Player Score: ", playerScore);
    console.log("Computer Score: ", computerScore);
}