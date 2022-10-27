document.getElementById("modal_main").className = "modal modal_active";

const BUTTON_GOOD = document.querySelector(".show-success");
const BUTTON_CLOSE = document.querySelectorAll("div.modal__close");

BUTTON_GOOD.onclick = function() {
    document.getElementById("modal_success").className = "modal modal_active";
    document.getElementById("modal_main").className = "modal";
}

for (idx = 0; idx < BUTTON_CLOSE.length; idx++) {
    let el = BUTTON_CLOSE.item(idx);
    el.onclick = function() {
        document.getElementById("modal_main").className = "modal";
        document.getElementById("modal_success").className = "modal";
}}