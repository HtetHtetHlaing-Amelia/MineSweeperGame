var mine;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
var finished = false;

var times = 0;
buildMine();

/**This function is used to build mine. */
function buildMine() {
  var x = Math.floor(Math.random() * 6) + 1;
  var y = Math.floor(Math.random() * 6) + 1;
  mine = x + "" + y;
  console.log(mine);
  p1 = x - 1 + "" + (y - 1);
  p2 = x - 1 + "" + y;
  p3 = x - 1 + "" + (y + 1);
  p4 = x + "" + (y - 1);
  p5 = x + "" + (y + 1);
  p6 = x + 1 + "" + (y - 1);
  p7 = x + 1 + "" + y;
  p8 = x + 1 + "" + (y + 1);
}

/**This function is used for clicking cells. */
function pressCell(obj) {
  if (finished == false) {
    var userpress = Number(obj.id);
    diableCell(obj);

    if (userpress == mine) {
      obj.innerText = "BOOM";
      obj.style.backgroundColor = "red";
      gameOverSound();
      gameOverDisplay();
    } else if (
      times < 35 &&
      (userpress == p1 ||
        userpress == p2 ||
        userpress == p3 ||
        userpress == p4 ||
        userpress == p5 ||
        userpress == p6 ||
        userpress == p7 ||
        userpress == p8)
    ) {
      playClick();
      obj.style.backgroundColor = "red";
    } else if (times == 35) {
      /*console.log("hello");*/
      checkForWin(obj);
    } else {
      playClick();
      obj.style.backgroundColor = "green";
    }
  }
}
/** This function is used for diable cells */
function diableCell(obj) {
  /* console.log("disable");*/
  obj.disabled = true;
  times++;
  console.log(times);
}

/** This function is used for click sound. */
function playClick() {
  var audio = document.getElementById("clicksound");
  audio.play();
}
/** This function is used for game over sound. */
function gameOverSound() {
  var audio = document.getElementById("gameover");
  audio.play();
}

/** This function is used for displaying gamae over. */
function gameOverDisplay() {
  finished = true;
  for (let index = 0; index < 36; index++) {
    document.getElementsByClassName("cells")[index].style.backgroundColor =
      "red";
  }
  document.getElementById("32").innerText = "G";
  document.getElementById("33").innerText = "A";
  document.getElementById("34").innerText = "M";
  document.getElementById("35").innerText = "E";

  document.getElementById("42").innerText = "O";
  document.getElementById("43").innerText = "V";
  document.getElementById("44").innerText = "E";
  document.getElementById("45").innerText = "R";
}

/**This function is used for winner. If you choose adjacent of bome (p4 or p5 or p2 or p7), you win. */
function checkForWin(obj) {
  /*console.log("enter");*/
  var c = Number(obj.id);
  if (c != mine) {
    /*console.log("hi");*/
    playWin();
    winnerDisplay();
  }
}

/**This function is used for winner Display. */
function winnerDisplay() {
  finished = true;
  for (let index = 0; index < 36; index++) {
    document.getElementsByClassName("cells")[index].style.backgroundColor =
      "green";
  }
  document.getElementById("32").innerText = "V";
  document.getElementById("33").innerText = "I";
  document.getElementById("34").innerText = "C";
  document.getElementById("35").innerText = "T";

  document.getElementById("42").innerText = "O";
  document.getElementById("43").innerText = "R";
  document.getElementById("44").innerText = "Y";
  document.getElementById("45").innerText = "!";
}

/** This function is used for playing winner song. */
function playWin() {
  var audio = document.getElementById("win");
  audio.play();
}
