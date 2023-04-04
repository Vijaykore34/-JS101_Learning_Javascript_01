// find the elements whose occurance is greater than or equal to 2
// key are strings
let arr=[1,2,1,2,3,2];

let obj={};
for(let i=0; i<arr.length; i++){
  let key=arr[i];
  if(obj[key]==undefined){
    obj[key]=1;
  }else{
    obj[key]++;
  }
}
for(let key in obj){
  if(obj[key]>=2){
    console.log(key);
  }
}