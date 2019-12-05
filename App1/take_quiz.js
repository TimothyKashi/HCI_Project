function close_box1() {
  document.getElementById('box1').style.display = "none";
}

function close_box2() {
  document.getElementById('box2').style.display = "none";
}

function close_box3() {
  document.getElementById('box3').style.display = "none";
}

function close_box4() {
  document.getElementById('box4').style.display = "none";
}

function gotoresevil (){
  window.location.href = 'https://store.steampowered.com/app/883710/RESIDENT_EVIL_2__BIOHAZARD_RE2/';
}

function tabulateAnswers() {
  var choice1score = 0;
  var choice2score = 0;
  var choice3score = 0;
  var choice4score = 0;

  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  var count = 0;

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
      count++
    }
  }

  // Checks if all questions are answered
  if(count != 4)
  {
      alert("Please answer all questions!")
      return false;
  }


  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the variable here.
  var maxscore = Math.max(choice1score,choice2score,choice3score,choice4score);

  // Display answer corresponding to that choice
  if (choice1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
    document.getElementById('box1').style.display = "block";
  }
  else if (choice2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
    document.getElementById('box2').style.display = "block";
  }
  else if (choice3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
    document.getElementById('box3').style.display = "block";
  }
  else if (choice4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
    document.getElementById('box4').style.display = "block";
  }
  // If you add more choices, you must add another response below.
}

// program the reset button
function resetAnswer() {}
