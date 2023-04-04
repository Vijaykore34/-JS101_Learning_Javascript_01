let arr=[2,3,4,6,7,8,1,2];

// to filter out elements greater than>=6
// [6,7,8]

let new_arr=arr.filter(function (element, index){
  return element>=6;
})
console.log(new_arr);