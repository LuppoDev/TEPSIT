function colorAlternato() {
  // Ottengo il contenitore dei testi
  var container = document.getElementsByClassName("text-container");
  // Ottengo i testi
  var elements = container[0].getElementsByTagName("p");
  let i = 0;
  for (const e of elements) {
    e.style.color = i % 2 == 0 ? "red" : "green";
    i++;
  }
}
