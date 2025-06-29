function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const compChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
  document.getElementById('comp-choice').textContent = `Computer chose: ${compChoice}`;

  let result = "";

  if (userChoice === compChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')
  ) {
    result = "You win! 🎉";
  } else {
    result = "You lose! 😞";
  }

  document.getElementById('winner').textContent = `Result: ${result}`;
}
