var contenitorePalloncini = document.querySelector("#contenitorePalloncini");
var contenitoreContatore = document.querySelector("#contatore");
var NUMERO_FISSO = 10; // Numero massimo di palloncini da tenere
var numeroPallonciniCorrente = 0; // Contatore dei palloncini attuali
var temporizzatore; // Variabile per gestire l'intervallo
var canExplode = false;

function aggiornaContatore() {
  contenitoreContatore.innerText =
    "Palloncini: " + numeroPallonciniCorrente + "/" + NUMERO_FISSO;
}

function creaPalloncino() {
  var palloncino = document.createElement("div");
  palloncino.className = "palloncino";

  var numeroCasuale = Math.floor(Math.random() * 100);
  palloncino.innerText = numeroCasuale;

  function gestisciScoppio() {
    if (!canExplode) return;
    palloncino.remove();
    numeroPallonciniCorrente--;
    aggiornaContatore();

    if (numeroPallonciniCorrente == 0) {
      alert("Complimento ha vinto");
      riavviaGioco();
    }

    if (numeroPallonciniCorrente < NUMERO_FISSO) {
      if (temporizzatore) clearInterval(temporizzatore);
      temporizzatore = setInterval(function () {
        if (numeroPallonciniCorrente < NUMERO_FISSO) {
          creaPalloncino();
        } else {
          clearInterval(temporizzatore);
        }
      }, 400);
    }
  }

  palloncino.addEventListener("click", gestisciScoppio);

  contenitorePalloncini.appendChild(palloncino);

  numeroPallonciniCorrente++;
  aggiornaContatore();
}

//creiamo per la prima volta i primi 10 palloncini ogni secondo

temporizzatore = setInterval(function () {
  if (numeroPallonciniCorrente < NUMERO_FISSO) {
    creaPalloncino();
  } else {
    canExplode = true;
    clearInterval(temporizzatore);
  }
}, 1000);

function riavviaGioco() {
  for (let i = 0; i < NUMERO_FISSO; i++) {
    creaPalloncino();
  }
}
