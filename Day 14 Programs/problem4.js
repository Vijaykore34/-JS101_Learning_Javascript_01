// write a function to reverse a string 
// this function should return the value

let str="luffy";
function reverse(str){
   let bag="";
  for(let i=str.length-1; i>=0; i--){
    bag+=str[i];
  }
  return bag;
}

let ans=reverse(str);
console.log(ans);