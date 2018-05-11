var arr = [2, 4, 9, 6, 7, 12, 1, 0, 13];

function bubbleSort(arr) {
  do{
  var count = arr.length - 1;  
  for	(j=0; j < arr.length; j++)	{
    if (arr[j+1] < arr[j]) {
      var c = arr[j]; 
      arr[j] = arr[j+1];
      arr[j+1] = c;
    } else {count--;}
  } 
 } while (count);
return arr;  
}

