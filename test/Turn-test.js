const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {

  let card;
  let turn;
  beforeEach(function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess to question', function() {
    expect(turn.guess).to.equal('pug');
  });

  it('should store the current card in play', function() {
    expect(turn.card).to.be.an.instanceOf(Card);
  });

  it('should be able to return the guess', function() {
    turn.returnGuess();
    expect(turn.returnGuess()).to.deep.equal('pug');
  });

  it('should be able to return the current card', function() {
    turn.returnCard();
    expect(turn.returnCard()).to.be.an.instanceOf(Card);
  });

  it('should be able to evaluate whether the guess is the correct answer', function() {
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to give feedback on the guess', function() {
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

});
