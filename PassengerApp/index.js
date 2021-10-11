let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

let welcomeEl = document.getElementById("welcome-el");

function save() {
  welcomeEl.textContent += ` ${count} - `;
  countEl.textContent = count;
  count = 0;
}
