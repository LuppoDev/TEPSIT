// Array di citazioni motivazionali
const citazioni = [
  "Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno.",
  "Non smettere mai di sognare, solo chi sogna può volare.",
  "La vita è 10% cosa ti accade e 90% come reagisci.",
  "Il futuro appartiene a coloro che credono nella bellezza dei propri sogni.",
  "Non aspettare. Il tempo non sarà mai giusto.",
];

var button = document.createElement("button");
button.innerText = "Aggiungi citazione";

button.addEventListener("click", () => {
  const citazioneRandom =
    citazioni[Math.floor(Math.random() * citazioni.length)];
  const body = document.querySelector("body");
  const paragrafo = document.createElement("p");
  paragrafo.innerText = citazioneRandom;
  body.appendChild(paragrafo);
});

document.body.appendChild(button);
