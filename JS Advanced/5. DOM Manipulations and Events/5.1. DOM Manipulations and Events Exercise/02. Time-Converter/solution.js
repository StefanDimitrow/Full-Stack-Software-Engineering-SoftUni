function attachEventsListeners() {
  const button = Array.from(document.querySelectorAll("input[type=button]"));
  const inputs = Array.from(document.querySelectorAll("input[type=text"));

  button.forEach((button) => button.addEventListener("click", onClickHandler));

  function onClickHandler(e) {
    let value = Number(e.target.parentElement.children[1].value);
    let unit = e.target.parentElement.children[1].id;
    switch (unit) {
      case "days":
        propagateValue(value);
        break;
      case "hours":
        propagateValue(value / 24);
        break;
      case "minutes":
        propagateValue(value / 24 / 60);
        break;
      case "seconds":
        propagateValue(value / 24 / 60 / 60);
        break;
      default:
        break;
    }
  }
  function propagateValue(value) {
    inputs[0].value = value;
    let currentValue = value * 24;
    for (let i = 1; i < inputs.length; i++) {
      let input = inputs[i];
      input.value = currentValue;
      currentValue *= 60;
    }
  }
}
