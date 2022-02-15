// Assignment code here



// Getting the length of the password from the user 
function getPassLength() {
    var passLength = window.prompt('How many Characters do you want?');

    // Making sure the password is only 8-128 characters
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        window.alert("These characters must be between 8-128. Please try again.")
            // return when characters are equal to the amount needed for the criteria (8-128 characters)
        return getPassLength();

    }


    return passLength;

}

// Getting the criteria for lowercase characters from the user
function getLowerCase() {
    var lowerCase = window.prompt('Do you want lowercase characters?');
    // Making sure the user chooses whether or not they want lowercase characters in their password choosing either 'yes' or 'no'
    // '.lowercase' to convert all characters in string to lowercase
    if (lowerCase.toLowerCase() != 'yes' && lowerCase.toLowerCase() != 'no') {
        window.alert('This is invalid, Try again.')
            // return when user answers prompt correctly
        return getLowerCase();

    }

    return lowerCase.toLowerCase();
}

// Getting criteria for uppercase characters from user
function getUpperCase() {
    var upperCase = window.prompt('Do you want uppercase characters?');
    // Making sure the user chooses whether or not they want uppercase characters in their password choosing either 'yes' or 'no'
    if (upperCase.toLowerCase() != 'yes' && upperCase.toLowerCase() != 'no') {
        window.alert('This is invalid, Try again.')
        return getUpperCase();

    }

    return upperCase.toLowerCase();
}

// Criteria for Numeric characters from user
function getNumeric() {
    var numeric = window.prompt('Do you want numeric characters?');
    // yes or no from user whether or not they want numeric characters
    if (numeric.toLowerCase() != 'yes' && numeric.toLowerCase() != 'no') {
        window.alert('This is invalid, Try again.')
        return getNumeric();

    }

    return numeric.toLowerCase();
}

// criteria for symbols from user
function getSymbols() {
    var symbols = window.prompt('Do you want uppercase characters?');
    // yes or no from user whether or not they want symbols
    if (symbols.toLowerCase() != 'yes' && symbols.toLowerCase() != 'no') {
        window.alert('This is invalid, Try again.')
        return getSymbols();

    }

    return symbols.toLowerCase();
}

// all the criteria from the prompts plus the possible characters
function getCriteria() {

    var hasLowerCase = getLowerCase();
    var hasUpperCase = getUpperCase();
    var hasNumeric = getNumeric();
    var hasSymbols = getSymbols();
    var possibleChars = '';

    // user has to say yes to at least one of the prompts to generate a password
    if (hasLowerCase == 'no' && hasUpperCase == 'no' && hasSymbols == 'no' && hasNumeric == 'no') {
        window.alert("This is invalid. Must say yes to at least one. Try again.")
        return getCriteria();
    }
    // lowercase characters for password
    if (hasLowerCase == 'yes') {
        possibleChars += 'abcdefghijklmnopqrstuvwxyz'
    }
    // uppercase characters for password
    if (hasUpperCase == 'yes') {
        possibleChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    // numbers for password
    if (hasNumeric == 'yes') {
        possibleChars += '0123456789'
    }
    // symbols for password
    if (hasSymbols == 'yes') {
        possibleChars += '!@#$%^&*()_+{}'
    }


    // returns possible characters from prompts into empty string variable "var possibleChars"
    return possibleChars;

}



// function that writes password into "Your Secure Password" from #password id in html file
function generatePassword() {
    var passLength = getPassLength()
        // alert(passLength)

    // possible characters that user wants considering how user answered prompts
    var possibleChars = getCriteria()
        // alert(possibleChars)

    // result is equal to empty string that way the possible characters can be randomized 
    var result = '';
    for (var i = 0; i < passLength; i++) {
        result += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }

    return result;



}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);