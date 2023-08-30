const itchGameName = `sammi-${document.currentScript.getAttribute('product-name')}`

Itch.attachBuyButton(document.querySelector(".download-button"), {
  // replace the following with the correct information about your game
  user: "landie",
  game: itchGameName,
});

function removeHash() {
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
}
window.addEventListener("hashchange", e => {
  goToLink();
  console.log(e);
});
setTimeout(goToLink, 5);

function goToLink() {
  const target = window.location.hash;
  switch (target) {
    case "":
      //nothing, just not default case.
      break;
    case "#overview":
      document.querySelector("#overview-tab").click();
      break;
    case "#setup":
      document.querySelector("#setup-tab").click();
      break;
    case "#documentation":
      console.log("workie");
      document.querySelector("#documentation-tab").click();
      break;
    case "#tutorials":
      console.log("workie");
      document.querySelector("#tutorials-tab").click();
      break;
    case "#troubleshooting":
      document.querySelector("#troubleshooting-tab").click();
      break;
    case "#patchnotes":
      document.querySelector("#patchnotes-tab").click();
      break;
    default:
  }
  document.querySelector(".productpage-section-contents").scroll(0, 0); //fixes scrolling issue when clicking on tabs
}

var triggerTabList = [].slice.call(document.querySelectorAll("#myTab button"));
console.log(triggerTabList);
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    document.querySelector(".productpage-section-contents").scroll(0, 0); //fixes scrolling issue when clicking on tabs
    tabTrigger.show();
  });
});

//* show modal

// window.onload = () => {
//      document.querySelector('#exampleModal').modal('show')
//     const myModal = new bootstrap.Modal('#exampleModal', {
//         keyboard: false,
//         show: true
//     })
//     myModal.show();

// }

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
