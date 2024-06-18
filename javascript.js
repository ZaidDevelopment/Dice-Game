// Check if the page was refreshed
const navigationEntries = performance.getEntriesByType("navigation");
if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
  onRefreshRollDice();
}

function onRefreshRollDice() {
  let p1_randomNumber = Math.floor(Math.random() * 6 + 1);
  let p2_randomNumber = Math.floor(Math.random() * 6 + 1);

  //PLAYER 1
  document
    .querySelector("img.img1")
    .setAttribute("src", "images/dice" + p1_randomNumber + ".png");

  //PLAYER 2
  document
    .querySelector("img.img2")
    .setAttribute("src", "images/dice" + p2_randomNumber + ".png");

  //update winner
  if (p1_randomNumber > p2_randomNumber) {
    document.querySelector("h1").innerText = "Player 1 wins!";
  } else if (p1_randomNumber < p2_randomNumber) {
    document.querySelector("h1").innerText = "Player 2 wins!";
  } else {
    document.querySelector("h1").innerText = "Draw!";
  }
}
