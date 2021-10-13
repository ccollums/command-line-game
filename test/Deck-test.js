const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/deck.js');
const Card = require('../src/Card.js');

describe('Deck', function() {

  it.skip('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it.skip('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it.skip('should store the instances of card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.equal([card1, card2, card3]);
  });

  it.skip('should be able to count the number of cards in the deck', function() {
    const deck = new Deck();
    deck.countCards();
    expect(deck.countCards()).to.equal(3);
  });

});
