let name = prompt("A name");
let adjective = prompt("An adjective");
let noun = prompt("A noun");
let closings = [
    "You are a legend.",
    "Stay golden.",
    "Signs point to awesome.",
    "Keep being weird.",
    "Chaos suits you."
];

function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function makeCard() {
console.log("Dear " + name + ",");
console.log("You are as " + adjective + " as a " + noun + ".");
console.log("Happy birthday from the generator.");

let index = randomNumber(0, closings.length - 1);
console.log(closings[index]);
}

makeCard();