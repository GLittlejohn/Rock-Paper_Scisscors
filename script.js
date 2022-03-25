const rps = ["rock", "paper", "scissors"]

function computerPlay() {
    computerSelection = rps[Math.floor(Math.random() * rps.length)]
    return computerSelection;
}

function personPlay() {
    personSelection = rps[Math.floor(Math.random() * rps.length)]
    return personSelection;
  }
  
  console.log(personPlay());
  console.log(computerPlay());