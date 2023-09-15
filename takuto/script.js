function changeBackgroundColor() {
    var body = document.body;
    console.log(body.style.backgroundColor === "red");
    // setTimeout(changeBackgroundColor, 500);
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