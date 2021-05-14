var strt = 0;
var end = 0;
function get() {
  strt = prompt("Enter the starting_value :");
  end = prompt("enter the end_range :");
}
function start() {
  loop1: while (true) {
    get();

    if (Number(strt) + 200 >= end) {
      alert("There should be minimum differrence of 200 between the ranges");
      continue loop1;
    } else {
      break;
    }
  }
  document.getElementById("spn").innerHTML = "# STARTING NUMBER :" + strt;
  document.getElementById("spn1").innerHTML = "# ENDING NUMBER :" + end;

  var random = Math.floor(Math.random() * (end - strt));

  loop2: while (true) {
    x = prompt("Enter ur guess !");
    if (x == random) {
      //document.getElementById("spn3").innerHTML = "*u won*"
      alert("******* YOU WON *******");
      break;
    } else if (x > random) {
      //document.getElementById("spn3").innerHTML = "*Too high..*"
      alert("*** TOO HIGH ***");
      continue loop2;
    } else if (x < random) {
      //document.getElementById("spn3").innerHTML = "*Too low*"
      alert("*** TOO LOW ***");
      continue loop2;
    }
  }
}

function butt() {
  start();
}

function but() {
  alert(
    "\n \t\t\t\t\t * * * * * RULES * * * * * \n\n#  The core of this game is to guess a number.  \n # The player should give the starting and the ending number ranges.  \n # Then the game will generate a HIDDEN number between your range. \n # To win the player must correctly GUESS THE HIDDEN NUMBER. \n # The player will be DIRECTED BY THE GAME COMMENTS as per his guess. \n # The game will end once you guess the number correctly"
  );
}

alert(
  " \n\t\t\t\t * * * * * WELCOME TO THE GAME * * * * * \n \n # IF YOU ARE NEW HERE PLEASE CHECK THE RULES ONCE BEFORE STARTING THE \n    GAME. "
);
