let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');

// Start function

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
  isRunning = true;
  toggleButtons();
}

// Stop Function

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  toggleButtons();
}

// Reset Function

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime= 0;
  isRunning = false;
  toggleButtons();
  const formattedTime = formatTime(elapsedTime);
  timerElement.textContent = formattedTime;
}

function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  timerElement.textContent = formattedTime;
}

function formatTime(time) {
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return padTime(hours) + ':' + padTime(minutes) + ':' + padTime(seconds) + ':' + padTime(milliseconds);

}

function padTime(time) {
  return time.toString().padStart(2, '0');
}

function toggleButtons() {
  startButton.disabled = isRunning;
  pauseButton.disabled = !isRunning;
  resetButton.disabled = isRunning;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
