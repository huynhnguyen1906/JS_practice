function changeBackgroundColor() {
    var colors = ["red", "green", "blue"]
    var body = document.body;
    var randomColor = colors[Math.floor(Math.random() * colors.length)]; 
    body.style.backgroundColor = randomColor;
    setTimeout(changeBackgroundColor, 500);
}
changeBackgroundColor();
function changeText() {
    var Text = document.getElementById("text").innerHTML;

    if (Text == "") {
        document.getElementById("text").innerHTML = "たくと";
    } else if (Text == "たくと") {
        document.getElementById("text").innerHTML = "たくとの";
    } else if (Text == "たくとの") {
        document.getElementById("text").innerHTML = "たくとのばか";
    } else {
        document.getElementById("text").innerHTML = "";
    }
    setTimeout(changeText, 500);
}
changeText()