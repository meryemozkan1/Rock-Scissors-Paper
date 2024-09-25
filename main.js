const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-sacore");
const resultEl = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".buttons span");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;

    // Puanları güncelle
    if (result.includes("Kazandın")) {
      playerScore++;
    } else if (result.includes("Kaybettin")) {
      computerScore++;
    }

    // Puanları DOM'a yansıt
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
  });
});

function playRound(playerSelection, computerSelection) {
  // Oyun mantığını buraya ekleyin
  // Bu fonksiyon "Kazandın", "Kaybettin" veya "Berabere" gibi bir sonuç döndürmeli
  if (playerSelection === computerSelection) {
    return "Berabere";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Kazandın";
  } else {
    return "Kaybettin";
  }
}

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
