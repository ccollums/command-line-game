class Card {
  constructor(questionNumber, questionText, answers, correctAnswer) {
    this.id = Date.now()
    this.questionNumber = questionNumber;
    this.question = questionText;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;
