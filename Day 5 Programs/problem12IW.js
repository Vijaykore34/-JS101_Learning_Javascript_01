// Problem 4: Given 3 numbers (all different values), print which is greatest

let a=10;
let b=30;
let c=15;

if(a>b&&a>c){
  console.log("a is greatest");
}else if(b>a&&b>c){
  console.log("b is greatest");
}else{
  console.log("c is greatest");
}

a>b&&a>c ? console.log("a is greatest") : b>a&&b>c ? console.log("b is greatest") : console.log("c is greatest")
 