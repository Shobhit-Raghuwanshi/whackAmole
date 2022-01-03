let square = document.querySelectorAll(".square");
let mole = document.querySelector(".mole");
let score = document.querySelector(".score");
let timeLeft = document.querySelector("#time-left");
let result = 0;
let currentTime = timeLeft.textContent;

function randomMole() {
  square.forEach(function (id) {
    id.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  hitPosition = randomPosition.id;
}
square.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result++;
      score.textContent = result;
    }
  });
});

let timerId = setInterval(randomMole, 500);

function countdown() {
  currentTime--;
  if (currentTime === 0) {
    clearInterval(timerId);
    alert("Game Over your score" + result);
  }
  timeLeft.textContent = currentTime;
}
let timerID = setInterval(countdown, 1000);
moveMole();
