const computerSelection = () => {
    const rps = ['rock', 'paper', 'scissors']
    return rps[Math.floor(Math.random() * 3)];
  }
  
  const playerSelection = () => {
    const rps = ['rock', 'paper', 'scissors']
    return rps[Math.floor(Math.random() * 3)];
  }
  
  function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
      return "Tie, Play Again";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      return "You Lose! Paper beats Rock";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      return ("You Win! Rock beats Scissors")
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      return ("You Win! Paper beats Rock")
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      return ("You Lose! Scissors beats Paper")
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      return ("You Lose! Rock beats Scissors")
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      return ("You Win! Scissors beats Paper")
    }
  }
  console.log(computerSelection())
  console.log(playerSelection())
  console.log(playRound());