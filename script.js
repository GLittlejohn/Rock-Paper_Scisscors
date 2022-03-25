const rps = ["rock", "paper", "scissors"]
let computerSelection
let personSelection
let result

function computerPlay() {
    computerSelection = rps[Math.floor(Math.random() * rps.length)]
    return computerSelection;
}

function personPlay() {
    personSelection = rps[Math.floor(Math.random() * rps.length)]
    return personSelection;
  }

console.log(computerPlay())
console.log(personPlay())

function game() {
    if (computerPlay() === personPlay()) {
          result = "It's a draw"
    }
    if (computerPlay() === "rock" && personPlay() === "paper") {
          result = "You win!"
    }
    if (computerPlay() === "rock" && personPlay() === "scissors") {
        result = "You lose!"
    }
    if (computerPlay() === "paper" && personPlay() === "scissors") {
        result = "You win!"
    }
    if (computerPlay() === "paper" && personPlay() === "rock") {
        result = "You win!"
    }
    if (computerPlay()=== "scissors" && personPlay() === "rock") {
        result = "You win!"
    }
    if (computerPlay() === "scissors" && personPlay() === "paper") {
        result = "You lose!"
    }
    return result;
  }
  console.log(game())