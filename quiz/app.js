function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = currentQuestionNumber + "of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> score : " + quiz.score + " <br> NEVER GIVE UP !</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("1.500 + 1.105 =", ["2000", "2605", "2505", "2600"], "2605"),
    new Question("2.432 + 1.129 =", ["3561", "3560", "3661", "3663"], "3561"),
    new Question("1.225 + 2.155 =", ["3333", "3388", "3830", "3380"], "3380"),
    new Question("6.124 + 5.209 =", ["11323", "12323", "11333", "11133"], "11333"),
    new Question("67 + 55 =", ["112", "121", "122", "211"], "122"),
    new Question("858 - 855 =", ["1", "3", "2", "4"], "3"),
    new Question("286 - 37 =", ["249", "294", "284", "299"], "249"),
    new Question("8.297 - 2.618 =", ["5678", "5677", "5768", "5679"], "5679"),
    new Question("87 - 19 =", ["98", "68", "28", "86"], "68"),
    new Question("112 - 99 =", ["12", "21", "13", "31"], "13")

];

var quiz = new Quiz(questions);

populate();