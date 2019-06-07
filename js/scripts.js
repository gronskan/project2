$(document).ready(function() {
  $("#survey form").submit(function(event) {
    var question1 = $("input:radio[name=question1]:checked").val();
    var result;
    if (question1 === "option1") {
      result = $("#answer1").show();
    } else if (question1 === "option2") {
      result = $("#answer2").show();
    } else if (question1 === "option3") {
      result = $("#answer3").show();
    }


    event.preventDefault();
  });
});
