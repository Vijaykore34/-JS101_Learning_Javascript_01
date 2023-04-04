// How can i add something in objects

let emp_detail={
  name:"Chunnu",
  age:34,
  location:"Manail",
  hobbies:["coding","Biking","travelling"],
};

emp_detail["isMarried"]=false;
emp_detail.Phone="9432338405";
console.log(emp_detail);

// Conclusion:
// 1 If the key name is already present in the object, it will get updated
// 2 If the key name is not present, it will get added
