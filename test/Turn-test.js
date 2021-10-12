const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn.js');
const Card = require('../src/Card.js')

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store a guess to question', function() {
    const turn = new Turn('pug', Card);
    expect(turn.guess).to.equal('pug');
  });

  it.skip('should store the current card in play', function() {
    const turn = new Turn('pug', Card);
    expect(turn.card).to.be.an.instanceOf(Card);
  });

  it.skip('should be able to return the guess', function() {
    const turn = new Turn('pug', Card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.deep.equal('pug');
  });

  it.skip('should be able to return the current card', function() {
    const turn = new Turn('pug', Card);
    turn.returnCard();
    expect(turn.returnCard()).to.deep.equal({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  });

  it.skip('should be able to evaluate whether the guess is the correct answer', function() {
    const turn = new Turn('pug', Card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it.skip('should be able to give feedback on the guess', function() {
    const turn = new Turn('pug', Card);
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

});
