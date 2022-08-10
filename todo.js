let person = prompt("Enter Your Name", "his/her")
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

let wlcMessage = confirm('Do you want to show the welcoming message???');
let nickName;
if (gender === 'female') {
    nickName = 'Ms.';
} else if (gender === 'male') {
    nickName = 'Mr.';
}

if (wlcMessage) {
    let message = 'Welcome' + " " + nickName + " " + person;
    alert(message);
}