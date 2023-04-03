// male=23;
// female=21;

let gender="male";
let age=25;

if(gender=="female"){
  if(age>=21){
    console.log(gender,"can marry");
  }
}else if(gender=="male"){
  if(age>=23){
    console.log(gender,"can marry");
  }
}

(gender=="female"&&age>=21 || gender=="male"&&age>=23) ? console.log(gender,"can marry") : console.log(gender,"can marry");
