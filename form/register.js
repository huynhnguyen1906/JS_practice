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
function prefillData() {
    if (sessionStorage.firstName != undefined) {
        document.getElementById('firstname').value = sessionStorage.firstName;
    }
    if (sessionStorage.lastName != undefined) {
        document.getElementById('lastname').value = sessionStorage.lastName;
    }
    if (sessionStorage.email != undefined) {
        document.getElementById('email').value = sessionStorage.email;
    }
    if (sessionStorage.phone != undefined) {
        document.getElementById('phonenumber').value = sessionStorage.phone;
    }
    if (sessionStorage.age != undefined) {
        document.getElementById('age').value = sessionStorage.age;
    }
}
function init() {
    var regForm = document.getElementById('registerForm');
    regForm.onsubmit = saveData;
    prefillData();
}
window.onload = init;