// Salva il contenuto originale della tabella all'avvio
var tabellaOriginale = "";

// salvare lo stato iniziale della tabella
var tabella = document.querySelector("#tab");
tabellaOriginale = tabella.innerHTML;

function eliminaRiga() {
  // querySelector per l'input E SELEZIONARE LA RIGA
  var nr = document.querySelector("#r").value - 1;

  // querySelector per la tabella
  var tabella = document.querySelector("#tab");

  // querySelectorAll per selezionare tutte le righe DENTRO ELEMENTO TAB
  var righe = document.querySelectorAll("#tab tr");

  // Verifica se la riga esiste
  if (nr >= 0 && nr < righe.length) {
    // Usa .remove() per eliminare direttamente la riga
    righe[nr].remove();

    // Aggiorna l'attributo max dell'input dopo l'eliminazione
    var nuoveRighe = document.querySelectorAll("#tab tr");
    document.querySelector("#r").setAttribute("max", nuoveRighe.length);
  } else {
    alert("Numero di riga non valido!");
  }
}

function ripristinaTabella() {
  var tabella = document.querySelector("#tab");

  // Ripristina il contenuto originale direttamente nella tabella
  tabella.innerHTML = tabellaOriginale;

  // Reimposta l'attributo max dell'input al numero originale di righe
  var righeRipristinate = document.querySelectorAll("#tab tr");
  document.querySelector("#r").setAttribute("max", righeRipristinate.length);
  document.querySelector("#r").value = ""; // Pulisce l'input
}

function ordinaPerColonna2() {}
function ordinaPerColonna2() {
    var tabella = document.querySelector("#tab");
    var righe = Array.from(document.querySelectorAll("#tab tr")).slice(1); // Esclude header
    
    // Bubble Sort
    for (let i = 0; i < righe.length; i++) {
        for (let j = 0; j < righe.length - i - 1; j++) {
            var cella1 = righe[j].querySelectorAll("td")[1].textContent.trim();
            var cella2 = righe[j + 1].querySelectorAll("td")[1].textContent.trim();
            
            // Confronta i valori (numerici o stringhe)
            var val1 = isNaN(cella1) ? cella1 : parseFloat(cella1);
            var val2 = isNaN(cella2) ? cella2 : parseFloat(cella2);
            
            if (val1 > val2) {
                // Scambia le righe
                righe[j].parentNode.insertBefore(righe[j + 1], righe[j]);
                [righe[j], righe[j + 1]] = [righe[j + 1], righe[j]];
            }
        }
    }
}