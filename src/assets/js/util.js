//table fixer
let allTables = Array.from(document.getElementsByTagName("table"));
console.log(allTables);

if (allTables.length !== 0) {
  fixTables(allTables);
} else {
  console.log("no tables to fix");
}

function fixTables(tables) {
  tables.forEach(table => {
    console.log(table);
    switch (table.previousElementSibling.textContent) {
      case '{primary}':
        table.previousElementSibling.remove();
        table.classList.add("table", "table-primary");
        break;

      case '{secondary}':
        table.previousElementSibling.remove();
        table.classList.add("table", "table-secondary");
        break;

      default:
        break;
    }
  });
}

function escapeQuotesHTML(string) {
  return string.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}