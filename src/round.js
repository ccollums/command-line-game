const Deck = require('../src/deck.js');
const Turn = require('../src/turn.js');

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    this.turns++;
    this.returnCurrentCard();
    turn.evaluateGuess();
      if (turn.giveFeedback() === 'incorrect!'){
        this.incorrectGuesses.push(this.returnCurrentCard().id)
      }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let percentageMath = this.incorrectGuesses.length / this.turns;
    let percentage = percentageMath * 100;
    return percentage;
  }
}



module.exports = Round;
