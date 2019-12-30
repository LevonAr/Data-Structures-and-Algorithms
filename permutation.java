void perm(String str){
  perm(str,"");
}  

void perm(String str, String prefix){
  if (str.length() == 0){
    System.out.println(prefix);
  }
  
  else{
    for(int i = 0; i < str.length(); i++){
      String rem = str.substring(0, i) + str.substring(i+1);
      perm(rem, prefix + str.charAt(i));
    }  
  }  
}
