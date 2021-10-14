class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.correct = false;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.card.correctAnswer === this.guess) {
      this.correct = true;
      return true;
    } else {
      this.correct = false;
      return false;
    }
  }

  giveFeedback() {
    if (this.correct) {
      return 'correct!';
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn;
