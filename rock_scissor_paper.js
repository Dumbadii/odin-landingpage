let CHOICE = ["rock", "scissor", "paper"];
let computerScore = 0;
let playerScore = 0;
let evenRounds = 0;

let computerChoice = "";

const gameInfo = document.querySelector(".gameInfo");
const roundInfo = document.querySelector(".roundInfo");
const divChoiceContainer = document.querySelector(".choiceContainer");
divChoiceContainer.addEventListener("click", (e) => {
  if (e.target?.dataset?.rps) playRound(e.target.dataset.rps);
});

showGameInfo();

function playRound(playerChoice) {
  computerChoice = getComputerChoice();
  winner = decideWinner(playerChoice, computerChoice);
  addScore(winner);
  showRoundInfo(playerChoice, computerChoice, winner);
  showGameInfo();
  if (playerScore + computerScore + evenRounds >= 5) {
    showGameResult();
    clearScores();
  }
}

function showRoundInfo(playerChoice, computerChoice, winner) {
  const choiceInfo = `You select ${playerChoice}, computer select ${computerChoice}: `;
  roundInfo.textContent =
    choiceInfo +
    (winner === "player"
      ? "You win!"
      : winner === "computer"
        ? "Computer win!"
        : "Even round!");
}
function addScore(winner) {
  winner === "player"
    ? playerScore++
    : winner === "computer"
      ? computerScore++
      : evenRounds++;
}
function clearScores() {
  playerScore = 0;
  computerScore = 0;
  evenRounds = 0;
}
function showGameResult() {
  let gameResult = "";
  gameResult =
    playerScore > computerScore
      ? "You win"
      : playerScore < computerScore
        ? "Computer Win"
        : "even";
  gameResult += " in 5 rounds";
  gameInfo.textContent += gameResult;
}
function getComputerChoice() {
  let index = Math.floor(Math.random() * CHOICE.length);
  return CHOICE[index];
}

function decideWinner(playerChoice, computerChoice) {
  const WINCOMBO = ["rockscissor", "scissorpaper", "paperrock"];
  if (playerChoice === computerChoice) return "even";
  if (WINCOMBO.includes(playerChoice + computerChoice)) return "player";
  return "computer";
}

function showGameInfo() {
  gameInfo.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
}
