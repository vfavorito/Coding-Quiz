let highScoreBtn = document.querySelector("#scoreButton");
let timer = document.querySelector("#timer");
let quiz = document.querySelector("#quiz");
let response = document.querySelector("#response");
let seconds = 0;
let complete = 0;
let question = 0;

let responseEl = document.createElement("p");
response.appendChild(responseEl);

// Creating and Displaying High Score Button
let scoreBtnEl = document.createElement("button");
scoreBtnEl.textContent = "View High Scores";
highScoreBtn.appendChild(scoreBtnEl);

scoreBtnEl.addEventListener("click", function () {
    quizElStartBtn.remove();
    quizElHead.textContent = "High Scores";
    quizElBody.textContent = "";
    for (let i = 0; i < localStorage.length; i++) {
        let scoreEl = document.createElement("div");
        scoreEl.textContent = localStorage.getItem(i);
        quizElBody.appendChild(scoreEl);
    }
    let backBtn = document.createElement("button");
    backBtn.textContent = "Go Back";
    response.appendChild(backBtn);
    backBtn.addEventListener("click", function () {
        window.location.reload();
    })
});

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
quizElStartBtn.textContent = "Start";
quiz.appendChild(quizElStartBtn);

let buttonsEl = document.querySelector("#buttons");

// creating divs to put answer buttons in
let ans1BtnEl = document.createElement("div");
let ans2BtnEl = document.createElement("div");
let ans3BtnEl = document.createElement("div");
let ans4BtnEl = document.createElement("div");

// putting button divs in the html
buttonsEl.appendChild(ans1BtnEl);
buttonsEl.appendChild(ans2BtnEl);
buttonsEl.appendChild(ans3BtnEl);
buttonsEl.appendChild(ans4BtnEl);

// creating the answer buttons
let ans1Btn = document.createElement("button");
let ans2Btn = document.createElement("button");
let ans3Btn = document.createElement("button");
let ans4Btn = document.createElement("button");

//putting the answer buttons in their own divs in the html
ans1BtnEl.appendChild(ans1Btn);
ans2BtnEl.appendChild(ans2Btn);
ans3BtnEl.appendChild(ans3Btn);
ans4BtnEl.appendChild(ans4Btn);

// hiding the buttons
ans1Btn.setAttribute("style", "Display: none");
ans2Btn.setAttribute("style", "Display: none");
ans3Btn.setAttribute("style", "Display: none");
ans4Btn.setAttribute("style", "Display: none");

let initials = document.createElement("input");
let submitBtn = document.createElement("input");
initials.setAttribute("type", "text");
submitBtn.setAttribute("type", "submit");
buttonsEl.appendChild(initials);
buttonsEl.appendChild(submitBtn);
initials.setAttribute("style", "display: none");
submitBtn.setAttribute("style", "display: none");

function disappear() {
    setTimeout(function () {
        responseEl.textContent = "";
    }, 1000)
}

// Starts counting down time once start button is clicked and stops when seconds = 0
function startTimer() {

    let timerInterval = setInterval(function () {
        seconds--;
        timerEl.textContent = "Time Left: " + seconds;

        if (seconds <= 0 || complete === 1) {
            clearInterval(timerInterval);
            return seconds;
        }
    }, 1000);
}

function question1() {
    let question = 1
    if (question === 2) {
        return;
    }
    quizElHead.textContent = "Question 1";
    quizElBody.textContent = "insert question 1 here";
    quizElStartBtn.remove();

    ans1Btn.textContent = "Answer 1";
    ans1Btn.setAttribute("style", "display: block");
    ans1Btn.setAttribute("value", "correct");

    ans2Btn.textContent = "Answer 2";
    ans2Btn.setAttribute("style", "display: block");
    ans2Btn.setAttribute("value", "wrong");

    ans3Btn.textContent = "Answer 3";
    ans3Btn.setAttribute("style", "display: block");
    ans3Btn.setAttribute("value", "wrong");

    ans4Btn.textContent = "Answer 4";
    ans4Btn.setAttribute("style", "display: block");
    ans4Btn.setAttribute("value", "wrong");
}

function question2() {
    let question = 2;
    if (question === 3) {
        return;
    }
    quizElHead.textContent = "Question 2";
    quizElBody.textContent = "insert question 2 here";

    ans1Btn.textContent = "Answer 1b";
    ans1Btn.setAttribute("value", "wrong");

    ans2Btn.textContent = "Answer 2b";
    ans2Btn.setAttribute("value", "correct");

    ans3Btn.textContent = "Answer 3b";
    ans3Btn.setAttribute("value", "wrong");

    ans4Btn.textContent = "Answer 4b";
    ans4Btn.setAttribute("value", "wrong");
}

