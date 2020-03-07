// Assignment Code
//possilbe variables for password selection
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var symbol = "!@#$%^&*()";
var confirmLength;

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() {
  
}
function writePassword() {
  var password = generatePassword(
    confirmLength,
    userLower,
    userUpper,
    userNumber,
    userSymbol
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var confirmLength = prompt(
  "Choose a password length between 8 and 128 characters?"
);
if (confirmLength >= 8) {
  // alert("good job");
} else {
  alert("Please refresh and reinput between 8 and 128");
}

// console.log(confirmLength)

var userLower = confirm("Would you like lowercase letters?");
// if (userLower) {
  
// } else {
// }
// removed if else becauese of only using true instances 
// tested both scenarios with index and with string
function randomLower(l) {
  var alphaLower = "abcdefghijklmnopqrstuvwxyz";
  var text = "";
  for (var i = 0; i < l; i++) {
    text += alphaLower.charAt(Math.floor(Math.random() * alphaLower.length));
  }
  return text;
}
console.log(randomLower(confirmLength));

// return alphaLower[Math.floor(Math.random() * alphaLower.length) + 1];
// return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

// console.log(userLower)
// console.log(randomLower)

var userUpper = confirm("Would you like uppercase letters?");
// if (userUpper) {
//   randomUpper();
// } else {
// }
function randomUpper(l) {
  var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var text = "";
  for (var i = 0; i < l; i++) {
    text += alphaUpper.charAt(Math.floor(Math.random() * alphaUpper.length));
  }
  return text;
}
console.log(randomUpper(confirmLength));
// return String.fromCharCode(Math.floor(Math.Random() * 26) + 65);
// console.log(userUpper)

var userNumber = confirm("Would you like numbers?");
// if (userNumber) {
//   randomNumber();
// } else {
// }
function randomNumber(l) {
  var numeric = "1234567890";
  var text = "";
  for (var i = 0; i < l; i++) {
    text += numeric.charAt(Math.floor(Math.random() * numeric.length));
  }
  return text;
}
console.log(randomNumber(confirmLength));
// return String.fromCharCode(Math.floor(Math.Random() * 10) + 48);
// console.log(userNumber)

var userSymbol = confirm("Would you like spedial characters? (ex. !@#$)");
// if (userSymbol) {
//   randomSymbol();
// } else {
// }
function randomSymbol(l) {
  var symbol = "!@#$%^&*()";
  var text = "";
  for (var i = 0; i < l; i++) {
    text += symbol.charAt(Math.floor(Math.random() * symbol.length));
  }
  return text;
}
console.log(randomSymbol(confirmLength));

// console.log(userSymbol)

// logs the array of length and with true and false statements
var userInputs = [confirmLength, userLower, userUpper, userNumber, userSymbol];
// console.log(userInputs)

// logs userInput
// console.log(confirmLength);
// logs true and false statements
// console.log(userLower,userUpper,userNumber,userSymbol);

// console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
