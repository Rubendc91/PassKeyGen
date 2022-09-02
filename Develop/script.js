// Assignment code here
function generatePassword(){
//----variables
  var lowercase = window.confirm("Include lowercase letters?");
  var uppercase = window.confirm("Include uppercase letters?");
  var number = window.confirm("Include numbers letters?");
  var specialCharacters = window.confirm("Include special characters letters?");
  //alert stating you must select one option
  while (!uppercase && !lowercase && !number && !specialCharacters) {
    alert("You must select at least one character type!");
    var lowercase = window.confirm("Include lowercase letters?");
    var uppercase = window.confirm("Include uppercase letters?");
    var number = window.confirm("Include numbers letters?");
    var specialCharacters = window.confirm("Include special characters letters?");
  }
  var keylength = window.prompt("how many characters?", "8"); {  
//alert stating length Must be more than 8 or Must be less than 128
    if (keylength < 8) {
      window.alert("Must be  more than 8.");
      return;
    }
    else if(keylength > 128){
      window.alert("Must be less than 128.");
      return;
    }
  };
  
//console logs variables value
  console.log(lowercase);
  console.log(uppercase);
  console.log(number);
  console.log(specialCharacters);
  console.log(keylength);
  console.log(passwordOptions);
//option variables for password
  var lowerOptions =  "abcdefghijklmnopqrstuvwxyz";
  var upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberOptions = "0123456789";
  var SpCharOptions = "!@#$%^&*()";
  var passwordOptions = "";
  var password = "";

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
  passwordOptions = (passwordOptions + SpCharOptions)           
};
//----Characters avalible for password
console.log(passwordOptions)
//----generates random pass word with desiered length
for (var index = 0; index <= keylength; index++){
  var randomNumber = Math.floor(Math.random() *passwordOptions.length);
  password += passwordOptions.substring(randomNumber, randomNumber +1)

  console.log(keylength)
  console.log(index)
 
  }
  return password;
};

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
