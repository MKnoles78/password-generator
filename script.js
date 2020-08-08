// Assignment Code
//establish the variables in an array to be used in the password
var alphaLower = ["abcdefghijklmnopqrstuvwxyz"];
var alphaUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numeric = ["1234567890"];
var symbol = ["!@#$%^&*()"];

// the code provided provides a event listener for for generate button, which triggers the writePassword function.
// within the writePassword function, var password triggers the generatePassword function, and the va passwordText, writes the information to the id #password found on the index.html
// a function for generatePassword needs to be created so that it can be called within the writePassword function

function generatePassword () {
  console.log ("you clicked me")
  // added a console log to confirm the button was being clicked 
  // within the generate password function there needs to be a function that combines all the criteria for the password 

}

// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




