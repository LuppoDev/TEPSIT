var a = 2;
var b = 8;

function somma(a, b) {
  return a + b;
}
function sottrazione(a, b) {
  return a - b;
}
function moltiplicazione(a, b) {
  return a * b;
}
function divisione(a, b) {
  return a / b;
}

function provaAlert() {
    document.getElementById(1).innerHTMl("Somma" + somma(a, b))
    document.getElementById(2).innerHTMl("Sottrazione" + sottrazione(a, b))
    document.getElementById(3).innerHTMl("Moltiplicazione" + moltiplicazione(a, b))
    document.getElementById(4).innerHTMl("Divisione" + divisione(a, b))
}
