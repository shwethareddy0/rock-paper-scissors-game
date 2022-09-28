do {
  var userChoice = prompt("Pick one :P,R,S");
  userChoice = userChoice.toUpperCase();
  var computerOptions = ["P", "R", "S"];
  var computerChoice =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  console.log(userChoice);
  console.log(computerChoice);
  if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    win = win++;
    console.log("You won", win, "times");
    alert("You won" + win + "times");
  } else if (
    (userChoice === "R" && computerChoice === "P") ||
    (userChoice === "P" && computerChoice === "S") ||
    (userChoice === "S" && computerChoice === "R")
  ) {
    loss = loss++;
    console.log("You lost", loss, "times");
    alert("You lost" + loss + "times");
  } else if (
    (userChoice === "P" && computerChoice === "P") ||
    (userChoice === "R" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "S")
  ) {
    tie = tie++;
    console.log("You tied", tie, "times");
    alert("You tied" + tie + "times");
  }
} while (confirm("You want to play again?"));
