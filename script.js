// Assignment Code
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  var characterLength = prompt ("Choose a length between 1 and 20?");
  alert("you would like " + characterLength + " characters.");

  var confirmLower = confirm ("Would you like lowercase letters?");
  // alert("you would like " + confirmLower);
  if (confirmLower) {
    alert("lowers it is")
  }else {
    alert("no lowers for you")
  };

  var confirmUpper = confirm ("Would you  upper case letters?");
  // alert("you would like " + confirmUpper);
  if (confirmUpper) {
    alert("uppers it is")
  }else {
    alert("no uppers for you")
  };

  var confirmNums = confirm ("Would you like special numbers?");
  // alert("you would like " + confirmNums);
  if (confirmNums) {
    alert("numbers it is")
  }else {
    alert("no numbers for you")
  };

  var confirmSpecial = confirm ("Would you like special characters?");
  // alert("you would like " + confirmSpecial);
  if (confirmSpecial) {
    alert("specials it is")
  }else {
    alert("no specials for you")
  }
  
  console.log("generating password");
  console.log(confirmNums, confirmUpper, confirmLower, confirmSpecial)

  
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page