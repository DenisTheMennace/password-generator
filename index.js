// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let passwordLength = document.getElementById("password-length-input");

function getRandomPassword() {
  let password1 = "";
  let password2 = "";
  for (let i = 0; i < 15; i++) {
    let randomLetterIndex = Math.floor(Math.random() * characters.length);
    password1 += characters[randomLetterIndex];
  }

  for (let i = 0; i < 15; i++) {
    let randomLetterIndex = Math.floor(Math.random() * characters.length);
    password2 += characters[randomLetterIndex];
  }
  passwordOne.value = password1;
  passwordTwo.value = password2;
}

function copyText1() {
  let password = passwordOne.value;
  navigator.clipboard.writeText(passwordOne.value);
  passwordOne.value = "Text copied!";
  setTimeout(function () {
    passwordOne.value = password;
  }, 1000);
}

function copyText2() {
  let password = passwordTwo.value;
  navigator.clipboard.writeText(passwordTwo.value);
  passwordTwo.value = "Text copied!";
  setTimeout(function () {
    passwordTwo.value = password;
  }, 1000);
}
