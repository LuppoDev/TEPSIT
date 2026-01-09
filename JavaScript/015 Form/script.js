function verifica() {
  var cognomeInput = document.getElementById("cognome");
  var nomeInput = document.getElementById("nome");
  var cognome = cognomeInput.value.trim();
  var nome = nomeInput.value.trim();
  var cognomeValido = true;
  var nomeValido = true;

  if (cognome === "") {
    cognomeValido = false;
  } else {
    for (var i = 0; i < cognome.length; i++) {
      var codice = cognome.charCodeAt(i);
      if (codice < 65 || codice > 90) {
        cognomeValido = false;
        break;
      }
    }
  }

  if (!cognomeValido) {
    alert("Formato cognome errato! Deve essere tutto maiuscolo (es. ROSSI)");
    cognomeInput.classList.add("errore");
  } else {
    cognomeInput.classList.remove("errore");
  }

  if (nome === "") {
    nomeValido = false;
  } else {
    for (var j = 0; j < nome.length; j++) {
      var codiceNome = nome.charCodeAt(j);
      if (codiceNome < 97 || codiceNome > 122) {
        nomeValido = false;
        break;
      }
    }
  }

  if (!nomeValido) {
    alert(
      "Formato nome errato! Deve contenere solo lettere minuscole (es. mario)"
    );
    nomeInput.classList.add("errore");
  } else {
    nomeInput.classList.remove("errore");
  }

  if (cognomeValido && nomeValido) {
    alert("Dati validi");

    var genitori = document.getElementsByName("genitori");
    var genitoreSelezionato = "";
    for (var k = 0; k < genitori.length; k++) {
      if (genitori[k].checked) {
        genitoreSelezionato = genitori[k].value.toUpperCase();
        break;
      }
    }

    var inglese = document.getElementById("inglese");
    var spagnolo = document.getElementById("spagnolo");
    var francese = document.getElementById("francese");

    var testoLingue = "LINGUE STUDIATE:\n";
    if (inglese.checked) {
      testoLingue += "- Inglese\n";
    }
    if (spagnolo.checked) {
      testoLingue += "- Spagnolo\n";
    }
    if (francese.checked) {
      testoLingue += "- Francese\n";
    }

    var riepilogo =
      "COGNOME: " +
      cognome +
      "\n" +
      "NOME: " +
      nome +
      "\n\n" +
      "QUALITÀ: " +
      genitoreSelezionato +
      "\n\n" +
      testoLingue;

    document.getElementById("area_testo").value = riepilogo;
  }
}

function resettaErrori() {
  var cognomeInput = document.getElementById("cognome");
  var nomeInput = document.getElementById("nome");
  var areaTesto = document.getElementById("areatesto");

  cognomeInput.classList.remove("errore");
  nomeInput.classList.remove("errore");
  areaTesto.value = "";
}
