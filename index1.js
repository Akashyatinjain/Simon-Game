let colors = ["red", "blue", "green", "yellow"];
  let gamePattern = [];
  let userPattern = [];
  let started = false;
  let level = 0;

  document.addEventListener("keydown", function () {
    if (!started) {
      nextColor();
      started = true;
    }
  });

  document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {
      let clickedColor = this.id;
      userPattern.push(clickedColor);
      flash(clickedColor);
      checkAnswer(userPattern.length - 1);
    });
  });

  function nextColor() {
    userPattern = [];
    level++;
    document.getElementById("level-title").textContent = "Level " + level;

    let random = Math.floor(Math.random() * 4);
    let randomColor = colors[random];
    gamePattern.push(randomColor);
    flash(randomColor);
  }

  function flash(color) {
    let btn = document.getElementById(color);
    btn.classList.add("pressed");
    setTimeout(() => btn.classList.remove("pressed"), 200);
  }

  function checkAnswer(currentIndex) {
    if (userPattern[currentIndex] === gamePattern[currentIndex]) {
      if (userPattern.length === gamePattern.length) {
        setTimeout(nextColor, 1000);
      }
    }else{
        document.getElementById("#level-title").textContent="Game over enter any to restart again"
        level=0;
        start=false;
        gamePattern=[];
    }
  }