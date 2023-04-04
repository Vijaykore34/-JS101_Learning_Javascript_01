// chunnu is asking munnu to plant seeds as per following details 

// farm 1==>*                    farm=i                      
// farm 2==>**                   seeds=j    
// farm 3==>***                        
// farm 4==>****

for(let i=1; i<=4; i++){
  let bag="";
  for(let j=1; j<=i; j++){
    bag+="*"+" ";
  }
  console.log(bag);
}