let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('computerScore');
const computerSelection = comp();

function comp() {
  const rps = ['rock', 'paper', 'scissors']
  return rps[Math.floor(Math.random() * rps.length)];
}

const playerSelection = player();

function player() { 
  const rps = ['rock', 'paper', 'scissors']
  return rps[Math.floor(Math.random() * rps.length)];
}

  
function playRound(playerSelection, computerSelection) {
   if(playerSelection === computerSelection) {
     return "Tie, Play Again"
   } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return "You Lose! Paper beats Rock"
   } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return ("You Win! Rock beats Scissors")
   } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return ("You Win! Paper beats Rock")
   } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return ("You Lose! Scissors beats Paper")
   } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
     return ("You Lose! Rock beats Scissors")
   } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return ("You Win! Scissors beats Paper")
   }
}

console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection))
console.log(playerScore)
console.log(computerScore)

const selectionButtons = document.querySelectorAll('[data-selection]')

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    console.log(selection)
}