// Nhập số nguyên từ người dùng
let number = prompt("Nhập một số nguyên:");
if (isNaN(number)) {
    console.log("Đây không phải là một số nguyên hợp lệ.");}
else if (number > 5) {
    console.log("số bạn nhập lớn hơn 5")
} else {
    console.log("số bạn nhập nhỏ hơn 5")
}