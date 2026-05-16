function getComputerChoice () {
 const randomNumber = Math.random();
  if (randomNumber < 0.33) {
   return "rock";
 } else if (randomNumber < 0.66) {
   return "paper";
 } else {
   return "scissors";
 }

}

function getHumanChoice () {
  let humanChoice = prompt("Please choose rock, paper, or scissors.");
  return humanChoice.toLowerCase();
}

 
function playGame () {

 let computerScore = 0;
  let humanScore = 0;
 

function playRound (humanChoice, computerChoice) {
   let result = "";
  if (humanChoice === computerChoice) {
    result =  "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    result =  "You win! Rock beats scissors.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
     result = "You win! Paper beats rock.";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    result =  "You win! Scissors beats paper.";
  } else {
    computerScore++;
    result =  'You Lose Computer Wins'
    
  }

    const div = document.createElement('div');
    div.textContent = result;

    const scoreDiv = document.createElement('div');
    scoreDiv.textContent = 'human' + humanScore + " | computer " + computerScore;

   

  }
  

}


playGame();



const rock = document.createElement('button');
rock.textContent = 'rock';
const paper = document.createElement('button');
paper.textContent = 'paper';
const scissors = document.createElement('button');
scissors.textContent = 'scissor';





