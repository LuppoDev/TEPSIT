function somma(a, b) {
  let num1 = prompt("Inserisci primo nmero");
  let num2 = prompt("Inserisci secondo nmero");

  if (num1 === null || num2 === null) {
    alert("Inserimento annullato");
    return;
  }

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Inserimenti non validi");
  } else {
    alert("Il risultato e " + (num1 + num2));
  }
}

function sottrazione(a, b) {
  let num1 = prompt("Inserisci primo numero");
  let num2 = prompt("Inserisci secondo numero");

  if (num1 === null || num2 === null) {
    alert("Inserimento annullato");
    return;
  }

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Inserimenti non validi");
  } else {
    alert("Il risultato è " + (num1 - num2));
  }
}

function moltiplicazione(a, b) {
  let num1 = prompt("Inserisci primo numero");
  let num2 = prompt("Inserisci secondo numero");

  if (num1 === null || num2 === null) {
    alert("Inserimento annullato");
    return;
  }

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Inserimenti non validi");
  } else {
    alert("Il risultato è " + num1 * num2);
  }
}

function divisione(a, b) {
  let num1 = prompt("Inserisci primo numero");
  let num2 = prompt("Inserisci secondo numero");

  if (num1 === null || num2 === null) {
    alert("Inserimento annullato");
    return;
  }

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Inserimenti non validi");
  } else if (num2 === 0) {
    alert("Impossibile dividere per zero");
  } else {
    alert("Il risultato è " + num1 / num2);
  }
}
