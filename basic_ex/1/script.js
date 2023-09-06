function summation() {
    var firstNumber = prompt("nhap so thu nhat");
    var secondNumber = prompt("nhap so thu 2");
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
