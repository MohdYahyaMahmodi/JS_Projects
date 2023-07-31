function rollDice() {
  // Generate random numbers for two dice (1 to 6)
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;

  // Calculate the total sum of the dice rolls
  const sum = dice1 + dice2;

  // Display the result of the dice rolls
  console.log(`Dice 1: ${dice1}, Dice 2: ${dice2}, Total: ${sum}`);

  // Notify the user if they win or lose based on the outcome
  if (sum === 7 || sum === 11) {
      console.log("Congratulations! You Win!");
  } else if (sum === 2 || sum === 3 || sum === 12) {
      console.log("Sorry, You Lose!");
  } else {
      console.log("Roll again!");
  }
}

// Example usage:
rollDice();
