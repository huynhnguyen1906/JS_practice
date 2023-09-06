let originalText = document.getElementById("demo").innerHTML;

let isTextChanged = true;

function changeText() {
    let paragraph = document.getElementById("demo");
    if (isTextChanged) {
        paragraph.innerHTML = "私はフィンです。"
    } else {
        paragraph.innerHTML = originalText;
    }
    isTextChanged = !isTextChanged;
}
