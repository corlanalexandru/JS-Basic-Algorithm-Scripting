
function findLongestWord(str) {
    var theLength = 0;
    var myArray = [];
    var newStr = str.split(' ');//Convert the string in an Array without spaces
    for(var i = 0; i < newStr.length; i++){
        myArray.push(newStr[i].length);//Making an array of the length of words
        myArray.sort(function(a,b){
          return b-a; //Sorting the array from higher to lower length
        });

    }
    return myArray[0];//return the highest length in the array
}
findLongestWord("The quick brown fox jumped over the lazy dog");
