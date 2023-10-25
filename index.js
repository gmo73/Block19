/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

// TODO: Add support for more colors
const names = ["William", "James", "Noah"];
const occupation = ["Driver", "Doctor", "Lawyer"];
const startingPrice = 80;100;150


const freeLanceWritersEL = [
  {
    name: "Alice",
    occupation: "writer",
    startingPrice: 30,
  },
  {
    name: "Bob",
    size: "Teacher",
    startingPrice: 50,
  },
    {
        name: "Carol",
        size: "Programmer",
        startingPrice: 70,
    },
];

// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addnamesIntervalId = setInterval(addnames, 1000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the squares
  const freeLanceWritersEL = document.querySelector("tbody");
  const template = freeLanceWritersEL.map((writer) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = writer.name;
    const td2 = document.createElement("td");
    td2.textContent = writer.occupation;
    const td3 = document.createElement("td");
    td3.textContent = `$${writer.startingPrice}`;
    tr.append(td1, td2, td3);
    return tr;
  });
 freeLanceWritersEL.replaceChildren(...template);
}

/**
 * Add a random ay
 */
function startingnames() {
  const startingPrice = startingPrice[Math.floor(Math.random() * startingPrice.length)];
  const occupation = occupation[Math.floor(Math.random() * occupation.length)];
  const names = names[Math.floor(Math.random() * names.length)];
  names.push({ startingPrice, occupation, names });
 
 render();

if (names.length === startingPrice) {
  clearInterval(addnamesIntervalId);
}

let secondsLeft = 10;
const countdown = document.querySelector("#countdown");
countdown.textContent = secondsLeft;


const countdownIntervalId = setInterval(() => {
  secondsLeft--;
  countdown.textContent = secondsLeft;
  if (secondsLeft === 0) {
    clearInterval(countdownIntervalId);
  }
}, 1000);