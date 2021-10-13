const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {

let card;
let turn;
beforeEach(function(){
   card = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
   turn = new Turn('pug', card);
 });

  it('should be a function', function() {
    // const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    // const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess to question', function() {
    const turn = new Turn('pug', card);
    expect(turn.guess).to.equal('pug');
  });

  it('should store the current card in play', function() {
    const turn = new Turn('pug', card);
    expect(turn.card).to.be.an.instanceOf(Card);
  });

  it('should be able to return the guess', function() {
    const turn = new Turn('pug', card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.deep.equal('pug');
  });

  it('should be able to return the current card', function() {
    const turn = new Turn('pug', card);
    turn.returnCard();
    expect(turn.returnCard()).to.be.an.instanceOf(Card);
  });

  it('should be able to evaluate whether the guess is the correct answer', function() {
    const turn = new Turn('pug', card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to give feedback on the guess', function() {
    const turn = new Turn('pug', card);
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

});
