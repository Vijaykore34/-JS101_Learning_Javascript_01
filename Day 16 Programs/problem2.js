// Spread Operator in obj
let obj={
  name:"Chunnu",
  age:67
};

let obj2={
  ...obj,
  phone:"9878665566"
};

let obj3={
  ...obj,
  ...obj2
};

console.log(obj3);
