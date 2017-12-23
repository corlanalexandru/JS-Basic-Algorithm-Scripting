
function titleCase(str) {
  var myArray = str.toLowerCase().split(" ");//Transform the string into an array with only lower case letters
  var newArray = [];
  for(var i = 0; i < myArray.length; i++){ //iterate through array elements
    newArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1);//Upper case the first character of each element and concatenate with the rest of the word
  }
  return newArray.join(' ');//return the string with join() function from array
}
titleCase("I'm a little tea pot");
