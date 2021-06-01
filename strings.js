let response;
let score = 75;
let machineActive = false;

if(machineActive !== 'true' && (score < 0 && score > 100))
    response = 'This is not possible, an error has occurred.'
 else if (score >= 0 && score <= 19) {
    response = 'That was a terrible score – total fail!'
} else if (score >= 20 && score <= 39) {
    response = 'You know some things, but it\'s not a pretty bad score. Needs improvement.'
} else if (score >= 40 && score <= 69) {
    response = 'You did a passable job, not bad!'
} else if (score => 70 && score <= 89) {
    response = 'That\'s a great score, you really know your stuff.'
} else if (score >= 90 && score <= 100) {
    response = 'What an amazing score! Did you cheat? Are you for real?'
}

switch (true) {
    case (score >=0 && score <= 19):
        response = 'That was a terrible score – total fail!';
        break;
    case (score >= 20 && score <=39):
        response = 'You know some things, but it\'s not a pretty bad score. Needs improvement.'
        break;
    case (score >= 40 && score <= 69):
        response = 'You did a passable job, not bad!';
        break;
    case (score >= 70 && score <= 89):
        response = 'That\'s a great score, you really know your stuff.';
        break;
    case (score >= 90 && score <= 100):
        response = 'What an amazing score! Did you cheat? Are you for real?';
    break;
    default:
    response = 'This is not possible, an error has occurred.'
    }

    let machineActive = true;
    let pwd = 'cheese';

    let machineResult;
    let pwdResult;

if(machineActive) {
    machineResult = 'Machine is active. Trying login.'
    pwdResult = pwd === 'cheese' ? 'Login successful.' : 'Password incorrect; login failed.'
} else {
    machineResult = 'Machine is inactive. Activate and try logging in again.';
}

let value = prompt('What\'s the "official" name of JavaScript?')
if (value == ECMAScript) {
    alert('Right!');
} else {
    alert ('You don\'t know? "ECMAScript!"!')
}

let value = prompt('Type a number in.', 0);
if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0);
}

let message;

let message = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' :
message = '';

const birthYear = 1948;
const thisYear = 1965;
const firstName = Carlos;
const lastName = Stevenson;
const age = 'thisYear' - 'birthYear';
const fullName = 'firstName' + ' ' + 'lastName';
greeting  = 'Hello, my name is' + ' ' + 'fullName' + 'and I am' + ' ' + 'age' + ' years old.'
console.log(greeting);


const birthYear = 1948;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);