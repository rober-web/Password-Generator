// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lowerOption;
let leftLower;
let upperOption;
let leftUpper;
let numberOption;
let leftNumber;

// Function to prompt user for password options
const getPasswordOptions = () => {
  // Length of password
  let passLength;

  // Validate length of password
  //create a while loop to ensure the correct length is returned
  while (true) {
    passLength = parseInt(
      prompt(
        "Enter the number of characters you want to generate for your password. It must be between 8 and 128 characters."
      )
    );
    /*check whether the user choice attends the characters criteria of the app*/
    if (passLength < 8 || passLength > 128) {
      alert(
        "Please, ensure your password length is between 8 and 128 characters."
      );
    } else if (isNaN(passLength) /*check if it is not a number*/) {
      alert(
        "You inserted not a valid number, please make sure you insert numbers between 8 and 128."
      );
    } else {
      alert(passLength + " is a good choice!");
      break;
    }
  }

  // This alert will only be executed after the while loop breaks
  alert("Proceed to the next step");

  //create function to show how many characters from the options are allowed according to the length chosen
  const useOptions = (arg)=>{
    arg = arg / 4 /* Based on lowercase, uppercase, numeric and special characters, which are four choices */;
    return Math.floor(arg);
  }

  //create while loop to select specific characters

  while(true){
    // create lowercase prompt
   lowerOption = parseInt(prompt("LOWERCASE - Please, select between 1 and " + useOptions(passLength)+ " character to be lowercase." ));

    if (lowerOption < 1 || lowerOption > useOptions(passLength) ){
      alert("Please, select between 1 and " + useOptions(passLength));
    }else if (isNaN(lowerOption)){
      alert("You inserted not a valid number, please make sure you insert numbers between 1 and " + useOptions(passLength) );
    }else{
      alert("you selected " + lowerOption);
      break;
    }

  }

  leftLower = (useOptions(passLength) - lowerOption);

  //create while loop to select specific upperOption characters
  while(true){

    // create uppercase prompt
     upperOption = prompt("UPPERCASE - Please, select between 1 and " + (useOptions(passLength) + (leftLower))+ " character to be uppercase." );
    
    if (upperOption < 1 || upperOption > (useOptions(passLength) + (leftLower)) ){
      alert("Please, select between 1 and " + (useOptions(passLength) + (leftLower)));
    }else if (isNaN(upperOption)){
      alert("You inserted not a valid number, please make sure you insert numbers between 1 and " + (useOptions(passLength) + (leftLower)) );
    }else{
      alert("you selected " + upperOption);
      break;
    }

  }   

  leftUpper = ((useOptions(passLength) + (leftLower)) - upperOption);

  alert(leftUpper);

  //create while loop to select specific numberOption characters
  while(true){

    // create number option prompt
     numberOption = prompt("NUMBER OPTION - Please, select between 1 and " + (useOptions(passLength) + (leftUpper))+ " character to be number characters." );
    
    if (numberOption < 1 || numberOption > (useOptions(passLength) + (leftUpper)) ){
      alert("Please, select between 1 and " + (useOptions(passLength) + (leftUpper)));
    }else if (isNaN(numberOption)){
      alert("You inserted not a valid number, please make sure you insert numbers between 1 and " + (useOptions(passLength) + (leftUpper)));
    }else{
      alert("you selected " + numberOption);
      break;
    }

  }   

  leftNumber = ((useOptions(passLength) + (leftUpper)) - numberOption);

  alert(leftNumber);
  //create while loop to select specific special characters
  while(true){

    // create special character prompt
     specialCharOption = prompt("SPECIAL CHARACTERS - Please, select between 1 and " + (useOptions(passLength) + (leftNumber))+ " character to be special characters." );
    
    if (specialCharOption < 1 || specialCharOption > (useOptions(passLength) + (leftNumber)) ){
      alert("Please, select between 1 and " + (useOptions(passLength) + (leftNumber)));
    }else if (isNaN(specialCharOption)){
      alert("You inserted not a valid number, please make sure you insert numbers between 1 and " + (useOptions(passLength) + (leftNumber)));
    }else{
      alert("you selected " + specialCharOption);
      break;
    }

  }   

  leftSpecial = ((useOptions(passLength) + (leftNumber)) - specialCharOption);

  alert(leftSpecial);

  




};

// Call the function to prompt the user for password options
getPasswordOptions();

// Function for getting a random element from an array
const getRandom = (arr) => {};

// Function to generate password with user input
const generatePassword = () => {};

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
