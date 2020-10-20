let highScoreBtn = document.querySelector("#scoreButton");
let timer = document.querySelector("#timer");
let quiz = document.querySelector("#quiz");
let response = document.querySelector("#response");
let seconds = 0;
let complete = 0;
let q = 0;

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
quizElStartBtn.textContent = "Start";
quiz.appendChild(quizElStartBtn);

let buttonsEl = document.querySelector("#buttons");

let ans1BtnEl = document.querySelector("#ans1Btn");
ans1BtnEl.setAttribute("style", "display: none");

let ans2BtnEl = document.querySelector("#ans2Btn");
ans2BtnEl.setAttribute("style", "display: none");

let ans3BtnEl = document.querySelector("#ans3Btn");
ans3BtnEl.setAttribute("style", "display: none");

let ans4BtnEl = document.querySelector("#ans4Btn");
ans4BtnEl.setAttribute("style", "display: none");

let responseEl = document.createElement("p");
response.appendChild(responseEl);

// Starts counting down time once start button is clicked and stops when seconds = 0

function disappear() {
    setTimeout(function () {
        responseEl.textContent = "";
    }, 1000)
}

function startTimer() {
    
    let timerInterval = setInterval(function () {
        seconds--;
        timerEl.textContent = "Time Left: " + seconds;

        if (seconds <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
    if (complete===1){
        return;
    }

}
function question1() {
    let q = 1
    if(q === 2){
        return;
    }
    quizElHead.textContent = "Question 1";
    quizElBody.textContent = "insert question 1 here";
    quizElStartBtn.remove();

    ans1BtnEl.textContent = "Answer 1";
    ans1BtnEl.setAttribute("style", "display: list-item");
    ans1Btn.setAttribute("value", "correct");

    ans2BtnEl.textContent = "Answer 2";
    ans2BtnEl.setAttribute("style", "display: block");
    ans2Btn.setAttribute("value", "wrong");

    ans3BtnEl.textContent = "Answer 3";
    ans3BtnEl.setAttribute("style", "display: block");
    ans3Btn.setAttribute("value", "wrong");

    ans4BtnEl.textContent = "Answer 4";
    ans4BtnEl.setAttribute("style", "display: block");
    ans4BtnEl.setAttribute("value","wrong");

}
function question2() {
    let q = 2 ;
    if(q === 3){
        return;
    }
    quizElHead.textContent = "Question 2";
    quizElBody.textContent = "insert question 2 here";

    ans1BtnEl.textContent = "Answer 1b";
    ans1BtnEl.setAttribute("style", "display: block");
    ans1Btn.setAttribute("value", "wrong");
    
    ans2BtnEl.textContent = "Answer 2b";
    ans2BtnEl.setAttribute("style", "display: block");
    ans2Btn.setAttribute("value", "correct");

    ans3BtnEl.textContent = "Answer 3b";
    ans3BtnEl.setAttribute("style", "display: block");
    ans3Btn.setAttribute("value", "wrong");

    ans4BtnEl.textContent = "Answer 4b";
    ans4BtnEl.setAttribute("style", "display: block");
    ans4Btn.setAttribute("value", "wrong");
}
function question3() {
    let q = 3
    if(q === 4){
        return;
    }
    quizElHead.textContent = "Question 3";
    quizElBody.textContent = "insert question 3 here";

    ans1BtnEl.textContent = "Answer 1c";
    ans1BtnEl.setAttribute("style", "display: block");
    ans1Btn.setAttribute("value", "wrong");

    ans2BtnEl.textContent = "Answer 2c";
    ans2BtnEl.setAttribute("style", "display: block");
    ans2Btn.setAttribute("value", "wrong");

    ans3BtnEl.textContent = "Answer 3c";
    ans3BtnEl.setAttribute("style", "display: block");
    ans3Btn.setAttribute("value", "correct");

    ans4BtnEl.textContent = "Answer 4c";
    ans4BtnEl.setAttribute("style", "display: block");
    ans4Btn.setAttribute("value", "wrong");
}
function question4() {
    let q = 4
    if(q === 5){
        return;
    }
    quizElHead.textContent = "Question 4";
    quizElBody.textContent = "insert question 4 here";

    ans1BtnEl.textContent = "Answer 1d";
    ans1BtnEl.setAttribute("style", "display: block");
    ans1Btn.setAttribute("value", "wrong");

    ans2BtnEl.textContent = "Answer 2d";
    ans2BtnEl.setAttribute("style", "display: block");
    ans2Btn.setAttribute("value", "wrong");

    ans3BtnEl.textContent = "Answer 3d";
    ans3BtnEl.setAttribute("style", "display: block");
    ans3Btn.setAttribute("value", "wrong");

    ans4BtnEl.textContent = "Answer 4d";
    ans4BtnEl.setAttribute("style", "display: block");
    ans4Btn.setAttribute("value", "correct");
}

function question5() {
    let q = 5
    if(q === 6){
        return;
    }
    quizElHead.textContent = "Question 5";
    quizElBody.textContent = "insert question 5 here";

    ans1BtnEl.textContent = "Answer 1e";
    ans1BtnEl.setAttribute("style", "display: block");
    ans1Btn.setAttribute("value", "correct");

    ans2BtnEl.textContent = "Answer 2e";
    ans2BtnEl.setAttribute("style", "display: block");
    ans2Btn.setAttribute("value", "wrong");

    ans3BtnEl.textContent = "Answer 3e";
    ans3BtnEl.setAttribute("style", "display: block");
    ans2Btn.setAttribute("value", "wrong");

    ans4BtnEl.textContent = "Answer 4e";
    ans4BtnEl.setAttribute("style", "display: block");
    ans2Btn.setAttribute("value", "wrong");
}

function main() {
    seconds = 75;
    q++;
    startTimer();
    question1();
}

// When start button is clicked quiz starts
quizElStartBtn.addEventListener("click", function (event) {
    event.preventDefault();
    main()
});

buttonsEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.value === "correct") {
        responseEl.textContent = "Correct Answer";
        disappear();

        if(q === 1){
            q++;
            question2();
        }
        else if(q === 2){
            q++;
            question3();
        }
        else if (q === 3){
            q++;
            question4();
        }
        else if (q === 4){
            q++;
            question5();
        }
        else if (q === 5){
            q++
            complete++
        }
    }
    else {
        responseEl.textContent = "Wrong Answer";
        seconds = seconds - 10;
        disappear();
    }
})