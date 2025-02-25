function validate() {
  let inputRef = document.getElementById("email");
  inputRef.addEventListener("change", onChange);
  function onChange(event) {
    let value = inputRef.value;
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/
    pattern.test(value) ? 
    inputRef.classList.remove("error") :
    inputRef.classList.add("error");
  }
}
