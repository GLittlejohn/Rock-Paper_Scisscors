const rps = ["rock", "paper", "scissors"]
const play = rps[Math.floor(Math.random() *rps.length)]

function computerPlay() {
    return play;
}

console.log(computerPlay());