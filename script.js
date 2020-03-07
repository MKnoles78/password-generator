// Assignment Code
//possilbe variables for password selection
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));

// function confirmLength (){

// };


// function randomLowers (){
  // var alphaLower = "abcdefghijklmnopqrstuvwxyz";
  // return alphaLower[Math.floor(Math.random() * alphaLower.length)];
  // return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

// };

// function randomUppers (){
  // var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // return alphaUpper[Math.floor(Math.random() * alphaUpper.length)];
  // return String.fromCharCode(Math.floor(Math.Random() * 26) + 65);

// };

// function randomNumbers (){
  // var numeric = "1234567890";
  // return numeric[Math.floor(Math.random() * numeric.lenth)];
  // return String.fromCharCode(Math.floor(Math.Random() * 10) + 48);

// };

// function randomSymbols(){
  // var symbols = "!@#$%^&*()";
  // return symbols[Math.floor(Math.random() * symbols.length)];


// };
