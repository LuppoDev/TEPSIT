var riga = 0;
var colonna = 0;
var intervalId = null;

function move() {
  if (colonna >= 200) {
    colonna = 0;
  }
  if (riga >= 500) {
    riga = 0;
    colonna += 50;
  } else {
    riga++;
  }
  document.getElementById("box").style.left = riga + "px";
  document.getElementById("box").style.top = colonna + "px";
}

function stopMove() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function resumeMove() {
  intervalId = setInterval(move, 20);
}

function reset() {
  colonna = 0;
  riga = 0;
}