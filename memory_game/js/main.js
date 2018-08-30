alert('Hello, friends.');
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[3];
cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
} 
if (cardsInPlay.length === 2) {
	checkForMatch()
}
