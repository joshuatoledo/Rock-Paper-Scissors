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





