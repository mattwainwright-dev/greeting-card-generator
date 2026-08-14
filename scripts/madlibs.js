let name = prompt("A name");
let adjective = prompt("An adjective");
let noun = prompt("A noun");
let style = prompt("Fancy or silly?");
let closings = [
    "You are a legend.",
    "Stay golden.",
    "Signs point to awesome.",
    "Keep being weird.",
    "Chaos suits you.",
    "Stay strange."

];

function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function makeCard() {
if (style.toLowerCase() === "fancy") {
    console.log("Dearest " + name + ",");
} else if (style.toLowerCase() === "silly") {
 console.log("YO " + name + "!");
} else {
    console.log("Hey " + name + ",");
   }
console.log("You are as " + adjective + " as a " + noun + ".");
console.log("Happy birthday from the generator.");

let index = randomNumber(0, closings.length - 1);
console.log(closings[index]);
}

makeCard();