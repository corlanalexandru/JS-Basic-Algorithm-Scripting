
// Caesars Cipher ROT13->values of the letters are shifted by 13 places
function rot13(str) {
  var myArr = [];
  var cipherArr = [];
  var decryptedArr = [];
  var decryptedStr;

  //65-90 the range of alphabet

for(var i = 0; i < str.length; i++){

    if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91){myArr.push(str.charCodeAt(i));}//If the code of the letter is in 65-90 range we keep the code in myArr
    else{myArr.push(str[i]);}//Otherwise we keep the character in that position(Example: !,? etc or spaces)

}

for(var j = 0; j < myArr.length; j++){

    if(isNaN(myArr[j]) != true && myArr[j] != " "){ //Testing if the element in position myArr[j] is not a space or NaN

      if((myArr[j]-13) < 65){cipherArr.push(myArr[j]+13);}//If the code of the letter is < 65 then the code will be myArr[j]+13
      else{cipherArr.push((myArr[j]-13));}//Otherwise we can shift it back with 13 position in the alphabet

    }

    else {cipherArr.push(myArr[j]);}//Pushing anything different than codes of the letters
 }



  for(var x = 0; x < cipherArr.length; x++){

   if(cipherArr[x]!= " " && isNaN(cipherArr[x]) != true){decryptedArr.push(String.fromCharCode(cipherArr[x]));}//If the element in position cipherArr[x] is a valid code(between 65 and 90) we push the char that corresponds to that code in decryptedArr
   else{decryptedArr.push(cipherArr[x]);}//Otherwise we push the element

  }

  decryptedStr = decryptedArr.join("");//We are making a string from the array
  return decryptedStr;//returning the decrypted String

}

rot13("SERR PBQR PNZC");
