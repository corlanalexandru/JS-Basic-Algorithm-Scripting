
function largestOfFour(arr) {
  var myArray = [];
  for(var i = 0; i < arr.length; i++){//iterate through array elements
    arr[i].sort(function(a,b){return b-a;});//sort each subarray from the principal array
    myArray[i] = arr[i][0];//Keep each max from subarrays in a new array
  }
  return myArray;//return the new array
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
