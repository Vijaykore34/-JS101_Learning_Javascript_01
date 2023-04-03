// Problem 1 given the year of birth, if the age is between 13 and 19 (both included) print teenage and in between 20 and 29 (both included) print twenties
let yob=1995;


let age=2022-yob;

 if(age>=13 && age<=19){
   
   console.log("Teenage");
   
 }else if(age>=20 && age<=29){
   
   console.log("Twenties");
   
 }

age>=13 && age<=19 || age>=20 && age<=29 ? console.log("Teenage") : console.log("Twenties");