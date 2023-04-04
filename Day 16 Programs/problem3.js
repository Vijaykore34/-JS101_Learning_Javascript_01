// Rest operator
// calculate product using for loop
function product(...x){
  let pro=1;
  for(let i=0; i<=x.length-1; i++){
    pro*=x[i];
  }
  console.log(pro);
}

product(1,2,3,5,6,7,8,9,6,3,4,5,6,1,2,3);