const computerSelection = comp();

function comp() {
  const rps = ['rock', 'paper', 'scissors']
  return rps[Math.floor(Math.random() * rps.length)];
}

const playerSelection = player() ;

function player() { 
  const rps = ['rock', 'paper', 'scissors']
  return rps[Math.floor(Math.random() * rps.length)];
}

  
function playRound(playerSelection, computerSelection) {
   if(playerSelection === computerSelection) {
     return "Tie, Play Again"
   } else if(playerSelection === 'rock' && computerSelection === 'paper') {
     return "You Lose! Paper beats Rock"
   } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
     return ("You Win! Rock beats Scissors")
   } else if(playerSelection === 'paper' && computerSelection === 'rock') {
     return ("You Win! Paper beats Rock")
   } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
     return ("You Lose! Scissors beats Paper")
   } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
     return ("You Lose! Rock beats Scissors")
   } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
     return ("You Win! Scissors beats Paper")
   }
}

console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection))

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