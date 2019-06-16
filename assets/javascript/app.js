//Reference the quiz div
var quiz = $("#quiz");
var correct = 0;
var incorrect = 0;
var counter = 6; //60seconds
var interval = '';
var a = 0;
var questions = [
    { 
        q: "color of banana?", 
        a: ["blue", "yellow", "red", "olive"], 
        correctAnswer: "yellow" 
    },
    { 
        q: "color of grape?", 
        a: ["blue", "light-green", "red", "black"], 
        correctAnswer: "yellow" 
    },
    { 
        q: "color of melon?", 
        a: ["blue", "yellow", "green", "blue-navy"], 
        correctAnswer: "yellow" 
    }
];

function printQuestions(a){
    quiz.empty();

    if (a < questions.length){

        var questionName = $("<h3>");
        questionName.text(questions[a].q);
        quiz.append(questionName);
        var answersBox = questions[a].a;

        for (var i = 0; i < answersBox.length; i++) {
            var button = $("<button>");
            button.text(answersBox[i]);
            button.attr('data-userAnswer', answersBox[i]);
            button.attr('data-correctAnswer', questions[a].correctAnswer);
            button.addClass('btn btn-primary')
            quiz.append(button);
        }
    }else{
        stopInterval();
        var wins = $('<h1>');
        wins.text('Correct' + correct)
        console.log("wins " + correct);
        var losses = $('<h1>');
       losses.text("Incorrect " + incorrect)
        quiz.append(wins, losses);
    }
}


$(document).on('click', '.btn', function(){
//inside of THIS button there is an attr of data-userAnswer
   var userAnswer = $(this).attr('data-userAnswer');
   var correctAnswer = $(this).attr('data-correctAnswer');

    if (userAnswer === correctAnswer){
        correct++;
        console.log('correct: ' + correct)
    }else{
        incorrect++;
        console.log('Incorrect: ' + incorrect)
    }
})


interval = setInterval(function(){
    counter--;
    $("#timer").text(counter)
    console.log(counter)
    if(counter === 0){
        counter = 6;
        a++;
        printQuestions(a)
    }
},1000)


function stopInterval(){
    clearInterval(interval)
}



printQuestions(a)
























































// array of questions

// var questions = [
//     { q: "color of banana?", a: ["blue", "yellow", "red", "black"], correctAnswer: "yellow" },
//     { q: "color of banana?", a: ["blue", "yellow", "red", "black"], correctAnswer: "yellow" },
//     { q: "color of banana?", a: ["blue", "yellow", "red", "black"], correctAnswer: "yellow" }
// ];

// //functions

// //start game
// function startGame() {

//     timer = setInterval(countdown, 1000);

//     $("#timer").prepend("<h2>Time Remaining: <span id='counter-value'>60</span> Seconds</h2>");

//     $("#start").remove();

//     for (var i = o; i < questions.length; i++) {

//         $("#quiz").append("<h2>" + questions[i].q + "</h2>");

//         for (var j=0; j<questions[i].a.length; j++) {

//             $("#quiz").append("<input type='radio' name='question-" + i + "'value'" + questions[i].a[j] + "''>" + questions[i].a[j])

//         }
//     }
//     $("#quiz").append("<button id='submit'>Submit</button>");
// }

// //countdown
// function countdown() {

//     $("#counter-value").html(counter);
//     if (counter === 0) {
//         checkResults();
//     }

// }


// //checkResults
// function checkResults() {


// }


// //showResults
// function showResults() {


// }