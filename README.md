# FlashCards Command Line Game

- FlashCards Command Line Game is a simple question and answer game to play on, you guessed it, your command line! It provides a user with a question, allows them to make a guess at the answer and see their final score after all questions are completed. The questions are centered around Front-End Engieenering Mod 2 curriculum at Turing School of Software and Design.

## Technologies Used
- Javascript 
- Atom 
- Test Driven Development (TDD)

## Setup

- Clone down the repo from the command line with the command:

```bash
git clone git@github.com:ccollums/command-line-game.git
```

- Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```
## Gameplay

- Running `node index.js` from the root of your project should result in the start of a new round of the game and will display the following message in your terminal: 

```bash
Node server running on port 3000
Welcome to FlashCards! You are playing with 30 cards. 
---------------------------------------------------------------
```
- A question with 3 possible answers will be displayed. 
- You then can use the arrow keys (up and down) to move between the possible answers. 
- The answer that you are on will be highlighted blue and at the bottom of the question you will see Answer: [number of answer].
- Or you can simply type the numbers 1, 2 or 3 after Answer:
- Once you have selected an answer click return to make your guess.
- If your guess is correct you will see:

```bash
Your answer of [answer chosen] is correct!
```
- If your guess is incorrect you will see:

```bash
Your answer of [answer chosen] is incorrect!
```

- Once you recieve one of these messages hit return to move on to the next question. 
- When you have gone through all of the questions this message will be displayed:

```bash
** Round over! You have answered [percentage]% of the questions correctly!
```

## Game in Action 
<img src="https://media.giphy.com/media/eEqfYoB9t1XKgnVBwn/giphy.gif" width="800" height="400" />

![game2]()

