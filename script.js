const playerScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('computerScore');
const selectionButtons = document.querySelectorAll('[data-selection]')

const rps = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
      },
      {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
      },
      {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'
      }
    ]

const computerSelection = comp();
function comp() {
  return rps[Math.floor(Math.random() * rps.length)];
}


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        const selection = rps.find(selection => rps.name === selectionName);
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = comp();
    const youWin = isWinner(selection, computerSelection);  
    const compWin = isWinner(computerSelection, selection);

    addSelectionResult(computerSelection, compWin);
    addSelectionResult(selection, youWin);

    if(youWin) incrementScore(playerScore_span);
    if(compWin) incrementScore(computerScore_span);
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
      return "Tie, Play Again"
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
         lose();
         return "You Lose! Paper beats Rock"
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
         win();
         return ("You Win! Rock beats Scissors")
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
         win();
         return ("You Win! Paper beats Rock")
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
         lose();
         return ("You Lose! Scissors beats Paper")
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
         lose();
      return ("You Lose! Rock beats Scissors")
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
         win();
         return ("You Win! Scissors beats Paper")
    }
 }

console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection))
console.log(playerScore)
console.log(computerScore)