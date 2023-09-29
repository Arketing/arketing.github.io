const counter = document.querySelector('.counter');

function updateCounter() {
  const daysRemaining = 42 - new Date().getDay();
  counter.textContent = daysRemaining;
}

setInterval(updateCounter, 1000);
