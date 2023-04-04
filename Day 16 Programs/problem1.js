// Ecama script
//spread operator==>Copying one array inside the another array
let arr=[2,3,4,5];

let arr2=[1,2,3, ...arr,8,9,0];

let arr3=[...arr,...arr,...arr2,...arr2];

console.log(arr3);