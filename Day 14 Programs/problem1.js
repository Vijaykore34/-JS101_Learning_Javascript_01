// write a function which should   take a number and print even or odd, make sure that the function is working for different parameter
function print(number){
  if(number%2==0){
    return true;
  }else{
    return false;
  }
}
for(let i=1; i<=7; i++){
  let ans=print(i);
  if(ans==true){
    console.log("even");
  }else{
    console.log("odd");
  }
}