const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/round.js');
const Card = require('../src/Card.js');
const Deck = require('../src/deck.js');

class Game {
  constructor(round) {
    this.currentRound = round;
  }

  start(card, deck, round) {
    const cards = new Card(card);
    const decks = new Deck(deck);
    const rounds = new Round(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
