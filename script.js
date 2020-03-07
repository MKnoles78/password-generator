// Assignment Code
//possilbe variables for password selection
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var symbol = "!@#$%^&*()";
var confirmLength;
var userPassword = [randomLower(confirmLength) + randomUpper(confirmLength) + randomNumber(confirmLength) + randomSymbol(confirmLength)]

var generateBtn = document.querySelector("#generate");

var confirmLength = prompt(
    "Choose a password length between 8 and 128 characters?"
  );
  if (confirmLength >= 8) {
  } else {
    alert("Please refresh and reinput between 8 and 128");
  }
  
  var userLower = confirm("Would you like lowercase letters?");
  
  function randomLower(l) {
    var alphaLower = "abcdefghijklmnopqrstuvwxyz";
    var text = "";
    for (var i = 0; i < l; i++) {
      text += alphaLower.charAt(Math.floor(Math.random() * alphaLower.length));
    }
    return text;
  }
  
  console.log(randomLower(confirmLength));
  
  
  var userUpper = confirm("Would you like uppercase letters?");
  
  function randomUpper(l) {
    var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var text = "";
    for (var i = 0; i < l; i++) {
      text += alphaUpper.charAt(Math.floor(Math.random() * alphaUpper.length));
    }
    return text;
  }
  console.log(randomUpper(confirmLength));
  console.log(userUpper)
  
  var userNumber = confirm("Would you like numbers?");
  
  function randomNumber(l) {
    var numeric = "1234567890";
    var text = "";
    for (var i = 0; i < l; i++) {
      text += numeric.charAt(Math.floor(Math.random() * numeric.length));
    }
    return text;
  }
  console.log(randomNumber(confirmLength));
  
  
  var userSymbol = confirm("Would you like spedial characters? (ex. !@#$)");
  
  function randomSymbol(l) {
    var symbol = "!@#$%^&*()";
    var text = "";
    for (var i = 0; i < l; i++) {
      text += symbol.charAt(Math.floor(Math.random() * symbol.length));
    }
    return text;
  }
  console.log(randomSymbol(confirmLength));


// Write password to the #password input
function generatePassword() {
  return [randomLower(confirmLength) + randomUpper(confirmLength) + randomNumber(confirmLength) + randomSymbol(confirmLength)]

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




