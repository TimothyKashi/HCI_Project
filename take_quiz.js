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
  var win = window.open('https://store.steampowered.com/app/883710/RESIDENT_EVIL_2__BIOHAZARD_RE2', '_blank');
  win.focus();
}

function gotocod (){
  var win = window.open('https://us.shop.battle.net/en-us/product/call-of-duty-modern-warfare?p=71990&utm_source=Google&utm_medium=Search&utm_content=29243361&utm_campaign=BLZ_COD_L_Modern%20Warfare%202_PC_Q4_2019_NA', '_blank');
  win.focus();
}

function gotoreddead (){
  var win = window.open('https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/', '_blank');
  win.focus();
}

function gotosmash (){
  var win = window.open('https://www.nintendo.com/games/detail/super-smash-bros-switch/', '_blank');
  win.focus();
}

function gototwitter (){
  // window.location.href = 'https://store.steampowered.com/app/883710/RESIDENT_EVIL_2__BIOHAZARD_RE2/';
  var win = window.open('https://twitter.com/', '_blank');
  win.focus();
}

function gotofacebook (){
  // window.location.href = 'https://store.steampowered.com/app/883710/RESIDENT_EVIL_2__BIOHAZARD_RE2/';
  var win = window.open('https://facebook.com/', '_blank');
  win.focus();
}

function gotoreddit (){
  // window.location.href = 'https://store.steampowered.com/app/883710/RESIDENT_EVIL_2__BIOHAZARD_RE2/';
  var win = window.open('https://reddit.com/', '_blank');
  win.focus();
}

function share() {
  document.getElementById('share_pop').style.display = "block";
}

function close_share() {
  document.getElementById('share_pop').style.display = "none";
}

function sugguestion() {
  document.getElementById('sugguestion_pop').style.display = "block";
}

function sugguestion_close() {
  document.getElementById('sugguestion_pop').style.display = "none";
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
