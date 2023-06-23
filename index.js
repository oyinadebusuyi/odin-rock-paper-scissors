//Create an array of the three choices
const choices = ["rock", "paper", "scissors"];

//Create a function to generate computer's choice
const getComputerChoice = () => {
   const randomChoice = choices[Math.floor(Math.random() * choices.lenght)];
   return randomChoice; 
}

//create a function to determine the winner
const determineWinner = (playerSelection, computerSelection) => {
    if(playerSelection === computerSelection) {
        return "Tie";
    } else if(
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "Player";
    }else {
        return "Computer";
    }
}

//Create a function to play a single round
const playRound = (playerSelection, computerSelection) => {
    const result = determineWinner(playerSelection, computerSelection);
    if(result === "Tie") {
        return `It's a Tie!`
    } else if(result === "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    
    }
}

//create a funciton to get player's input
const getPlayerChoice = () => {
   let validatedInput = false;
   while(validatedInput === false) {
    const playersInput = prompt("Rock Paper Scissors");
    if(playersInput === null) {
        continue;
    }
    const playersInputinLower = playersInput.toLowerCase();
    if(choices.includes(playersInputinLower)) {
        validatedInput = true;
        return playersInputinLower;
    } 
  }
}


//create a new function that calls "playRound" to play a 5 round game
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome!")
    for (let i = 0; i <5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("-----------------");
        if(determineWinner(playerSelection, computerSelection) === "Player") {
            playerScore++;
        }else if(determineWinner(playerSelection, computerSelection) === "Computer") {
            computerScore++;
        }


    }
    console.log("Game Over!")
    if(playerScore > computerScore) {
        console.log("Player Wins!");
    }else if(playerScore < computerScore) {
        console.log("Computer Wins!");
    }else {
        console.log("We have a tie!");
    }

}

game();
