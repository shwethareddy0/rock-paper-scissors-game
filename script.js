//declare the array 3 - P, R, S
//window.prompt() -user will choose an option from P,R,S.
//Computer will also choose one of them.
// declare 3 more var for user's win, tie and loss.
//the output can be shown as status.
//for loop - can be used for iteration.
//whenever the user --- wins/ties/losses - the count is added to the respective vars.
//window.alert() - to alert the users about the status.
//window.confirm() - to ask if the user wants to play again.

var win = 0;
var tie = 0;
var loss = 0;

var userChoice = prompt("Pick one :P,R,S");
userChoice = userChoice.toUpperCase();
var computerOptions = ["P", "R", "S"];
var computerChoice =
  computerOptions[Math.floor(Math.random() * computerOptions.length)];
console.log(userChoice);
console.log(computerChoice);
