//Creare una sezione <div> contenente un titolo <h2> //
//e un paragrafo <p>, e aggiungerla al corpo del documento//

let body = document.querySelector("body");

let nuovoDiv = document.createElement("div");

let nuovoH2 = document.createElement("h2");
nuovoH2.innerText = "Titolo della Sezione"
nuovoDiv.appendChild(nuovoH2);

let nuovoP = document.createElement("p");
nuovoP.innerText = "Questo è un paragrafo all'interno della sezione"
nuovoDiv.appendChild(nuovoP);

body.appendChild(nuovoDiv)