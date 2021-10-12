class Card {
  constructor(id, questionText, answers, correctAnswer) {
    this.id = id;
    this.question = questionText;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;
