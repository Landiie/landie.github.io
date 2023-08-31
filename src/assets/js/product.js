const itchGameName = `sammi-${document.currentScript.getAttribute('product-name')}`

Itch.attachBuyButton(document.querySelector(".download-button"), {
  // replace the following with the correct information about your game
  user: "landie",
  game: itchGameName,
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
