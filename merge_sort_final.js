function merge_sort(array){
    if( array.length<2){
        return array
    }
    
    const middle = Math.floor(array.length/2)

    const left = array.slice(0,middle)

    const right = array.slice(middle)

    return merge( merge_sort(left) , merge_sort(right))
}    

function merge(left, right){
    let sorted_array =[]
