// Assignment Code
//possilbe variables for password selection
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var symbol = "!@#$%^&*()";
var confirmLength;

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {                                                                                                                    
  console.log("generating password");
  

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

var confirmLength = prompt ("Choose a password length between 8 and 128 characters?");
if (confirmLength >= 8) {
  alert ("good job")
}else {
  alert ("Please refresh and reinput between 8 and 128")
}
 
// console.log(confirmLength)
var userLower = confirm ("Would you like lowercase letters?");
if (userLower) { 

  
}else {
  

};
// console.log(userLower)

var userUpper = confirm ("Would you like uppercase letters?");
if (userUpper) {
    
}else {

};
// console.log(userUpper)

var userNumber = confirm ("Would you like numbers?");
if (userNumber) {
    
}else {

};
// console.log(userNumber)

var userSymbol = confirm ("Would you like spedial characters? (ex. !@#$)");
if (userSymbol) {
    
}else {

};
// console.log(userSymbol)

// logs the array of length and with true and false statements
var userInputs = [confirmLength, userLower, userUpper, userNumber, userSymbol]
console.log(userInputs)

// logs userInput
// console.log(confirmLength);
// logs true and false statements
// console.log(userLower,userUpper,userNumber,userSymbol);

// console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));

// function confirmLength (){

// };

// tested both scenarios with index and with string
// function randomLower (){
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

// function randomSymbol(){
  // var symbol = "!@#$%^&*()";
  // return symbol[Math.floor(Math.random() * symbol.length)];

// };
