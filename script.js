const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;
  let gameOver = false;

  const rockBtn = document.querySelector(".rock");
  const paperBtn = document.querySelector(".paper");
  const scissorsBtn = document.querySelector(".scissors");

  rockBtn.addEventListener("click", () => handleClick("rock"));
  paperBtn.addEventListener("click", () => handleClick("paper"));
  scissorsBtn.addEventListener("click", () => handleClick("scissors"));

  const getComputerChoice = () => {
    const picks = ["rock", "paper", "scissors"];
    const randomPick = Math.floor(Math.random() * picks.length);
    return picks[randomPick];
  };

  const selections = document.querySelector(".selections");
  const playerSelection = document.createElement("h3");
  const computerSelection = document.createElement("h3");
  selections.append(playerSelection, computerSelection);

  const scores = document.querySelector(".scores");
  const compScore = document.createElement("h3");
  const playerScore = document.createElement("h3");
  scores.append(playerScore, compScore);

  function handleClick(playerChoice) {
    if (gameOver) return;

    const computerChoice = getComputerChoice();

    //this outputs the selections in DOM

    playerSelection.textContent = `Player chose => ${playerChoice}`;
    computerSelection.textContent = `Computer chose => ${computerChoice}`;

    //------ outputs in DOM

    playRound(playerChoice, computerChoice);
  }

  const draw = document.querySelector(".draw");
  const playerWins = document.querySelector(".playerWins");
  const computerWins = document.querySelector(".computerWins");
  const errorMsg = document.querySelector(".errorMsg");
  const pick = document.querySelector(".pick");

  const ifCompWins = document.querySelector(".finalResultsComp");
  ifCompWins.style.display = "none";

  const ifPlayerWins = document.querySelector(".finalResultsPlayer");
  ifPlayerWins.style.display = "none";

  const playRound = function (player, computer) {
    draw.style.display = "none";
    playerWins.style.display = "none";
    computerWins.style.display = "none";
    errorMsg.style.display = "none";
    pick.style.display = "none";

    if (player === computer) {
      draw.style.display = "block";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      playerWins.style.display = "block";
      humanScore++;
    } else if (
      (computer === "rock" && player === "scissors") ||
      (computer === "paper" && player === "rock") ||
      (computer === "scissors" && player === "paper")
    ) {
      computerWins.style.display = "block";
      computerScore++;
    } else {
      errorMsg.style.display = "block";
    }

    //this outputs the scores

    compScore.textContent = `Computer score: ${computerScore}`;

    playerScore.textContent = `Player score: ${humanScore}`;

    if (computerScore === 5) {
      ifCompWins.style.display = "block";
      gameOver = true;
    } else if (humanScore === 5) {
      ifPlayerWins.style.display = "block";
      gameOver = true;
    }
  };
};

playGame();

const resetGame = document.querySelector(".reset");
resetGame.addEventListener("click", () => {
  location.reload();
});
