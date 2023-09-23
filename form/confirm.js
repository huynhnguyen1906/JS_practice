function init() {
    var confirmFirstName = document.getElementById('confirm_name');
    confirmFirstName.innerHTML = sessionStorage.firstName + ' ' + sessionStorage.lastName;
    var confirmEmail = document.getElementById('confirm_email');
    confirmEmail.innerHTML = sessionStorage.email;
    var confirmPhone = document.getElementById('confirm_phone');
    confirmPhone.innerHTML = sessionStorage.phone;
    var confirmAge = document.getElementById('confirm_age');
    confirmAge.innerHTML = sessionStorage.age;
}
window.onload = init;
