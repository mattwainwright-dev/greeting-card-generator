let count = 0;
let speed = 2000;
function tick() {
    count = count + 1;
    console.log("Tick " + count);

    if (count === 10) {
        clearInterval(timer);
    }
}

let timer = setInterval(tick, speed);