var temporizzatore;

function randomChange() {
  var images = document.querySelectorAll("#gallery div img");
  //!   for (const img of images) {
  //!     img.src = Math.floor(Math.random() * 3) + 1 + ".png";
  //!   }
  for (let i = 0; i < 3; i++) {
    images[i].src = Math.floor(Math.random() * 3) + 1 + ".png";
  }
}

let gallery = document.querySelector("#gallery");

gallery.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  if (temporizzatore) {
    clearInterval(temporizzatore);
  }
});

gallery.addEventListener("dblclick", function (e) {
  e.preventDefault();

  randomChange();

  clearInterval(temporizzatore);
  temporizzatore = setInterval(randomChange, 2000);
});

temporizzatore = setInterval(randomChange, 2000);
