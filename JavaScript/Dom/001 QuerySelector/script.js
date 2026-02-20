function cambiaColoreParagrafi() {
  // Array di colori casuali
  const colori = ["red", "blue", "green", "purple", "orange", "pink"];

  let coloreCasuale = colori[Math.floor(Math.random() * colori.length)];

  let paragrafi = document.querySelectorAll("p");

  paragrafi.forEach((par) => {
    par.style.backgroundColor = coloreCasuale;
  });
}

// Funzione per cambiare il colore di sfondo della pagina
function cambiaColoreSfondo() {
  const colori = [
    "#f0f0f0",
    "#ffcccb",
    "#c1ffc1",
    "#add8e6",
    "#fffacd",
    "#e6e6fa",
  ];
  const coloreCasuale = colori[Math.floor(Math.random() * colori.length)];

  let page = document.querySelector("body");

  page.style.backgroundColor = coloreCasuale;
}

// Funzione per nascondere o mostrare i titoli
function nascondiMostraTitoli() {
  let titoli = document.querySelectorAll("h1, h2");

  titoli.forEach((t) => {
    if (t.style.display == "none") {
      t.style.display = "block";
    } else {
      t.style.display = "none";
    }
  });
}
