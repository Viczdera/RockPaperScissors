const playerOptions = ["rock", "paper", "scissors"];
function computerPlay() {
  return playerOptions[Math.floor(Math.random() * playerOptions.length)];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "won";
  } else {
    return "lost";
  }
}
function game(title) {
  let playerRecord = 0;
  let computerRecord = 0;
  let message = title || "";
  try {
    for (let i = 0; i < 5; i++) {
      const getPlayerInput = () => {
        const userInput = prompt(
          `${message}Round ${i + 1} : Rock, Paper or Scissors?`
        );
        if (userInput === null || userInput === undefined) return userInput;
        return userInput.trim().toLowerCase();
      };
      let playerSelection = getPlayerInput();
      while (true) {
        if (playerSelection === null) {
          alert(
            "You left challange. AI remains undefeated. Refresh to try again!"
          );
          return;
        } else if (!playerOptions.includes(playerSelection)) {
          message = "Invalid input! \n";
          playerSelection = getPlayerInput();
        } else {
          message = "";
          break;
        }
      }

      const computerSelection = computerPlay();
      const roundRes = playRound(playerSelection, computerSelection);
      if (roundRes === "won") {
        console.log(`You won round ${i + 1}`);
        playerRecord++;
      } else if (roundRes === "lost") {
        console.log(`You lost round ${i + 1}`);
        computerRecord++;
      } else {
        console.log(`Round ${i + 1} was a tie`);
      }
    }
    if (playerRecord > computerRecord) {
      console.log("Congratulations! You won! You beat the AI");
      alert("Congratulations! You won! You defeated the AI");
    } else if (playerRecord < computerRecord) {
      console.log("Damn! You lost. Don't give up! Try again!");
      alert("Damn! You lost. Don't give up! Try again!");
      game("You lost, try again! \n");
    } else {
      console.log("It's a tie! The game ended in a draw.");
      alert("It's a tie! The game ended in a draw.");
      game("It's a tie, try again! \n ");
    }
  } catch (error) {
    game("Invalid Input \n");
  }
}

game("Win all five rounds to defeat the AI \n");
