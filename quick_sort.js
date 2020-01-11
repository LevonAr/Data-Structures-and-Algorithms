function quickSort(arr, left, right){
   var len = arr.length, 
   pivot,
   partitionIndex;

   if(left &lt; right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
