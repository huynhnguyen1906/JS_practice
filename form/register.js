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
    var highschool = document.getElementById('highschool').checked;
    var university = document.getElementById('university').checked;
    var working = document.getElementById('working').checked;
    var retired = document.getElementById('retired').checked;
    if (highschool === true) {
        sessionStorage.education = "High School";
    }
    if (university === true) {
        sessionStorage.education = "University";
    }
    if (working === true) {
        sessionStorage.education = "Working";
    }
    if (retired === true) {
        sessionStorage.education = "Retired";
    }


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
    
    if (sessionStorage.education === "highschool") {
        document.getElementById('highschool').checked = true;
    } else if (sessionStorage.education === "University") {
        document.getElementById('university').checked = true;
    } else if (sessionStorage.education === "Working") {
        document.getElementById('working').checked = true;
    } else  if (sessionStorage.education === "Retired") {
        document.getElementById('retired').checked = true;
    }
    //truong trường hợp không sử dụng if else, mà sử dụng switch case
    // switch (sessionStorage.education) {
    //     case "High School":
    //         document.getElementById('highschool').checked = true;
    //         break;
    //     case "University":
    //         document.getElementById('university').checked = true;
    //         break;
    //     case "Working":
    //         document.getElementById('working').checked = true;
    //         break;
    //     case "Retired":
    //         document.getElementById('retired').checked = true;
    //         break;
    // }
}
function init() {
    var regForm = document.getElementById('registerForm');
    regForm.onsubmit = saveData;
    prefillData();
}
window.onload = init;