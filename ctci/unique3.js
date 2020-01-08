function unique(string){
    //ask if ASCII or unicode
    let hashTable = {};
    
    for(let i=0; i<string.length; i++){
        if(hashTable[string[i]] == true){
            return false;
        }

        else{
        hashTable[string[i]] = true;
        }
    }
    return true;
}
