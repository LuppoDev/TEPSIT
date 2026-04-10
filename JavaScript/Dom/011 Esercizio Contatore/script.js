var contatore = 0;
var interval;

function conteggio() {
  contatore++;
  document.querySelector("#conta").innerHTML = contatore
}

function stopCont() {
  clearInterval(interval);
}

function IniziaCont() {
    if (interval) clearInterval(interval)
  interval = setInterval(conteggio, 1000);
}
