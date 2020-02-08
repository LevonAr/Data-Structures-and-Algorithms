module.exports = 
{   
    random: function(){
        let random_array =[]
            for(i=0;i<10000000;i++){
                random_array.push(Math.floor(Math.random()*1000000))
