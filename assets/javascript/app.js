

window.onload = function(){
  $("#Start").click(game.start);
  
}
var game =
{
  questions: ["Which guitar player signed himself to his own record label?", "Which one of these artists is not in the Rock and Roll Hall of Fame?","Which one of these famous Jazz musicians grew up in New Orleans?"],
  question1Answers:["Joe Satriani","John Mayer", "Jimmy Page", "Steve Vai"],
  question2Answers:["Police", "Black Sabbath", "Def Leppard", "Frank Zappa",],
  question3Answers:["Miles Davis", "Dizzy Gillespie", "Louis Armstrong", "Charlie Parker"],
  userChoice:"",

  //timer:"00:30",
  //30 seconds
  counter:4,
  intervalId:null,
  timerOn : false,
  rightAnswer:false,
  questionCount: 0,
  correct:0,
start: function()
{
  if(game.timerOn==true){
    alert("You cannot start while a game is already in session")

  }
    //$("#correct").html(game.correct);
    game.timerOn = true;
    game.showQuestion();
    game.showAnswers1();
    game.answer1Logic();
  $("#time").html(game.counter);
 
  //this should decrease number by one
  
 // game.stop();
  // setTimeout(displayImage,1000);
  // setTimeout();
  
},
counterReset:function()
{
  
  console.log("counter reset called");
  game.counter = 20;
  $("#time").html(game.counter);

},
showQuestion:function()
  {
    //game.intervalId = clearInterval(game.intervalId);
    game.intervalId = setInterval(game.count, 1000);
    game.timerOn = true;
    $("#question").show();
    // game.count();
    $("#question").html(game.questions[game.questionCount]);
    game.stop();
 },
correct1:function()
{
  alert("Correct");
    game.rightAnswer = true;
    game.questionCount++;
    game.correct++;
    game.stop();
    //$("#question").hide();
    setTimeout(game.showQuestion,2000);
    game.counterReset();
    game.rightAnswer = false;
    
},
showAnswers1:function(){
  $("#answer1").html("<button>"+game.question1Answers[0]+"</button>");
  $("#answer2").html("<button>"+game.question1Answers[1]+"</button>");
  $("#answer3").html("<button>"+game.question1Answers[2]+"</button>");
  $("#answer4").html("<button>"+game.question1Answers[3]+"</button>");
},
showAnswers2:function()
{
  $("#answer1").html("<button>"+game.question2Answers[0]+"</button>");
  $("#answer2").html("<button>"+game.question2Answers[1]+"</button>");
  $("#answer3").html("<button>"+game.question2Answers[2]+"</button>");
  $("#answer4").html("<button>"+game.question2Answers[3]+"</button>");
},
showAnswers3:function()
{
  $("#answer1").html(game.question3Answers[0]);
  $("#answer2").html(game.question3Answers[1]);
  $("#answer3").html(game.question3Answers[2]);
  $("#answer4").html(game.question3Answers[3]);
},
deleteLogic:function(){
  console.log("delete logic called")
  $("#answer1").empty();
  $("#answer2").empty();
  $("#answer3").empty();
  $("#answer4").empty();
},
answer1Logic:function()
{
  
  $("#answer1").click(function(){
    alert("wrong answer");
  });
  $("#answer2").click(function(){
    alert("wrong answer");
  });
  $("#answer3").click(function(){
    alert("wrong answer");
    console.log("answer 1 logic");
  });
  //if answer is correct
  $("#answer4").click(function(){
    game.correct1();
    setTimeout(game.showAnswers2,2000);
    $("#correct").html(game.correct++);
    game.deleteLogic();
    game.answer2Logic();
    console.log("answer 1 logic");
    
  });
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
    game.correct1();
    game.showAnswers3();
  });
  $("#answer4").click(function(){
    alert("wrong answer");
    
  });
},
answer3Logic:function()
{
  $("#answer1").click(function(){
    alert("wrong answer");
  });
  $("#answer2").click(function(){
    alert("wrong answer");
  });
  $("#answer3").click(function(){
    game.correct1();
  });
  $("#answer4").click(function(){
    alert("wrong answer");
  });
},
count:function()
{
    
    game.counter --;
    console.log("count called " + game.counter);
    $("#time").html(game.counter);
    //calls it every time
    game.stop();

    

},
stop:function()
{
  var myCounter = game.counter;
  if(myCounter == 0){
    clearInterval(game.intervalId);
    alert("Times up");
    game.timerOn = false;
    game.counterReset();
    game.questionCount++;
    game.showQuestion();
    console.log("show question should be called from stop");
    console.log(game.questionCount);
      if(game.questionCount == 1)
      {
        game.showAnswers2();
        console.log(game.questionCount + "show answers 2");
        
      }
      if(game.questionCount == 2)
      {
        console.log(game.questionCount);
        game.showAnswers3();
      }
      if(game.questionCount == 4)
      {
        clearInterval(game.intervalId);
        $("#game").hide();
      }
  }
  if(game.rightAnswer == true){
    clearInterval(game.intervalId);
    console.log("right answer test");
  }
},

}
// stopGame:function()
// {
//   clearInterval(game.intervalId);
//   game.timerOn = false;
// }



