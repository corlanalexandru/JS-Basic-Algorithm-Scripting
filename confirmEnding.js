//Test if the last letters of a character are equal with a given string and return true/false without using the endsWith() method
function confirmEnding(str, target) {
  var newString = str.substr(str.length-target.length,target.length);//the new string is equal to the final part of initial string which has the length equal to target string
  if(newString === target){return true;}//return true if the two string are equal
  else{return false;} //otherwise return false
}
confirmEnding("Bastian", "n");
