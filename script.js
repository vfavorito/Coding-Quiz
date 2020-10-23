let highScoreBtn = document.querySelector("#scoreButton");
let timer = document.querySelector("#timer");
let quiz = document.querySelector("#quiz");
let response = document.querySelector("#response");
let seconds = 0;
let complete = 0;
let question = 0;
let responseEl = document.createElement("h3");
response.appendChild(responseEl);
// Creating and Displaying High Score Button
let scoreBtnEl = document.createElement("button");
scoreBtnEl.textContent = "View High Scores";
scoreBtnEl.setAttribute("class","mainBtns");
highScoreBtn.appendChild(scoreBtnEl);
// function that runs when you click the view high scores button
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
    backBtn.setAttribute("class","scoreBtns")
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
let quizElBody = document.createElement("h5");
quizElBody.textContent = "This Quiz contains 5 multiple choice coding related questions.  You are given 75 seconds to complete the Quiz, but be careful a wrong answer will subtract 10 seconds from your time!  Try to complete the quiz with as much time left on the clock as possible.  Click the Start Button to begin!";
quiz.appendChild(quizElBody);
// Creating and Displaying Start Button
let quizElStartBtn = document.createElement("button");
quizElStartBtn.textContent = "Start";
quizElStartBtn.setAttribute("class","mainBtns")
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
//assigning a class to these answer buttons
ans1Btn.setAttribute("class","ansBtn");
ans2Btn.setAttribute("class","ansBtn");
ans3Btn.setAttribute("class","ansBtn");
ans4Btn.setAttribute("class","ansBtn");
// creating inputs for endscreen function
let initials = document.createElement("input");
let submitBtn = document.createElement("input");
initials.setAttribute("type", "text");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("class","submitBtn");
buttonsEl.appendChild(initials);
buttonsEl.appendChild(submitBtn);
initials.setAttribute("style", "display: none");
submitBtn.setAttribute("style", "display: none");
function disappear() {
    setTimeout(function () {
        responseEl.textContent = "";
    }, 650)
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
    if (question === 2) {
        return;
    }
    quizElHead.textContent = "Question 1";
    quizElBody.textContent = "Text in which of these tags will display the largest?";
    quizElStartBtn.remove();
    ans1Btn.textContent = "<h1>";
    ans1Btn.setAttribute("style", "display: block");
    ans1Btn.setAttribute("value", "correct");
    ans2Btn.textContent = "<h2>";
    ans2Btn.setAttribute("style", "display: block");
    ans2Btn.setAttribute("value", "wrong");
    ans3Btn.textContent = "<h3>";
    ans3Btn.setAttribute("style", "display: block");
    ans3Btn.setAttribute("value", "wrong");
    ans4Btn.textContent = "<p>";
    ans4Btn.setAttribute("style", "display: block");
    ans4Btn.setAttribute("value", "wrong");
}
function question2() {
    if (question === 3) {
        return;
    }
    quizElHead.textContent = "Question 2";
    quizElBody.textContent = "What is a collection of properties, where a property associates a name with a value?";
    ans1Btn.textContent = "A String";
    ans1Btn.setAttribute("value", "wrong");
    ans2Btn.textContent = "An Object";
    ans2Btn.setAttribute("value", "correct");
    ans3Btn.textContent = "An Array";
    ans3Btn.setAttribute("value", "wrong");
    ans4Btn.textContent = "None of the above";
    ans4Btn.setAttribute("value", "wrong");
}
function question3() {
    if (question === 4) {
        return;
    }
    quizElHead.textContent = "Question 3";
    quizElBody.textContent = "The space immediately surrounding HTML content is: ";
    ans1Btn.textContent = "Margin";
    ans1Btn.setAttribute("value", "wrong");
    ans2Btn.textContent = "Border";
    ans2Btn.setAttribute("value", "wrong");
    ans3Btn.textContent = "Padding";
    ans3Btn.setAttribute("value", "correct");
    ans4Btn.textContent = "None of the above";
    ans4Btn.setAttribute("value", "wrong");
}
function question4() {
    if (question === 5) {
        return;
    }
    quizElHead.textContent = "Question 4";
    quizElBody.textContent = "If fruit = [apple, banana, orange, grape].  What does fruit[3] return?";
    ans1Btn.textContent = "apple";
    ans1Btn.setAttribute("value", "wrong");
    ans2Btn.textContent = "banana";
    ans2Btn.setAttribute("value", "wrong");
    ans3Btn.textContent = "orange";
    ans3Btn.setAttribute("value", "wrong");
    ans4Btn.textContent = "grape";
    ans4Btn.setAttribute("value", "correct");
}
function question5() {
    if (question === 6) {
        return;
    }
    quizElHead.textContent = "Question 5";
    quizElBody.textContent = "When Using a Bootstrap Grid System how many columns make up the width of a row?";
    ans1Btn.textContent = "12";
    ans1Btn.setAttribute("value", "correct");
    ans2Btn.textContent = "9";
    ans2Btn.setAttribute("value", "wrong");
    ans3Btn.textContent = "10";
    ans3Btn.setAttribute("value", "wrong");
    ans4Btn.textContent = "8";
    ans4Btn.setAttribute("value", "wrong");
}
function endScreen() {
    console.log(question)
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
    let scoreEl = document.createElement("div");
    initials.setAttribute("style", "display: none");
    submitBtn.setAttribute("style", "display: none");
    quizElHead.textContent = "High Scores";
    quizElBody.textContent = "";
    quizElBody.appendChild(scoreEl);
    for (let i = 0; i < localStorage.length; i++) {
        let genEl = document.createElement("div")
        genEl.textContent = localStorage.getItem(i);
        scoreEl.appendChild(genEl);
    }
    let homeBtn = document.createElement("button");
    homeBtn.textContent = "Try Again";
    homeBtn.setAttribute("class","scoreBtns")
    let clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear High Scores";
    clearBtn.setAttribute("class","scoreBtns")
    quizElBody.appendChild(homeBtn);
    quizElBody.appendChild(clearBtn);
    homeBtn.addEventListener("click", function () {
        window.location.reload();
    })
    clearBtn.addEventListener("click", function () {
        localStorage.clear();
        let cleared = 0;
        cleared++;
        if (cleared === 1) {
            scoreEl.textContent = "";
        }
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