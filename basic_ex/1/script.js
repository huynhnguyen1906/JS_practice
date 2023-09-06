function summation() {
    var firstNumber = parseFloat(prompt("nhap so thu nhat"));
    var secondNumber = parseFloat(prompt("nhap so thu hai"));
    if (firstNumber === "" || secondNumber === ""){
        alert("khong duoc bo trong thong tin");
        setTimeout(summation, 10);
    } else if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("vui long chi nhap so");
        setTimeout(summation, 10);
    } else {
        document.write(firstNumber+secondNumber);
    }
}
summation()
