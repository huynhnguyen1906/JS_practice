var buttons = document.querySelectorAll(".colorButton");
var box = document.getElementById("box");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        box.style.backgroundColor = this.innerHTML;
    });
}