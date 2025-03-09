// console.log('Hello World');
// console.log('I like Pizza');

// document.getElementById('myH1').textContent = 'Hello World';
// document.getElementById('myP').textContent = 'I like Pizza';

// // data types
// let firstName = 'John'; // string
// console.log(typeof firstName);

// // boolean
// let online = true;
// console.log(typeof online);

let firstName = 'John';
let age = 25;
let isStudent = true;

document.getElementById('fname').textContent = `Name is ${firstName}`;
document.getElementById('age').textContent = `Age is ${age}`;
document.getElementById('student').textContent = `Is Student: ${isStudent}`;


// getting user input

document.getElementById('mySubmit').onclick = function() {
    firstName = document.getElementById('myName').value;
    document.getElementById('fname').textContent = `Name is ${firstName}`;
}