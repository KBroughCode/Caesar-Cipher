
function caesarCipher(message,number) {
  var lowerCaseStr = message.toLowerCase();
  //create an array of the alphabet
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var returnStr = '';

  //loop through each character of str
  for (var i = 0; i < lowerCaseStr.length; i++){
    // identify current letter position in message
    var currentLetter = lowerCaseStr[i];
    //if there is a space in between charactrs, we want to continue with loop
    if (currentLetter === ' '){
      returnStr += currentLetter;
      continue;
    }
    //finds the index (0-25) of current letter in alphabet array
    var currentIndex = alphabet.indexOf(currentLetter);
    //creates new index in array to move characters by
    var newIndex = currentIndex + number;

    //wrap shifting position so after letter z we move back to letter a
    if(newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;

    //if message has uppercase letters, return message will capitalize letter at same i position
    if (message[i]===message[i].toUpperCase()){
      returnStr += alphabet[newIndex].toUpperCase();
    }
    else returnStr += alphabet[newIndex];
  }
  return returnStr;
}
