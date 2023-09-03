function calculateAge () {
    var currentTime = new Date();
    var currentYear = currentTime.getFullYear();
    return currentYear - yearBorn;
}

var  name = prompt("名前を記入してください！");
var yearBorn = prompt("誕生日を記入してください");
var age;
age = calculateAge(yearBorn);
alert(name + "さんは"+ age + "歳です");
