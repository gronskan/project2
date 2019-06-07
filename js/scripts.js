$(document).ready(function() {
  $("#survey form").submit(function(event) {
    event.preventDefault();

    var question1 = $("input:radio[name=question1]:checked").val();
    var result;
    if (question1 === "option1") {
      var response1 = 1;
    } else if (question1 === "option2") {
      var response1 = 2;
    } else if (question1 === "option3") {
      var response1 = 3;
    }

    var question2 = $("input:radio[name=question2]:checked").val();
    var result;
    if (question2 === "option1") {
      var response2 = 1;
    } else if (question2 === "option2") {
      var response2 = 2;
    } else if (question2 === "option3") {
      var response2 = 3;
    }

    var question3 = $("input:radio[name=question3]:checked").val();
    var result;
    if (question3 === "option1") {
      var response3 = 1;
    } else if (question3 === "option2") {
      var response3 = 2;
    } else if (question3 === "option3") {
      var response3 = 3;
    }

    var question4 = $("input:radio[name=question4]:checked").val();
    var result;
    if (question4 === "option1") {
      var response4 = 1;
    } else if (question4 === "option2") {
      var response4 = 2;
    } else if (question4 === "option3") {
      var response4 = 3;
    }

    var question5 = $("input:radio[name=question5]:checked").val();
    var result;
    if (question5 === "option1") {
      var response5 = 1;
    } else if (question5 === "option2") {
      var response5 = 2;
    } else if (question5 === "option3") {
      var response5 = 3;
    }

    var pointTotal = (response1 + response2 + response3 + response4 + response5);

    if (pointTotal <= 8) {
      result = $("#answer1").show();
    } else if (pointTotal >= 9 && pointTotal <= 12) {
      result = $("#answer2").show();
    } else if (pointTotal >= 13) {
      result = $("#answer3").show();
    }
    
  });
});
