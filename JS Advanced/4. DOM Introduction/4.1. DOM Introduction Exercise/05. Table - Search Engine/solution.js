function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  let searchField = document.getElementById("searchField");
  let tableRow = Array.from(document.querySelectorAll("tbody tr"));

  function onClick() {
    let searchText = searchField.value;
    for (let row of tableRow) {
      let tableData = row.querySelectorAll("td");
      for (let td of tableData) {
        if (td.textContent.includes(searchText)) {
          row.classList.add("select");
          break;
        } else {
          row.classList.remove("select");
        }
      }
    }
    searchField.value = "";
  }
}
