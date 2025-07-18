const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;

  while (humanScore < 5 && computerScore < 5) {
    const getComputerChoice = () => {
      const picks = ["rock", "paper", "scissors"];
      const randomPick = Math.floor(Math.random() * picks.length);
      return picks[randomPick];
    };

    const getHumanChoice = window.prompt("Choose your pick");
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice.toLowerCase();

    console.log(computerChoice);
    console.log(humanChoice);

    const playRound = function (player, computer) {
      if (player === computer) {
        console.log("It's a draw!");
      } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
      ) {
        console.log("You win this round!");
        humanScore++;
      } else if (
        (computer === "rock" && player === "scissors") ||
        (computer === "paper" && player === "rock") ||
        (computer === "scissors" && player === "paper")
      ) {
        console.log("Computer wins this round!");
        computerScore++;
      } else {
        console.log("Invalid input. Please choose rock, paper, or scissors.");
      }

      console.log(humanScore);
      console.log(computerScore);
    };
    playRound(humanChoice, computerChoice);
  }

  if (computerScore === 5) {
    console.log("Computer won the game");
  } else if (humanScore === 5) {
    console.log("Player won the game");
  }
};
``;

playGame();
