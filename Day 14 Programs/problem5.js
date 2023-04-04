//  check if the string is palndromic or not 
let str="luffy";

function reverse(str){
  let bag="";
  for(let i=str.length-1; i>=0; i--){
    bag+=str[i];
  }
  return bag;
}

let ans=reverse(str);

if(ans==str){
  console.log("it is a palndromic string");
}else{
  console.log("it is not a palndromic string");
}