function saveData() {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phonenumber').value;
    var age = document.getElementById('age').value;
    sessionStorage.email = email;
    sessionStorage.phone = phone;
    sessionStorage.age = age;
    sessionStorage.firstName = firstName;
    sessionStorage.lastName = lastName;
}
function init() {
    var regForm = document.getElementById('registerForm');
    regForm.onsubmit = saveData;
}
window.onload = init;