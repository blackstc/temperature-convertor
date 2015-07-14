var userInput = prompt("Would you like to convert 'C to F' or 'F to C'?");

if (userInput === "C to F") {
  var userInput1 = prompt("Please enter a tempature in Celsius");
  var convertF = userInput1 * 9 / 5+ 32;
  alert("Your tempature equals " + convertF + " Fahrenheit.");
} else if (userInput === "F to C") {
  var userInput2 = prompt("Please enter a tempature in Fahrenheit");
  var convertC = ((userInput2 - 32) * 5 / 9);
  alert("Your tempature equals " + convertC + " Celsius.");
} else {
  alert("You did not choose a convertor correctly");
};
