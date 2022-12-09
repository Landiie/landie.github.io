const shopItems = document.querySelectorAll(".shop-item");

shopSearch();

document.querySelector(".shop-search").addEventListener("input", function (e) {
  console.log(e);
  shopSearch(e);
});

function shopSearch(e) {
  e.preventDefault();
  const value = e.explicitOriginalTarget.value;
  shopItems.forEach(item => {
    let itemName = item.dataset.shopItemName;
    if (itemName != undefined) {
      if (itemName.toLowerCase().includes(value.toLowerCase())) {
        console.log(`Matches ${itemName}`);
        console.log(item);
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    } else {
      item.style.display = "none";
    }
  });
}

function shopSearch() {
  const value =
    document.querySelector(".shop-search").value;
  shopItems.forEach(item => {
    let itemName = item.dataset.shopItemName;
    if (itemName != undefined) {
      if (itemName.toLowerCase().includes(value.toLowerCase())) {
        console.log(`Matches ${itemName}`);
        console.log(item);
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    } else {
      item.style.display = "none";
    }
  });
}
