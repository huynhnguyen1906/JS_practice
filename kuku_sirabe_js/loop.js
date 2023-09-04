let number = prompt("なんの九九調べたい？")
function calculateAge(number) {
    if (number > 9) {
        alert("２～９だけの数字入力してください！");
        setTimeout(calculateAge, 1000);
    } else if (isNaN(number)) {
        alert("２～９だけの数字入力してください！")
        setTimeout(calculateAge, 1000);
    }else { 
        document.write("九九の" + number + ":<br>");
        for (let i = 1; i <= 9; i++){
            let result = number * i;
            document.write (number + " x " + i  + " = " + result + "<br>");
        }
    }
}
calculateAge(number)
