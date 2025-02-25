function notify(message) {
  let divRef = document.getElementById("notification");
  divRef.textContent = message;
  divRef.style.display = "block";

  divRef.addEventListener("click", ToggleVisibility);
  function ToggleVisibility(event) {
    divRef.style.display = "none";
  }
}
