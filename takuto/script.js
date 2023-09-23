var colors = ["green", "red", "blue"]; 
        var currentIndex = 0; 
        function changeBackgroundColor() {
            document.body.style.backgroundColor = colors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length;
            setTimeout(changeBackgroundColor, 500);
        }
        changeBackgroundColor();

    var textContent = ["たくと", "たくとのばか", "たくとの"];
    var currentIndex = 0;
    function changeTextContent() {
        document.getElementById("textBox").innerHTML = textContent[currentIndex];
        currentIndex = (currentIndex + 1) % textContent.length;
        setTimeout(changeTextContent, 500);
    }
    changeTextContent();