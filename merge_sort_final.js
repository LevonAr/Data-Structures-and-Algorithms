function merge_sort(array){
    if( array.length<2){
        return array
    }
    
    const middle = Math.floor(array.length/2)

    const left = array.slice(0,middle)
