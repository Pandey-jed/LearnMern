let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  const attemptsText = document.getElementById("attempts");

  if (isNaN(userGuess)) {
    feedback.textContent = "⛔ Please enter a valid number!";
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    feedback.textContent = `🎉 Correct! The number was ${secretNumber}`;
    feedback.style.color = "lightgreen";
  } else if (userGuess < secretNumber) {
    feedback.textContent = "📉 Too low! Try again.";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "📈 Too high! Try again.";
    feedback.style.color = "orange";
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
}
