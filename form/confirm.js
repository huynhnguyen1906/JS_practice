function init() {
    var confirmFirstName = document.getElementById('confirm_name');
    var confirmEmail = document.getElementById('confirm_email');
    var confirmPhone = document.getElementById('confirm_phone');
    var confirmAge = document.getElementById('confirm_age');
    
    confirmFirstName.innerHTML = sessionStorage.firstName + ' ' + sessionStorage.lastName;
    confirmEmail.innerHTML = sessionStorage.email;
    confirmPhone.innerHTML = sessionStorage.phone;
    confirmAge.innerHTML = sessionStorage.age;
}
window.onload = init;
