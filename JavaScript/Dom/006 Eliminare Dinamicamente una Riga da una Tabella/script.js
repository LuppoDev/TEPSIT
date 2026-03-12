var table = document.querySelector("#tab");
var tableOriginal = table.innerHTML;

function eliminaRiga() {
  var indice = document.querySelector("#r").value - 1;
  var righe = document.querySelectorAll("#tab tr");

  if (indice >= 0 && indice <= righe.length) {
    righe[indice].remove();
  }

  righe = document.querySelectorAll("#tab tr");
  document.querySelector("#r").setAttribute("max", righe.length);
}

function ripristinaTabella() {
  var tab = document.querySelector("#tab");
  tab.innerHTML = tableOriginal;

  var row = document.querySelector("#tab");
  document.querySelector("#r").setAttribute("max", row.length);
}

function ordinaColonna2() {
  var table = document.querySelector("#tab");
  var righe = Array.from(document.querySelectorAll("#tab tr"));

  for (let i = 0; i < righe.length; i++) {
    for (let j = 0; j < righe.length - i - 1; j++) {
      if (
        righe[j].textContent
          .trim()
          .localeCompare(righe[j + 1].textContent.trim()) > 0
      ) {
        let temp = righe[j];
        righe[j] = righe[j + 1];
        righe[j + 1] = temp;
      }
    }
  }

  table.innerHTML = "";
  for (const r of righe) {
    table.appendChild(r.cloneNode(true));
  }
}
