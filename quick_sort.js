function quickSort(arr, left, right){
   var len = arr.length
   pivot
   partitionIndex
   
   if(left < right){
      pivot = right;
      partitionIndex = partition(arr, pivot, left, right);
      
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
   }
   return arr;
}      

function partition(arr, pivot, left, right){
   partitionIndex = left;
