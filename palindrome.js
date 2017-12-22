
function palindrome(str) {
  var newStr = str.replace(/[^a-zA-Z0-9]/g, "");//Check for special characters
  newStr = newStr.toLowerCase();//LowerCase the string
  var myArray = newStr.split('').reverse();//Convert the string in array and use split() and reverse() function to reverse the string
  var myString = myArray.join('');//Convert the array into a string with join() function without spaces
  if(newStr === myString){return true;}//return true if the normal and the reversed string are the same
  else{return false;}//otherwise return false

}

palindrome("eye");
