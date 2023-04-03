// Print "Login successfull" if the entered email and password matches with the one that are registered
// reg details in database
let reg_gmail="abc@gmail.com";
let reg_pass="abc@123";

// user details
let user_gmail="abc@gmail.com";
let user_pass="abc@123";

if(reg_gmail==user_gmail){
  if(reg_pass==user_pass){
    console.log("Login successful");
  }
}else{
  console.log("wrong input");
}

(reg_gmail==user_gmail && reg_pass==user_pass) ? console.log("Login successful") : console.log("wrong input");