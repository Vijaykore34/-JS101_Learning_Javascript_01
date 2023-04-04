// find the count of how many even numbers are there in an array
arr = [12, 43, 56, 1, 4, 66, 8, 9, 23, 1];
function printeven(number){
  if(number%2==0){
    return true;
  }else{
    return false;
  }
}
let count=0;
for(let i=0; i<arr.length; i++){
  let ans=printeven(arr[i]);
  if(ans==true){
    count++;
  }
}
console.log(count);