function countdownTimer(durationInSeconds) {
  let timeLeft = durationInSeconds;

  const timerInterval = setInterval(() => {
      if (timeLeft <= 0) {
          clearInterval(timerInterval);
          console.log("Time's up!");
      } else {
          console.log(`Time left: ${timeLeft} seconds`);
          timeLeft--;
      }
  }, 1000);
}

// Example usage:
const durationInSeconds = parseInt(prompt("Enter the countdown duration in seconds:"));
if (!isNaN(durationInSeconds) && durationInSeconds > 0) {
  countdownTimer(durationInSeconds);
} else {
  console.log("Please enter a valid positive number of seconds.");
}
