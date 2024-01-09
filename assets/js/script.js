// Arrays of character types
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let passLength;
let characters = [];

//Created a button to start the program to avoid the prompt triggering automatically
let startingGenerator = document.getElementById("start-program");

startingGenerator.addEventListener('click', () => {
    // Call the function to prompt the user for password options
    getPasswordOptions();
});

//Get the character types and concatenate them together in one array through parameters
const getCharacters = (lower, upper, num, sym) => {
    let result = [];
    if (lower) result = result.concat(lowerCasedCharacters);
    if (upper) result = result.concat(upperCasedCharacters);
    if (num) result = result.concat(numericCharacters);
    if (sym) result = result.concat(specialCharacters);
    return result;
};

//Shuffle the characters in the array
const shuffleArray = (arr) => {

    // Fisher-Yates shuffle algorithm
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};


// Function to prompt user for password options
const getPasswordOptions = () => {
    // Get the prompt length for the final password
   
    while (true) {
        passLength = parseInt(prompt("Enter the number of characters for your password (8-128):"));
        if (isNaN(passLength) || passLength < 8 || passLength > 128) {
            alert("Please enter a valid number between 8 and 128.");
        } else {
            alert(`${passLength} characters is a valid choice!`);
            break;
        }
    }

    // Option of character types
    let lowercase = confirm("Include lowercase letters?");
    let uppercase = confirm("Include uppercase letters?");
    let numbers = confirm("Include numbers?");
    let symbols = confirm("Include special characters?");

    // Characters type cannot be empty
    if (!(lowercase || uppercase || numbers || symbols)) {
        alert('Please choose at least one character type. Try again.');
        return;
    }

    // Gather all character types in one array
    characters = getCharacters(lowercase, uppercase, numbers, symbols);

    // Shuffle the array
    characters = shuffleArray(characters);

    // Generate and display the password
    const password = generatePassword(characters, passLength);
    //displayPassword(password);
    
};


//Only display the password after the generate button is clicked
const generateButton = document.getElementById("generate");
    generateButton.addEventListener("click", () => {
    const password = generatePassword(characters, passLength);
    displayPassword(password);
});


//function to generate the password
const generatePassword = (characters, passLength) => {
// Return the first 'passLength' characters
const password = [];
  for (let i = 0; i < passLength; i++) {
    password.push(characters[Math.floor(Math.random() * characters.length)]);
  }
  return password.join('');
};

//Show the password in the text area
const displayPassword = (password) => {
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
};

