function loadData() {
    var confirmFirstName = document.getElementById('confirm_name');
    var confirmEmail = document.getElementById('confirm_email');
    var confirmPhone = document.getElementById('confirm_phone');
    var confirmAge = document.getElementById('confirm_age');
    var confirmOccupation = document.getElementById('confirm_occupation');
    
    if (sessionStorage.education === undefined) {
        confirmOccupation.innerHTML = "You did not specify an occupation"
    } else {
        confirmOccupation.innerHTML = sessionStorage.education;
    }

    if (sessionStorage.firstName === "" && sessionStorage.lastName === "") {
        confirmFirstName.innerHTML = "You did not specify a name";
    } else {
        confirmFirstName.innerHTML = sessionStorage.firstName + ' ' + sessionStorage.lastName;
    }

    if (sessionStorage.email === "") {
        confirmEmail.innerHTML = "You did not specify an email";
    } else {
        confirmEmail.innerHTML = sessionStorage.email;
    }

    if (sessionStorage.phone === "") {
        confirmPhone.innerHTML = "You did not specify a phone number";
    } else {
        confirmPhone.innerHTML = sessionStorage.phone;
    }

    if (sessionStorage.age === "") {
        confirmAge.innerHTML = "You did not specify an age";
    } else {
        confirmAge.innerHTML = sessionStorage.age;
    }

}
function init() {
    loadData();
    var cancelButton = document.getElementById('cancelButton');
    cancelButton.onclick = function() {
        window.location = 'register.html';
    }

}
window.onload = init;
