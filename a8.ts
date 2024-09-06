// Odd sum in a limit
function oddSum(range: number):number{
     let i: number;
     let sum: number =0;
     for(i=1;i<=range;i++){
         if(i%2!==0){
             sum+=i;
         }
     }
     return sum;
}

console.log("Sum(15) = " +oddSum(15));
console.log("Sum(10) = " +oddSum(10));
console.log("Sum(5) = " +oddSum(5));
console.log("Sum(1) = " +oddSum(1));