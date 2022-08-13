let person = prompt("Enter Your Name", "his/her");
let gender = prompt("Enter Your Gender", "male/female").toLocaleLowerCase();
if (gender !== 'female') {
    if (gender !== 'male') {
        gender = prompt("Enter Your Gender", "Please Choose Either Female or Male").toLocaleLowerCase();
    }
}
let age = prompt("Enter Your Age");

if (age <= 0) {
    alert(" age must be greater than zero")
    age = prompt("Enter Your Age ")

}
let answers = [];
let answerOne = prompt('do you want to follow us???', 'Y/N');
let answerTwo = prompt('do you want to receive the recent news???', 'Y/N');
let answerThree = prompt('Will you visit us again???', 'Y/N');

answers.push(answerOne, answerTwo, answerThree)

for (let i = 0; i < answers.length; i++) {

    switch (answers[i].toLowerCase()) {
        case "y":
        case "yes":
            console.log("yes");
            break;
        case "n":
        case "no":
            console.log("no");
            break;

        default:
            console.log("invalid");





    }
}

console.log(answers);
let wlcMessage = confirm('Do you want to show the welcoming message???');
let nickName;
if (gender === 'female') {
    nickName = 'Ms.';
} else if (gender === 'male') {
    nickName = 'Mr.';
}

let rating = prompt("rate owr website ?", "0-5");

if (rating >= 0 || rating <= 5) {

    alert("Thank You For Rating As")

}

if (wlcMessage) {
    let message = 'Welcome' + " " + nickName + " " + person;
    alert(message);
}