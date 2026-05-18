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

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  );
}

 let computerScore = 0;
 let humanScore = 0;

 function getRoundResults(userOption) {
  const computerResult = getComputerChoice();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    humanScore++;
    return `Player wins! ` + userOption +  ' beats ' + computerResult;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ` + userOption;
  } else {
    computerScore++;
    return "Computer wins! " + computerResult + ' beats ' + userOption;
  }
};

const div = document.createElement('div');
  document.body.appendChild(div);

const scoreDiv = document.createElement('div');
document.body.appendChild(scoreDiv);


function showResults(userOption) {
  const roundmessage = getRoundResults(userOption);
  div.textContent = roundmessage;

  scoreDiv.textContent = 'human ' + humanScore + " | computer " + computerScore;
    

  if (humanScore === 3 || computerScore === 3) {
    scoreDiv.textContent =`${
      humanScore === 3 ? "Player" : "Computer"
    } has won the game!`;

  }

};

  
const rock = document.createElement('button');
rock.textContent = 'rock';
document.body.appendChild(rock);

rock.addEventListener('click',function(){
  showResults('rock');
})

const paper = document.createElement('button');
paper.textContent = 'paper';
document.body.appendChild(paper);

paper.addEventListener('click',function(){
  showResults('paper');
})

const scissors = document.createElement('button');
scissors.textContent = 'scissors';
document.body.appendChild(scissors);

scissors.addEventListener('click',function(){
  showResults('scissors');
});





