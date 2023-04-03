//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

// user name and password stored in the database while registering
let dataBase_id="abc@gmail.com";
let dataBase_pass="abc@123";
//login 
let user_id="abc@gmail.com";
let user_pass="abc@123";

if(dataBase_id==user_id){
  
  if(dataBase_pass==user_pass){
    
    console.log("Login successful");
  
}else{
    
  console.log("Wrong password");
    
} 
  
}else{
  
  console.log("wrong input");
}