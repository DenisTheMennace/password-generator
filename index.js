// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//prettier-ignore
const symbols = [
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"
]

//prettier-ignore
const symbolsAndNumbers = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let passwordLength = document.getElementById("password-length-input");
console.log(passwordLength);
let symbolsCheckbox = document.getElementById("symbols-config-checkbox");
let numbersCheckbox = document.getElementById("numbers-config-checkbox");
let numOfCharacters = 15;
let symbolsAllowed = true;
let numbersAllowed = true;

// removes numbers from list
let noNumbersList = characters.filter((item) => !numbers.includes(item));
console.log(noNumbersList);

// removes symbols from list
let noSymbolsList = characters.filter((item) => !symbols.includes(item));
console.log(noSymbolsList);

// removes symbols and numbers from list
let noSymbolsAndNumbersList = characters.filter((item) => !symbolsAndNumbers.includes(item));
console.log(noSymbolsAndNumbersList);

function getRandomPassword() {
  let password1 = "";
  let password2 = "";
  if (numOfCharacters > 20) {
    numOfCharacters = 20;
  }
  if (symbolsAllowed && numbersAllowed) {
    for (let i = 0; i < numOfCharacters; i++) {
      let randomLetterIndex = Math.floor(Math.random() * characters.length);
      password1 += characters[randomLetterIndex];
    }
    for (let i = 0; i < numOfCharacters; i++) {
      let randomLetterIndex = Math.floor(Math.random() * characters.length);
      password2 += characters[randomLetterIndex];
    }
    passwordOne.value = password1;
    passwordTwo.value = password2;
  } else if (symbolsAllowed && !numbersAllowed) {
    for (let i = 0; i < numOfCharacters; i++) {
      let randomLetterIndex = Math.floor(Math.random() * noNumbersList.length);
      password1 += noNumbersList[randomLetterIndex];
    }
    for (let i = 0; i < numOfCharacters; i++) {
      let randomLetterIndex = Math.floor(Math.random() * noNumbersList.length);
      password2 += noNumbersList[randomLetterIndex];
    }
    passwordOne.value = password1;
    passwordTwo.value = password2;
  } else if (!symbolsAllowed && numbersAllowed) {
    for (let i = 0; i < numOfCharacters; i++) {
      let randomLetterIndex = Math.floor(Math.random() * noSymbolsList.length);
      password1 += noSymbolsList[randomLetterIndex];
    }
    for (let i = 0; i < numOfCharacters; i++) {
      let randomLetterIndex = Math.floor(Math.random() * noSymbolsList.length);
      password2 += noSymbolsList[randomLetterIndex];
    }
    passwordOne.value = password1;
    passwordTwo.value = password2;
  } else {
    for (let i = 0; i < numOfCharacters; i++) {
      let randomLetterIndex = Math.floor(Math.random() * noSymbolsAndNumbersList.length);
      password1 += noSymbolsAndNumbersList[randomLetterIndex];
    }
    for (let i = 0; i < numOfCharacters; i++) {
      let randomLetterIndex = Math.floor(Math.random() * noSymbolsAndNumbersList.length);
      password2 += noSymbolsAndNumbersList[randomLetterIndex];
    }
    passwordOne.value = password1;
    passwordTwo.value = password2;
  }
}

function copyText1() {
  let password = passwordOne.value;
  if (password) {
    navigator.clipboard.writeText(passwordOne.value);
    passwordOne.value = "Text copied!";
    setTimeout(function () {
      passwordOne.value = password;
    }, 1000);
  }
}

function copyText2() {
  let password = passwordTwo.value;
  if (password) {
    navigator.clipboard.writeText(passwordTwo.value);
    passwordTwo.value = "Text copied!";
    setTimeout(function () {
      passwordTwo.value = password;
    }, 1000);
  }
}

function lengthChanged() {
  for (let i = 1; i < passwordLength.value + 1; i++) {
    numOfCharacters = passwordLength.value;
  }
}

function checkboxChanged() {
  if (symbolsCheckbox.checked) {
    symbolsAllowed = true;
  } else {
    symbolsAllowed = false;
  }
  if (numbersCheckbox.checked) {
    numbersAllowed = true;
  } else {
    numbersAllowed = false;
  }
}
