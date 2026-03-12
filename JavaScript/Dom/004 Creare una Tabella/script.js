let tableGenerator = document.createElement("button");
tableGenerator.innerText = "Genera Tabella";
document.body.appendChild(tableGenerator);

tableGenerator.onclick = function () {
  let container = document.getElementById("container");
  let rows = parseInt(document.getElementById("righe").value);
  let columns = parseInt(document.getElementById("colonne").value);

  var table = document.createElement("table");
  table.setAttribute("border", "1");

  for (let i = 0; i < rows; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < columns; j++) {
      let cell = document.createElement("td");
      cell.innerText = `${i + 1}:${j + 1}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  container.innerHTML = "";
  container.appendChild(table);
};
