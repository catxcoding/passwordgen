// Assignment Code
const generateBtn = document.querySelector("#generate");
const copyBtn = document.getElementById("copy");
const upperBtn = document.getElementById("upperCaseCheck");
const lowerBtn = document.getElementById("lowerCaseCheck");
const numberBtn = document.getElementById("numbersCheck");
const specialBtn = document.getElementById("specialCheck");
let numBox = document.getElementById("pass-length-box");

const chars = {
  lowerCase: "qwertyuioplkjhgfdsazxcvbnm",
  upperCase: "QWERTYUIOPLKJHGFDSAZXCVBNM",
  num: "1234567890",
  special: "!@#$%^&*()",
};

function generatePassword() {
  // Two new password variables, set to empty string to implement Addition assignment (+=)
  let passwordResult = "";
  let charSet = "";

  let passwordLength = numBox.value;
  console.log(numBox.value);

  //Checks if uppercase, lowercase, etc boxes are selected
  if (upperBtn && upperBtn.checked) {
    console.log("Upper Case Button Selected: " + upperBtn.checked);
    charSet += chars.upperCase;
  }
  if (lowerBtn && lowerBtn.checked) {
    console.log("Lower Case Button Selected: " + lowerBtn.checked);
    charSet += chars.lowerCase;
  }
  if (numberBtn && numberBtn.checked) {
    console.log("Number Button Selected: " + numberBtn.checked);
    charSet += chars.num;
  }
  if (specialBtn && specialBtn.checked) {
    console.log("Special Character Button Selected: " + specialBtn.checked);
    charSet += chars.special;
  }

  // generate password
  for (let i = 0; i < passwordLength; i++) {
    passwordResult += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  // return generated password
  return passwordResult;
}

  function generatePassword() {
    let passwordResult = "";
    let charSet = "";
  
    return passwordResult;
  }
  
  // Write password to the #password input
  function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
    console.log(passwordText.value);
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);