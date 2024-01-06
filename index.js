const player1Dice = document.querySelector(".player1-img");
const player2Dice = document.querySelector(".player2-img");

document.querySelector("button").addEventListener("click", function () {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  player1Dice.src = `images/dice${randomNumber1}.png`;
  player2Dice.src = `images/dice${randomNumber2}.png`;

  randomNumber1 > randomNumber2
    ? (document.querySelector("h1").textContent = "🚩 Player 1 wins!")
    : (document.querySelector("h1").textContent = "🚩 Player 2 wins!");

  randomNumber1 === randomNumber2
    ? (document.querySelector("h1").textContent = "It's a draw 🥲")
    : -1;
});
