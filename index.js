let computerarray = [];
let userarray = [];
var array = ["green", "blue", "red", "yellow"];
var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#heading").text("Press Any Key To Start Game");
    $("#scoreboard").text("Level- " + level);
    setTimeout(function () {
      computerturn();
    }, 600);
    started = true;
  }
});

// COMPUTER CLICKS
function computerturn() {
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  computerarray.push(array[randomNumber]);
  $("#"+array[randomNumber]).fadeIn(100).fadeOut(100).fadeIn(100);
  createsound(array[randomNumber]);
}

// USER CLICKS
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userarray.push(userChosenColour);
  $("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  createsound(userChosenColour);
  check(userarray.length-1);
});

// CHECKING OF STRINGS
function check(currentlevel) {
  console.log("check function is called");
  if (userarray[currentlevel] === computerarray[currentlevel]) {
    if (userarray.length === computerarray.length) {
      $("#scoreboard").html("Level - "+level);
      setTimeout(function () {
        userarray = [];
        computerturn();
      }, 1000);
    }
  } 
  else {
      createsound("wrong");
      $("#heading").text("Game Over, Press Any Key to Restart");
      startOver();
    }
  }

// SOUND CREATION
function createsound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// STARTING AGAIN
function startOver() {
  level = 0;
  computerarray = [];
  userarray = [];
  started = false;
}



