// Function to generate computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Function to start the game
function playGame() {
  const userChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();

  if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
    console.log("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
    return;
  }

  const computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  const result = determineWinner(userChoice, computerChoice);
  console.log(result);
}

// Start the game
playGame();
