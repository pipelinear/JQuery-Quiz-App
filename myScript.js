$(document).ready(function () {

  // Hide all questions except question 1
  $("#q2, #q3, #q4, #q5, #q6").hide();
  $("#submit, #kobe").hide();

  $("#correct").click(function () {
    $("#q1").hide();
    $("#q2").show();
  });

  $("#correct1").click(function () {
    $("#q2").hide();
    $("#q3").show();
  });

  $("#correct2").click(function () {
    $("#q3").hide();
    $("#q4").show();
  });

  $("#correct3").click(function () {
    $("#q4").hide();
    $("#q5").show();
  });

  $("#correct4").click(function () {
    $("#q5").hide();
    $("#q6").show();
  });

 $("#correct5").click(function () {
  $("#q6").hide();
  $("#submit, #kobe").show();
});


  // red thing
  $("p").click(function () {
    $(this).css("color", "red");
  });

});


//every questions thats wrong, if you click the wrong answer it then shows the 
//real one, then you can click continue to move to the next one.
//then at the end the 'submit' button can actually show your score you got
// atfer you answer a question it should say the right answer in green, and the incorrect as before in red
// aNSWER question wrong: right answer shows with the incorrect ones in red and others in green
// answer correct: rioght one is shown with the one you selected as green, and others in red