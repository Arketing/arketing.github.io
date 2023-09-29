const timer = document.querySelector('.timer');

// Set the start date to September 29, 2023.
const startDate = new Date('2023-09-29');

// Calculate the end date.
const endDate = new Date(startDate.getTime() + 42 * 24 * 60 * 60 * 1000 + 12 * 60 * 60 * 1000 + 37 * 60 * 1000);

function updateTimer() {
  // Calculate the time remaining.
  const timeRemaining = endDate - new Date();

  // Convert the time remaining to days, hours, minutes, and seconds.
  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the timer display.
  timer.textContent = `${daysRemaining} days, ${hoursRemaining} hours, ${minutesRemaining} minutes, and ${secondsRemaining} seconds`;
}

setInterval(updateTimer, 1000);
