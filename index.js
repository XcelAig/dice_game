var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


function rollDieA() {

    if (randomNumber1 === 1) {
        document.querySelector("img").setAttribute("src", "images/dice1.png");
    } else if (randomNumber1 === 2) {
        document.querySelector("img").setAttribute("src", "images/dice2.png");
    } else if (randomNumber1 === 3) {
        document.querySelector("img").setAttribute("src", "images/dice3.png");
    } else if (randomNumber1 === 4) {
        document.querySelector("img").setAttribute("src", "images/dice4.png");
    } else if (randomNumber1 === 5) {
        document.querySelector("img").setAttribute("src", "images/dice5.png");
    } else {
        document.querySelector("img").setAttribute("src", "images/dice6.png");
    }
}

function rollDieB() {

    if (randomNumber2 === 1) {
        document.getElementById("dice").setAttribute("src", "images/dice1.png");
    } else if (randomNumber2 === 2) {
        document.getElementById("dice").setAttribute("src", "images/dice2.png");
    } else if (randomNumber2 === 3) {
        document.getElementById("dice").setAttribute("src", "images/dice3.png");
    } else if (randomNumber2 === 4) {
        document.getElementById("dice").setAttribute("src", "images/dice4.png");
    } else if (randomNumber2 === 5) {
        document.getElementById("dice").setAttribute("src", "images/dice5.png");
    } else {
        document.getElementById("dice").setAttribute("src", "images/dice6.png");
    }

}
rollDieA();
rollDieB();


function winner() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "🚩Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "🚩Player 2 wins!";
    } else {
        document.querySelector("h1").textContent = "It's a draw!";
    }
}

winner();