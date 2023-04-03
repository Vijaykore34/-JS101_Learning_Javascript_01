// male=23;
// female=21;

let gender="male";
let age=18;



if(gender=="female" && age>=21 || gender=="male" && age>=23){
  
  console.log(gender,"can marry");
  
}else{
  
  console.log(gender,"cannot marry");
  
}
(gender=="female" && age>=21 || gender=="male" && age>=23) ? console.log(gender,"can marry") : console.log(gender,"cannot marry");