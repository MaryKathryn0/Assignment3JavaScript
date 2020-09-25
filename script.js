// Assignment Code
var generateBtn = document.querySelector("#generate");



var numbers = ["0123456789"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var special = ["!@#$%^&*"];

function questions() {
  var length = prompt("Choose password length between 8 and 128 characters");
  var askNumbers = confirm("Do you want your password to include numbers?");
  var askLowerCase= confirm("Do you want your password to include lower case letters?");
  var askUpperCase = confirm("Do you want your password to include upper case letters?");
  var askSpecial = confirm("Do you want your password to include special characters?");
  var responses = {
    length: length,
    askNumbers: askNumbers,
    askLowerCase: askLowerCase,
    askUpperCase: askUpperCase,
    askSpecial: askSpecial
  }
  return responses
}

function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = [];



  if (passwordOptions.askNumbers) {
    possibleCombo.push(numbers);
  }
  if (passwordOptions.askLowerCase) {
    possibleCombo.push(lowerCase);
  }
  if (passwordOptions.askUpperCase) {
    possibleCombo.push(upperCase);
  }
  if (passwordOptions.askSpecial) {
    possibleCombo.push(special);
  }
  
  console.log(possibleCombo);
  
  
  for (var i = 0; i < passwordOptions.length; i++) {
    var newPassword = possibleCombo[Math.floor(Math.random() * possibleCombo.length)]
    finalPassword.push(newPassword); 
  }
  console.log(finalPassword)

  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
