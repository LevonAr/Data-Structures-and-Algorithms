const verifyUser = function(username, password, callback){
   dataBase.verifyUser(username, password, (error, userInfo) => {
