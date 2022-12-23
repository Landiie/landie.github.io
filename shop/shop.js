const shopItems = document.querySelectorAll(".shop-item");
const allLabels = document.querySelectorAll(".label-list-filter > button");
let activeFilters = [];

shopSearch();

document.querySelector(".shop-search").addEventListener("input", function (e) {
  console.log(e);
  shopSearch(e);
});

document.querySelector(".label-list-filter").addEventListener("click", function (e) {
  const label = e.target.classList[0];
  const pos = activeFilters.indexOf(label);
  console.log(pos)
  if (label !== "label-list-filter") { //prevents user from clicking wrapper
    //console.log(e);
    if (pos === -1) {
      activeFilters.push(label)
    } else {
      console.log("Label already selected, removing")
      activeFilters.splice(pos, 1);
    }
    //console.log(activeFilters)
    applyFilters()
  }
});

function applyFilters() {
  //remove all active filters
  allLabels.forEach(label => {
    label.classList.remove("active");
  });
  //give active filters active class
  activeFilters.forEach(filter => {
    const label = document.querySelector(`.${filter}`)
    label.classList.add("active");
  });
  shopSearch()
}

function shopSearch() {
  const value =
    document.querySelector(".shop-search").value;
  shopItems.forEach(item => {
    let itemName = item.dataset.shopItemName;
    let itemLabels = [];
    let itemLabelDivs = document.querySelector(`[data-shop-item-name="${itemName}"] > .label-list`).children
    for(i = 0; i < itemLabelDivs.length; i++) {
      itemLabels.push(itemLabelDivs[i].className)
    }
    console.log(itemLabels)
    if (itemName != undefined) {
      if (itemName.toLowerCase().includes(value.toLowerCase())) {
        console.log(`Matches ${itemName}`);
        //check if there are any active filters, else just display
        if (activeFilters.length == 0) {
          item.style.display = "block";
        } else {
          //active filters! look through each matched item's
          //label list, and if it matches all the active filters,
          //show em! else, hide em!
          let hasAFilter = true;
          activeFilters.forEach(filter => {
            if (!itemLabels.includes(filter)) hasAFilter = false;
          });
          if (hasAFilter) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }

      } else {
        item.style.display = "none";
      }
    } else {
      item.style.display = "none";
    }
  });
}
