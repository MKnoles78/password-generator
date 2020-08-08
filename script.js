// Assignment Code
//establish the variables in an array to be used in the password
var alphaLower = ["abcdefghijklmnopqrstuvwxyz"];
var alphaUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numeric = ["1234567890"];
var symbol = ["!@#$%^&*()"];

// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log ("you clicked me")

}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




