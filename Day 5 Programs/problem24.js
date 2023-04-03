// Code 11 : Marriage Problem
// Male : age≥21
// Female : age≥18

let gender="female";
let age=22;

if((gender=="female"&&age>=18)||(gender=="male"&&age>=23)){
  console.log(gender,"can marry");
}else{
  console.log(gender,"can't marry");
}