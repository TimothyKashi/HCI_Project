function tabulateAnswers() {
  var choice1score = 0;
  var choice2score = 0;
  var choice3score = 0;
  var choice4score = 0;

  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');

  for (i = 0; i < choices.length; i++)
  {
    if (choices[i].checked)
    {
      // add 1 to that choice's score
      if (choices[i].value == 'c1') {
        choice1score = choice1score + 1;
        console.log("c1 score = " + choice1score);
      }
      if (choices[i].value == 'c2') {
        choice2score = choice2score + 1;
        console.log("c2 score = " + choice2score);
      }
      if (choices[i].value == 'c3') {
        choice3score = choice3score + 1;
        console.log("c3 score = " + choice3score);
      }
      if (choices[i].value == 'c4') {
        choice4score = choice4score + 1;
        console.log("c4 score = " + choice4score);
      }
    }
  }

  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the variable here.
  var maxscore = Math.max(choice1score,choice2score,choice3score,choice4score);

  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  if (choice1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You will like games such as Call of Duty";
  }
  if (choice2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You will like games such as Battlefield";
  }
  if (choice3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You will like games such as Minecraft";
  }
  if (choice4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You will like games such as Apex";
  }
  // If you add more choices, you must add another response below.
}

// program the reset button
function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your result will show up here!";
}
