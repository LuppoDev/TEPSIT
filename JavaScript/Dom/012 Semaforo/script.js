var rosso = document.getElementById("rosso");
var giallo = document.getElementById("giallo");
var verde = document.getElementById("verde");

setRed();

function setRed() {
  reset();
  rosso.style.backgroundColor = "red";
  setTimeout(setGreen, 5000);
}

function setYellow() {
  reset();
  giallo.style.backgroundColor = "yellow";
  setTimeout(setRed, 2000);
}

function setGreen() {
  reset();
  verde.style.backgroundColor = "green";
  setTimeout(setYellow, 4000);
}

function reset() {
  rosso.style.backgroundColor = "transparent";
  giallo.style.backgroundColor = "transparent";
  verde.style.backgroundColor = "transparent";
}
