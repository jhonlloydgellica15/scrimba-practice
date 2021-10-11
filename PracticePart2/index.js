//Practice Part 1
// let Person = {
//   Name: "Jhon Lloyd",
//   Age: 23,
//   Country: "Philippines",
// };

// function logData() {
//   return `${Person.Name} is ${Person.Age} years old and lives in ${Person.Country}`;
// }

// console.log(logData());

//Practica Part 2
// let age = 100;

// if (age < 6) console.log("free");
// else if (age >= 6 && age <= 17) console.log("child discount");
// else if (age >= 18 && age <= 26) console.log("student discount");
// else if (age >= 27 && age <= 66) console.log("full price");
// else console.log("senior citizen discount");

// Practice Part 3
// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// largeCountries.shift();
// largeCountries.pop();
// largeCountries.unshift("China");
// largeCountries.push("Pakistan");

// console.log(largeCountries);

//Practice Part 4
// let dayOfMonth = 13;
// let weekday = "Friday";

// if (weekday === "Friday" || dayOfMonth === 13) console.log("HOHOHOO");

//Practice Part 5
// let hands = ["rock", "paper", " scissor"];

// function randItem() {
//   let result = Math.floor(Math.random() * hands.length);
//   return hands[result];
// }

// console.log(randItem());

let fruit = ["Apple", "Orange", "Apple", "Apple", "Orange"];

let appleShelf = document.querySelector("#apple-shelf");
let orangeShelf = document.querySelector("#orange-shelf");

function sendFruits() {
  for (let fruits in fruit) {
    if (fruit[fruits] === "Apple") {
      appleShelf.textContent += `${fruit[fruits]} `;
    } else orangeShelf.textContent += `${fruit[fruits]} `;
  }
}

sendFruits();
