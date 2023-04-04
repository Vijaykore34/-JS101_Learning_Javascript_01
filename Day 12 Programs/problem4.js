// print the element whose occurance is 1
// ouput 4 & 5
let arr = [1, 2, 3, 1, 2, 3, 4, 5];

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
 if(obj[key]==1){
   console.log(key);
 }
}