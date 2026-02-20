// File: script.js

// 1. VALIDAZIONE DEL MODULO
function validaRegistrazione() {
  // Rimuove eventuali errori precedenti
  rimuoviErrori();

  // Variabile per controllare se tutto è valido
  let tuttoValido = true;

  // CONTROLLO NOME ATLETA
  let nomeAtleta = document.getElementById("nomeAtleta").value;
  let nomeValido = true;

  // Controlla se il nome è vuoto
  if (nomeAtleta === "") {
    alert("Errore: inserisci il nome dell'atleta!");
    document.getElementById("nomeAtleta").className = "errore";
    tuttoValido = false;
    nomeValido = false;
  } else {
    // Controlla ogni carattere del nome usando charCodeAt()
    for (let i = 0; i < nomeAtleta.length; i++) {
      let codice = nomeAtleta.charCodeAt(i);

      // Codici ASCII validi: A-Z (65-90), a-z (97-122), spazio (32)
      let letteraMaiuscola = codice >= 65 && codice <= 90;
      let letteraMinuscola = codice >= 97 && codice <= 122;
      let spazio = codice === 32;

      if (!letteraMaiuscola && !letteraMinuscola && !spazio) {
        alert("Errore: il nome può contenere solo lettere e spazi!");
        document.getElementById("nomeAtleta").className = "errore";
        tuttoValido = false;
        nomeValido = false;
        break;
      }
    }
  }

  // CONTROLLO ETÀ
  let eta = document.getElementById("eta").value;
  let etaValida = true;

  if (eta === "" || eta < 6 || eta > 60) {
    alert("Errore: l'età deve essere tra 6 e 60 anni!");
    document.getElementById("eta").className = "errore";
    tuttoValido = false;
    etaValida = false;
  }

  // CONTROLLO SPORT
  let sport = document.getElementById("sport").value;
  let sportValido = true;

  if (sport === "") {
    alert("Errore: seleziona una disciplina sportiva!");
    document.getElementById("sport").className = "errore";
    tuttoValido = false;
    sportValido = false;
  }

  // CONTROLLO LIVELLO (radio button)
  let radioButtons = document.getElementsByName("livello");
  let livelloSelezionato = false;
  let livello = "";

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      livelloSelezionato = true;
      livello = radioButtons[i].value;
      break;
    }
  }

  if (!livelloSelezionato) {
    alert("Errore: seleziona un livello!");
    tuttoValido = false;
  }

  // SE TUTTO È VALIDO, GENERA IL RIEPILOGO
  if (tuttoValido) {
    let sportMaiuscolo = sport.toUpperCase();
    let livelloMaiuscolo = livello.toUpperCase();

    let riepilogo = "=== REGISTRAZIONE ATTIVITÀ SPORTIVA ===\n";
    riepilogo = riepilogo + "ATLETA: " + nomeAtleta + "\n";
    riepilogo = riepilogo + "ETÀ: " + eta + " anni\n";
    riepilogo = riepilogo + "SPORT: " + sportMaiuscolo + "\n";
    riepilogo = riepilogo + "LIVELLO: " + livelloMaiuscolo + "\n";
    riepilogo = riepilogo + "====================================";

    document.getElementById("riepilogo").value = riepilogo;
    alert("Registrazione completata con successo!");
  }
}

// 2. RESET DEL MODULO
function resetForm() {
  // Svuota i campi input
  document.getElementById("nomeAtleta").value = "";
  document.getElementById("eta").value = "";

  // Resetta la select
  document.getElementById("sport").value = "";

  // Rimette il radio button "intermedio" come selezionato
  document.getElementById("intermedio").checked = true;

  // Svuota il textarea
  document.getElementById("riepilogo").value = "";

  // Rimuove la classe errore da tutti gli elementi
  rimuoviErrori();

  alert("Modulo resettato!");
}

// 3. CALCOLA CATEGORIA IN BASE ALL'ETÀ
function calcolaCategoria() {
  let eta = document.getElementById("eta").value;

  // Controlla se l'età è valida
  if (eta === "" || eta < 6 || eta > 60) {
    alert("Errore: inserisci un'età valida (tra 6 e 60 anni)!");
  } else {
    let categoria = "";

    // Calcola la categoria
    if (eta <= 12) {
      categoria = "JUNIOR";
    } else if (eta >= 13 && eta <= 18) {
      categoria = "YOUTH";
    } else if (eta >= 19 && eta <= 35) {
      categoria = "ADULT";
    } else if (eta >= 36) {
      categoria = "MASTER";
    }

    alert("Categoria: " + categoria);
  }
}

// FUNZIONE HELPER PER RIMUOVERE GLI ERRORI
function rimuoviErrori() {
  // Rimuove la classe errore da tutti gli input
  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].className = "";
  }

  // Rimuove la classe errore da tutte le select
  let selects = document.getElementsByTagName("select");
  for (let i = 0; i < selects.length; i++) {
    selects[i].className = "";
  }
}
