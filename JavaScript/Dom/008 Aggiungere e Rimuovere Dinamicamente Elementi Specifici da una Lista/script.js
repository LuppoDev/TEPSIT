function aggiungiElemento() {
  const list = document.querySelector("#listaElementi");
  const text = document.querySelector("#newItemText").value;
  if (text == "") return;

  const newElement = document.createElement("li");
  newElement.innerText = text;

  list.appendChild(newElement);
}

function rimuoviElemento() {
  const list = document.querySelector("#listaElementi");
  const elementi = document.querySelectorAll("#listaElementi li");
  const text = document.querySelector("#newItemText").value;
  if (text == "") return;

  for (const li of elementi) {
    if (li.innerText == text) {
      list.removeChild(li);
    }
  }
}
