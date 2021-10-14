const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');
const Card = require('../src/Card.js');
const Game = require('../src/Game.js')

describe('Game', function() {

  let card1;
  let card2;
  let card3;
  let cards;
  let deck;
  let round;
  let game;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck(cards);
    round = new Round(deck);
    game = new Game(round)
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  })

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceOf(Game);
  })

  it('should have a start method to begin the game', function() {
    expect(game.start(card1, deck, round)).to.equal(game.start(card1, deck, round));
  })

})
