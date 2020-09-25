// Assignment Code
var generateBtn = document.querySelector("#generate");


// var test = confirm("Test?");
function generatePassword() {
  var test = confirm();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var alphabetNumbers = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*?";
 
  var alphabetNumbers = Math.floor(Math.random()* alphabetNumbers.length);

}
 
  //  Include number     
//for (var i = 0; i < 10; i++) {
 //       var number = Math.floor(Math.random() * 10);

// Include upperCase
//for (var)

// Include lowerCase


// Include special

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numbers = ["0123456789"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var special = ["!@#$%^&*"]

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ['@','%','+','\\','/', "'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
