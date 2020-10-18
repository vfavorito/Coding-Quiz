let highScoreBtn = document.querySelector("#scoreButton");
let timer = document.querySelector("#timer");
let quiz = document.querySelector("#quiz");
let seconds = 0
// Creating and Displaying High Score Button
let scoreBtnEl = document.createElement("button");
scoreBtnEl.textContent = "View High Scores";
highScoreBtn.appendChild(scoreBtnEl);
// Creating and Displaying Timer
let timerEl = document.createElement("h3");
timerEl.textContent = "Time Left: " + seconds;
timer.appendChild(timerEl);
// Creating and Displaying Quiz Header
let quizElHead = document.createElement("h1");
quizElHead.textContent = "Coding Quiz";
quiz.appendChild(quizElHead);
// Creating and Diplaying Quiz Body
let quizElBody = document.createElement("p");
quizElBody.textContent = "This Quiz contains 5 multiple chooice coding related questions.  You are given 75 seconds to complete the Quiz, but be careful a wrong answer will subtract 10 seconds from your time!  Try to complete the quiz with as much time left on the clock as possible.  Click the Start Button to begin!";
quiz.appendChild(quizElBody);
// Creating and Displaying Start Button
let quizElStartBtn = document.createElement("button");
quizElStartBtn.textContent = "Start"
quiz.appendChild(quizElStartBtn);