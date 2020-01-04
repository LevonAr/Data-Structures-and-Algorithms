// this program take only O(n) I believe
// it's quicker, but I could probably trim a little bit more of the run time
// could prob do better with space complexity as well

function unique(string){
    let hashTable = new Map()
    for(let i=0; i<string.length; i++){
        if( hashTable.get(string[i]) == true ){
