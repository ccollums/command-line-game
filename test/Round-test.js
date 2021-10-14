const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/deck.js');
const Round = require('../src/round.js');
const Card = require('../src/Card.js');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let cards;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store the current deck', function() {
    expect(round.deck).to.deep.equal(deck);
  });

  it('the turns for the round should start out at 0', function() {
    expect(round.turns).to.equal(0);
  });

  it('the round should start with an empty array of incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to return the current card', function() {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.be.an.instanceOf(Card);
  });

  it('should be able to add to turns when a turn is taken', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.turns).to.equal(2);
  })

  it('should return whether the guess was correct or incorrect', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('spleen')).to.equal('incorrect!');

  })

  it('should add id of question to incorrect guesses if the guess is incorrect', function() {
    round.takeTurn('spleen');
    expect(round.incorrectGuesses).to.deep.equal([14]);
  })

  it('should calculate the percentage of correct answers', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.calculatePercentCorrect();
    expect(round.calculatePercentCorrect()).to.deep.equal(50);
  })

  it('should print out a message when the round is over', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.calculatePercentCorrect();
    round.endRound();
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!')
  })

  it('should print out message with 100% if all questions are answered correctly', function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.calculatePercentCorrect();
    round.endRound();
    expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!')
  })

});
