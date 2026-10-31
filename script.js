const choices = ["rock", "paper", "scissors"];
const winningScore = 5;

const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const statusElement = document.querySelector("#status");
const resultElement = document.querySelector("#round-result");
const choiceButtons = document.querySelectorAll(".choice");
const resetButton = document.querySelector("#reset");

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(playerChoice) {
  if (gameOver) return;

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let outcome;

  if (playerChoice === computerChoice) {
    outcome = "It's a tie.";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore += 1;
    outcome = "You win this round!";
  } else {
    computerScore += 1;
    outcome = "Computer wins this round.";
  }

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  resultElement.textContent = `You chose ${playerChoice}; computer chose ${computerChoice}.`;

  if (playerScore === winningScore || computerScore === winningScore) {
    gameOver = true;
    statusElement.textContent = playerScore === winningScore ? "You won the game!" : "Computer won the game.";
    choiceButtons.forEach((button) => {
      button.disabled = true;
    });
  } else {
    statusElement.textContent = outcome;
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameOver = false;
  playerScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
  statusElement.textContent = "Choose your move to start.";
  resultElement.textContent = "";
  choiceButtons.forEach((button) => {
    button.disabled = false;
  });
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => playRound(button.dataset.choice));
});

resetButton.addEventListener("click", resetGame);
