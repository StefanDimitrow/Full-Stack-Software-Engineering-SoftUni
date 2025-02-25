function extractText() {
  let items = document.querySelectorAll("ul#items li");
  let textBox = document.querySelector("#result");

  for (let item of items) {
    textBox.value += item.textContent + "/n";
  }
}
