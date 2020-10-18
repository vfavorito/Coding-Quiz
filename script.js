let highScoreBtn = document.querySelector("#scoreButton");
let timer = document.querySelector("#timer");
let quiz = document.querySelector("#quiz");
let seconds = 0
// Creating and Displaying High Score Button
let scoreBtnEl = document.createElement("button");
scoreBtnEl.textContent = "View High Scores";
highScoreBtn.appendChild(scoreBtnEl);
// Creating and Displaying Timer
let timerEl = document.createElement("h4");
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
// Starts counting down time once start button is clicked and stops when seconds = 0
function startTimer() {
    let timerInterval = setInterval(function () {
        seconds--;
        timerEl.textContent = "Time Left: " + seconds;

        if (seconds === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}
function question1() {
    quizElHead.textContent = "Question 1";
    quizElBody.textContent = "insert question 1 here";
    quizElStartBtn.remove();

    let ans1BtnSlot = document.createElement("div");
    let ans1Btn = document.createElement("button");
    ans1Btn.textContent = "Answer 1";
    quizElBody.appendChild(ans1BtnSlot);
    ans1BtnSlot.appendChild(ans1Btn);

    let ans2BtnSlot = document.createElement("div");
    let ans2Btn = document.createElement("button");
    ans2Btn.textContent = "Answer 2";
    quizElBody.appendChild(ans2BtnSlot);
    ans2BtnSlot.appendChild(ans2Btn);

    let ans3BtnSlot = document.createElement("div");
    let ans3Btn = document.createElement("button");
    ans3Btn.textContent = "Answer 3";
    quizElBody.appendChild(ans3BtnSlot);
    ans3BtnSlot.appendChild(ans3Btn);

    let ans4BtnSlot = document.createElement("div");
    let ans4Btn = document.createElement("button");
    ans4Btn.textContent = "Answer 4";
    quizElBody.appendChild(ans4BtnSlot);
    ans4BtnSlot.appendChild(ans4Btn);

    quizElBody.addEventListener("click", function (event) {
        event.preventDefault();
        if (event.target === ans1Btn) {
            let correctAns = document.createElement("p");
            correctAns.textContent = "Correct Answer";
            quizElBody.appendChild(correctAns);
            setTimeout(function () {
                correctAns.remove();
            }, 1000)
            question2();
        }
        else if (event.target === ans2Btn || ans3Btn || ans4Btn) {

            let wrongAns = document.createElement("p");
            wrongAns.textContent = "Wrong Answer";
            quizElBody.appendChild(wrongAns);
            seconds = seconds - 10;
            setTimeout(function () {
                wrongAns.remove();
            }, 1000)
        }
    })
}

function main() {
    seconds = 75;
    startTimer();
    question1();
}
// When start button is clicked quiz starts
quizElStartBtn.addEventListener("click", function (event) {
    event.preventDefault();
    main()
});