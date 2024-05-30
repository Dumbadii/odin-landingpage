let CHOICE = ["rock", "scissor", "paper"];
let computerScore = 0;
let playerScore = 0;

let keepPlaying = true;

let computerChoice = "";
let playerChoice = "";
let winner = "";

while (keepPlaying) {
  playerChoice = getPlayerChoice();
  computerChoice = getComputerChoice();
  winner = decideWinner(playerChoice, computerChoice);
  winner == "player"
    ? playerWin()
    : winner == "computer"
      ? computerWin()
      : even();

  keepPlaying = choosePlayOrQuit();
}

showFinalScore();

function getComputerChoice() {
  let index = Math.floor(Math.random() * CHOICE.length);
  return CHOICE[index];
}

function getPlayerChoice() {
  let index = parseInt(
    prompt("Your choice? 0 for rock, 1 for scissor, 2 for paper: "),
  );
  if (index >= 0 && index < CHOICE.length) return CHOICE[index];
  console.log("Wrong input, choose again.");
  return getPlayerChoice();
}

function decideWinner(playerChoice, computerChoice) {
  const WINCOMBO = ["rockscissor", "scissorpaper", "paperrock"];
  if (playerChoice === computerChoice) return "even";
  if (WINCOMBO.includes(playerChoice + computerChoice)) return "player";
  return "computer";
}

function choosePlayOrQuit() {
  let answer = prompt("Play again? y/n: ");
  if (answer.toUpperCase() === "Y") return true;
  return false;
}

function showFinalScore() {
  console.log(
    `Player Score: ${playerScore} | Computer Score: ${computerScore}`,
  );
}

function computerWin() {
  console.log(`Computer win!! score:${++computerScore}`);
}
function playerWin() {
  console.log(`You win!! score:${++playerScore}`);
}
function even() {
  console.log("It's even.'");
}
