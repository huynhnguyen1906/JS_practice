document.addEventListener("DOMContentLoaded", function() {
    let dropdownLinks = document.querySelectorAll(".dropDown");
    let hiddenContents = document.querySelectorAll(".dropDownContent");

    dropdownLinks.forEach(function(btn, index) {
        btn.addEventListener("click", function() {
            if (hiddenContents[index].style.display == "none") {
                hiddenContents[index].style.display = "block";
            } else {
                hiddenContents[index].style.display = "none";
            }
        });
    });
});
