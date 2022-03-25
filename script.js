const rps = ["rock", "paper", "scissors"];


function computerPlay() {
    computerSelection = rps[Math.floor(Math.random() * rps.length)]
    return computerSelection;
}
