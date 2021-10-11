let player = {
  name: "Jhon Lloyd",
  chips: 145,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let playerEl = document.querySelector("#player-el");
playerEl.textContent = `${player.name} $${player.chips}`;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) return 10;
  else if (randomNumber === 1) return 11;
  else return randomNumber;
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards.push(firstCard);
  cards.push(secondCard);

  sum = firstCard + secondCard;

  renderGame();
  isAlive = true;
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]} `;
  }

  sumEl.textContent = `Sum: ${sum}`;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isAlive = false;
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

// let featuredPosts = [
//   "Check out my Netflix clone",
//   "Here's the code for my project",
//   "I've just relaunched my portfolio",
// ];

// let myself = ["Jhon Lloyd", 23, true];

// let messages = [
//   "Hey, how's it going?",
//   "I'm great, thank you! How about you",
//   "All good. Been working on my portfolio lately",
//   "Same here",
// ];

// for (let i = 0; i < messages.length; i++) console.log(messages[i]);

// let cards = [7, 3, 9];

// for (let i = 0; i < cards.length; i++) console.log(cards[i]);

// let sentence = ["Hello", "my", "name ", "is", "Per"];
// let greetingEl = document.querySelector("#greeting-el");

// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += `${sentence[i]} `;
// }
// let player1Time = 102;
// let player2Time = 107;

// function totalRaceTime() {
//   return player1Time + player2Time;
// }

// let result = totalRaceTime();
// console.log(result);

// function rollDice() {
//   let randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
// }

// console.log(rollDice());

// let hasCompletedCourse = true;
// let givesCertificate = true;

// if (hasCompletedCourse && givesCertificate) generateCertificate();

// function generateCertificate() {
//   console.log("Generating certificate....");
// }

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if ((hasSolvedChallenge && hasHintsLeft) === false) showSolution();

// function showSolution() {
//   console.log("Showing the solution...");
// }

// let likesDocumentaries = true;
// let likesStartups = false;

// if (likesDocumentaries || likesStartups) recommendedMovie();

// function recommendedMovie() {
//   console.log("Hey, check out this new film we think you will like!");
// }

// let course = {
//   title: "Learn CSS grid for free",
//   lessons: 16,
//   creator: "Per Harald Borgen",
//   length: 63,
//   level: 3,
//   isFree: true,
//   tags: ["html", "css"],
// };

// let airbnbListing = {
//   description: "Live like a king",
//   price: 1089,
//   inclusive: ["bedrooms", "baths"],
// };

// console.log(airbnbListing.inclusive);
