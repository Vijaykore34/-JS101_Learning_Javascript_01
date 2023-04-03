// Code 5 : [Student Task] Marriage Problem
// Gender is male and age ≥ 21 : He can marry
// Gender is female and age ≥ 18 : She can marry

let gender="male";
let age=23;

if(gender=="male"&&age>=21){
  console.log(gender,"can marry");
}else if(gender=="female"&&age>=18){
  console.log(gender,"can marry");
}else{
  console.log("wrong Input");
}