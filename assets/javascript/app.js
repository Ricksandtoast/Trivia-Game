

window.onload = function(){
  $("#Start").click(game.start);
  
}
var game =
{
  questions: ["Which guitar player signed himself to his own record label?", "Which one of these artists is not in the Rock and Roll Hall of Fame?"],
  question1Answers:["Joe Satriani","John Mayer", "Jimmy Page", "Steve Vai"],
  question2Answers:["Police", "Black Sabbath", "Def Leppard", "Frank Zappa",],
  userChoice:"",
  //timer:"00:30",
  //30 seconds
  counter:30,
  currentQuestion:0,
  intervalId:null,
  timerOn : false,

start: function()
{
  if(game.timerOn==true){
    alert("You cannot start while a game is already in session")
  }
  game.timerOn = true;
  if(game.timerOn == true){
  game.showQuestion1();
  game.showAnswers1();
  game.anwer1Logic();
  $("#time").html(game.counter);
  //this should decrease number by one
  intervalId = setInterval(game.count, 1000);
  game.stop();
  setTimeout(displayImage,1000);
  setTimeout();
  }
  
},
showQuestion1:function()
  {
    $("#question").html(game.questions[0]);
},
showAnswers1:function(){
  $("#answer1").html(this.question1Answers[0]);
  $("#answer2").html(this.question1Answers[1]);
  $("#answer3").html(this.question1Answers[2]);
  $("#answer4").html(this.question1Answers[3]);
},
anwer1Logic:function()
{
  
  $("#answer1").click(function(){
    alert("wrong answer");
  });
  $("#answer2").click(function(){
    alert("wrong answer");
  });
  $("#answer3").click(function(){
    alert("wrong answer");
  });
  $("#answer4").click(function(){
    alert("Correct");
  });
},
showQuestion2:function()
{
  $("#question").html(game.question[1]);
},
answer2Logic:function()
{
  $("#answer1").click(function(){
    alert("wrong answer");
  });
  $("#answer2").click(function(){
    alert("wrong answer");
  });
  $("#answer3").click(function(){
    alert("wrong answer");
  });
  $("#answer4").click(function(){
    alert("Correct");
  });
},
count:function()
{
  game.counter --;
  $("#time").html(game.counter);
  game.stop();

},
stop:function()
{
  console.log("stop");
  var myCounter = game.counter;
  if(myCounter == 0){
    clearInterval(intervalId);
    alert("Times up");
    game.timerOn = false;
    game.counter = 30;
  }
},

displayNextQuestion:function()
{

},
}



