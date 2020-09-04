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


function getPasswordOptions () {
  console.log ("you clicked me")
  // added a console log to confirm the button was being clicked 
  // within the generate password function there needs to be a function that combines all the criteria for the password 
  var passwordLength = parseInt (
    prompt("How many characters would you like for your password to contain?")
    );
  console.log (passwordLength)


//Conditional statement to check to see if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number.');
    return;
  }
  
  //Condtional statement to check if password is at least 8 characters long.  Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters.');
    return;
  }

  //Conditional statement to check if password is a less than 128 characters long.  Prompts end if this evaluates false.
  if (length > 128) {
    alert('Password length must be less than 128 characters.');
    return;
  }



  //assign values to var for confirm selections
  var hasSpecial = confirm("Would you like special characters? Click 'OK' to confirm");
  var hasNumeric = confirm("Would you like numeric characters? Click 'OK' to confirm");
  var hasLowercase = confirm("Would you like lowercase characters? Click 'OK' to confirm");
  var hasUppercase = confirm("Would you like uppercase characters? Click 'OK' to confirm");

  console.log (hasSpecial, hasNumeric, hasLowercase, hasUppercase)

  //Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false.
  if (
    hasSpecial === false &&
    hasNumeric === false &&
    hasLowercase === false &&
    hasUppercase === false 
  ) {
    alert('Must select at least one character type.');
    return;
  }

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
  var randIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randIndex];

  return randomElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];

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

  //For loop to iterate over the password length from the options object, selecting random indicies from the array of possible characters and concatenation
  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = getRandom(possibleCharacters);
    
    result.push(possibleCharacters);
  }

  //Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];

  }
  return result.join('');
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




