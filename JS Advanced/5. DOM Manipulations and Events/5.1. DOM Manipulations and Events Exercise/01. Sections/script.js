function create(words) {
  const contentRef = document.getElementById("content");

  for (let word of words) {
    let divRef = document.createElement("div");
    let pRef = document.createElement("p");
    pRef.style.display = "none";
    pRef.textContent = word;

    divRef.addEventListener("click", onClickHandler);

    divRef.appendChild(pRef);
    contentRef.appendChild(divRef);
  }
  function onClickHandler(e) {
   let divRef = e.target;
   let pRef = divRef.children[0];
   pRef.style.display = "block";
  }
}
