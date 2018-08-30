var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
	var cardOne = cards[0];
	cardsInPlay.push('cardOne');
	console.log("User flipped " + cardOne);
	var cardTwo = cards[3];
	cardsInPlay.push('cardTwo');
	console.log("User flipped " + cardTwo);

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
  } ;

if (cardsInPlay.length === 2) {
	checkForMatch()
  };

var flipCard = function(cardId) {
	cardsInPlay.push(cards[cardId]);
	if (cardsInplay.length === 2) 
		checkForMatch ()
	}
	console.log("User flipped " + cards[cardId]);	

  flipCard(0);
  flipCard(2);

//cardId isn't defined?