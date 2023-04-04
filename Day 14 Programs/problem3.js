// sir we can use for loop and check the even number in array 
// convert array into an string
arr=[1,2,3,4,56,77,8,9,10,10,2];
let n=arr.length; 
function arrayToString(arr,n){
  let bag="";
  for(let i=0; i<n; i++){
    bag+=arr[i]+" ";
  }
  console.log(bag);
}
arrayToString(arr,n);