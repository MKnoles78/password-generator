// Assignment Code
//possilbe variables for password selection
var alpha = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var symbols = "!@#$%^&*()";
var confirmLength = userInput;

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  console.log("generating password");
  

}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




var userInput = prompt ("Choose a password length between 8 and 128 characters?");
var userLower = confirm ("Would you like lowercase letters?");
var userUpper = confirm ("Would you like uppercase letters?");
var userNumber = confirm ("Would you like numbers?");
var userSymbols = confirm ("Would you like spedial characters? (ex. !@#$)");

console.log(userInput,userLower,userUpper,userNumber,userSymbols)
//   alert("you would like " + charLength + " characters.");

// function confirmLength (){

// };


// confirmLength(userInput)


// function confirmLowers (){

// };
// function confirmUppers (){

// };
// function confirm Numbers (){

// }
// function confirmSymbols(){

// };
