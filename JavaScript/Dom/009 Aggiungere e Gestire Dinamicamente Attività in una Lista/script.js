var numeroAttivita = 0;
var numeroAttivitaCompletate = 0;

function aggiungi() {
  // Ottenere valore input
  const input = document.querySelector("#Input");
  const inputValue = input.value;

  // Creare elemento li
  const li = document.createElement("li");
  li.innerText = inputValue;

  // Aggiungere br
  // const br = document.createElement("br");

  // Creare bottone
  const button = document.createElement("button");
  button.innerText = "Attività Completata";

  // Implementare onclick del bottone
  button.addEventListener("click", () => {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
      button.innerText = "Attività Completata";
      numeroAttivitaCompletate--;
    } else {
      li.style.textDecoration = "line-through";
      button.innerText = "Segna incompleta";
      numeroAttivitaCompletate++;
    }
  });

  // Aggiungere bottone al li
  li.appendChild(button);

  // Aggiungere li alla lista
  const lista = document.querySelector("#elenco");
  lista.appendChild(li);
  numeroAttivita++;

  // Pulire input
  input.value = "";

  // Aggiornare totale
  document.querySelector("#totaleAttivita").innerText = numeroAttivita;
  document.querySelector("#attivitaCompletate").innerText =
    numeroAttivitaCompletate;
}

function riepilogo() {
  const elemento = document.querySelector("#nascosto");
  elemento.style.display = "block";
}

function reset() {
  const lista = document.querySelector("#elenco");
  lista.innerHTML = "";
}
