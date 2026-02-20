const colors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let started = false;
let level = 0;

document.addEventListener("keydown", () => {
  if (!started) {
    nextSequence();
    started = true;
  }
});

colors.forEach(color => {
  document.getElementById(color).addEventListener("click", () => {
    userPattern.push(color);
    playSound(color);
    animate(color);
    check(userPattern.length - 1);
  });
});

function nextSequence() {
  userPattern = [];
  level++;
  document.getElementById("level-title").textContent = "Level " + level;

  const randomColor = colors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomColor);
  animate(randomColor);
  playSound(randomColor);
}

function check(current) {
  if (userPattern[current] === gamePattern[current]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    playSound("wrong");
    document.body.classList.add("game-over");
    document.getElementById("level-title").textContent = "Game Over! Press Any Key";
    setTimeout(() => document.body.classList.remove("game-over"), 200);
    resetGame();
  }
}

function playSound(color) {
  new Audio("sounds/" + color + ".mp3").play();
}

function animate(color) {
  const btn = document.getElementById(color);
  btn.classList.add("pressed");
  setTimeout(() => btn.classList.remove("pressed"), 100);
}

function resetGame() {
  level = 0;
  gamePattern = [];
  started = false;
}