function question3() {
    let question = 3
    if (question === 4) {
        return;
    }
    quizElHead.textContent = "Question 3";
    quizElBody.textContent = "insert question 3 here";

    ans1Btn.textContent = "Answer 1c";
    ans1Btn.setAttribute("value", "wrong");

    ans2Btn.textContent = "Answer 2c";
    ans2Btn.setAttribute("value", "wrong");

    ans3Btn.textContent = "Answer 3c";
    ans3Btn.setAttribute("value", "correct");

    ans4Btn.textContent = "Answer 4c";
    ans4Btn.setAttribute("value", "wrong");
}

function question4() {
    let question = 4
    if (question === 5) {
        return;
    }
    quizElHead.textContent = "Question 4";
    quizElBody.textContent = "insert question 4 here";

    ans1Btn.textContent = "Answer 1d";
    ans1Btn.setAttribute("value", "wrong");

    ans2Btn.textContent = "Answer 2d";
    ans2Btn.setAttribute("value", "wrong");

    ans3Btn.textContent = "Answer 3d";
    ans3Btn.setAttribute("value", "wrong");

    ans4Btn.textContent = "Answer 4d";
    ans4Btn.setAttribute("value", "correct");
}

function question5() {
    let question = 5
    if (question === 6) {
        return;
    }
    quizElHead.textContent = "Question 5";
    quizElBody.textContent = "insert question 5 here";

    ans1Btn.textContent = "Answer 1e";
    ans1Btn.setAttribute("value", "correct");

    ans2Btn.textContent = "Answer 2e";
    ans2Btn.setAttribute("value", "wrong");

    ans3Btn.textContent = "Answer 3e";
    ans3Btn.setAttribute("value", "wrong");

    ans4Btn.textContent = "Answer 4e";
    ans4Btn.setAttribute("value", "wrong");
}

function endScreen() {
    ans1Btn.setAttribute("style", "display: none");
    ans2Btn.setAttribute("style", "display: none");
    ans3Btn.setAttribute("style", "display: none");
    ans4Btn.setAttribute("style", "display: none");
    initials.setAttribute("style", "display: block");
    submitBtn.setAttribute("style", "display: block");

    quizElHead.textContent = "Complete!";
    quizElBody.textContent = "Enter Your Initials To Save Your Score!";


    submitBtn.addEventListener("click", function () {
        let name = initials.value;
        let score = name + " - " + seconds + " seconds left";
        localStorage.setItem(localStorage.length, score);
        highScores();
    })
}

function highScores() {
    initials.setAttribute("style", "display: none");
    submitBtn.setAttribute("style", "display: none");
    quizElHead.textContent = "High Scores";
    quizElBody.textContent = "";
    for (let i = 0; i < localStorage.length; i++) {
        let scoreEl = document.createElement("div");
        scoreEl.textContent = localStorage.getItem(i);
        quizElBody.appendChild(scoreEl);
    }
    let homeBtn = document.createElement("button");
    homeBtn.textContent = "Try Again";
    let clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear High Scores";

    quizElBody.appendChild(homeBtn);
    quizElBody.appendChild(clearBtn);

    homeBtn.addEventListener("click", function () {
        window.location.reload();
    })
    clearBtn.addEventListener("click", function () {
        localStorage.clear();
    })
}

function main() {
    seconds = 75;
    question++;
    startTimer();
    question1();
}

// When start button is clicked quiz starts
quizElStartBtn.addEventListener("click", function (event) {
    event.preventDefault();
    main()
});
// When an answer is clicked decide if it was correct answer and move to next question
buttonsEl.addEventListener("click", function (event) {
    if (event.target.value === "correct") {
        responseEl.textContent = "Correct Answer";
        disappear();

        if (question === 1) {
            question++;
            question2();
        }
        else if (question === 2) {
            question++;
            question3();
        }
        else if (question === 3) {
            question++;
            question4();
        }
        else if (question === 4) {
            question++;
            question5();
        }
        else if (question === 5) {
            question++;
            complete++;
            endScreen();
        }
    }
    else if (event.target.value === "wrong") {
        responseEl.textContent = "Wrong Answer";
        seconds = seconds - 10;
        disappear();
        if (question === 1) {
            question++;
            question2();
        }
        else if (question === 2) {
            question++;
            question3();
        }
        else if (question === 3) {
            question++;
            question4();
        }
        else if (question === 4) {
            question++;
            question5();
        }
        else if (question === 5) {
            question++;
            complete++;
            endScreen();
        }
    }
})