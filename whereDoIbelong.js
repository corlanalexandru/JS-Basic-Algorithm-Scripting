//First method
function getIndexToIns(arr, num) {
  var myArr = arr.sort(function(a,b){//Sorting the array in increasing order
    return a-b;
  });
  if(myArr[0] === num){return 0;}//return index 0 if num and first element are equal
  else{
        for(var i = 0; i < myArr.length; i++){
          if(num > myArr[myArr.length-1]){return myArr.length;}//return last index if the number is the greatest
          else if(myArr[i] <= num && num <= myArr[i+1]){return i+1;}//return the index between i and i+1
        }
  }
}

getIndexToIns([2, 5, 10], 15);
//Second method
function getIndexToIns(arr, num) {

  function numbers(a,b){//Sorting function
    return a-b;
  }

  var arrSort = arr.sort(numbers);//Sorting the array
  var arrNum = arr.push(num); arr.sort(numbers);//Push the num in the array

  return arr.indexOf(num);//return the index of num
}

getIndexToIns([70, 60], 50);
