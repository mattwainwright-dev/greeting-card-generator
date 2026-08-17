const makeButton = document.querySelector("#make-button");
const surpriseButton = document.querySelector("#surprise-button");

let nameInput = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");
let cardText = document.getElementById("card-text");
let closingText = document.getElementById("closing-text");
let cardSection = document.getElementById("card-section");

let closings = [
    "Find your Pulse.",
    "Turn your noise down.",
    "Keep your finger on the Pulse.",
    "Don't forget to live.",
    "🤘Music For The People🫶."
];

function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function makeCard() {
    cardSection.hidden = false;
    
    let friendName = nameInput.value;
    let adjective = adjectiveInput.value;
    let noun = nounInput.value;
    let closing = closings[randomNumber(0, closings.length - 1)];

    cardText.textContent = "Hey " + friendName + ", your Pulse is " + adjective + " and your sound hits like a " + noun + ".";
    closingText.textContent = closing;
}

function surpriseMe() {
    let closing = closings[randomNumber(0, closings.length - 1)];
    closingText.textContent = closing;
}

makeButton.addEventListener("click", makeCard);
surpriseButton.addEventListener("click", surpriseMe);