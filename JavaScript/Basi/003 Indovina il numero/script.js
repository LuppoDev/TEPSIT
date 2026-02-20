function startGame() {
  // Genera un numero casuale tra 1 e 10
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  let inserimento;
  let tentativi = 0;

  do {
    inserimento = prompt("Inserisci il numero da indovinare tra 1-10.");

    if (inserimento === null) {
      alert("Operazione annullata.");
      return;
    }

    inserimento = parseInt(inserimento);

    if (isNaN(inserimento)) {
      alert("Inserimento non valido.");
    }

    tentativi++;

    if (inserimento === randomNumber) {
      alert(
        "Complimenti hai indovnato il numero, in " + tentativi + " tentativi!!"
      );
    } else if (inserimento < randomNumber) {
      alert("Peccato il numero e' piu grande.");
    } else if (inserimento > randomNumber) {
      alert("Peccato il numero e' piu piccolo.");
    }
  } while (inserimento !== randomNumber);
}
