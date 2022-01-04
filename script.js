let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10);

const getAbsoluteDistance = (numA, numB) => {
  let distance = numA - numB;
  return Math.abs(distance);
}

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {  
  generateTarget();
  if (getAbsoluteDistance(humanGuess, secretNumber) <= getAbsoluteDistance(computerGuess,secretNumber ) ){
    return true;
  } 
  return false;
}

const updateScore = winner => { 
  if (winner === 'human'){
    humanScore++;
  } else if (winner === 'computer'){
    computerScore++;
  } 
}

const advanceRound = () => {
  currentRoundNumber++;
}
