let startButton = document.querySelector("#start_button");
let showTimer = document.querySelector("#hidden1");
let hideInstructions = document.querySelector("#hidden2");
let showQuestions = document.querySelector("#hidden3");
let toggleRightWrong = document.querySelector("#hidden5")
let showHighScoresName = document.querySelector("#hidden6");
let showHighScore = document.querySelector("#hidden7");
let highScoreNameSubmit = document.querySelector("#submitHighScoreName");
let listOfHighScores = document.querySelector("#hidden8");
let listTheName = document.querySelector("#inputName");
let userName = document.querySelector("#name");


// starts timer, shows questions, hides instructions 
startButton.addEventListener("click", function () {
    setTime();
    hideTheInstructions();
    writeQuestions();
    showTheQuestions();

});

let timerStarts = document.querySelector("#countdown");
let secondsLeft = 60;
let timerInterval;
// Sets time and stops quiz when reaches 0
function setTime() {
    showTimer.style.visibility = "visible";
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerStarts.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            showTimer.style.visibility = "hidden";
            showQuestions.style.display = "none";
            showTheHighScoresNameInput();
        }
    }, 1000);
};
// Hides the instruction
function hideTheInstructions() {
    hideInstructions.style.display = "none";
}
// Shows the questions
function showTheQuestions() {
    showQuestions.style.display = "block";
}
// Shows the high scores and asks for name block
function showTheHighScoresNameInput() {
    showHighScoresName.style.display = "block";
    showHighScore.textContent = "High Score: " + score;
    clearInterval(timerInterval);

}
// Was trying to use object but unsuccessful - at previous commits
let questionToWrite = [
    "Which team did Kobe play for?",
    "How many championships did Kobe win?",
    "Which team did Kobe score the most points against?",
    "Which jersey number did Kobe wear?",
    "On Kobe's final game, how many points did he score?",
    "Against which team did Kobe pass MJ in all-time scoring list?",
    "How many Gold medals did Kobe win?",
    "Kobe's legacy is _______"];

let answerToQuestions = [
    ["Lakers", "Hornets", "Sixers", "Celtics"],
    ["3", "5", "2", "8"],
    ["Mavericks", "Knicks", "Raptors", "Blazers"],
    ["8", "24", "10", "All of the above"],
    ["8", "24", "60", "81"],
    ["Bulls", "Timberwolves", "Wizards", "Spurs"],
    ["2", "3", "4", "5"], 
    ["BlackMamba", "Vino", "Bean", "GirlDad"]
];
// index of right answers 
let rightAnswersIdx = [0, 1, 2, 3, 2, 1, 0, 3];
let quest = document.querySelector("#question");

let button0 = document.querySelector("#ans0");
let button1 = document.querySelector("#ans1");
let button2 = document.querySelector("#ans2");
let button3 = document.querySelector("#ans3");
let index = 0;
let score = 0;

// Had a for loop inside the function but wouldn't wait for eventListener before each iteration
// New bug... shows first question then second then skips to fourth then skips to seventh
// Toggling the horizontal line and right or wrong answer doesn't work
// Removed toggling - settling with re-writing right or wrong - it doesn't disappear when new questions are shown

function writeQuestions() {
    if (index < questionToWrite.length && secondsLeft > 0) {
        quest.textContent = questionToWrite[index];
        button0.textContent = answerToQuestions[index][0];
        button1.textContent = answerToQuestions[index][1];
        button2.textContent = answerToQuestions[index][2];
        button3.textContent = answerToQuestions[index][3];
        // toggleRightWrong.textContent = "";
    }
    else {
        showQuestions.style.display = "none";
        showTimer.style.visibility = "hidden";
        showTheHighScoresNameInput()
    };
}

// Removed the button click event handlers out of function 
button0.addEventListener("click", function (event) {
    event.preventDefault();
    if (button0.textContent === answerToQuestions[index][rightAnswersIdx[index]]) {
        toggleRightWrong.textContent = "Previous answer is correct";
        score++
    }
    else {
        toggleRightWrong.textContent = "Previous answer is wrong";
        secondsLeft = secondsLeft - 10;
    };
    index++
    writeQuestions();

});
button1.addEventListener("click", function (event) {
    event.preventDefault();
    if (button1.textContent === answerToQuestions[index][rightAnswersIdx[index]]) {
        toggleRightWrong.textContent = "Previous answer is correct";
        score++
    }
    else {
        toggleRightWrong.textContent = "Previous answer is wrong";
        secondsLeft = secondsLeft - 10;
    };
    index++
    writeQuestions();
});
button2.addEventListener("click", function (event) {
    event.preventDefault();
    if (button2.textContent === answerToQuestions[index][rightAnswersIdx[index]]) {
        toggleRightWrong.textContent = "Previous answer is correct";
        score++
    }
    else {
        toggleRightWrong.textContent = "Previous answer is wrong";
        secondsLeft = secondsLeft - 10;
    };
    index++
    writeQuestions();

});
button3.addEventListener("click", function (event) {
    event.preventDefault();
    if (button3.textContent === answerToQuestions[index][rightAnswersIdx[index]]) {
        toggleRightWrong.textContent = "Previous answer is correct";
        score++
    }
    else {
        toggleRightWrong.textContent = "Previous answer is wrong";
        secondsLeft = secondsLeft - 10;

    };
    index++
    writeQuestions();
});

highScoreNameSubmit.addEventListener("click", function () {
    showHighScoresName.style.display = "none";
    listOfHighScores.style.display = "block";
    listTheName.textContent = userName.value + " - " + score;
})