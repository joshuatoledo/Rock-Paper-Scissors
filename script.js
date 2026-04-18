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

  let computerScore = 0;
  let humanScore = 0;

function playRound (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats scissors.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats rock.";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats paper.";
  } else {
    computerScore++;
    return 'You Lose Computer Wins'
    
  }

  }


  function playGame () {

  
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));

}
}

playGame();








