var contatore = 0;

function aggiungi(nomeBrano) {
  contatore = contatore + 1;
  document.getElementById("contatore-carrello").innerHTML = contatore;

  alert("🎶 " + nomeBrano + " aggiunto alla playlist!");

  var li = document.createElement("li");
  li.innerHTML = nomeBrano;

  var btn = document.createElement("button");
  btn.innerHTML = "Rimuovi";
  btn.className = "left-margin";
  btn.addEventListener("click", () => {
    document.getElementById("elenco").removeChild(li);
    contatore = contatore - 1;
    document.getElementById("contatore-carrello").innerHTML = contatore;
  });

  li.appendChild(btn);
  document.getElementById("elenco").appendChild(li);
}

function visualizza() {
  var contenitore = document.getElementById("contenitore-carrello");
  if (contenitore.style.display === "none") {
    contenitore.style.display = "block";
  } else {
    contenitore.style.display = "none";
  }
}

function svuota() {
  contatore = 0;
  document.getElementById("elenco").innerHTML = "";
  document.getElementById("contatore-carrello").innerHTML = contatore;
  document.getElementById("contenitore-carrello").style.display = "none";
  alert("Playlist svuotata!");
}
