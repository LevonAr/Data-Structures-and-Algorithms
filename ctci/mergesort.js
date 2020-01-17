function mergeSort(array,half = array.length/2){
    if(array.length < 2){
      return array
    }
    
    const left = array.splice(0,half); //left part of array
    return merger(mergeSort(left),mergeSort(array))
  }
