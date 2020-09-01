// Assignment Code
//establish the variables in an array to be used in the password
var specialCharacters = ['!','@','#','$','^','&','*']
var numericCharacters = ['1','2','3','4','5','6','7','8','9','0']
var alphaLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','s','t','u','v','w','x','y','z'];
var alphaUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','S','T','U','V','W','X','Y','Z'];


// the code provided provides a event listener for for generate button, which triggers the writePassword function.
// within the writePassword function, var password triggers the generatePassword function, and the va passwordText, writes the information to the id #password found on the index.html
// a function for generatePassword needs to be created so that it can be called within the writePassword function
// click the button a prompt displays asking How many characters would you like your password to contain
// then a confirm window to confirm special characters, numeric characters, lowercase character, and uppercase characters


function generatePassword () {
  console.log ("you clicked me")
  // added a console log to confirm the button was being clicked 
  // within the generate password function there needs to be a function that combines all the criteria for the password 
  var passwordLength = parseInt (
    prompt("How many characters would you like for your password to contain?")
    );
  console.log (passwordLength)

  //assign values to var for confirm selections
  var hasSpecial = confirm("Would you like special characters?");
  var hasNumeric = confirm("Would you like numeric characters?");
  var hasLowercase = confirm("Would you like lowercase characters?");
  var hasUppercase = confirm("Would you like uppercase characters?");

  console.log (hasSpecial, hasNumeric, hasLowercase, hasUppercase)

  // stores values for prompt and confirm selections
  var passwordOptions = {
    passwordLength: passwordLength,
    hasSpecial: hasSpecial,
    hasNumeric: hasNumeric,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase
  };

  return passwordOptions
  

}

//Function for getting a random element from an array
function getRandom(arr) {
  var options = getPasswordOptions();
  var results = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (options.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  if (options.hasNumeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  if (options.hasLowercase) {
    possibleCharacters = possibleCharacters.concat(alphaLower);
    guaranteedCharacters.push(getRandom(alphaLower));
  }
  if (options.hasUppercase) {
    possibleCharacters = possibleCharacters.concat(alphaUpper);
    guaranteedCharacters.push(getRandom(alphaUpper));
  }
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




