// convert them into any obj with their occurance

let arr=[1,2,3,1,2,3,4,5];

let obj={};
for(let i=0; i<arr.length; i++){
  let key=arr[i];
  if(obj[key]==undefined){
    obj[key]=1;
  }else{
    obj[key]++;
  }
}
console.log(obj);