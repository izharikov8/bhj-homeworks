document.getElementById("modal_main").className = "modal modal_active";

const button_good = document.querySelector(".show-success");
const button_close = document.querySelectorAll("div.modal__close");

button_good.onclick = function() {
    document.getElementById("modal_success").className = "modal modal_active";
    document.getElementById("modal_main").className = "modal";
}

for (idx = 0; idx < button_close.length; idx++) {
    let el = button_close.item(idx);
    el.onclick = function() {
        document.getElementById("modal_main").className = "modal";
        document.getElementById("modal_success").className = "modal";
}}