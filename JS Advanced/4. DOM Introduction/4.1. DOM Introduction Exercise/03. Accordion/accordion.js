function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let text = document.getElementById("extra");
    

    button.textContent =  button.textContent === "More" ? "Less" : "More";
    if(text.style.display == "") {
        text.style.display = "none"
    }     
    text.style.display = text.style.display === "none" ? "block" : "none"
}