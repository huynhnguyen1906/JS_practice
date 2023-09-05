let originalText = document.getElementById("demo").innerHTML;
function changeText() {
    let paragraph = document.getElementById("demo");
    paragraph.innerHTML = "変えたテキスト";
}
function resetText() {
    let paragraph = document.getElementById ("demo");
    paragraph.innerHTML = originalText;
}