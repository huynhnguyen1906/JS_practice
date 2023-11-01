const deleteDiv = document.querySelectorAll(".delete");
const btn = document.querySelector("#btn");
const box = document.getElementById("container");

let currentNum = 0;
let max = 25;
btn.addEventListener("click", () => {
    btn.style.scale = "1.3";
    setTimeout(() => {
        btn.style.scale = "1";
    }, 100);
    currentNum ++;
    if (currentNum === max) {
        deleteDiv.forEach((div) => {
            div.style.opacity = "0";
            div.style.pointerEvents = "none";
        });
        const hanabi = document.createElement("div");
        hanabi.classList.add("hanabi");
        hanabi.innerHTML = '<video autoplay="autoplay"><source src="hanabi.mp4" type="video/mp4" >"Your browser does not support the video tag."</video>';
        box.appendChild(hanabi);
    }
    if (currentNum % 2 === 0) {
        console.log("-----")
        console.log("-----")
        console.log("--^--")    
        console.log("--|--")
        console.log("")
        console.log("")
    } else {
        console.log("--^--")
        console.log("--|--")
        console.log("-----")
        console.log("-----")
        console.log("")
        console.log("")
    }
    if (currentNum === max) {
        console.log("kimochiiiiii")
        setTimeout(() => {
            location.reload();
        }, 11000);
    }
});
