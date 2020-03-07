// Assignment Code
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria



var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function generatePassword () {

  

function writePassword(confirmLower, confirmUpper, confirmNums, confirmSpecial) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN character length is selected that number should equate to password total length or how often it should loop
  // THEN within this loop it should take the true statements from confirms and not include the false statements
  console.log("Hello World")
  passwordText.value = password;}
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
 
  
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function generatePassword () {
    // function passwordLength (){
//   var charLength = prompt ("Choose a password length between 8 and 128 characters?");
//   alert("You would like " + charLength + " characters.");
//   console.log(charLength)

// }

// function confirmLower (){
  var promptLower = confirm ("Would you like lowercase letters?");
  if (promptLower) {
    
  }else {
  
  };
  console.log(confirmLower)
// }

// function confirmUpper (){
  var promptUpper = confirm ("Would you  upper case letters?");
  if (promptUpper) {
    
  }else {
   
  };
  console.log(confirmUpper)
  // }
// function confirmNumbers () {
  var promptNumbers = confirm ("Would you like numbers?");
  
  if (promptNumbers) {
    
  }else {
    
  };
  console.log(confirmNumbers)
  // };
// function confirmSpecialCharacters () {
  var promptSpecialCharacters = confirm ("Would you like special characters?");
  
  if (promptSpecialCharacters) {
    
  }else {
    
  };
  console.log(confirmSpecial);

//  };
    
}


  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters




// WHEN once we know the true statments
// THEN we will randomize the true statements within the loops and log those characters for the password
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// var charLength = prompt ("Choose a password length between 8 and 128 characters?");
//   alert("you would like " + charLength + " characters.");
//   console.log(charLength)

//   // WHEN prompted for character types to include in the password
//   // THEN I choose lowercase, uppercase, numeric, and/or special characters
  
//   var confirmLower = confirm ("Would you like lowercase letters?");
  
//   // alert("you would like " + confirmLower);
//   // WHEN I answer each prompt
//   // THEN my input should be validated and at least one character type should be selected
//   if (confirmLower) {
    
//     // alert("lowers it is") 
//   }else {
//     // alert("no lowers for you")
//   };
//   console.log(confirmLower);

//   var confirmUpper = confirm ("Would you  upper case letters?");
//   // alert("you would like " + confirmUpper);
//   // WHEN I answer each prompt
//   // THEN my input should be validated and at least one character type should be selected
//   if (confirmUpper) {
//     // alert("uppers it is")
//   }else {
//     // alert("no uppers for you")
//   };
//   console.log(confirmUpper);

//   var confirmNums = confirm ("Would you like numbers?");
//   // alert("you would like " + confirmNums);
//   // WHEN I answer each prompt
//   // THEN my input should be validated and at least one character type should be selected
//   if (confirmNums) {
//     // alert("numbers it is")
//   }else {
//     // alert("no numbers for you")
//   };
//   console.log(confirmNums);

//   var confirmSpecial = confirm ("Would you like special characters?");
//   // alert("you would like " + confirmSpecial);
//   // WHEN I answer each prompt
//   // THEN my input should be validated and at least one character type should be selected
//   if (confirmSpecial) {
//     // alert("specials it is")
//   }else {
//     // alert("no specials for you")
//   };
//   console.log(confirmSpecial);

// }