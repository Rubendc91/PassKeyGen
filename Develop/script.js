// Assignment code here

// function passwordString(){
  
// }
// console.log(keylength);

//   var passwordOptions = function(){
//     if (lowercase = true) {
//       passwordOptions = lowerOptions
//     }
//     else if (uppercase = true) {
//       passwordOptions = (passwordOptions +upperOptions )
//     console.log (passwordOptions)
//     }







function generatePassword(){
//----variables
  var lowercase = false;
  var uppercase = false;
  var number = false;
  var specialCharacters = false;
  var keylength = 0;
  
  console.log(lowercase);
  console.log(uppercase);
  console.log(number);
  console.log(specialCharacters);
  console.log(keylength);
  console.log(passwordOptions);

  var lowerOptions =  "abcdefghijklmnopqrstuvwxyz";
  var upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberOptions = "0123456789";
  var SpCharOptions = "!@#$%^&*()";
  var passwordOptions = "";
//----  confirm variable values
    var confirmLower = window.confirm("Include lowercase letters?"); 
      if (confirmLower) {
        lowercase = true;
        console.log(lowercase);
    }
    var confirmUpper = window.confirm("Include uppercase letters?"); 
    if (confirmUpper) {
      uppercase = true;
      console.log(uppercase);
    }
  var confirmNumber = window.confirm("Include numbers?"); 
  if (confirmNumber) {
    number = true;
    console.log(number);
  
    }
  var confirmSpChar = window.confirm("Include special characters?"); 
  if (confirmSpChar) {
    specialCharacters = true;
    console.log(specialCharacters);
    }
  var confirmLength = window.prompt("how many characters?", "8"); {  
    keylength = confirmLength;  
    }  
  if (confirmLength < 8) {
    window.alert("Must be  more than 8.");
    return;
  }
  else if(confirmLength > 128){
    window.alert("Must be less than 128.");
    return;
  };
//----acceppted values
 if (lowercase == true) {
   passwordOptions =  lowerOptions
}
 if (uppercase == true) {
  passwordOptions = (passwordOptions + upperOptions)
 }
  if (number == true) {
    passwordOptions = (passwordOptions + numberOptions)
  }
    if (specialCharacters == true) {
      passwordOptions = (passwordOptions + SpCharOptions);           
};
//----Characters avalible for password
console.log(passwordOptions)
//----Random generator
for (var index = 0; index <= keylength; index++){
  var randomNumber = Math.floor(Math.random() *keylength.length);
   passwordOptions = (randomNumber, randomNumber +1);
  }

console.log(index);

};

// random attemt 2

//random attempt 1
// var index = Math.floor(Math.random() *keylength.length);
//  generatePassword = passwordOptions[index];
  






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
