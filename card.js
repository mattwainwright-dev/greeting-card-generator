// Finds the three buttons on the page
const makeButton = document.querySelector("#make-button");
const surpriseButton = document.querySelector("#surprise-button");
const resetButton = document.querySelector("#reset-button");

// Finds the three text inputs
let nameInput = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");

// Finds the parts of the card that JavaScript will update
let cardText = document.getElementById("card-text");
let closingText = document.getElementById("closing-text");
let cardSection = document.getElementById("card-section");
let bonusLine = document.getElementById("bonus-line");

// Keeps track of how many cards have been made
let cardsMade = 0;

// Stores the possible random Pulse closings
let closings = [
    "Find your Pulse.",
    "Turn your noise down.",
    "Keep your finger on the Pulse.",
    "Don't forget to live.",
    "🤘Music For The People🫶."
];

// Returns a randomn whole number between a and b
function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Builds and displays a greeting card
function makeCard() {
    cardSection.hidden = false;
    cardsMade = cardsMade + 1;

    // Reveals the secret message after five cards
    if (cardsMade >= 5) {
        bonusLine.hidden = false;
    }

    // Reads the visitor's current input values
    let friendName = nameInput.value;
    let adjective = adjectiveInput.value;
    let noun = nounInput.value;

    // Chooses a random closing
    let closing = closings[randomNumber(0, closings.length - 1)];

    // Displays the completed greeting card
    cardText.textContent = "Hey " + friendName + ", your Pulse is " + adjective + " and your sound hits like a " + noun + ".";
    closingText.textContent = closing;
}

// Changes only the closing to another random option
function surpriseMe() {
    let closing = closings[randomNumber(0, closings.length - 1)];
    closingText.textContent = closing;
}

// Clears the inputs and hides the generated card
function resetGenerator() {
    nameInput.value = "";
    adjectiveInput.value = "";
    nounInput.value = "";
    cardSection.hidden = true;
}

// Connects each button click to its function
makeButton.addEventListener("click", makeCard);
surpriseButton.addEventListener("click", surpriseMe);
resetButton.addEventListener("click", resetGenerator);