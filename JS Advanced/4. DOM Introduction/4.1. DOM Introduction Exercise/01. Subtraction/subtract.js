function subtract() {
  let firstNumber = document.getElementById("firstNumber").value;
  let secondNumber = document.getElementById("secondNumber").value;
  let res = firstNumber - secondNumber;

  document.getElementById("result").textContent = res;
}
