# Caesar-Cipher
Project Name
Caesar Cipher Challenge

Motivation
Technical Assessment for Junior Dev role

Build status
Complete

Build Status Windows Build Status

Code style
JavaScript and HTML5

Code Example
function caesarCipher(message,number) {
  var lowerCaseStr = message.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var returnStr = '';
  for (var i = 0; i < lowerCaseStr.length; i++){
    var currentLetter = lowerCaseStr[i];
    if (currentLetter === ' '){
      returnStr += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + number;
    if(newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    if (message[i]===message[i].toUpperCase()){
      returnStr += alphabet[newIndex].toUpperCase();
    }
    else returnStr += alphabet[newIndex];
  }
  return returnStr;
  
Installation
Browser

How to use?
Open HTML page in web browser. Follow on screen instructions to open the Console Tab in the Inspect bar and call short/basic console.log() command 

License
