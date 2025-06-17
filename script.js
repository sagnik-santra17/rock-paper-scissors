let choice = ["Rock", "Paper", "Scissor"];

function cpuTurn() {
  return choice[Math.floor(Math.random() * choice.length)];
}

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Play 5 rounds
for (let round = 1; round <= 5; round++) {
  console.log(`--- Round ${round} ---`);

  let computerChoice = cpuTurn();
  let playerChoice = prompt("Rock, Paper, or Scissor?");

  // Capitalize first letter for consistency
  playerChoice =
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

  console.log("Computer chose:", computerChoice);
  console.log("Player chose:", playerChoice);

  if (playerChoice === computerChoice) {
    console.log("Match Draw!");
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissor") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissor" && computerChoice === "Paper")
  ) {
    console.log("Player Wins this round!");
    humanScore++;
  } else {
    console.log("Computer Wins this round!");
    computerScore++;
  }

  console.log(`Score -> Player: ${humanScore}, Computer: ${computerScore}\n`);
}

// Final result
console.log("=== Final Result ===");
if (humanScore > computerScore) {
  console.log("Player Wins the Game!");
} else if (computerScore > humanScore) {
  console.log("Computer Wins the Game!");
} else {
  console.log("The Game is a Draw!");
}
