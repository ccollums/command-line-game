const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/deck.js');
const Round = require('../src/round.js');
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
    card1 = new Card({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});
    cards = [card1, card2, card3];
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

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.be.an.instanceOf(Round);
  })

  it('should have a start method to begin the game', function() {
    expect(game.start(card1, deck, round)).to.equal(game.start(card1, deck, round));
  })

  // it.skip('should be able to make a new card in the start method', function() {
  //   expect(game.start(card1, deck, round)).to.include.an.instanceOf(Card);
  // })
})
