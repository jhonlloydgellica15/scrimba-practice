// First Practice

// let firstName = "Jhon Lloyd";
// let lastName = "Gellica";
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

//Second Practice

// let name = "Linda";
// let greeting = "Hi there";

// function MyGreeting() {
//   console.log(`${greeting} ${name}`);
// }
// MyGreeting();

//Third Practice

// let myPoints = 3;

// function add3Points() {
//   myPoints += myPoints;
// }

// function remove1Point() {
//   myPoints -= 1;
// }

// add3Points();
// add3Points();
// remove1Point();
// remove1Point();

// console.log(myPoints);

//Fourth Practice
// 22
// 18
// 65
// My points: 59
// 4
// 1114

//fifth Practice
// let errorEl = document.getElementById("error");
// function error() {
//   errorEl.textContent = "Something went wrong, please try again";
// }

//calculator challenge
let num1 = 8;
let num2 = 2;
let total = 0;
let sumEl = document.getElementById("sum-el");

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
  sumEl.textContent = "Sum: ";
  total = num1 + num2;
  sumEl.textContent += total;
}

function subtract() {
  sumEl.textContent = "Sum: ";
  total = num1 - num2;
  sumEl.textContent += total;
}

function divide() {
  sumEl.textContent = "Sum: ";
  total = num1 / num2;
  sumEl.textContent += total;
}

function multiply() {
  sumEl.textContent = "Sum: ";
  total = num1 * num2;
  sumEl.textContent += total;
}
