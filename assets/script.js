// Assignment Code
const generateBtn = document.querySelector("#generate");
const copyBtn = document.getElementById("copy");
const upperBtn = document.getElementById("upperCaseCheck");
const lowerBtn = document.getElementById("lowerCaseCheck");
const numberBtn = document.getElementById("numbersCheck");
const specialBtn = document.getElementById("specialCheck");
let numBox = document.getElementById("pass-length-box");
var generateBtn = document.querySelector("#generate");

const chars = {
  lowerCase: "qwertyuioplkjhgfdsazxcvbnm",
  upperCase: "QWERTYUIOPLKJHGFDSAZXCVBNM",
  num: "1234567890",
  special: "!@#$%^&*()",
};
function generatePassword() {
  let passwordResult = "";
  let charSet = "";

  let passwordLength = numBox.value;
  console.log(numBox.value);

//Checks if uppercase, lowercase, etc boxes are selected
if (upperBtn.checked) {
  console.log("Upper Case Button Selected: " + upperBtn.checked);
  charSet += chars.upperCase;
}
if (lowerBtn.checked) {
  console.log("Lower Case Button Selected: " + lowerBtn.checked);
  charSet += chars.lowerCase;
}
if (numberBtn.checked) {
  console.log("Number Button Selected: " + numberBtn.checked);
  charSet += chars.num;
}
if (specialBtn.checked) {
  console.log("Special Character Button Selected: " + specialBtn.checked);
  charSet += chars.special;
}

//If empty password length, if no buttons are checked, website will alert user
if (
  !specialBtn.checked &&
  !numberBtn.checked &&
  !lowerBtn.checked &&
  !upperBtn.checked
) {
  alert("No boxes selected! Please choose one or more boxes.");
}
if (!passwordLength) {
  alert(
    "No Password Length selected! Please input number."
  );
}
if (passwordLength < 8) {
  alert(
    "Password Length less than 8 Characters! Please input valid number."
  );
  numBox.dataset.value = "";
  passwordLength = 0;
} else if (passwordLength > 128) {
  alert("Password Length more than 128 Characters! Please input valid number.");
  numBox.dataset.value = '';
  passwordLength = 0;
}

//for loop for password creation
for (i = 0; i < passwordLength; i++) {
  passwordResult += charSet.charAt(
    Math.floor(Math.random() * charSet.length)
  );
}

return passwordResult;
}

// Write password to the #password input
function writePassword() {
let password = generatePassword();
let passwordText = document.querySelector("#password");

passwordText.value = password;
console.log(passwordText.value);
}

// Select, Copies, and Alerts User when #copy button is pressed
function copyPassword() {
const copyText = document.querySelector("#password");
if (confirm("Would you like to copy your password?")) {
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Text Copied!");
} else return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);